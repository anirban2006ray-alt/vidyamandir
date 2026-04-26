import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
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

  const handleLogin = () => {
    if (!isAuthenticated) login();
  };

  const handleLogout = () => {
    clear();
    queryClient.clear();
  };

  return {
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    identity,
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
    retry: false,
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
    retry: false,
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
    retry: false,
  });
}

export interface LoginStatus {
  isLoggedIn: boolean;
  lastLoginAt?: bigint;
  loginAttempts: bigint;
  isRateLimited: boolean;
}

export function useCallerLoginStatus() {
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();

  return useQuery<LoginStatus | null>({
    queryKey: ["callerLoginStatus"],
    queryFn: async () => {
      if (!actor) return null;
      // getCallerLoginStatus may not yet be in generated bindings — call dynamically
      const actorWithStatus = actor as typeof actor & {
        getCallerLoginStatus: () => Promise<LoginStatus>;
      };
      if (typeof actorWithStatus.getCallerLoginStatus !== "function") {
        return null;
      }
      return actorWithStatus.getCallerLoginStatus();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: false,
  });
}
