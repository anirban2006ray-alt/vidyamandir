import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { createActor } from "../backend";
import type { UserProfile, UserRole } from "../backend.d.ts";

export function useAuth() {
  const {
    login,
    clear,
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    identity,
  } = useInternetIdentity();
  const queryClient = useQueryClient();

  // Local error state — tracks the last login failure message
  const [loginError, setLoginError] = useState<string | null>(null);
  // Ref guard to prevent double-invocation during concurrent renders
  const loginInProgressRef = useRef(false);

  const handleLogin = async () => {
    if (isAuthenticated || loginInProgressRef.current) return;
    loginInProgressRef.current = true;
    setLoginError(null);
    try {
      await login();
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Login failed. Please try again.";
      setLoginError(msg);
    } finally {
      loginInProgressRef.current = false;
    }
  };

  const handleLogout = () => {
    setLoginError(null);
    clear();
    queryClient.clear();
  };

  const clearLoginError = () => setLoginError(null);

  return {
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    identity,
    loginError,
    clearLoginError,
    login: handleLogin,
    logout: handleLogout,
  };
}

export function useUserProfile() {
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();

  const query = useQuery<UserProfile | null>({
    queryKey: ["currentUserProfile"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: 2,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 8000),
    staleTime: 60_000,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useIsAdmin() {
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();

  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: 1,
    staleTime: 120_000,
  });
}

export function useUserRole() {
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();

  return useQuery<UserRole>({
    queryKey: ["userRole"],
    queryFn: async () => {
      if (!actor) return "guest" as UserRole;
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: 1,
    staleTime: 120_000,
  });
}

export interface LoginStatus {
  isLoggedIn: boolean;
  lastLoginAt?: bigint;
  loginAttempts: bigint;
  loginAttemptWindowSeconds: bigint;
  rateLimitResetAt?: bigint;
  isRateLimited: boolean;
}

export function useCallerLoginStatus() {
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();

  return useQuery<LoginStatus | null>({
    queryKey: ["callerLoginStatus"],
    queryFn: async () => {
      if (!actor) return null;
      const actorWithStatus = actor as typeof actor & {
        getCallerLoginStatus: () => Promise<LoginStatus>;
      };
      if (typeof actorWithStatus.getCallerLoginStatus !== "function") {
        return null;
      }
      return actorWithStatus.getCallerLoginStatus();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: 1,
    retryDelay: 2000,
    staleTime: 30_000,
  });
}
