import { r as reactExports, u as useLanguage, a as useListProducts, S as SortOrder, b as SortField, L as Language, c as useListFlashSales, j as jsxRuntimeExports, d as useNavigate, G as Genre, e as Link, P as ProductCardSkeleton, f as useGetRecentlyViewed } from "./index-C7rxycPz.js";
import { P as ProductCard } from "./ProductCard-BxXhKS3B.js";
import { r as resolveElements, m as motion } from "./proxy-CmsuwCUl.js";
import "./StarRating-DWTkwIVV.js";
import "./star-Br0M2B3s.js";
import "./zap-C36o4dke.js";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
function useCountdown(endTimeNs) {
  const [rem, setRem] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!endTimeNs) return;
    const targetMs = Number(endTimeNs) / 1e6;
    const tick = () => setRem(Math.max(0, targetMs - Date.now()));
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, [endTimeNs]);
  const secs = Math.floor(rem / 1e3);
  return {
    h: Math.floor(secs / 3600),
    m: Math.floor(secs % 3600 / 60),
    s: secs % 60,
    expired: rem === 0
  };
}
function DigitBox({ value, label }) {
  const pad = (n) => String(n).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg font-display font-black text-xl md:text-3xl tabular-nums",
        style: {
          background: "oklch(var(--accent-foreground) / 0.12)",
          border: "2px solid oklch(var(--accent-foreground) / 0.3)",
          color: "oklch(var(--accent-foreground))",
          boxShadow: "inset 0 1px 0 oklch(var(--accent-foreground) / 0.1)"
        },
        children: pad(value)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "text-[9px] uppercase tracking-widest",
        style: { color: "oklch(var(--accent-foreground) / 0.65)" },
        children: label
      }
    )
  ] });
}
function FlashSaleBanner({ sale }) {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const { h, m, s, expired } = useCountdown(sale.endTime);
  if (expired) return null;
  const title = lang === "bn" ? sale.titleBn : sale.titleEn;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.4 },
      className: "w-full relative overflow-hidden",
      "data-ocid": "flash_sale.banner",
      style: {
        background: "linear-gradient(90deg, oklch(0.55 0.28 38), oklch(0.62 0.25 52), oklch(0.58 0.27 38))",
        backgroundSize: "200% 100%",
        animation: "bannerShimmer 4s linear infinite"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-10",
            style: {
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "⚡" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-sm font-black uppercase tracking-wider",
                style: { color: "oklch(var(--accent-foreground))" },
                children: t("flashSale")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "hidden sm:inline text-xs font-body font-normal normal-case tracking-normal",
                style: { color: "oklch(var(--accent-foreground) / 0.8)" },
                children: title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-black px-2.5 py-0.5 rounded-full",
                style: {
                  background: "oklch(var(--accent-foreground) / 0.15)",
                  border: "1px solid oklch(var(--accent-foreground) / 0.35)",
                  color: "oklch(var(--accent-foreground))"
                },
                children: "UP TO 50% OFF"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-xs uppercase tracking-widest hidden sm:inline",
                style: { color: "oklch(var(--accent-foreground) / 0.7)" },
                children: [
                  t("endsIn"),
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DigitBox, { value: h, label: "HRS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-black text-2xl",
                  style: {
                    color: "oklch(var(--accent-foreground) / 0.5)",
                    marginBottom: "18px"
                  },
                  children: ":"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DigitBox, { value: m, label: "MIN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-black text-2xl",
                  style: {
                    color: "oklch(var(--accent-foreground) / 0.5)",
                    marginBottom: "18px"
                  },
                  children: ":"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DigitBox, { value: s, label: "SEC" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/flash-sales" }),
                "data-ocid": "flash_sale.shop_now_button",
                className: "px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-smooth",
                style: {
                  background: "oklch(var(--accent-foreground))",
                  color: "oklch(var(--accent))",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.25)"
                },
                children: [
                  t("shopNow"),
                  " →"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const HERO_BOOKS = [
  { title: "গোরা", author: "রবীন্দ্রনাথ ঠাকুর", bg: "oklch(0.35 0.15 260)" },
  {
    title: "পথের পাঁচালী",
    author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
    bg: "oklch(0.28 0.12 25)"
  },
  { title: "আরণ্যক", author: "বিভূতিভূষণ", bg: "oklch(0.32 0.10 145)" },
  { title: "চরিত্রহীন", author: "শরৎচন্দ্র চট্টোপাধ্যায়", bg: "oklch(0.30 0.14 200)" },
  { title: "দেবদাস", author: "শরৎচন্দ্র", bg: "oklch(0.38 0.12 60)" }
];
function HeroSection() {
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      "data-ocid": "hero.section",
      style: {
        background: "linear-gradient(135deg, oklch(0.10 0.07 265) 0%, oklch(0.14 0.09 255) 50%, oklch(0.12 0.08 250) 100%)",
        minHeight: "500px"
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
            className: "absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at right center, oklch(0.55 0.25 38 / 0.12), transparent 65%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 h-24 pointer-events-none",
            style: {
              background: "linear-gradient(to bottom, transparent, oklch(var(--background) / 0.15))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-screen-xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.35 },
                className: "inline-flex items-center rounded-full p-1 mb-6",
                style: {
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.12)",
                  backdropFilter: "blur(8px)"
                },
                "data-ocid": "hero.lang_toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setLang("en"),
                      "data-ocid": "hero.lang_en_button",
                      className: "px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest transition-smooth",
                      style: lang === "en" ? {
                        background: "oklch(var(--accent))",
                        color: "oklch(var(--accent-foreground))",
                        boxShadow: "0 2px 8px oklch(var(--accent) / 0.4)"
                      } : {
                        background: "transparent",
                        color: "oklch(1 0 0 / 0.5)"
                      },
                      children: "English"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setLang("bn"),
                      "data-ocid": "hero.lang_bn_button",
                      className: "px-5 py-1.5 rounded-full text-xs font-bold transition-smooth",
                      style: lang === "bn" ? {
                        background: "oklch(var(--accent))",
                        color: "oklch(var(--accent-foreground))",
                        boxShadow: "0 2px 8px oklch(var(--accent) / 0.4)"
                      } : {
                        background: "transparent",
                        color: "oklch(1 0 0 / 0.5)"
                      },
                      children: "বাংলা"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.1 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "font-display leading-none mb-2",
                    style: { letterSpacing: "-0.03em" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "block text-6xl md:text-8xl font-black",
                          style: { color: "oklch(0.97 0 0)" },
                          children: lang === "bn" ? "বিদ্যামন্দির" : "Vidya"
                        }
                      ),
                      lang === "en" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "block text-6xl md:text-8xl font-black",
                          style: {
                            background: "linear-gradient(90deg, oklch(0.75 0.26 42), oklch(0.65 0.28 38))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "mandir"
                        }
                      ),
                      lang === "bn" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "block text-2xl md:text-3xl font-semibold mt-1",
                          style: {
                            background: "linear-gradient(90deg, oklch(0.75 0.26 42), oklch(0.65 0.28 38))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "বিদ্যা মন্দির"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.45, delay: 0.2 },
                className: "text-lg md:text-xl font-body mb-1 max-w-md mx-auto md:mx-0",
                style: { color: "oklch(0.97 0 0 / 0.65)" },
                children: t("tagline")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.4, delay: 0.3 },
                className: "text-sm font-body mb-8 max-w-sm mx-auto md:mx-0 flex items-center gap-2 justify-center md:justify-start",
                style: { color: "oklch(0.97 0 0 / 0.38)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📍" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "পূর্ব বর্ধমান, পশ্চিমবঙ্গ" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.97 0 0 / 0.2)" }, children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Since 1985" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: 0.35 },
                className: "flex flex-col sm:flex-row gap-3 justify-center md:justify-start",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/shop" }),
                      "data-ocid": "hero.shop_button",
                      className: "cta-primary px-8 py-3.5 text-sm font-black uppercase tracking-widest rounded-full",
                      style: { fontSize: "13px" },
                      children: [
                        "📚 ",
                        t("shopNow")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/flash-sales" }),
                      "data-ocid": "hero.flash_sales_button",
                      className: "px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full transition-smooth",
                      style: {
                        background: "oklch(1 0 0 / 0.06)",
                        border: "1.5px solid oklch(var(--accent) / 0.5)",
                        color: "oklch(0.75 0.26 42)",
                        backdropFilter: "blur(8px)",
                        fontSize: "13px"
                      },
                      onMouseEnter: (e) => {
                        e.currentTarget.style.background = "oklch(var(--accent) / 0.12)";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.background = "oklch(1 0 0 / 0.06)";
                      },
                      children: [
                        "⚡ ",
                        t("flashSales")
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex-shrink-0 hidden md:flex items-center justify-center relative",
              initial: { opacity: 0, scale: 0.92 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.6, delay: 0.15 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 rounded-2xl pointer-events-none",
                    style: {
                      background: "radial-gradient(ellipse at center, oklch(0.55 0.25 38 / 0.25), transparent 70%)",
                      filter: "blur(20px)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/generated/hero-books-illustration.dim_640x480.png",
                    alt: "Books collection",
                    className: "relative w-80 xl:w-96 rounded-2xl",
                    style: { boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute -bottom-3 -left-3 px-4 py-2 rounded-xl text-xs font-bold shadow-elevated",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.55 0.27 38), oklch(0.62 0.25 50))",
                      color: "oklch(var(--accent-foreground))",
                      boxShadow: "0 8px 24px oklch(var(--accent) / 0.4)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-lg leading-none", children: "10,000+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider opacity-80", children: "Titles Available" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute -top-3 -right-3 px-4 py-2 rounded-xl text-xs font-bold",
                    style: {
                      background: "oklch(0.14 0.09 255 / 0.9)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      color: "oklch(0.97 0 0)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "font-display font-black text-lg leading-none",
                          style: { color: "oklch(0.85 0.18 85)" },
                          children: "★ 4.8"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-[10px] uppercase tracking-wider",
                          style: { color: "oklch(0.97 0 0 / 0.5)" },
                          children: "Rated Shop"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden relative flex justify-center gap-3 pb-6 overflow-hidden h-24", children: HERO_BOOKS.map((book, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute border border-white/10 rounded",
            style: {
              width: 60,
              height: 85,
              background: book.bg,
              left: `${15 + i * 17}%`,
              top: i % 2 === 0 ? 8 : 0,
              transform: `rotate(${(i - 2) * 3}deg)`,
              boxShadow: "4px 4px 12px rgba(0,0,0,0.5)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1.5 h-full flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[7px] font-bold text-white/90 leading-snug line-clamp-2", children: book.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[6px] text-white/40 leading-tight", children: book.author })
            ] })
          },
          book.title
        )) })
      ]
    }
  );
}
const CATEGORIES = [
  { key: Genre.fiction, icon: "📖", en: "Fiction", bn: "কথাসাহিত্য" },
  { key: Genre.nonFiction, icon: "📰", en: "Non-Fiction", bn: "তথ্যমূলক" },
  { key: Genre.academic, icon: "🎓", en: "Academic", bn: "একাডেমিক" },
  { key: Genre.childrens, icon: "🧸", en: "Children's", bn: "শিশু সাহিত্য" },
  {
    key: Genre.bengaliClassics,
    icon: "🪔",
    en: "Bengali Classics",
    bn: "বাংলা ক্লাসিক"
  },
  { key: Genre.poetry, icon: "✒️", en: "Poetry", bn: "কবিতা" },
  { key: Genre.biography, icon: "👤", en: "Biography", bn: "জীবনী" },
  { key: Genre.history, icon: "🏛️", en: "History", bn: "ইতিহাস" },
  { key: Genre.science, icon: "🔬", en: "Science", bn: "বিজ্ঞান" }
];
function CategoryNav() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "border-b border-border",
      "data-ocid": "categories.section",
      style: { background: "oklch(var(--card))" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl mx-auto px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1",
          style: { scrollSnapType: "x mandatory" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setActive(null);
                  navigate({ to: "/shop" });
                },
                "data-ocid": "categories.all_tab",
                className: "flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-bold transition-smooth whitespace-nowrap",
                style: active === null ? {
                  background: "oklch(var(--accent))",
                  color: "oklch(var(--accent-foreground))",
                  boxShadow: "0 2px 12px oklch(var(--accent) / 0.4)"
                } : {
                  background: "oklch(var(--muted) / 0.5)",
                  color: "oklch(var(--muted-foreground))",
                  border: "1px solid oklch(var(--border))"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏪" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("allCategories") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-px h-7 flex-shrink-0",
                style: { background: "oklch(var(--border))" }
              }
            ),
            CATEGORIES.map((cat, i) => {
              const isActive = active === cat.key;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setActive(cat.key);
                    navigate({ to: "/shop", search: { genre: cat.key } });
                  },
                  "data-ocid": `categories.tab.${i + 1}`,
                  className: "flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-bold transition-smooth whitespace-nowrap",
                  onMouseEnter: (e) => {
                    if (!isActive) {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-1px)";
                      el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                    }
                  },
                  onMouseLeave: (e) => {
                    const el = e.currentTarget;
                    el.style.transform = "";
                    el.style.boxShadow = "";
                  },
                  style: isActive ? {
                    scrollSnapAlign: "start",
                    background: "oklch(var(--accent))",
                    color: "oklch(var(--accent-foreground))",
                    boxShadow: "0 2px 12px oklch(var(--accent) / 0.4)"
                  } : {
                    scrollSnapAlign: "start",
                    background: "oklch(var(--muted) / 0.5)",
                    color: "oklch(var(--muted-foreground))",
                    border: "1px solid oklch(var(--border))"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "bn" ? cat.bn : cat.en })
                  ]
                },
                cat.key
              );
            })
          ]
        }
      ) })
    }
  );
}
const PLATFORM_PILLS = [
  { icon: "🤖", label: "Android", labelBn: "অ্যান্ড্রয়েড" },
  { icon: "🍎", label: "iOS / iPhone", labelBn: "আইফোন" },
  { icon: "🖥️", label: "Windows / Mac", labelBn: "উইন্ডোজ / ম্যাক" }
];
function InstallAppSection() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true, margin: "-50px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      className: "border-b border-border relative overflow-hidden",
      "data-ocid": "install_app.section",
      style: {
        background: "linear-gradient(135deg, oklch(0.12 0.08 255 / 0.6) 0%, oklch(0.10 0.07 265) 50%, oklch(0.14 0.09 255 / 0.8) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at right center, oklch(0.55 0.25 38 / 0.08), transparent 65%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-screen-xl mx-auto px-4 py-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex-1 min-w-0 text-center sm:text-left",
              initial: { opacity: 0, x: -16 },
              animate: inView2 ? { opacity: 1, x: 0 } : {},
              transition: { duration: 0.45 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 justify-center sm:justify-start mb-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest",
                    style: {
                      background: "oklch(var(--accent) / 0.12)",
                      border: "1px solid oklch(var(--accent) / 0.3)",
                      color: "oklch(var(--accent))"
                    },
                    children: lang === "bn" ? "অ্যাপ ডাউনলোড" : "Download App"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display font-black text-lg md:text-xl leading-tight mb-1",
                    style: { color: "oklch(0.97 0 0)", letterSpacing: "-0.02em" },
                    children: lang === "bn" ? "আমাদের অ্যাপ ইনস্টল করুন" : "Download Our App"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "oklch(0.97 0 0 / 0.5)" }, children: lang === "bn" ? "অ্যান্ড্রয়েড, iOS বা উইন্ডোজে ইনস্টল করুন" : "Install on Android, iOS or Windows" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "flex flex-wrap items-center justify-center gap-2",
              initial: { opacity: 0, y: 10 },
              animate: inView2 ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.45, delay: 0.1 },
              children: PLATFORM_PILLS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: "/download" }),
                  "data-ocid": `install_app.platform_pill.${i + 1}`,
                  className: "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-smooth whitespace-nowrap",
                  style: {
                    background: "oklch(1 0 0 / 0.05)",
                    border: "1.5px solid oklch(var(--accent) / 0.3)",
                    color: "oklch(0.97 0 0 / 0.8)"
                  },
                  onMouseEnter: (e) => {
                    const el = e.currentTarget;
                    el.style.background = "oklch(var(--accent) / 0.12)";
                    el.style.borderColor = "oklch(var(--accent) / 0.6)";
                    el.style.color = "oklch(var(--accent))";
                  },
                  onMouseLeave: (e) => {
                    const el = e.currentTarget;
                    el.style.background = "oklch(1 0 0 / 0.05)";
                    el.style.borderColor = "oklch(var(--accent) / 0.3)";
                    el.style.color = "oklch(0.97 0 0 / 0.8)";
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "bn" ? p.labelBn : p.label })
                  ]
                },
                p.label
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 16 },
              animate: inView2 ? { opacity: 1, x: 0 } : {},
              transition: { duration: 0.45, delay: 0.15 },
              className: "flex-shrink-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: "/download" }),
                  "data-ocid": "install_app.cta_button",
                  className: "cta-primary px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap",
                  children: [
                    "📲 ",
                    lang === "bn" ? "ইনস্টল করুন" : "Get the App"
                  ]
                }
              )
            }
          )
        ] }) })
      ]
    }
  );
}
function PerksStrip() {
  const { lang } = useLanguage();
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true, margin: "-50px" });
  const perks = [
    {
      icon: "🚚",
      en: "FREE Delivery ₹499+",
      bn: "বিনামূল্যে ডেলিভারি ₹৪৯৯+",
      sub_en: "On all orders above ₹499",
      sub_bn: "₹৪৯৯-এর উপরে সব অর্ডারে"
    },
    {
      icon: "📦",
      en: "Easy 7-Day Returns",
      bn: "সহজ ৭ দিনের রিটার্ন",
      sub_en: "Hassle-free returns",
      sub_bn: "ঝামেলামুক্ত রিটার্ন"
    },
    {
      icon: "🏷️",
      en: "Exclusive Flash Deals",
      bn: "ফ্ল্যাশ ডিল",
      sub_en: "Up to 50% off daily",
      sub_bn: "দৈনিক ৫০% পর্যন্ত ছাড়"
    },
    {
      icon: "📚",
      en: "10,000+ Titles",
      bn: "১০,০০০+ বই",
      sub_en: "Vast collection curated for you",
      sub_bn: "আপনার জন্য বিশাল সংগ্রহ"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: "border-b border-border",
      "data-ocid": "perks_strip",
      style: { background: "oklch(var(--background))" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: perks.map((perk, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: inView2 ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.4, delay: i * 0.08 },
          className: "flex items-center gap-3 rounded-xl p-4 shadow-subtle",
          style: {
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border))"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg",
                style: {
                  background: "oklch(var(--accent) / 0.12)",
                  border: "1.5px solid oklch(var(--accent) / 0.25)"
                },
                children: perk.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-bold leading-tight",
                  style: { color: "oklch(var(--foreground))" },
                  children: lang === "bn" ? perk.bn : perk.en
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[10px] leading-tight mt-0.5",
                  style: { color: "oklch(var(--muted-foreground))" },
                  children: lang === "bn" ? perk.sub_bn : perk.sub_en
                }
              )
            ] })
          ]
        },
        perk.en
      )) }) })
    }
  );
}
function SectionHeader({
  title,
  subtitle,
  viewAllTo,
  viewAllLabel,
  icon,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display font-black text-xl md:text-2xl",
            style: {
              color: "oklch(var(--foreground))",
              letterSpacing: "-0.02em"
            },
            children: title
          }
        )
      ] }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-[11px] uppercase tracking-widest",
          style: { color: "oklch(var(--muted-foreground))" },
          children: subtitle
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mt-2 h-0.5 w-12 rounded-full",
          style: {
            background: "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--accent) / 0.2))"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/shop",
        search: viewAllTo !== "/shop" ? void 0 : void 0,
        "data-ocid": `${ocid}.view_all_link`,
        className: "text-xs font-bold uppercase tracking-wider transition-colors-fast flex items-center gap-1",
        style: { color: "oklch(var(--accent))" },
        onMouseEnter: (e) => {
          e.currentTarget.style.opacity = "0.7";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.opacity = "1";
        },
        children: [
          viewAllLabel,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
        ]
      }
    )
  ] });
}
function FlashSaleProductsSection({
  sale,
  products
}) {
  const { lang, t } = useLanguage();
  const { h, m, s, expired } = useCountdown(sale.endTime);
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true });
  if (expired || sale.items.length === 0) return null;
  const title = lang === "bn" ? sale.titleBn : sale.titleEn;
  const saleMap = new Map(
    sale.items.map((it) => [it.productId, it])
  );
  const saleProducts = products.filter((p) => saleMap.has(p.id)).slice(0, 8);
  if (saleProducts.length === 0) return null;
  const pad = (n) => String(n).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      className: "relative overflow-hidden",
      "data-ocid": "flash_sale.products_section",
      style: {
        background: "linear-gradient(135deg, oklch(0.52 0.26 38 / 0.08), oklch(0.58 0.25 50 / 0.05))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.03] pointer-events-none",
            style: {
              backgroundImage: "repeating-linear-gradient(-45deg, oklch(var(--accent)), oklch(var(--accent)) 1px, transparent 1px, transparent 8px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-6 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0",
                  style: {
                    background: "oklch(var(--accent))",
                    boxShadow: "0 4px 16px oklch(var(--accent) / 0.4)"
                  },
                  children: "⚡"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display font-black text-xl md:text-2xl leading-tight",
                    style: {
                      color: "oklch(var(--foreground))",
                      letterSpacing: "-0.02em"
                    },
                    children: title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[11px] uppercase tracking-widest",
                    style: { color: "oklch(var(--accent))" },
                    children: t("flashSale")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-display font-black tabular-nums ml-2",
                  style: {
                    background: "oklch(var(--accent) / 0.1)",
                    border: "1px solid oklch(var(--accent) / 0.3)",
                    color: "oklch(var(--accent))"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          color: "oklch(var(--muted-foreground))",
                          fontSize: "10px",
                          fontFamily: "var(--font-body)",
                          fontWeight: 400
                        },
                        children: t("endsIn")
                      }
                    ),
                    pad(h),
                    ":",
                    pad(m),
                    ":",
                    pad(s)
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/flash-sales",
                "data-ocid": "flash_sale.view_all_link",
                className: "text-xs font-bold uppercase tracking-wider transition-smooth flex items-center gap-1",
                style: { color: "oklch(var(--accent))" },
                children: [
                  t("viewAll"),
                  " →"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5", children: saleProducts.map((product, i) => {
            const item = saleMap.get(product.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: inView2 ? { opacity: 1, scale: 1 } : {},
                transition: { duration: 0.3, delay: i * 0.06 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProductCard,
                  {
                    product,
                    flashDiscountPercent: item.discountPercent,
                    flashDiscountedPrice: item.discountedPriceInPaisa,
                    index: i
                  }
                )
              },
              product.id.toString()
            );
          }) })
        ] })
      ]
    }
  );
}
function ProductsSection({
  title,
  subtitle,
  icon,
  products,
  isLoading,
  ocid,
  bg = "bg-background"
}) {
  const { t } = useLanguage();
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      className: `${bg} relative`,
      "data-ocid": ocid,
      style: { borderBottom: "1px solid oklch(var(--border))" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.15), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              title,
              subtitle,
              icon,
              viewAllTo: "/shop",
              viewAllLabel: `${t("viewAll")} →`,
              ocid
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3", children: ["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardSkeleton, {}, `sk-${k}`)) }) : !products || products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-center", "data-ocid": `${ocid}.empty_state`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl block mb-3", children: "📚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body",
                style: { color: "oklch(var(--muted-foreground))" },
                children: t("noProducts")
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: inView2 ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.3, delay: Math.min(i * 0.04, 0.3) },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i })
            },
            p.id.toString()
          )) })
        ] })
      ]
    }
  );
}
function RecentlyViewedSection() {
  const { t } = useLanguage();
  const { data: products, isLoading } = useGetRecentlyViewed();
  const scrollRef = reactExports.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(false);
  const checkScroll = reactExports.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);
  reactExports.useEffect(() => {
    checkScroll();
  }, [checkScroll]);
  if (!isLoading && (!products || products.length === 0)) return null;
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "border-b border-border",
      "data-ocid": "recently_viewed.section",
      style: { background: "oklch(var(--muted) / 0.25)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            title: t("recentlyViewed"),
            icon: "🕐",
            viewAllTo: "/shop",
            viewAllLabel: `${t("viewAll")} →`,
            ocid: "recently_viewed"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          canScrollLeft && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => scroll("left"),
              className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-card transition-smooth",
              style: {
                background: "oklch(var(--card))",
                border: "1px solid oklch(var(--border))"
              },
              children: "‹"
            }
          ),
          canScrollRight && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => scroll("right"),
              className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-card transition-smooth",
              style: {
                background: "oklch(var(--card))",
                border: "1px solid oklch(var(--border))"
              },
              children: "›"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: scrollRef,
              onScroll: checkScroll,
              className: "flex gap-3 overflow-x-auto pb-2 scrollbar-hide",
              style: { scrollSnapType: "x mandatory" },
              children: isLoading ? ["a", "b", "c", "d", "e", "f"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-shrink-0 w-28",
                  style: { scrollSnapAlign: "start" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardSkeleton, {})
                },
                `rvsk-${k}`
              )) : (products ?? []).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-shrink-0 w-28",
                  style: { scrollSnapAlign: "start" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i })
                },
                p.id.toString()
              ))
            }
          )
        ] })
      ] })
    }
  );
}
function StoreInfoBanner() {
  const { lang } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "border-b border-border",
      "data-ocid": "store_info.section",
      style: { background: "oklch(var(--background))" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated relative overflow-hidden",
          style: {
            background: "linear-gradient(135deg, oklch(0.12 0.08 255), oklch(0.16 0.09 255))",
            border: "1px solid oklch(1 0 0 / 0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none",
                style: {
                  background: "radial-gradient(ellipse at right center, oklch(0.55 0.25 38 / 0.08), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
                  style: {
                    background: "oklch(var(--accent) / 0.15)",
                    border: "1.5px solid oklch(var(--accent) / 0.3)"
                  },
                  children: "📍"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display font-black text-base mb-1",
                    style: { color: "oklch(0.97 0 0)" },
                    children: lang === "bn" ? "আমাদের দোকান" : "Visit Our Store"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm",
                    style: { color: "oklch(0.97 0 0 / 0.65)" },
                    children: lang === "bn" ? "বলগোনা, জিটি রোড, পূর্ব বর্ধমান, পিন-৭১৩১২৫" : "Balgona, GT Road, Purba Bardhaman, pin-713125"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0",
                    style: {
                      background: "oklch(1 0 0 / 0.06)",
                      border: "1px solid oklch(1 0 0 / 0.1)"
                    },
                    children: "📞"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[10px] uppercase tracking-widest",
                      style: { color: "oklch(0.97 0 0 / 0.4)" },
                      children: lang === "bn" ? "ফোন" : "Call Us"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-bold",
                      style: { color: "oklch(0.97 0 0 / 0.85)" },
                      children: "+91-9475727810"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0",
                    style: {
                      background: "oklch(1 0 0 / 0.06)",
                      border: "1px solid oklch(1 0 0 / 0.1)"
                    },
                    children: "🕐"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[10px] uppercase tracking-widest",
                      style: { color: "oklch(0.97 0 0 / 0.4)" },
                      children: lang === "bn" ? "খোলার সময়" : "Store Hours"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-bold",
                      style: { color: "oklch(0.97 0 0 / 0.85)" },
                      children: lang === "bn" ? "সোম–শনি: সকাল ৯–রাত ৯টা" : "Mon–Sat: 9AM–9PM"
                    }
                  )
                ] })
              ] })
            ] })
          ]
        }
      ) })
    }
  );
}
function HomePage() {
  const { lang } = useLanguage();
  const { data: featuredProducts, isLoading: loadingFeatured } = useListProducts(
    { inStockOnly: false },
    { field: SortField.rating, order: SortOrder.desc },
    BigInt(0),
    BigInt(16)
  );
  const { data: newArrivals, isLoading: loadingNew } = useListProducts(
    { inStockOnly: false },
    { field: SortField.publicationDate, order: SortOrder.desc },
    BigInt(0),
    BigInt(16)
  );
  const { data: bengaliBooks, isLoading: loadingBengali } = useListProducts(
    { inStockOnly: false, language: Language.bengali },
    { field: SortField.rating, order: SortOrder.desc },
    BigInt(0),
    BigInt(16)
  );
  const { data: flashSales } = useListFlashSales(false);
  const activeSale = (flashSales == null ? void 0 : flashSales.find((s) => s.isCurrentlyActive)) ?? (flashSales == null ? void 0 : flashSales[0]) ?? null;
  const { data: allProducts } = useListProducts(
    { inStockOnly: false },
    null,
    BigInt(0),
    BigInt(100)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "min-h-screen flex flex-col",
      "data-ocid": "home.page",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
      children: [
        activeSale && /* @__PURE__ */ jsxRuntimeExports.jsx(FlashSaleBanner, { sale: activeSale }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryNav, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InstallAppSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PerksStrip, {}),
        activeSale && allProducts && /* @__PURE__ */ jsxRuntimeExports.jsx(FlashSaleProductsSection, { sale: activeSale, products: allProducts }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProductsSection,
          {
            title: lang === "bn" ? "বিশেষ নির্বাচন" : "Featured Books",
            subtitle: lang === "bn" ? "সেরা রেটিং" : "Top Rated",
            icon: "⭐",
            products: featuredProducts,
            isLoading: loadingFeatured,
            ocid: "featured_products",
            bg: "bg-background"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-px",
            style: {
              background: "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.12), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProductsSection,
          {
            title: lang === "bn" ? "নতুন আগমন" : "New Arrivals",
            subtitle: lang === "bn" ? "সর্বশেষ প্রকাশিত" : "Just Added",
            icon: "✨",
            products: newArrivals,
            isLoading: loadingNew,
            ocid: "new_arrivals",
            bg: "bg-muted/20"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProductsSection,
          {
            title: lang === "bn" ? "বাংলা বই" : "Bengali Books",
            subtitle: lang === "bn" ? "মাতৃভাষায় পড়ুন" : "Read in Your Mother Tongue",
            icon: "🪔",
            products: bengaliBooks,
            isLoading: loadingBengali,
            ocid: "bengali_books",
            bg: "bg-background"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RecentlyViewedSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StoreInfoBanner, {})
      ]
    }
  );
}
export {
  HomePage as default
};
