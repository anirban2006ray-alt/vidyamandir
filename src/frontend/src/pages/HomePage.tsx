import { Link, useNavigate } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Genre, Language, SortField, SortOrder } from "../backend";
import type {
  FlashSaleItem,
  FlashSaleView,
  ProductView,
} from "../backend.d.ts";
import { ProductCardSkeleton } from "../components/LoadingSpinner";
import { ProductCard } from "../components/ProductCard";
import { useLanguage } from "../hooks/use-language";
import {
  useGetRecentlyViewed,
  useListFlashSales,
  useListProducts,
} from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";

// ─── Countdown ────────────────────────────────────────────────────────────────

function useCountdown(endTimeNs: bigint | null) {
  const [rem, setRem] = useState(0);
  useEffect(() => {
    if (!endTimeNs) return;
    const targetMs = Number(endTimeNs) / 1_000_000;
    const tick = () => setRem(Math.max(0, targetMs - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endTimeNs]);
  const secs = Math.floor(rem / 1000);
  return {
    h: Math.floor(secs / 3600),
    m: Math.floor((secs % 3600) / 60),
    s: secs % 60,
    expired: rem === 0,
  };
}

// ─── Countdown Digit Box ──────────────────────────────────────────────────────

function DigitBox({ value, label }: { value: number; label: string }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div
        className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg font-display font-black text-xl md:text-3xl tabular-nums"
        style={{
          background: "oklch(var(--accent-foreground) / 0.12)",
          border: "2px solid oklch(var(--accent-foreground) / 0.3)",
          color: "oklch(var(--accent-foreground))",
          boxShadow: "inset 0 1px 0 oklch(var(--accent-foreground) / 0.1)",
        }}
      >
        {pad(value)}
      </div>
      <span
        className="text-[9px] uppercase tracking-widest"
        style={{ color: "oklch(var(--accent-foreground) / 0.65)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Flash Sale Banner ────────────────────────────────────────────────────────

function FlashSaleBanner({ sale }: { sale: FlashSaleView }) {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const { h, m, s, expired } = useCountdown(sale.endTime);
  if (expired) return null;

  const title = lang === "bn" ? sale.titleBn : sale.titleEn;

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full relative overflow-hidden"
      data-ocid="flash_sale.banner"
      style={{
        background:
          "linear-gradient(90deg, oklch(0.55 0.28 38), oklch(0.62 0.25 52), oklch(0.58 0.27 38))",
        backgroundSize: "200% 100%",
        animation: "bannerShimmer 4s linear infinite",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)",
        }}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 relative">
        <div className="flex items-center gap-2.5 font-bold">
          <span className="text-lg">⚡</span>
          <span
            className="font-display text-sm font-black uppercase tracking-wider"
            style={{ color: "oklch(var(--accent-foreground))" }}
          >
            {t("flashSale")}
          </span>
          <span
            className="hidden sm:inline text-xs font-body font-normal normal-case tracking-normal"
            style={{ color: "oklch(var(--accent-foreground) / 0.8)" }}
          >
            {title}
          </span>
          <span
            className="text-xs font-black px-2.5 py-0.5 rounded-full"
            style={{
              background: "oklch(var(--accent-foreground) / 0.15)",
              border: "1px solid oklch(var(--accent-foreground) / 0.35)",
              color: "oklch(var(--accent-foreground))",
            }}
          >
            UP TO 50% OFF
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="text-xs uppercase tracking-widest hidden sm:inline"
            style={{ color: "oklch(var(--accent-foreground) / 0.7)" }}
          >
            {t("endsIn")}:
          </span>
          <div className="flex items-center gap-1.5">
            <DigitBox value={h} label="HRS" />
            <span
              className="font-black text-2xl"
              style={{
                color: "oklch(var(--accent-foreground) / 0.5)",
                marginBottom: "18px",
              }}
            >
              :
            </span>
            <DigitBox value={m} label="MIN" />
            <span
              className="font-black text-2xl"
              style={{
                color: "oklch(var(--accent-foreground) / 0.5)",
                marginBottom: "18px",
              }}
            >
              :
            </span>
            <DigitBox value={s} label="SEC" />
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/flash-sales" })}
            data-ocid="flash_sale.shop_now_button"
            className="px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-smooth"
            style={{
              background: "oklch(var(--accent-foreground))",
              color: "oklch(var(--accent))",
              boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
            }}
          >
            {t("shopNow")} →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HERO_BOOKS = [
  { title: "গোরা", author: "রবীন্দ্রনাথ ঠাকুর", bg: "oklch(0.35 0.15 260)" },
  {
    title: "পথের পাঁচালী",
    author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
    bg: "oklch(0.28 0.12 25)",
  },
  { title: "আরণ্যক", author: "বিভূতিভূষণ", bg: "oklch(0.32 0.10 145)" },
  { title: "চরিত্রহীন", author: "শরৎচন্দ্র চট্টোপাধ্যায়", bg: "oklch(0.30 0.14 200)" },
  { title: "দেবদাস", author: "শরৎচন্দ্র", bg: "oklch(0.38 0.12 60)" },
];

function HeroSection() {
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden"
      data-ocid="hero.section"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.10 0.07 265) 0%, oklch(0.14 0.09 255) 50%, oklch(0.12 0.08 250) 100%)",
        minHeight: "500px",
      }}
    >
      {/* Diagonal lines texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(1 0 0), oklch(1 0 0) 1px, transparent 1px, transparent 12px)",
        }}
      />

      {/* Radial glow from right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right center, oklch(0.55 0.25 38 / 0.12), transparent 65%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(var(--background) / 0.15))",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left — Content */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          {/* Language toggle pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center rounded-full p-1 mb-6"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.12)",
              backdropFilter: "blur(8px)",
            }}
            data-ocid="hero.lang_toggle"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              data-ocid="hero.lang_en_button"
              className="px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest transition-smooth"
              style={
                lang === "en"
                  ? {
                      background: "oklch(var(--accent))",
                      color: "oklch(var(--accent-foreground))",
                      boxShadow: "0 2px 8px oklch(var(--accent) / 0.4)",
                    }
                  : {
                      background: "transparent",
                      color: "oklch(1 0 0 / 0.5)",
                    }
              }
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("bn")}
              data-ocid="hero.lang_bn_button"
              className="px-5 py-1.5 rounded-full text-xs font-bold transition-smooth"
              style={
                lang === "bn"
                  ? {
                      background: "oklch(var(--accent))",
                      color: "oklch(var(--accent-foreground))",
                      boxShadow: "0 2px 8px oklch(var(--accent) / 0.4)",
                    }
                  : {
                      background: "transparent",
                      color: "oklch(1 0 0 / 0.5)",
                    }
              }
            >
              বাংলা
            </button>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1
              className="font-display leading-none mb-2"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span
                className="block text-6xl md:text-8xl font-black"
                style={{ color: "oklch(0.97 0 0)" }}
              >
                {lang === "bn" ? "বিদ্যামন্দির" : "Vidya"}
              </span>
              {lang === "en" && (
                <span
                  className="block text-6xl md:text-8xl font-black"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.75 0.26 42), oklch(0.65 0.28 38))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  mandir
                </span>
              )}
              {lang === "bn" && (
                <span
                  className="block text-2xl md:text-3xl font-semibold mt-1"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.75 0.26 42), oklch(0.65 0.28 38))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  বিদ্যা মন্দির
                </span>
              )}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-lg md:text-xl font-body mb-1 max-w-md mx-auto md:mx-0"
            style={{ color: "oklch(0.97 0 0 / 0.65)" }}
          >
            {t("tagline")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-sm font-body mb-8 max-w-sm mx-auto md:mx-0 flex items-center gap-2 justify-center md:justify-start"
            style={{ color: "oklch(0.97 0 0 / 0.38)" }}
          >
            <span>📍</span>
            <span>পূর্ব বর্ধমান, পশ্চিমবঙ্গ</span>
            <span style={{ color: "oklch(0.97 0 0 / 0.2)" }}>·</span>
            <span>Since 1985</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          >
            <button
              type="button"
              onClick={() => navigate({ to: "/shop" })}
              data-ocid="hero.shop_button"
              className="cta-primary px-8 py-3.5 text-sm font-black uppercase tracking-widest rounded-full"
              style={{ fontSize: "13px" }}
            >
              📚 {t("shopNow")}
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/flash-sales" })}
              data-ocid="hero.flash_sales_button"
              className="px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full transition-smooth"
              style={{
                background: "oklch(1 0 0 / 0.06)",
                border: "1.5px solid oklch(var(--accent) / 0.5)",
                color: "oklch(0.75 0.26 42)",
                backdropFilter: "blur(8px)",
                fontSize: "13px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "oklch(var(--accent) / 0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "oklch(1 0 0 / 0.06)";
              }}
            >
              ⚡ {t("flashSales")}
            </button>
          </motion.div>
        </div>

        {/* Right — Hero illustration */}
        <motion.div
          className="flex-shrink-0 hidden md:flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Glow behind illustration */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.55 0.25 38 / 0.25), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <img
            src="/assets/generated/hero-books-illustration.dim_640x480.png"
            alt="Books collection"
            className="relative w-80 xl:w-96 rounded-2xl"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          />
          {/* Floating badge */}
          <div
            className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl text-xs font-bold shadow-elevated"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.27 38), oklch(0.62 0.25 50))",
              color: "oklch(var(--accent-foreground))",
              boxShadow: "0 8px 24px oklch(var(--accent) / 0.4)",
            }}
          >
            <div className="font-display font-black text-lg leading-none">
              10,000+
            </div>
            <div className="text-[10px] uppercase tracking-wider opacity-80">
              Titles Available
            </div>
          </div>
          {/* Floating rating badge */}
          <div
            className="absolute -top-3 -right-3 px-4 py-2 rounded-xl text-xs font-bold"
            style={{
              background: "oklch(0.14 0.09 255 / 0.9)",
              border: "1px solid oklch(1 0 0 / 0.1)",
              color: "oklch(0.97 0 0)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="font-display font-black text-lg leading-none"
              style={{ color: "oklch(0.85 0.18 85)" }}
            >
              ★ 4.8
            </div>
            <div
              className="text-[10px] uppercase tracking-wider"
              style={{ color: "oklch(0.97 0 0 / 0.5)" }}
            >
              Rated Shop
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom book stack (mobile) */}
      <div className="md:hidden relative flex justify-center gap-3 pb-6 overflow-hidden h-24">
        {HERO_BOOKS.map((book, i) => (
          <div
            key={book.title}
            className="absolute border border-white/10 rounded"
            style={{
              width: 60,
              height: 85,
              background: book.bg,
              left: `${15 + i * 17}%`,
              top: i % 2 === 0 ? 8 : 0,
              transform: `rotate(${(i - 2) * 3}deg)`,
              boxShadow: "4px 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            <div className="p-1.5 h-full flex flex-col justify-between">
              <p className="text-[7px] font-bold text-white/90 leading-snug line-clamp-2">
                {book.title}
              </p>
              <p className="text-[6px] text-white/40 leading-tight">
                {book.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Category Nav ─────────────────────────────────────────────────────────────

const CATEGORIES = [
  { key: Genre.fiction, icon: "📖", en: "Fiction", bn: "কথাসাহিত্য" },
  { key: Genre.nonFiction, icon: "📰", en: "Non-Fiction", bn: "তথ্যমূলক" },
  { key: Genre.academic, icon: "🎓", en: "Academic", bn: "একাডেমিক" },
  { key: Genre.childrens, icon: "🧸", en: "Children's", bn: "শিশু সাহিত্য" },
  {
    key: Genre.bengaliClassics,
    icon: "🪔",
    en: "Bengali Classics",
    bn: "বাংলা ক্লাসিক",
  },
  { key: Genre.poetry, icon: "✒️", en: "Poetry", bn: "কবিতা" },
  { key: Genre.biography, icon: "👤", en: "Biography", bn: "জীবনী" },
  { key: Genre.history, icon: "🏛️", en: "History", bn: "ইতিহাস" },
  { key: Genre.science, icon: "🔬", en: "Science", bn: "বিজ্ঞান" },
];

function CategoryNav() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      className="border-b border-border"
      data-ocid="categories.section"
      style={{ background: "oklch(var(--card))" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div
          className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* All categories pill */}
          <button
            type="button"
            onClick={() => {
              setActive(null);
              navigate({ to: "/shop" });
            }}
            data-ocid="categories.all_tab"
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-bold transition-smooth whitespace-nowrap"
            style={
              active === null
                ? {
                    background: "oklch(var(--accent))",
                    color: "oklch(var(--accent-foreground))",
                    boxShadow: "0 2px 12px oklch(var(--accent) / 0.4)",
                  }
                : {
                    background: "oklch(var(--muted) / 0.5)",
                    color: "oklch(var(--muted-foreground))",
                    border: "1px solid oklch(var(--border))",
                  }
            }
          >
            <span>🏪</span>
            <span>{t("allCategories")}</span>
          </button>

          {/* Separator */}
          <div
            className="w-px h-7 flex-shrink-0"
            style={{ background: "oklch(var(--border))" }}
          />

          {CATEGORIES.map((cat, i) => {
            const isActive = active === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActive(cat.key);
                  navigate({ to: "/shop", search: { genre: cat.key } });
                }}
                data-ocid={`categories.tab.${i + 1}`}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-bold transition-smooth whitespace-nowrap"
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-1px)";
                    el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
                style={
                  isActive
                    ? {
                        scrollSnapAlign: "start",
                        background: "oklch(var(--accent))",
                        color: "oklch(var(--accent-foreground))",
                        boxShadow: "0 2px 12px oklch(var(--accent) / 0.4)",
                      }
                    : {
                        scrollSnapAlign: "start",
                        background: "oklch(var(--muted) / 0.5)",
                        color: "oklch(var(--muted-foreground))",
                        border: "1px solid oklch(var(--border))",
                      }
                }
              >
                <span>{cat.icon}</span>
                <span>{lang === "bn" ? cat.bn : cat.en}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Perks Strip ──────────────────────────────────────────────────────────────

function PerksStrip() {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const perks = [
    {
      icon: "🚚",
      en: "FREE Delivery ₹499+",
      bn: "বিনামূল্যে ডেলিভারি ₹৪৯৯+",
      sub_en: "On all orders above ₹499",
      sub_bn: "₹৪৯৯-এর উপরে সব অর্ডারে",
    },
    {
      icon: "📦",
      en: "Easy 7-Day Returns",
      bn: "সহজ ৭ দিনের রিটার্ন",
      sub_en: "Hassle-free returns",
      sub_bn: "ঝামেলামুক্ত রিটার্ন",
    },
    {
      icon: "🏷️",
      en: "Exclusive Flash Deals",
      bn: "ফ্ল্যাশ ডিল",
      sub_en: "Up to 50% off daily",
      sub_bn: "দৈনিক ৫০% পর্যন্ত ছাড়",
    },
    {
      icon: "📚",
      en: "10,000+ Titles",
      bn: "১০,০০০+ বই",
      sub_en: "Vast collection curated for you",
      sub_bn: "আপনার জন্য বিশাল সংগ্রহ",
    },
  ];

  return (
    <div
      ref={ref}
      className="border-b border-border"
      data-ocid="perks_strip"
      style={{ background: "oklch(var(--background))" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.en}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl p-4 shadow-subtle"
              style={{
                background: "oklch(var(--card))",
                border: "1px solid oklch(var(--border))",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  background: "oklch(var(--accent) / 0.12)",
                  border: "1.5px solid oklch(var(--accent) / 0.25)",
                }}
              >
                {perk.icon}
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-bold leading-tight"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  {lang === "bn" ? perk.bn : perk.en}
                </p>
                <p
                  className="text-[10px] leading-tight mt-0.5"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {lang === "bn" ? perk.sub_bn : perk.sub_en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  title,
  subtitle,
  viewAllTo,
  viewAllLabel,
  icon,
  ocid,
}: {
  title: string;
  subtitle?: string;
  viewAllTo: string;
  viewAllLabel: string;
  icon?: string;
  ocid: string;
}) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        <div className="flex items-center gap-2 mb-1">
          {icon && <span className="text-xl">{icon}</span>}
          <h2
            className="font-display font-black text-xl md:text-2xl"
            style={{
              color: "oklch(var(--foreground))",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <p
            className="text-[11px] uppercase tracking-widest"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            {subtitle}
          </p>
        )}
        {/* Orange underline accent */}
        <div
          className="mt-2 h-0.5 w-12 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--accent) / 0.2))",
          }}
        />
      </div>
      <Link
        to="/shop"
        search={viewAllTo !== "/shop" ? undefined : undefined}
        data-ocid={`${ocid}.view_all_link`}
        className="text-xs font-bold uppercase tracking-wider transition-colors-fast flex items-center gap-1"
        style={{ color: "oklch(var(--accent))" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.7";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
        }}
      >
        {viewAllLabel}
        <span>→</span>
      </Link>
    </div>
  );
}

// ─── Flash Sale Products ──────────────────────────────────────────────────────

function FlashSaleProductsSection({
  sale,
  products,
}: {
  sale: FlashSaleView;
  products: ProductView[];
}) {
  const { lang, t } = useLanguage();
  const { h, m, s, expired } = useCountdown(sale.endTime);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  if (expired || sale.items.length === 0) return null;

  const title = lang === "bn" ? sale.titleBn : sale.titleEn;
  const saleMap = new Map<bigint, FlashSaleItem>(
    sale.items.map((it) => [it.productId, it]),
  );
  const saleProducts = products.filter((p) => saleMap.has(p.id)).slice(0, 8);
  if (saleProducts.length === 0) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      data-ocid="flash_sale.products_section"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.52 0.26 38 / 0.08), oklch(0.58 0.25 50 / 0.05))",
      }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, oklch(var(--accent)), oklch(var(--accent)) 1px, transparent 1px, transparent 8px)",
        }}
      />

      <div className="max-w-screen-xl mx-auto px-4 py-6 relative">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{
                background: "oklch(var(--accent))",
                boxShadow: "0 4px 16px oklch(var(--accent) / 0.4)",
              }}
            >
              ⚡
            </div>
            <div>
              <h2
                className="font-display font-black text-xl md:text-2xl leading-tight"
                style={{
                  color: "oklch(var(--foreground))",
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h2>
              <p
                className="text-[11px] uppercase tracking-widest"
                style={{ color: "oklch(var(--accent))" }}
              >
                {t("flashSale")}
              </p>
            </div>
            {/* Inline countdown */}
            <div
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-display font-black tabular-nums ml-2"
              style={{
                background: "oklch(var(--accent) / 0.1)",
                border: "1px solid oklch(var(--accent) / 0.3)",
                color: "oklch(var(--accent))",
              }}
            >
              <span
                style={{
                  color: "oklch(var(--muted-foreground))",
                  fontSize: "10px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                }}
              >
                {t("endsIn")}
              </span>
              {pad(h)}:{pad(m)}:{pad(s)}
            </div>
          </div>
          <Link
            to="/flash-sales"
            data-ocid="flash_sale.view_all_link"
            className="text-xs font-bold uppercase tracking-wider transition-smooth flex items-center gap-1"
            style={{ color: "oklch(var(--accent))" }}
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
          {saleProducts.map((product, i) => {
            const item = saleMap.get(product.id)!;
            return (
              <motion.div
                key={product.id.toString()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <ProductCard
                  product={product}
                  flashDiscountPercent={item.discountPercent}
                  flashDiscountedPrice={item.discountedPriceInPaisa}
                  index={i}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Generic Products Grid Section ───────────────────────────────────────────

function ProductsSection({
  title,
  subtitle,
  icon,
  products,
  isLoading,
  ocid,
  bg = "bg-background",
}: {
  title: string;
  subtitle?: string;
  icon?: string;
  products: ProductView[] | undefined;
  isLoading: boolean;
  ocid: string;
  bg?: string;
}) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className={`${bg} relative`}
      data-ocid={ocid}
      style={{ borderBottom: "1px solid oklch(var(--border))" }}
    >
      {/* Section divider gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.15), transparent)",
        }}
      />

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          icon={icon}
          viewAllTo="/shop"
          viewAllLabel={`${t("viewAll")} →`}
          ocid={ocid}
        />

        {isLoading ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {(["a", "b", "c", "d", "e", "f", "g", "h"] as const).map((k) => (
              <ProductCardSkeleton key={`sk-${k}`} />
            ))}
          </div>
        ) : !products || products.length === 0 ? (
          <div className="py-12 text-center" data-ocid={`${ocid}.empty_state`}>
            <span className="text-5xl block mb-3">📚</span>
            <p
              className="font-body"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              {t("noProducts")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {products.map((p, i) => (
              <motion.div
                key={p.id.toString()}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.3) }}
              >
                <ProductCard product={p} index={i} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Recently Viewed ──────────────────────────────────────────────────────────

function RecentlyViewedSection() {
  const { t } = useLanguage();
  const { data: products, isLoading } = useGetRecentlyViewed();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
  }, [checkScroll]);

  if (!isLoading && (!products || products.length === 0)) return null;

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };

  return (
    <section
      className="border-b border-border"
      data-ocid="recently_viewed.section"
      style={{ background: "oklch(var(--muted) / 0.25)" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <SectionHeader
          title={t("recentlyViewed")}
          icon="🕐"
          viewAllTo="/shop"
          viewAllLabel={`${t("viewAll")} →`}
          ocid="recently_viewed"
        />

        <div className="relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-card transition-smooth"
              style={{
                background: "oklch(var(--card))",
                border: "1px solid oklch(var(--border))",
              }}
            >
              ‹
            </button>
          )}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-card transition-smooth"
              style={{
                background: "oklch(var(--card))",
                border: "1px solid oklch(var(--border))",
              }}
            >
              ›
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {isLoading
              ? (["a", "b", "c", "d", "e", "f"] as const).map((k) => (
                  <div
                    key={`rvsk-${k}`}
                    className="flex-shrink-0 w-28"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <ProductCardSkeleton />
                  </div>
                ))
              : (products ?? []).map((p, i) => (
                  <div
                    key={p.id.toString()}
                    className="flex-shrink-0 w-28"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <ProductCard product={p} index={i} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Store Info Banner ────────────────────────────────────────────────────────

function StoreInfoBanner() {
  const { lang } = useLanguage();
  return (
    <div
      className="border-b border-border"
      data-ocid="store_info.section"
      style={{ background: "oklch(var(--background))" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.08 255), oklch(0.16 0.09 255))",
            border: "1px solid oklch(1 0 0 / 0.08)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right center, oklch(0.55 0.25 38 / 0.08), transparent 70%)",
            }}
          />

          <div className="flex items-start gap-4 relative">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background: "oklch(var(--accent) / 0.15)",
                border: "1.5px solid oklch(var(--accent) / 0.3)",
              }}
            >
              📍
            </div>
            <div>
              <h3
                className="font-display font-black text-base mb-1"
                style={{ color: "oklch(0.97 0 0)" }}
              >
                {lang === "bn" ? "আমাদের দোকান" : "Visit Our Store"}
              </h3>
              <p
                className="text-sm"
                style={{ color: "oklch(0.97 0 0 / 0.65)" }}
              >
                {lang === "bn"
                  ? "বলগোনা, জিটি রোড, পূর্ব বর্ধমান, পিন-৭১৩১২৫"
                  : "Balgona, GT Road, Purba Bardhaman, pin-713125"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 relative">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                }}
              >
                📞
              </div>
              <div>
                <p
                  className="text-[10px] uppercase tracking-widest"
                  style={{ color: "oklch(0.97 0 0 / 0.4)" }}
                >
                  {lang === "bn" ? "ফোন" : "Call Us"}
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ color: "oklch(0.97 0 0 / 0.85)" }}
                >
                  +91-9475727810
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                }}
              >
                🕐
              </div>
              <div>
                <p
                  className="text-[10px] uppercase tracking-widest"
                  style={{ color: "oklch(0.97 0 0 / 0.4)" }}
                >
                  {lang === "bn" ? "খোলার সময়" : "Store Hours"}
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ color: "oklch(0.97 0 0 / 0.85)" }}
                >
                  {lang === "bn" ? "সোম–শনি: সকাল ৯–রাত ৯টা" : "Mon–Sat: 9AM–9PM"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HomePage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { lang } = useLanguage();

  const { data: featuredProducts, isLoading: loadingFeatured } =
    useListProducts(
      { inStockOnly: false },
      { field: SortField.rating, order: SortOrder.desc },
      BigInt(0),
      BigInt(16),
    );

  const { data: newArrivals, isLoading: loadingNew } = useListProducts(
    { inStockOnly: false },
    { field: SortField.publicationDate, order: SortOrder.desc },
    BigInt(0),
    BigInt(16),
  );

  const { data: bengaliBooks, isLoading: loadingBengali } = useListProducts(
    { inStockOnly: false, language: Language.bengali },
    { field: SortField.rating, order: SortOrder.desc },
    BigInt(0),
    BigInt(16),
  );

  const { data: flashSales } = useListFlashSales(false);
  const activeSale =
    flashSales?.find((s) => s.isCurrentlyActive) ?? flashSales?.[0] ?? null;

  const { data: allProducts } = useListProducts(
    { inStockOnly: false },
    null,
    BigInt(0),
    BigInt(100),
  );

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      data-ocid="home.page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Flash Sale Banner */}
      {activeSale && <FlashSaleBanner sale={activeSale} />}

      {/* Hero */}
      <HeroSection />

      {/* Category pills */}
      <CategoryNav />

      {/* Perks cards */}
      <PerksStrip />

      {/* Flash Sale grid */}
      {activeSale && allProducts && (
        <FlashSaleProductsSection sale={activeSale} products={allProducts} />
      )}

      {/* Featured / Top Rated */}
      <ProductsSection
        title={lang === "bn" ? "বিশেষ নির্বাচন" : "Featured Books"}
        subtitle={lang === "bn" ? "সেরা রেটিং" : "Top Rated"}
        icon="⭐"
        products={featuredProducts}
        isLoading={loadingFeatured}
        ocid="featured_products"
        bg="bg-background"
      />

      {/* Section separator gradient */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.12), transparent)",
        }}
      />

      {/* New Arrivals */}
      <ProductsSection
        title={lang === "bn" ? "নতুন আগমন" : "New Arrivals"}
        subtitle={lang === "bn" ? "সর্বশেষ প্রকাশিত" : "Just Added"}
        icon="✨"
        products={newArrivals}
        isLoading={loadingNew}
        ocid="new_arrivals"
        bg="bg-muted/20"
      />

      {/* Bengali Books */}
      <ProductsSection
        title={lang === "bn" ? "বাংলা বই" : "Bengali Books"}
        subtitle={lang === "bn" ? "মাতৃভাষায় পড়ুন" : "Read in Your Mother Tongue"}
        icon="🪔"
        products={bengaliBooks}
        isLoading={loadingBengali}
        ocid="bengali_books"
        bg="bg-background"
      />

      {/* Recently Viewed */}
      <RecentlyViewedSection />

      {/* Store Info */}
      <StoreInfoBanner />
    </motion.div>
  );
}
