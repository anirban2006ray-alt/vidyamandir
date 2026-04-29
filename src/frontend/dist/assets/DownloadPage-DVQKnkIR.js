import { d as useNavigate, r as reactExports, bg as useRecordDownload, j as jsxRuntimeExports } from "./index-Bz7t5j9k.js";
import { m as motion } from "./proxy-CuVWi4zi.js";
import { A as AnimatePresence } from "./index-DcbCyYDc.js";
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
      { num: 4, text: 'Tap "Install" on the prompt' }
    ],
    cta: "Install on Android",
    note: "Works on Android 5.0 and above"
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
      { num: 4, text: 'Tap "Add" in the top-right corner' }
    ],
    cta: "Install on iPhone / iPad",
    note: "Works on iOS 12.2 and above"
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
      { num: 4, text: "App will appear on your taskbar or desktop" }
    ],
    cta: "Install on Desktop",
    note: "Works on Windows 10, macOS 10.15+"
  }
];
function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  return "windows";
}
function StepItem({ num, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5",
        style: {
          background: "oklch(var(--accent) / 0.15)",
          border: "1.5px solid oklch(var(--accent) / 0.35)",
          color: "oklch(var(--accent))"
        },
        children: num
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.97 0 0 / 0.72)" }, children: text })
  ] });
}
function IOSInstallSheet({ onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-end justify-center p-4",
      style: { background: "oklch(0 0 0 / 0.75)" },
      onClick: onClose,
      "data-ocid": "download.ios_sheet",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 80, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 80, opacity: 0 },
          transition: { type: "spring", stiffness: 320, damping: 30 },
          onClick: (e) => e.stopPropagation(),
          className: "w-full max-w-sm rounded-2xl overflow-hidden",
          style: {
            background: "oklch(0.14 0.08 255)",
            border: "1px solid oklch(1 0 0 / 0.1)",
            boxShadow: "0 -12px 40px oklch(0 0 0 / 0.4)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-3 pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-1 rounded-full",
                style: { background: "oklch(1 0 0 / 0.2)" }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display font-black text-lg",
                    style: { color: "oklch(0.97 0 0)" },
                    children: "🍎 Install on iPhone / iPad"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    className: "w-7 h-7 rounded-full flex items-center justify-center text-sm",
                    style: {
                      background: "oklch(1 0 0 / 0.08)",
                      color: "oklch(1 0 0 / 0.5)"
                    },
                    "data-ocid": "download.ios_sheet.close_button",
                    children: "✕"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 mb-6", children: [
                {
                  step: "1",
                  icon: "🌐",
                  label: "Open in Safari browser",
                  detail: "Not Chrome — Safari only!"
                },
                {
                  step: "2",
                  icon: "⬆️",
                  label: "Tap the Share button",
                  detail: "Bottom center of Safari — square with arrow up"
                },
                {
                  step: "3",
                  icon: "➕",
                  label: "Add to Home Screen",
                  detail: "Scroll the share sheet and tap this option"
                },
                {
                  step: "4",
                  icon: "✅",
                  label: 'Tap "Add"',
                  detail: "Top right corner of the confirmation screen"
                }
              ].map(({ step, icon, label, detail }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0",
                    style: {
                      background: "oklch(0.55 0.27 38 / 0.15)",
                      border: "1px solid oklch(0.55 0.27 38 / 0.3)"
                    },
                    children: icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 pt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-bold leading-tight",
                      style: { color: "oklch(0.97 0 0 / 0.9)" },
                      children: label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: { color: "oklch(0.97 0 0 / 0.45)" },
                      children: detail
                    }
                  )
                ] })
              ] }, step)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl p-3 mb-4 flex items-center gap-2",
                  style: {
                    background: "oklch(0.1 0.06 255)",
                    border: "1px solid oklch(1 0 0 / 0.07)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "📱" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs leading-relaxed",
                        style: { color: "oklch(0.97 0 0 / 0.5)" },
                        children: "The app icon will appear on your home screen — tap it to open Vidyamandir like a native app!"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "w-full py-3 rounded-xl font-black text-sm uppercase tracking-wider",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.55 0.27 38), oklch(0.62 0.25 50))",
                    color: "oklch(0.1 0.06 255)",
                    boxShadow: "0 4px 20px oklch(0.55 0.27 38 / 0.35)"
                  },
                  "data-ocid": "download.ios_sheet.confirm_button",
                  children: "Got it — I'll open Safari now!"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function SuccessToast({
  platform,
  onDismiss
}) {
  reactExports.useEffect(() => {
    const t = setTimeout(onDismiss, 5e3);
    return () => clearTimeout(t);
  }, [onDismiss]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -24, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -16, scale: 0.96 },
      transition: { type: "spring", stiffness: 340, damping: 28 },
      className: "fixed top-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl",
      style: {
        background: "linear-gradient(135deg, oklch(0.28 0.18 150), oklch(0.24 0.16 155))",
        border: "1px solid oklch(0.48 0.22 150 / 0.4)",
        minWidth: 280,
        maxWidth: 400
      },
      "data-ocid": "download.success_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm font-black leading-tight",
              style: { color: "oklch(0.92 0 0)" },
              children: "App installation started!"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs mt-0.5",
              style: { color: "oklch(0.92 0 0 / 0.65)" },
              children: platform === "ios" ? "Follow the Safari steps to add to your home screen." : "Check your home screen or taskbar shortly."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ml-auto",
            style: {
              background: "oklch(1 0 0 / 0.1)",
              color: "oklch(0.92 0 0 / 0.6)"
            },
            "data-ocid": "download.success_state.close_button",
            children: "✕"
          }
        )
      ]
    }
  );
}
function PlatformCard({
  platform,
  index,
  isRecommended,
  onInstall
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.12 },
      className: "pwa-card flex flex-col gap-5 relative overflow-hidden",
      "data-ocid": `download.platform_card.${index + 1}`,
      style: {
        background: "oklch(0.14 0.08 255)",
        border: isRecommended ? "1px solid oklch(0.55 0.27 38 / 0.6)" : `1px solid ${platform.accentColor}33`,
        borderTop: isRecommended ? "3px solid oklch(0.62 0.25 50)" : `3px solid ${platform.accentColor}`,
        borderRadius: "12px",
        padding: "28px 24px",
        boxShadow: isRecommended ? "0 0 32px oklch(0.55 0.27 38 / 0.18)" : void 0
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 right-0 w-32 h-32 pointer-events-none",
            style: {
              background: isRecommended ? "radial-gradient(ellipse at top right, oklch(0.55 0.27 38 / 0.12), transparent 70%)" : `radial-gradient(ellipse at top right, ${platform.accentColor}14, transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
                style: {
                  background: `${platform.accentColor}1a`,
                  border: `1.5px solid ${platform.accentColor}40`
                },
                children: platform.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display font-black text-lg leading-tight",
                  style: { color: "oklch(0.97 0 0)", letterSpacing: "-0.02em" },
                  children: platform.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs mt-0.5",
                  style: { color: "oklch(0.97 0 0 / 0.45)" },
                  children: platform.subtitle
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex-shrink-0",
                style: {
                  background: `${platform.badgeColor}20`,
                  border: `1px solid ${platform.badgeColor}40`,
                  color: platform.badgeColor
                },
                children: platform.badge
              }
            ),
            isRecommended && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: index * 0.12 + 0.4 },
                className: "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider whitespace-nowrap",
                style: {
                  background: "oklch(0.55 0.27 38 / 0.2)",
                  border: "1px solid oklch(0.55 0.27 38 / 0.5)",
                  color: "oklch(0.75 0.26 42)"
                },
                "data-ocid": `download.recommended_badge.${index + 1}`,
                children: "⭐ Your Device"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-[10px] uppercase tracking-widest font-bold",
              style: { color: "oklch(0.97 0 0 / 0.3)" },
              children: "Install Steps"
            }
          ),
          platform.steps.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(StepItem, { num: step.num, text: step.text }, step.num))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onInstall(platform.id),
              className: "pwa-cta w-full py-3 px-6 rounded-xl font-black text-sm uppercase tracking-wider transition-smooth",
              "data-ocid": `download.install_button.${index + 1}`,
              style: {
                background: "linear-gradient(135deg, oklch(0.55 0.27 38), oklch(0.62 0.25 50))",
                color: "oklch(0.1 0.06 255)",
                boxShadow: "0 4px 20px oklch(0.55 0.27 38 / 0.35)"
              },
              onMouseEnter: (e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 6px 28px oklch(0.55 0.27 38 / 0.5)";
                el.style.transform = "translateY(-1px)";
              },
              onMouseLeave: (e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 4px 20px oklch(0.55 0.27 38 / 0.35)";
                el.style.transform = "";
              },
              children: [
                "📲 ",
                platform.cta
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center text-[10px] mt-2",
              style: { color: "oklch(0.97 0 0 / 0.28)" },
              children: platform.note
            }
          )
        ] })
      ]
    }
  );
}
function DownloadPage() {
  const navigate = useNavigate();
  const installPromptRef = reactExports.useRef(null);
  const [showPromptBanner, setShowPromptBanner] = reactExports.useState(false);
  const [bannerDismissed, setBannerDismissed] = reactExports.useState(false);
  const [showIOSSheet, setShowIOSSheet] = reactExports.useState(false);
  const [successPlatform, setSuccessPlatform] = reactExports.useState(null);
  const [detectedPlatform] = reactExports.useState(detectPlatform);
  const recordDownload = useRecordDownload();
  reactExports.useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      installPromptRef.current = e;
      if (!bannerDismissed) setShowPromptBanner(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [bannerDismissed]);
  reactExports.useEffect(() => {
    const handler = () => {
      setShowPromptBanner(false);
    };
    window.addEventListener("appinstalled", handler);
    return () => window.removeEventListener("appinstalled", handler);
  }, []);
  async function triggerPWAPrompt(_platform) {
    if (!installPromptRef.current) return false;
    await installPromptRef.current.prompt();
    const choice = await installPromptRef.current.userChoice;
    installPromptRef.current = null;
    setShowPromptBanner(false);
    return choice.outcome === "accepted";
  }
  async function handleInstall(platform) {
    recordDownload.mutate(platform);
    if (platform === "ios") {
      setShowIOSSheet(true);
      setSuccessPlatform("ios");
      return;
    }
    await triggerPWAPrompt();
    setSuccessPlatform(platform);
  }
  async function handleBannerInstall() {
    await triggerPWAPrompt();
    recordDownload.mutate(detectedPlatform);
    setSuccessPlatform(detectedPlatform);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "min-h-screen flex flex-col",
      "data-ocid": "download.page",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.35 },
      style: { background: "oklch(0.1 0.06 255)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showPromptBanner && !bannerDismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -48 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -48 },
            transition: { type: "spring", stiffness: 300, damping: 26 },
            className: "sticky top-0 z-40 w-full flex items-center justify-between gap-3 px-4 py-3",
            style: {
              background: "linear-gradient(90deg, oklch(0.50 0.27 38), oklch(0.56 0.25 42))",
              boxShadow: "0 4px 20px oklch(0.50 0.27 38 / 0.45)"
            },
            "data-ocid": "download.install_banner",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base flex-shrink-0", children: "📲" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-black leading-tight truncate",
                    style: { color: "oklch(0.05 0.05 255)" },
                    children: "Install Vidyamandir — works offline on your device!"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleBannerInstall,
                    className: "px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider",
                    style: {
                      background: "oklch(0.07 0.06 255)",
                      color: "oklch(0.75 0.26 42)",
                      boxShadow: "0 2px 8px oklch(0 0 0 / 0.3)"
                    },
                    "data-ocid": "download.install_banner.install_button",
                    children: "Install Now"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setBannerDismissed(true);
                      setShowPromptBanner(false);
                    },
                    className: "w-7 h-7 rounded-full flex items-center justify-center text-xs",
                    style: {
                      background: "oklch(0 0 0 / 0.15)",
                      color: "oklch(0.05 0.05 255 / 0.7)"
                    },
                    "data-ocid": "download.install_banner.close_button",
                    children: "✕"
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-full",
            style: {
              background: "linear-gradient(90deg, oklch(0.55 0.27 38 / 0.18), oklch(0.62 0.25 50 / 0.12), oklch(0.55 0.27 38 / 0.18))",
              borderBottom: "1px solid oklch(var(--accent) / 0.2)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "📱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-sm text-center font-body",
                  style: { color: "oklch(0.97 0 0 / 0.85)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "oklch(0.75 0.26 42)" }, children: "Install Vidyamandir on your device" }),
                    " ",
                    "for the best experience — works offline too!"
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative overflow-hidden",
            style: {
              background: "linear-gradient(135deg, oklch(0.10 0.07 265) 0%, oklch(0.14 0.09 255) 60%, oklch(0.12 0.08 250) 100%)",
              borderBottom: "1px solid oklch(1 0 0 / 0.06)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none opacity-[0.04]",
                  style: {
                    backgroundImage: "repeating-linear-gradient(45deg, oklch(1 0 0), oklch(1 0 0) 1px, transparent 1px, transparent 12px)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    background: "radial-gradient(ellipse at 70% 50%, oklch(0.55 0.25 38 / 0.1), transparent 60%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-screen-xl mx-auto px-4 py-16 md:py-20 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: -16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4 },
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6",
                    style: {
                      background: "oklch(var(--accent) / 0.12)",
                      border: "1px solid oklch(var(--accent) / 0.3)",
                      color: "oklch(var(--accent))"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📲" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free Download" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.1 },
                    className: "font-display font-black leading-none mb-4",
                    style: {
                      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                      letterSpacing: "-0.04em"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.97 0 0)" }, children: "Download Our" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            background: "linear-gradient(90deg, oklch(0.75 0.26 42), oklch(0.65 0.28 38))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "App"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, delay: 0.2 },
                    className: "text-base md:text-lg font-body max-w-lg mx-auto mb-4",
                    style: { color: "oklch(0.97 0 0 / 0.55)" },
                    children: "Install Vidyamandir on any device — Android, iPhone, or Windows PC. Shop books, track orders, and browse offline."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.4, delay: 0.35 },
                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-6",
                    style: {
                      background: "oklch(0.55 0.27 38 / 0.12)",
                      border: "1px solid oklch(0.55 0.27 38 / 0.3)",
                      color: "oklch(0.75 0.26 42)"
                    },
                    "data-ocid": "download.detected_platform",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: detectedPlatform === "android" ? "🤖" : detectedPlatform === "ios" ? "🍎" : "🖥️" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "We detected",
                        " ",
                        detectedPlatform === "android" ? "Android" : detectedPlatform === "ios" ? "iOS" : "Desktop",
                        " ",
                        "— see your recommended install below"
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: 0.3 },
                    className: "flex items-center justify-center gap-6 flex-wrap",
                    children: [
                      { icon: "⚡", label: "Instant install" },
                      { icon: "📴", label: "Works offline" },
                      { icon: "🔒", label: "100% secure" },
                      { icon: "🆓", label: "Always free" }
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-1.5 text-xs font-bold",
                        style: { color: "oklch(0.97 0 0 / 0.5)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.icon }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
                        ]
                      },
                      item.label
                    ))
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-screen-xl mx-auto w-full px-4 py-12 md:py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: PLATFORMS.map((platform, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            PlatformCard,
            {
              platform,
              index: i,
              isRecommended: platform.id === detectedPlatform,
              onInstall: handleInstall
            },
            platform.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45 },
              className: "mt-10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4",
              style: {
                background: "oklch(0.14 0.08 255 / 0.6)",
                border: "1px solid oklch(1 0 0 / 0.07)"
              },
              "data-ocid": "download.tip_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0",
                    style: {
                      background: "oklch(var(--accent) / 0.12)",
                      border: "1px solid oklch(var(--accent) / 0.25)"
                    },
                    children: "💡"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-bold text-sm mb-0.5",
                      style: { color: "oklch(0.97 0 0 / 0.85)" },
                      children: "What is a PWA (Progressive Web App)?"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs leading-relaxed",
                      style: { color: "oklch(0.97 0 0 / 0.45)" },
                      children: "A PWA installs directly from your browser — no app store needed. It looks and feels like a native app, loads instantly, and works even when you're offline. Your data syncs automatically when you reconnect."
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/" }),
              className: "inline-flex items-center gap-2 text-sm font-bold transition-smooth",
              "data-ocid": "download.back_button",
              style: { color: "oklch(var(--accent))" },
              onMouseEnter: (e) => {
                const el = e.currentTarget;
                el.style.opacity = "0.7";
              },
              onMouseLeave: (e) => {
                const el = e.currentTarget;
                el.style.opacity = "1";
              },
              children: "← Back to Vidyamandir"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showIOSSheet && /* @__PURE__ */ jsxRuntimeExports.jsx(IOSInstallSheet, { onClose: () => setShowIOSSheet(false) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: successPlatform && !showIOSSheet && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SuccessToast,
          {
            platform: successPlatform,
            onDismiss: () => setSuccessPlatform(null)
          }
        ) })
      ]
    }
  );
}
export {
  DownloadPage as default
};
