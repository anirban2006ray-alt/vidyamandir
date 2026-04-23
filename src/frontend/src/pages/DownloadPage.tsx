import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";

// ─── Platform card data ────────────────────────────────────────────────────────

const PLATFORMS = [
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
] as const;

// ─── Step Item ─────────────────────────────────────────────────────────────────

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

// ─── Platform Card ────────────────────────────────────────────────────────────

function PlatformCard({
  platform,
  index,
}: {
  platform: (typeof PLATFORMS)[number];
  index: number;
}) {
  const handleInstall = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

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
        border: `1px solid ${platform.accentColor}33`,
        borderTop: `3px solid ${platform.accentColor}`,
        borderRadius: "12px",
        padding: "28px 24px",
      }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${platform.accentColor}14, transparent 70%)`,
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
          onClick={handleInstall}
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

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      data-ocid="download.page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      style={{ background: "oklch(0.1 0.06 255)" }}
    >
      {/* Top banner */}
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
            <PlatformCard key={platform.id} platform={platform} index={i} />
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
    </motion.div>
  );
}
