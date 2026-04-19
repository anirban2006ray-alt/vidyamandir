import { u as useLanguage, j as jsxRuntimeExports, c as Link, r as reactExports, k as useCart, l as formatPrice, B as Button, m as ShoppingCart, p as ue } from "./index-CokRMBGk.js";
import { S as Skeleton } from "./skeleton-CakSrypX.js";
import { S as StarRating } from "./StarRating-Bo-j8Ysr.js";
import { a as useListFlashSales, e as useGetProduct } from "./useQueries-Blrj1_w6.js";
import { Z as Zap } from "./zap-CLFQgzq6.js";
import { F as Flame } from "./flame-CVvdgiXV.js";
import { C as Clock } from "./clock-BGqFKgVm.js";
import "./star-B8-mjt3_.js";
function DigitBox({ value, label }) {
  const pad = (n) => String(n).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/20 border border-primary-foreground/20 backdrop-blur-sm rounded-xl px-3 py-2 min-w-[52px] shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-2xl sm:text-3xl text-primary-foreground leading-none tabular-nums block text-center", children: pad(value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-primary-foreground/70 font-semibold uppercase tracking-wider", children: label })
  ] });
}
function HeroCountdown({
  endTime,
  title,
  titleBn,
  lang
}) {
  const [timeLeft, setTimeLeft] = reactExports.useState({ d: 0, h: 0, m: 0, s: 0 });
  reactExports.useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, Number(endTime) / 1e6 - Date.now());
      const s = Math.floor(diff / 1e3);
      setTimeLeft({
        d: Math.floor(s / 86400),
        h: Math.floor(s % 86400 / 3600),
        m: Math.floor(s % 3600 / 60),
        s: s % 60
      });
    };
    calc();
    const id = setInterval(calc, 1e3);
    return () => clearInterval(id);
  }, [endTime]);
  const units = [
    { label: lang === "bn" ? "দিন" : "Days", val: timeLeft.d },
    { label: lang === "bn" ? "ঘণ্টা" : "Hrs", val: timeLeft.h },
    { label: lang === "bn" ? "মিনিট" : "Mins", val: timeLeft.m },
    { label: lang === "bn" ? "সেকেন্ড" : "Secs", val: timeLeft.s }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative overflow-hidden rounded-2xl p-6 sm:p-8 mb-8",
      style: {
        background: "linear-gradient(135deg, oklch(0.64 0.23 38), oklch(0.52 0.27 30), oklch(0.45 0.24 250))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20",
            style: {
              background: "radial-gradient(circle, oklch(0.90 0.20 80), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15",
            style: {
              background: "radial-gradient(circle, oklch(0.80 0.15 255), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Flame,
                {
                  size: 20,
                  className: "text-yellow-300 animate-pulse",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/90 text-sm font-semibold uppercase tracking-widest", children: lang === "bn" ? "🔴 এখন চলছে" : "🔴 Live Now" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-primary-foreground leading-tight", children: lang === "bn" ? titleBn : title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm mt-1", children: lang === "bn" ? "সময় শেষ হওয়ার আগেই কিনুন!" : "Hurry — limited time deal!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2", children: units.map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsx(DigitBox, { value: val, label }, label)) })
        ] })
      ]
    }
  );
}
function MiniCountdown({ endTime }) {
  const [timeLeft, setTimeLeft] = reactExports.useState({ h: 0, m: 0, s: 0 });
  reactExports.useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, Number(endTime) / 1e6 - Date.now());
      const s = Math.floor(diff / 1e3);
      setTimeLeft({
        h: Math.floor(s / 3600),
        m: Math.floor(s % 3600 / 60),
        s: s % 60
      });
    };
    calc();
    const id = setInterval(calc, 1e3);
    return () => clearInterval(id);
  }, [endTime]);
  const pad = (n) => String(n).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-accent font-mono font-bold", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9, className: "shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      pad(timeLeft.h),
      ":",
      pad(timeLeft.m),
      ":",
      pad(timeLeft.s)
    ] })
  ] });
}
function FlashSaleItemCard({
  item,
  saleId,
  saleEndTime,
  isActive
}) {
  const { lang, t } = useLanguage();
  const { data: product } = useGetProduct(item.productId);
  const { addItem, isInCart } = useCart();
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden bg-card border border-border shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-full rounded-lg" })
      ] })
    ] });
  }
  const title = lang === "bn" && product.info.titleBn ? product.info.titleBn : product.info.titleEn;
  const inCart = isInCart(product.id);
  const soldPct = item.quantityLimit ? Math.min(100, Number(item.soldCount) / Number(item.quantityLimit) * 100) : 0;
  const isAlmostGone = soldPct > 70;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `card-dense flex flex-col group relative ${!isActive ? "opacity-60 grayscale" : ""}`,
      "data-ocid": `flash.item.${saleId}-${item.productId}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-sale text-[11px] font-bold shadow-elevated", children: [
          item.discountPercent.toString(),
          "% ",
          t("off")
        ] }) }),
        !isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center bg-background/60 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-muted text-muted-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border", children: lang === "bn" ? "সেল শেষ" : "Sale Ended" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: product.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] overflow-hidden bg-muted/30", children: product.coverImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.coverImageUrl,
            alt: title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-400",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-muted to-muted/50", children: "📚" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-2 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: product.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold line-clamp-2 leading-tight hover:text-accent transition-colors", children: title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StarRating,
            {
              rating: product.averageRating,
              count: Number(product.reviewCount)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: formatPrice(item.discountedPriceInPaisa) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground line-through", children: formatPrice(item.originalPriceInPaisa) })
            ] }),
            isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(MiniCountdown, { endTime: saleEndTime })
          ] }),
          item.quantityLimit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-muted rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-1.5 rounded-full transition-all ${isAlmostGone ? "bg-destructive" : "bg-accent"}`,
                style: { width: `${soldPct}%` }
              }
            ) }),
            isAlmostGone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive font-semibold", children: lang === "bn" ? "শেষ হয়ে যাচ্ছে!" : "Almost gone!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: () => {
                if (inCart || !isActive) return;
                addItem({
                  productId: product.id,
                  titleEn: product.info.titleEn,
                  titleBn: product.info.titleBn,
                  priceInPaisa: item.discountedPriceInPaisa,
                  quantity: 1,
                  coverImageUrl: product.coverImageUrl
                });
                ue.success(
                  lang === "bn" ? "কার্টে যোগ করা হয়েছে" : "Added to cart!"
                );
              },
              disabled: inCart || !isActive,
              className: `w-full text-xs rounded-lg font-semibold py-2 transition-smooth ${inCart ? "bg-muted text-muted-foreground" : isActive ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-card" : "bg-muted text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 12, className: "mr-1 inline" }),
                inCart ? t("inCart") : t("addToCart")
              ]
            }
          )
        ] })
      ]
    }
  );
}
function SaleSection({
  sale,
  isFirst
}) {
  const { lang } = useLanguage();
  const isActive = sale.isCurrentlyActive;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-2xl overflow-hidden border ${isActive ? "border-accent/40 shadow-elevated" : "border-border shadow-subtle"}`,
      "data-ocid": `flash.sale.${sale.id}`,
      children: [
        isActive && isFirst ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          HeroCountdown,
          {
            endTime: sale.endTime,
            title: sale.titleEn,
            titleBn: sale.titleBn,
            lang
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `px-5 py-4 flex flex-wrap items-center justify-between gap-3 ${isActive ? "bg-accent" : "bg-muted/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Flame,
                  {
                    size: 18,
                    className: "text-accent-foreground",
                    fill: "currentColor"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "text-muted-foreground/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: `text-base font-bold ${isActive ? "text-accent-foreground" : "text-muted-foreground"}`,
                      children: lang === "bn" ? sale.titleBn : sale.titleEn
                    }
                  ),
                  !isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60", children: lang === "bn" ? "সেল শেষ হয়েছে" : "This sale has ended" })
                ] })
              ] }),
              isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-foreground/20 border border-accent-foreground/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent-foreground animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-accent-foreground font-bold uppercase tracking-wider", children: lang === "bn" ? "চলছে" : "Live" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 ${!isActive ? "bg-muted/10" : "bg-background"}`,
            children: sale.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FlashSaleItemCard,
              {
                item,
                saleId: sale.id,
                saleEndTime: sale.endTime,
                isActive
              },
              item.productId.toString()
            ))
          }
        )
      ]
    }
  );
}
function FlashSalesPage() {
  const { lang, t } = useLanguage();
  const { data: flashSales, isLoading } = useListFlashSales(false);
  const activeSales = (flashSales == null ? void 0 : flashSales.filter((s) => s.isCurrentlyActive)) ?? [];
  const endedSales = (flashSales == null ? void 0 : flashSales.filter((s) => !s.isCurrentlyActive)) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-6", "data-ocid": "flash.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 pb-5 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 20, className: "text-accent", fill: "currentColor" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold uppercase tracking-wide", children: t("flashSales") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: lang === "bn" ? "সীমিত সময়ের অফার — দ্রুত কিনুন!" : "Limited time deals — grab them fast!" })
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", "data-ocid": "flash.loading_state", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl overflow-hidden border border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 grid grid-cols-2 sm:grid-cols-4 gap-3", children: [1, 2, 3, 4].map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-full rounded-lg" })
            ] })
          ] }, j)) })
        ]
      },
      i
    )) }) : !flashSales || flashSales.length === 0 ? (
      /* Empty state */
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "card-elevation flex flex-col items-center py-24 gap-6",
          "data-ocid": "flash.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 40, className: "text-accent/50", fill: "currentColor" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-sm space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold", children: lang === "bn" ? "কোনো সেল সক্রিয় নেই" : "No Active Flash Sales" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: lang === "bn" ? "শীঘ্রই আবার দেখুন — দারুণ ডিল আসছে!" : "Check back soon for exciting limited-time deals!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "flash.shop_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "cta-primary flex items-center gap-2 px-6 py-3",
                children: [
                  "📚 ",
                  t("shop")
                ]
              }
            ) })
          ]
        }
      )
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      activeSales.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: activeSales.map((sale, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SaleSection,
        {
          sale,
          isFirst: idx === 0
        },
        sale.id.toString()
      )) }),
      endedSales.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "text-muted-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-widest", children: lang === "bn" ? "শেষ হওয়া সেল" : "Ended Sales" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
        ] }),
        endedSales.map((sale) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SaleSection,
          {
            sale,
            isFirst: false
          },
          sale.id.toString()
        ))
      ] })
    ] })
  ] });
}
export {
  FlashSalesPage as default
};
