import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useEffect, useRef, useState } from "react";

interface OtpModalProps {
  /** The 6-digit OTP code to display to the user */
  otpCode: string;
  /** Called when user successfully verifies */
  onVerify: (code: string) => Promise<void>;
  /** Called when we need to generate a new OTP */
  onResend: () => Promise<void>;
  /** Called to log the user out (expired / too many attempts) */
  onLogout: () => void;
  isVerifying: boolean;
  verifyError: string | null;
  /** Total OTP validity in seconds (default 600 = 10 min) */
  validitySeconds?: number;
}

const RESEND_COOLDOWN = 30; // seconds before Resend is enabled

export function OtpModal({
  otpCode,
  onVerify,
  onResend,
  onLogout,
  isVerifying,
  verifyError,
  validitySeconds = 600,
}: OtpModalProps) {
  const [value, setValue] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(validitySeconds);
  const [resendCooldown, setResendCooldown] = useState(RESEND_COOLDOWN);
  const [isResending, setIsResending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resendRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Main countdown
  useEffect(() => {
    setSecondsLeft(validitySeconds);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [validitySeconds]);

  // Resend cooldown
  useEffect(() => {
    setResendCooldown(RESEND_COOLDOWN);
    resendRef.current = setInterval(() => {
      setResendCooldown((c) => {
        if (c <= 1) {
          if (resendRef.current) clearInterval(resendRef.current);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => {
      if (resendRef.current) clearInterval(resendRef.current);
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  const handleVerify = async () => {
    if (value.length !== 6 || isVerifying) return;
    await onVerify(value);
  };

  const handleResend = async () => {
    if (resendCooldown > 0 || isResending) return;
    setIsResending(true);
    setValue("");
    try {
      await onResend();
      setResendCooldown(RESEND_COOLDOWN);
      setSecondsLeft(validitySeconds);
      if (resendRef.current) clearInterval(resendRef.current);
      resendRef.current = setInterval(() => {
        setResendCooldown((c) => {
          if (c <= 1) {
            if (resendRef.current) clearInterval(resendRef.current);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    } finally {
      setIsResending(false);
    }
  };

  const isExpired = secondsLeft === 0;
  const canVerify = value.length === 6 && !isVerifying && !isExpired;

  return (
    <dialog
      open
      data-ocid="otp_modal"
      className="fixed inset-0 z-[9998] m-0 flex items-center justify-center overflow-hidden p-0 border-0 w-full h-full"
      style={{
        maxWidth: "100vw",
        background: "oklch(0.08 0.07 258 / 0.97)",
        backdropFilter: "blur(8px)",
      }}
      aria-label="OTP Verification"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.20 0.12 255 / 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Card */}
      <div
        data-ocid="otp_modal.dialog"
        className="relative z-10 flex flex-col items-center gap-6 px-7 py-9 mx-4 w-full max-w-sm animate-slide-up"
        style={{
          background: "oklch(0.12 0.08 255 / 0.92)",
          backdropFilter: "blur(24px)",
          border: "1px solid oklch(0.64 0.23 38 / 0.28)",
          borderRadius: 22,
          boxShadow:
            "0 0 0 1px oklch(0.20 0.10 255 / 0.5), 0 24px 64px -12px rgba(0,0,0,0.7), 0 0 40px oklch(0.64 0.23 38 / 0.1)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.25 40 / 0.75), transparent)",
          }}
        />

        {/* Shield icon */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: "oklch(0.64 0.23 38 / 0.12)",
            border: "1px solid oklch(0.64 0.23 38 / 0.4)",
            boxShadow: "0 0 20px oklch(0.64 0.23 38 / 0.25)",
          }}
        >
          <span style={{ fontSize: 30 }}>🔐</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "oklch(0.72 0.25 40)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              textShadow: "0 0 24px oklch(0.72 0.25 40 / 0.35)",
            }}
          >
            Verify Your Identity
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "oklch(0.72 0.25 40 / 0.65)",
            }}
          >
            পরিচয় যাচাই করুন
          </p>
        </div>

        {/* OTP Display */}
        <div
          className="w-full text-center rounded-xl px-5 py-4"
          style={{
            background: "oklch(0.09 0.06 255 / 0.8)",
            border: "1px solid oklch(0.30 0.10 255 / 0.6)",
          }}
        >
          <p
            className="text-xs mb-2"
            style={{
              fontFamily: "var(--font-body)",
              color: "oklch(0.65 0.06 255)",
              letterSpacing: "0.05em",
            }}
          >
            Your OTP is:
          </p>
          <p
            data-ocid="otp_modal.code_display"
            className="tracking-widest select-all"
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "2rem",
              fontWeight: 800,
              color: "oklch(0.72 0.25 40)",
              textShadow: "0 0 16px oklch(0.72 0.25 40 / 0.5)",
              letterSpacing: "0.3em",
            }}
          >
            {otpCode}
          </p>
        </div>

        {/* Countdown */}
        <div
          className="flex items-center gap-1.5"
          style={{
            color: isExpired ? "oklch(0.65 0.21 25)" : "oklch(0.65 0.06 255)",
          }}
        >
          <span
            style={{ fontSize: "0.875rem", fontFamily: "var(--font-body)" }}
          >
            ⏱
          </span>
          <span
            data-ocid="otp_modal.countdown"
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            {isExpired
              ? "Expired — OTP মেয়াদ শেষ"
              : `${formatTime(secondsLeft)} remaining`}
          </span>
        </div>

        {/* Input OTP */}
        <div className="w-full flex flex-col items-center gap-3">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={setValue}
            pattern={REGEXP_ONLY_DIGITS}
            disabled={isExpired || isVerifying}
            data-ocid="otp_modal.input"
            containerClassName="gap-2"
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="h-12 w-12 text-base font-bold rounded-xl border-2 dark:bg-transparent"
                  style={{
                    borderColor:
                      value.length > i
                        ? "oklch(0.72 0.25 40 / 0.7)"
                        : "oklch(0.30 0.10 255 / 0.8)",
                    color: "oklch(0.92 0 0)",
                    background: "oklch(0.10 0.07 255 / 0.6)",
                  }}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          {/* Error message */}
          {verifyError && (
            <p
              data-ocid="otp_modal.error_state"
              className="text-sm text-center animate-fade-in px-2"
              style={{
                fontFamily: "var(--font-body)",
                color: "oklch(0.72 0.21 25)",
              }}
            >
              {verifyError}
            </p>
          )}
        </div>

        {/* Verify button */}
        <button
          type="button"
          data-ocid="otp_modal.submit_button"
          onClick={() => void handleVerify()}
          disabled={!canVerify}
          style={{
            width: "100%",
            padding: "0.875rem 1rem",
            borderRadius: 12,
            background: canVerify
              ? "linear-gradient(135deg, oklch(0.72 0.25 40), oklch(0.58 0.27 38))"
              : "oklch(0.20 0.08 255 / 0.5)",
            color: canVerify ? "oklch(0.10 0.06 255)" : "oklch(0.50 0.05 255)",
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            fontWeight: 700,
            border: canVerify ? "none" : "1px solid oklch(0.28 0.08 255 / 0.5)",
            cursor: canVerify ? "pointer" : "not-allowed",
            transition: "all 0.2s ease",
            boxShadow: canVerify
              ? "0 4px 16px oklch(0.64 0.23 38 / 0.4)"
              : "none",
          }}
        >
          {isVerifying ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Verifying... / যাচাই হচ্ছে...
            </span>
          ) : (
            "Verify — যাচাই করুন"
          )}
        </button>

        {/* Resend OTP */}
        <button
          type="button"
          data-ocid="otp_modal.resend_button"
          onClick={() => void handleResend()}
          disabled={resendCooldown > 0 || isResending || isVerifying}
          style={{
            background: "transparent",
            border: "none",
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            cursor: resendCooldown > 0 || isResending ? "default" : "pointer",
            color:
              resendCooldown > 0 || isResending
                ? "oklch(0.45 0.06 255)"
                : "oklch(0.72 0.25 40)",
            transition: "color 0.2s ease",
          }}
        >
          {isResending
            ? "Sending... / পাঠানো হচ্ছে..."
            : resendCooldown > 0
              ? `Resend OTP (${resendCooldown}s) / পুনরায় পাঠান (${resendCooldown}s)`
              : "Resend OTP / পুনরায় পাঠান"}
        </button>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.30 0.08 255 / 0.4), transparent)",
          }}
        />

        {/* Cancel / logout */}
        <button
          type="button"
          data-ocid="otp_modal.cancel_button"
          onClick={onLogout}
          style={{
            background: "transparent",
            border: "none",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            cursor: "pointer",
            color: "oklch(0.45 0.06 255)",
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          Cancel and sign out / বাতিল করুন ও সাইন আউট করুন
        </button>
      </div>
    </dialog>
  );
}
