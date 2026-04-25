import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useRecordDownload } from "../hooks/useQueries";

// ─── Types ─────────────────────────────────────────────────────────────────────

type Platform = "android" | "ios" | "windows";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

// ─── Platform card data ────────────────────────────────────────────────────────

const PLATFORMS: {
  id: Platform;
  icon: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  steps: { num: number; text: string }[];
  cta: string;
  note: string;
}[] = [
  {
    id: "android",
    icon: "🤖",
    name: "Android",
    subtitle: "Chrome or any browser",
    badge: "Free",
    badgeColor: "#22c55e",
    accentColor: "#34d058",
    steps: [
      { num: 1, text: "Open Vidyamandir in Chrome browser" },
      { num: 2, text: "Tap the ⋮ menu (top-right corner)" },
      { num: 3, text: 'Select "Add to Home Screen"' },
      { num: 4, text: 'Tap "Install" on the prompt' },
    ],
    cta: "Install on Android",
    note: "Works on Android 5.0 and above",
  },
  {
    id: "ios",
    icon: "🍎",
    name: "iOS / iPhone",
    subtitle: "Safari browser required",
    badge: "Free",
    badgeColor: "#3b82f6",
    accentColor: "#60a5fa",
    steps: [
      { num: 1, text: "Open Vidyamandir in Safari browser" },
      { num: 2, text: "Tap the Share icon (square with arrow)" },
      { num: 3, text: 'Scroll down and tap "Add to Home Screen"' },
      { num: 4, text: 'Tap "Add" in the top-right corner' },
    ],
    cta: "Install on iPhone / iPad",
    note: "Works on iOS 12.2 and above",
  },
  {
    id: "windows",
    icon: "🖥️",
    name: "Windows / Mac",
    subtitle: "Edge or Chrome browser",
    badge: "Free",
    badgeColor: "#a855f7",
    accentColor: "#c084fc",
    steps: [
      { num: 1, text: "Open Vidyamandir in Microsoft Edge or Chrome" },
      { num: 2, text: "Click the install icon (⊕) in the address bar" },
      { num: 3, text: 'Click "Install" in the popup dialog' },
      { num: 4, text: "App will appear on your taskbar or desktop" },
    ],
    cta: "Install on Desktop",
    note: "Works on Windows 10, macOS 10.15+",
  },
];

// ─── Device Detection ─────────────────────────────────────────────────────────

function detectPlatform(): Platform {
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  return "windows";
}

// ─── StepItem ─────────────────────────────────────────────────────────────────

function StepItem({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
        style={{
          background: "oklch(var(--accent) / 0.15)",
          border: "1.5px solid oklch(var(--accent) / 0.35)",
          color: "oklch(var(--accent))",
        }}
      >
        {num}
      </span>
      <span style={{ color: "oklch(0.97 0 0 / 0.72)" }}>{text}</span>
    </div>
  );
}

// ─── iOS Install Sheet ────────────────────────────────────────────────────────

function IOSInstallSheet({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center p-4"
      style={{ background: "oklch(0 0 0 / 0.75)" }}
      onClick={onClose}
      data-ocid="download.ios_sheet"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: "oklch(0.14 0.08 255)",
          border: "1px solid oklch(1 0 0 / 0.1)",
          boxShadow: "0 -12px 40px oklch(0 0 0 / 0.4)",
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div
            className="w-10 h-1 rounded-full"
            style={{ background: "oklch(1 0 0 / 0.2)" }}
          />
        </div>

        <div className="px-6 pb-6 pt-3">
          <div className="flex items-center justify-between mb-5">
            <h3
              className="font-display font-black text-lg"
              style={{ color: "oklch(0.97 0 0)" }}
            >
              🍎 Install on iPhone / iPad
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
              style={{
                background: "oklch(1 0 0 / 0.08)",
                color: "oklch(1 0 0 / 0.5)",
              }}
              data-ocid="download.ios_sheet.close_button"
            >
              ✕
            </button>
          </div>

          {/* Visual step-by-step graphic */}
          <div className="flex flex-col gap-3 mb-6">
            {[
              {
                step: "1",
                icon: "🌐",
                label: "Open in Safari browser",
                detail: "Not Chrome — Safari only!",
              },
              {
                step: "2",
                icon: "⬆️",
                label: "Tap the Share button",
                detail: "Bottom center of Safari — square with arrow up",
              },
              {
                step: "3",
                icon: "➕",
                label: "Add to Home Screen",
                detail: "Scroll the share sheet and tap this option",
              },
              {
                step: "4",
                icon: "✅",
                label: 'Tap "Add"',
                detail: "Top right corner of the confirmation screen",
              },
            ].map(({ step, icon, label, detail }) => (
              <div key={step} className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: "oklch(0.55 0.27 38 / 0.15)",
                    border: "1px solid oklch(0.55 0.27 38 / 0.3)",
                  }}
                >
                  {icon}
                </div>
                <div className="min-w-0 pt-0.5">
                  <p
                    className="text-sm font-bold leading-tight"
                    style={{ color: "oklch(0.97 0 0 / 0.9)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.97 0 0 / 0.45)" }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Safari share bar simulation */}
          <div
            className="rounded-xl p-3 mb-4 flex items-center gap-2"
            style={{
              background: "oklch(0.1 0.06 255)",
              border: "1px solid oklch(1 0 0 / 0.07)",
            }}
          >
            <span className="text-sm">📱</span>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "oklch(0.97 0 0 / 0.5)" }}
            >
              The app icon will appear on your home screen — tap it to open
              Vidyamandir like a native app!
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl font-black text-sm uppercase tracking-wider"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.27 38), oklch(0.62 0.25 50))",
              color: "oklch(0.1 0.06 255)",
              boxShadow: "0 4px 20px oklch(0.55 0.27 38 / 0.35)",
            }}
            data-ocid="download.ios_sheet.confirm_button"
          >
            Got it — I'll open Safari now!
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Success Toast ────────────────────────────────────────────────────────────

