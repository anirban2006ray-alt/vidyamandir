import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const queryClient = useQueryClient();

  // Local error state — tracks the last login failure message
  const [loginError, setLoginError] = useState<string | null>(null);
  // OTP state
  const [otpCode, setOtpCode] = useState<string | null>(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isGeneratingOtp, setIsGeneratingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const otpGeneratedForSession = useRef(false);
  // Ref guard to prevent double-invocation during concurrent renders
  const loginInProgressRef = useRef(false);

  // Auto-generate OTP after II authentication
  useEffect(() => {
    if (
      isAuthenticated &&
      !otpVerified &&
      !otpCode &&
      !isGeneratingOtp &&
      !otpGeneratedForSession.current &&
      actor &&
      !actorFetching
    ) {
      otpGeneratedForSession.current = true;
      setIsGeneratingOtp(true);
      actor
        .generateOtp()
        .then((result) => {
          if (result.__kind__ === "ok") {
            setOtpCode(result.ok.code);
          } else {
            setOtpError("Failed to generate OTP. Please try signing in again.");
          }
        })
        .catch(() => {
          setOtpError("Network error generating OTP. Please try again.");
        })
        .finally(() => {
          setIsGeneratingOtp(false);
        });
    }
  }, [
    isAuthenticated,
    otpVerified,
    otpCode,
    isGeneratingOtp,
    actor,
    actorFetching,
  ]);

  // Reset OTP state when user logs out
  useEffect(() => {
    if (!isAuthenticated) {
      setOtpCode(null);
      setOtpVerified(false);
      setOtpError(null);
      otpGeneratedForSession.current = false;
    }
  }, [isAuthenticated]);

  const generateOtp = useCallback(async () => {
    if (!actor) return;
    setIsGeneratingOtp(true);
    setOtpError(null);
    try {
      const result = await actor.generateOtp();
      if (result.__kind__ === "ok") {
        setOtpCode(result.ok.code);
      } else {
        setOtpError("Failed to generate OTP. Please try again.");
      }
    } catch {
      setOtpError("Network error. Please try again.");
    } finally {
      setIsGeneratingOtp(false);
    }
  }, [actor]);

  const verifyOtp = useCallback(
    async (code: string) => {
      if (!actor) return;
      setIsVerifyingOtp(true);
      setOtpError(null);
      try {
        const result = await actor.verifyOtp(code);
        if (result.__kind__ === "ok") {
          setOtpVerified(true);
          setOtpCode(null);
        } else if (result.__kind__ === "err") {
          const err = result.err;
          if (err.__kind__ === "invalidOtp") {
            const remaining = Number(err.invalidOtp);
            setOtpError(
              `Invalid OTP. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining. / ভুল OTP। ${remaining}টি চেষ্টা বাকি।`,
            );
          } else if (err.__kind__ === "expired") {
            setOtpError(
              "OTP expired. Please log in again. / OTP মেয়াদ শেষ। আবার লগইন করুন।",
            );
            // Force logout
            clear();
            queryClient.clear();
          } else if (err.__kind__ === "tooManyAttempts") {
            setOtpError(
              "Too many failed attempts. Please log in again. / অনেকবার ভুল হয়েছে। আবার লগইন করুন।",
            );
            clear();
            queryClient.clear();
          }
        }
      } catch {
        setOtpError("Network error verifying OTP. Please try again.");
      } finally {
        setIsVerifyingOtp(false);
      }
    },
    [actor, clear, queryClient],
  );

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
    setOtpCode(null);
    setOtpVerified(false);
    setOtpError(null);
    otpGeneratedForSession.current = false;
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
    // OTP
    otpCode,
    otpVerified,
    isGeneratingOtp,
    isVerifyingOtp,
    otpError,
    generateOtp,
    verifyOtp,
    /** True when OTP gate should be shown — authenticated but not yet verified */
    needsOtpVerification: isAuthenticated && !otpVerified,
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