function SuccessToast({
  platform,
  onDismiss,
}: { platform: Platform; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 340, damping: 28 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.28 0.18 150), oklch(0.24 0.16 155))",
        border: "1px solid oklch(0.48 0.22 150 / 0.4)",
        minWidth: 280,
        maxWidth: 400,
      }}
      data-ocid="download.success_state"
    >
      <span className="text-xl">✅</span>
      <div className="min-w-0">
        <p
          className="text-sm font-black leading-tight"
          style={{ color: "oklch(0.92 0 0)" }}
        >
          App installation started!
        </p>
        <p
          className="text-xs mt-0.5"
          style={{ color: "oklch(0.92 0 0 / 0.65)" }}
        >
          {platform === "ios"
            ? "Follow the Safari steps to add to your home screen."
            : "Check your home screen or taskbar shortly."}
        </p>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ml-auto"
        style={{
          background: "oklch(1 0 0 / 0.1)",
          color: "oklch(0.92 0 0 / 0.6)",
        }}
        data-ocid="download.success_state.close_button"
      >
        ✕
      </button>
    </motion.div>
  );
}

// ─── Platform Card ────────────────────────────────────────────────────────────

function PlatformCard({
  platform,
  index,
  isRecommended,
  onInstall,
}: {
  platform: (typeof PLATFORMS)[number];
  index: number;
  isRecommended: boolean;
  onInstall: (id: Platform) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="pwa-card flex flex-col gap-5 relative overflow-hidden"
      data-ocid={`download.platform_card.${index + 1}`}
      style={{
        background: "oklch(0.14 0.08 255)",
        border: isRecommended
          ? "1px solid oklch(0.55 0.27 38 / 0.6)"
          : `1px solid ${platform.accentColor}33`,
        borderTop: isRecommended
          ? "3px solid oklch(0.62 0.25 50)"
          : `3px solid ${platform.accentColor}`,
        borderRadius: "12px",
        padding: "28px 24px",
        boxShadow: isRecommended
          ? "0 0 32px oklch(0.55 0.27 38 / 0.18)"
          : undefined,
      }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{
          background: isRecommended
            ? "radial-gradient(ellipse at top right, oklch(0.55 0.27 38 / 0.12), transparent 70%)"
            : `radial-gradient(ellipse at top right, ${platform.accentColor}14, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `${platform.accentColor}1a`,
              border: `1.5px solid ${platform.accentColor}40`,
            }}
          >
            {platform.icon}
          </div>
          <div>
            <h3
              className="font-display font-black text-lg leading-tight"
              style={{ color: "oklch(0.97 0 0)", letterSpacing: "-0.02em" }}
            >
              {platform.name}
            </h3>
            <p
              className="text-xs mt-0.5"
              style={{ color: "oklch(0.97 0 0 / 0.45)" }}
            >
              {platform.subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex-shrink-0"
            style={{
              background: `${platform.badgeColor}20`,
              border: `1px solid ${platform.badgeColor}40`,
              color: platform.badgeColor,
            }}
          >
            {platform.badge}
          </span>
          {isRecommended && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.12 + 0.4 }}
              className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider whitespace-nowrap"
              style={{
                background: "oklch(0.55 0.27 38 / 0.2)",
                border: "1px solid oklch(0.55 0.27 38 / 0.5)",
                color: "oklch(0.75 0.26 42)",
              }}
              data-ocid={`download.recommended_badge.${index + 1}`}
            >
              ⭐ Your Device
            </motion.span>
          )}
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        <p
          className="text-[10px] uppercase tracking-widest font-bold"
          style={{ color: "oklch(0.97 0 0 / 0.3)" }}
        >
          Install Steps
        </p>
        {platform.steps.map((step) => (
          <StepItem key={step.num} num={step.num} text={step.text} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto pt-1">
        <button
          type="button"
          onClick={() => onInstall(platform.id)}
          className="pwa-cta w-full py-3 px-6 rounded-xl font-black text-sm uppercase tracking-wider transition-smooth"
          data-ocid={`download.install_button.${index + 1}`}
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.27 38), oklch(0.62 0.25 50))",
            color: "oklch(0.1 0.06 255)",
            boxShadow: "0 4px 20px oklch(0.55 0.27 38 / 0.35)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 6px 28px oklch(0.55 0.27 38 / 0.5)";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 4px 20px oklch(0.55 0.27 38 / 0.35)";
            el.style.transform = "";
          }}
        >
          📲 {platform.cta}
        </button>
        <p
          className="text-center text-[10px] mt-2"
          style={{ color: "oklch(0.97 0 0 / 0.28)" }}
        >
          {platform.note}
        </p>
      </div>
    </motion.div>
  );
}

// ─── DownloadPage ──────────────────────────────────────────────────────────────

export default function DownloadPage() {
  const navigate = useNavigate();
  const installPromptRef = useRef<BeforeInstallPromptEvent | null>(null);
  const [showPromptBanner, setShowPromptBanner] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [showIOSSheet, setShowIOSSheet] = useState(false);
  const [successPlatform, setSuccessPlatform] = useState<Platform | null>(null);
  const [detectedPlatform] = useState<Platform>(detectPlatform);

  const recordDownload = useRecordDownload();

  // Capture beforeinstallprompt
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      installPromptRef.current = e as BeforeInstallPromptEvent;
      if (!bannerDismissed) setShowPromptBanner(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [bannerDismissed]);

  // Handle appinstalled event
  useEffect(() => {
    const handler = () => {
      setShowPromptBanner(false);
    };
    window.addEventListener("appinstalled", handler);
    return () => window.removeEventListener("appinstalled", handler);
  }, []);

  async function triggerPWAPrompt(_platform: Platform): Promise<boolean> {
    if (!installPromptRef.current) return false;
    await installPromptRef.current.prompt();
    const choice = await installPromptRef.current.userChoice;
    installPromptRef.current = null;
    setShowPromptBanner(false);
    return choice.outcome === "accepted";
  }

  async function handleInstall(platform: Platform) {
    // Record download in backend (fire-and-forget)
    recordDownload.mutate(platform);

    if (platform === "ios") {
      setShowIOSSheet(true);
      setSuccessPlatform("ios");
      return;
    }

    // Android / Windows / Desktop: try PWA prompt first
    const triggered = await triggerPWAPrompt(platform);
    if (!triggered) {
      // Prompt unavailable — show instructions (already in card) + success message
    }
    setSuccessPlatform(platform);
  }

  async function handleBannerInstall() {
    await triggerPWAPrompt(detectedPlatform);
    recordDownload.mutate(detectedPlatform);
    setSuccessPlatform(detectedPlatform);
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      data-ocid="download.page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      style={{ background: "oklch(0.1 0.06 255)" }}
    >
      {/* Sticky PWA Install Banner */}
      <AnimatePresence>
        {showPromptBanner && !bannerDismissed && (
          <motion.div
            initial={{ opacity: 0, y: -48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -48 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="sticky top-0 z-40 w-full flex items-center justify-between gap-3 px-4 py-3"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.50 0.27 38), oklch(0.56 0.25 42))",
              boxShadow: "0 4px 20px oklch(0.50 0.27 38 / 0.45)",
            }}
            data-ocid="download.install_banner"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base flex-shrink-0">📲</span>
              <p
                className="text-sm font-black leading-tight truncate"
                style={{ color: "oklch(0.05 0.05 255)" }}
              >
                Install Vidyamandir — works offline on your device!
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={handleBannerInstall}
                className="px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider"
                style={{
                  background: "oklch(0.07 0.06 255)",
                  color: "oklch(0.75 0.26 42)",
                  boxShadow: "0 2px 8px oklch(0 0 0 / 0.3)",
                }}
                data-ocid="download.install_banner.install_button"
              >
                Install Now
              </button>
              <button
                type="button"
                onClick={() => {
                  setBannerDismissed(true);
                  setShowPromptBanner(false);
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
                style={{
                  background: "oklch(0 0 0 / 0.15)",
                  color: "oklch(0.05 0.05 255 / 0.7)",
                }}
                data-ocid="download.install_banner.close_button"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top info bar */}
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.55 0.27 38 / 0.18), oklch(0.62 0.25 50 / 0.12), oklch(0.55 0.27 38 / 0.18))",
          borderBottom: "1px solid oklch(var(--accent) / 0.2)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center gap-3">
          <span className="text-base">📱</span>
          <p
            className="text-sm text-center font-body"
            style={{ color: "oklch(0.97 0 0 / 0.85)" }}
          >
            <strong style={{ color: "oklch(0.75 0.26 42)" }}>
              Install Vidyamandir on your device
            </strong>{" "}
            for the best experience — works offline too!
          </p>
        </div>
      </div>

      {/* Page hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.07 265) 0%, oklch(0.14 0.09 255) 60%, oklch(0.12 0.08 250) 100%)",
          borderBottom: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        {/* Diagonal texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(1 0 0), oklch(1 0 0) 1px, transparent 1px, transparent 12px)",
          }}
        />
        {/* Orange glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, oklch(0.55 0.25 38 / 0.1), transparent 60%)",
          }}
        />

        <div className="relative max-w-screen-xl mx-auto px-4 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{
              background: "oklch(var(--accent) / 0.12)",
              border: "1px solid oklch(var(--accent) / 0.3)",
              color: "oklch(var(--accent))",
            }}
          >
            <span>📲</span>
            <span>Free Download</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black leading-none mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            <span style={{ color: "oklch(0.97 0 0)" }}>Download Our</span>{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.75 0.26 42), oklch(0.65 0.28 38))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              App
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg font-body max-w-lg mx-auto mb-4"
            style={{ color: "oklch(0.97 0 0 / 0.55)" }}
          >
            Install Vidyamandir on any device — Android, iPhone, or Windows PC.
            Shop books, track orders, and browse offline.
          </motion.p>

          {/* Detected platform chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-6"
            style={{
              background: "oklch(0.55 0.27 38 / 0.12)",
              border: "1px solid oklch(0.55 0.27 38 / 0.3)",
              color: "oklch(0.75 0.26 42)",
            }}
            data-ocid="download.detected_platform"
          >
            <span>
              {detectedPlatform === "android"
                ? "🤖"
                : detectedPlatform === "ios"
                  ? "🍎"
                  : "🖥️"}
            </span>
            <span>
              We detected{" "}
              {detectedPlatform === "android"
                ? "Android"
                : detectedPlatform === "ios"
                  ? "iOS"
                  : "Desktop"}{" "}
              — see your recommended install below
            </span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-6 flex-wrap"
          >
            {[
              { icon: "⚡", label: "Instant install" },
              { icon: "📴", label: "Works offline" },
              { icon: "🔒", label: "100% secure" },
              { icon: "🆓", label: "Always free" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 text-xs font-bold"
                style={{ color: "oklch(0.97 0 0 / 0.5)" }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Platform cards */}
      <div className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORMS.map((platform, i) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              index={i}
              isRecommended={platform.id === detectedPlatform}
              onInstall={handleInstall}
            />
          ))}
        </div>

        {/* Bottom tip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: "oklch(0.14 0.08 255 / 0.6)",
            border: "1px solid oklch(1 0 0 / 0.07)",
          }}
          data-ocid="download.tip_section"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
            style={{
              background: "oklch(var(--accent) / 0.12)",
              border: "1px solid oklch(var(--accent) / 0.25)",
            }}
          >
            💡
          </div>
          <div className="min-w-0">
            <p
              className="font-bold text-sm mb-0.5"
              style={{ color: "oklch(0.97 0 0 / 0.85)" }}
            >
              What is a PWA (Progressive Web App)?
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "oklch(0.97 0 0 / 0.45)" }}
            >
              A PWA installs directly from your browser — no app store needed.
              It looks and feels like a native app, loads instantly, and works
              even when you're offline. Your data syncs automatically when you
              reconnect.
            </p>
          </div>
        </motion.div>

        {/* Back to shop */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="inline-flex items-center gap-2 text-sm font-bold transition-smooth"
            data-ocid="download.back_button"
            style={{ color: "oklch(var(--accent))" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "1";
            }}
          >
            ← Back to Vidyamandir
          </button>
        </div>
      </div>

      {/* iOS Bottom Sheet */}
      <AnimatePresence>
        {showIOSSheet && (
          <IOSInstallSheet onClose={() => setShowIOSSheet(false)} />
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {successPlatform && !showIOSSheet && (
          <SuccessToast
            platform={successPlatform}
            onDismiss={() => setSuccessPlatform(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
