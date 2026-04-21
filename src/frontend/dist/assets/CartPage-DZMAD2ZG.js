import { g as createLucideIcon, u as useLanguage, A as useAuth, Y as useGetCart, Z as useValidatePromoCode, _ as useRemoveFromCart, $ as useUpdateCartQuantity, v as useCart, r as reactExports, j as jsxRuntimeExports, a0 as LoadingSpinner, y as ShoppingCart, e as Link, x as formatPrice, s as Badge, I as Input, B as Button, a1 as CircleAlert, N as ue } from "./index-C9v7o2pq.js";
import { S as Separator } from "./separator-Bz5g1rpr.js";
import { S as Skeleton } from "./skeleton-DMjBI5LY.js";
import { F as FREE_DELIVERY_THRESHOLD_PAISA, T as Tag, G as GST_RATE, D as DELIVERY_CHARGE_PAISA } from "./constants-Ds4QbOZU.js";
import { A as AnimatePresence } from "./index-4rPfg9iY.js";
import { m as motion } from "./proxy-CCMNxRHr.js";
import { M as Minus } from "./minus-BfFEM6iu.js";
import { P as Plus } from "./plus-Dyw1bWJy.js";
import { T as Trash2 } from "./trash-2-BdjdTX31.js";
import { T as Truck } from "./truck-BzY9F9Yt.js";
import { S as Sparkles } from "./sparkles-BnfLUQwx.js";
import { L as Lock } from "./lock-CDC1fKCc.js";
import { P as Package } from "./package-B7w2pmId.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const PROMO_ERROR_MESSAGES = {
  expired: { en: "Promo code has expired", bn: "প্রমো কোডের মেয়াদ শেষ হয়ে গেছে" },
  minSpend: {
    en: "Minimum order value not met",
    bn: "ন্যূনতম অর্ডার মূল্য পূরণ হয়নি"
  },
  ineligible: {
    en: "Code not valid for these items",
    bn: "এই পণ্যগুলির জন্য কোড প্রযোজ্য নয়"
  },
  notFound: { en: "Invalid promo code", bn: "অবৈধ প্রমো কোড" }
};
const TRUST_BADGES = [
  {
    icon: Lock,
    en: "100% Secure Payments",
    bn: "১০০% নিরাপদ পেমেন্ট",
    color: "text-emerald-500"
  },
  {
    icon: RotateCcw,
    en: "Easy Returns",
    bn: "সহজ রিটার্ন",
    color: "text-blue-400"
  },
  {
    icon: Package,
    en: "Authentic Products",
    bn: "আসল পণ্য নিশ্চিত",
    color: "text-accent"
  }
];
function CartItemSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-28 rounded-md shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4 rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/4 rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-28 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-20 rounded-full" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-20 rounded shrink-0" })
  ] });
}
function EmptyCartState() {
  const { t, lang } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "flex flex-col items-center gap-6 py-24 px-4",
      "data-ocid": "cart.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 h-36 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              viewBox: "0 0 80 80",
              className: "w-20 h-20",
              fill: "none",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: "12",
                    y: "28",
                    width: "56",
                    height: "42",
                    rx: "8",
                    fill: "oklch(var(--accent)/0.15)",
                    stroke: "oklch(var(--accent)/0.4)",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M28 28V22a12 12 0 0 1 24 0v6",
                    stroke: "oklch(var(--accent)/0.5)",
                    strokeWidth: "2.5",
                    strokeLinecap: "round"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M32 44h16M40 38v12",
                    stroke: "oklch(var(--accent)/0.6)",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-foreground text-sm font-bold font-mono", children: "0" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2 max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: t("emptyCart") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: lang === "bn" ? "আপনি এখনও কোনো বই যোগ করেননি।" : "Your cart is waiting for its first book." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/shop",
            "data-ocid": "cart.shop_link",
            className: "cta-primary inline-flex items-center gap-2.5 px-8 py-3 text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16 }),
              lang === "bn" ? "কেনাকাটা শুরু করুন" : "Start Shopping",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60", children: lang === "bn" ? "হাজারো বই আপনার জন্য অপেক্ষা করছে" : "Thousands of books waiting for you" })
      ]
    }
  );
}
function LoginRequiredState() {
  const { t, lang } = useLanguage();
  const { login } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "flex flex-col items-center gap-6 py-24 px-4",
      "data-ocid": "cart.login_required",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 h-36 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 52, className: "text-primary/60" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: t("cart") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("signInDesc") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            onClick: login,
            "data-ocid": "cart.login_button",
            className: "cta-primary px-10 py-3 h-auto font-bold",
            children: lang === "bn" ? "সাইন ইন করুন" : t("signIn")
          }
        )
      ]
    }
  );
}
function CartPage() {
  const { t, lang } = useLanguage();
  const { isAuthenticated, isInitializing } = useAuth();
  const { data: backendCart, isLoading: cartLoading } = useGetCart();
  const validatePromoMut = useValidatePromoCode();
  const removeFromCartMut = useRemoveFromCart();
  const updateCartQtyMut = useUpdateCartQuantity();
  const {
    items: localItems,
    addItem: addLocal,
    removeItem: removeLocal,
    updateQuantity: updateLocal,
    totalItems
  } = useCart();
  reactExports.useEffect(() => {
    if (!backendCart || backendCart.length === 0) return;
    for (const backendItem of backendCart) {
      addLocal({
        productId: backendItem.productId,
        quantity: Number(backendItem.quantity),
        priceInPaisa: backendItem.priceSnapshotInPaisa,
        titleEn: `Book #${backendItem.productId}`,
        titleBn: "",
        coverImageUrl: ""
      });
    }
  }, [backendCart]);
  const [promoCode, setPromoCode] = reactExports.useState("");
  const [promoApplied, setPromoApplied] = reactExports.useState("");
  const [promoDiscount, setPromoDiscount] = reactExports.useState(0);
  const [promoError, setPromoError] = reactExports.useState(null);
  if (isInitializing) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { fullPage: true, text: t("loading") });
  if (!isAuthenticated) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginRequiredState, {});
  if (cartLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-52 rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemSkeleton, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemSkeleton, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemSkeleton, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80 rounded-xl" })
      ] })
    ] });
  }
  const items = localItems;
  const subtotalPaisa = items.reduce(
    (sum, i) => sum + Number(i.priceInPaisa) * i.quantity,
    0
  );
  const subtotal = subtotalPaisa / 100;
  const gst = subtotal * GST_RATE;
  const deliveryFree = subtotalPaisa >= Number(FREE_DELIVERY_THRESHOLD_PAISA);
  const delivery = deliveryFree ? 0 : Number(DELIVERY_CHARGE_PAISA) / 100;
  const discountAmount = promoApplied ? Math.round(subtotalPaisa * promoDiscount / 100) / 100 : 0;
  const grandTotal = subtotal + gst + delivery - discountAmount;
  const amountToFreeDelivery = FREE_DELIVERY_THRESHOLD_PAISA - BigInt(Math.round(subtotalPaisa));
  if (items.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyCartState, {});
  const handleRemove = (productId) => {
    removeLocal(productId);
    removeFromCartMut.mutate(productId);
    ue.success(lang === "bn" ? "কার্ট থেকে সরানো হয়েছে" : "Removed from cart");
  };
  const handleQtyDecrease = (productId, qty) => {
    if (qty <= 1) {
      removeLocal(productId);
      removeFromCartMut.mutate(productId);
    } else {
      updateLocal(productId, qty - 1);
      updateCartQtyMut.mutate({ productId, quantity: BigInt(qty - 1) });
    }
  };
  const handleQtyIncrease = (productId, qty, maxStock) => {
    updateLocal(productId, qty + 1);
    updateCartQtyMut.mutate({ productId, quantity: BigInt(qty + 1) });
  };
  const handleApplyPromo = () => {
    if (!promoCode.trim()) return;
    setPromoError(null);
    validatePromoMut.mutate(promoCode.trim().toUpperCase(), {
      onSuccess: (promo) => {
        if (promo) {
          setPromoDiscount(Number(promo.discountPercent));
          setPromoApplied(promoCode.trim().toUpperCase());
          ue.success(
            `${lang === "bn" ? "প্রমো প্রয়োগ হয়েছে!" : "Promo applied!"} ${promo.discountPercent}% ${lang === "bn" ? "ছাড়" : "off"}`
          );
        } else {
          setPromoError("notFound");
        }
      },
      onError: () => setPromoError("notFound")
    });
  };
  const handleRemovePromo = () => {
    setPromoApplied("");
    setPromoDiscount(0);
    setPromoCode("");
    setPromoError(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-6", "data-ocid": "cart.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18, className: "text-accent" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: t("cart") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          totalItems,
          " ",
          lang === "bn" ? "টি আইটেম" : "items in your cart"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-3", "data-ocid": "cart.items_list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            layout: true,
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, x: -40, scale: 0.95 },
            transition: { delay: idx * 0.05 },
            className: "bg-card border border-border rounded-xl p-4 flex gap-4 shadow-subtle hover:shadow-card transition-smooth group",
            "data-ocid": `cart.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/product/$id",
                  params: { id: item.productId.toString() },
                  className: "shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-28 rounded-md overflow-hidden shadow-subtle border border-border/60 bg-muted", children: item.coverImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.coverImageUrl,
                      alt: lang === "bn" && item.titleBn ? item.titleBn : item.titleEn,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                      loading: "lazy"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-3xl bg-primary/10", children: "📚" }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/product/$id",
                    params: { id: item.productId.toString() },
                    className: "text-sm font-display font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 leading-snug",
                    "data-ocid": `cart.item_link.${idx + 1}`,
                    children: lang === "bn" && item.titleBn ? item.titleBn : item.titleEn
                  }
                ),
                lang === "bn" && item.titleBn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-1", children: item.titleEn }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-bold text-accent", children: formatPrice(item.priceInPaisa) }),
                  deliveryFree && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-500/15 text-emerald-500 border-0 text-[10px] px-1.5 py-0 rounded-full font-semibold", children: lang === "bn" ? "বিনামূল্যে ডেলিভারি" : "Free Delivery" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center rounded-full border border-border bg-muted/40 overflow-hidden",
                      "data-ocid": `cart.quantity.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleQtyDecrease(item.productId, item.quantity),
                            "data-ocid": `cart.decrease.${idx + 1}`,
                            className: "w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/15 transition-colors",
                            "aria-label": "Decrease quantity",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 13 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 flex items-center justify-center text-sm font-bold text-foreground", children: item.quantity }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleQtyIncrease(item.productId, item.quantity),
                            "data-ocid": `cart.increase.${idx + 1}`,
                            className: "w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/15 transition-colors",
                            "aria-label": "Increase quantity",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleRemove(item.productId),
                      "data-ocid": `cart.delete_button.${idx + 1}`,
                      className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors px-3 py-2 rounded-full hover:bg-destructive/10",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
                        lang === "bn" ? "সরান" : "Remove"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right flex flex-col items-end gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-base font-bold text-foreground", children: formatPrice(
                  BigInt(
                    Math.round(Number(item.priceInPaisa) * item.quantity)
                  )
                ) }),
                item.quantity > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                  formatPrice(item.priceInPaisa),
                  " × ",
                  item.quantity
                ] })
              ] })
            ]
          },
          item.productId.toString()
        )) }),
        !deliveryFree && amountToFreeDelivery > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            className: "bg-primary/8 border border-primary/20 rounded-xl p-3 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 14, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: lang === "bn" ? `বিনামূল্যে ডেলিভারির জন্য আরও ${formatPrice(amountToFreeDelivery)} কেনাকাটা করুন` : `Add ${formatPrice(amountToFreeDelivery)} more for FREE delivery` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-1 rounded-full bg-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full bg-primary transition-all duration-500",
                    style: {
                      width: `${Math.min(100, subtotalPaisa / Number(FREE_DELIVERY_THRESHOLD_PAISA) * 100)}%`
                    }
                  }
                ) })
              ] })
            ]
          }
        ),
        deliveryFree && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            className: "bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-3 flex items-center gap-2.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-emerald-500 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-emerald-600 dark:text-emerald-400", children: lang === "bn" ? "আপনি বিনামূল্যে ডেলিভারি পাচ্ছেন!" : "You've unlocked FREE delivery!" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl shadow-card overflow-hidden sticky top-4",
          "data-ocid": "cart.summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-5 py-3.5 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ShoppingCart,
                {
                  size: 15,
                  className: "text-primary-foreground/80"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-display font-semibold text-primary-foreground uppercase tracking-wider", children: lang === "bn" ? "অর্ডার সারাংশ" : "Order Summary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-ocid": "cart.promo.section", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 12, className: "text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: t("promoCode") })
                ] }),
                promoApplied ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-emerald-500/10 border border-emerald-500/25 rounded-lg px-3 py-2.5 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: "✓" }),
                    promoApplied,
                    " — ",
                    promoDiscount,
                    "% ",
                    t("off")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleRemovePromo,
                      className: "text-muted-foreground hover:text-destructive transition-colors ml-2 text-base leading-none",
                      "data-ocid": "cart.promo_remove_button",
                      "aria-label": "Remove promo",
                      children: "✕"
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: promoCode,
                        onChange: (e) => {
                          setPromoCode(e.target.value.toUpperCase());
                          setPromoError(null);
                        },
                        placeholder: "VIDYA10",
                        className: "input-field h-9 text-xs flex-1 rounded-lg",
                        "data-ocid": "cart.promo.input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        onClick: handleApplyPromo,
                        disabled: validatePromoMut.isPending || !promoCode.trim(),
                        className: "h-9 px-4 text-xs rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shrink-0",
                        "data-ocid": "cart.promo.submit_button",
                        children: validatePromoMut.isPending ? "…" : t("apply")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: promoError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.p,
                    {
                      initial: { opacity: 0, y: -4 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -4 },
                      className: "text-xs text-destructive flex items-center gap-1.5",
                      "data-ocid": "cart.promo.error_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 11 }),
                        PROMO_ERROR_MESSAGES[promoError][lang]
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                [
                  {
                    label: `${t("subtotal")} (${totalItems} ${lang === "bn" ? "টি" : "items"})`,
                    value: `₹${subtotal.toFixed(2)}`,
                    muted: true
                  },
                  {
                    label: lang === "bn" ? "জিএসটি (১৮%)" : "GST (18%)",
                    value: `₹${gst.toFixed(2)}`,
                    muted: true
                  },
                  {
                    label: t("delivery"),
                    value: deliveryFree ? lang === "bn" ? "বিনামূল্যে" : "FREE" : `₹${delivery.toFixed(2)}`,
                    free: deliveryFree,
                    muted: !deliveryFree
                  }
                ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between items-center text-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: row.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: row.free ? "text-emerald-500 font-semibold" : row.muted ? "font-medium text-foreground" : "font-medium text-foreground",
                          children: row.value
                        }
                      )
                    ]
                  },
                  row.label
                )),
                promoApplied && discountAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-emerald-600 dark:text-emerald-400 font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "bn" ? "প্রমো ছাড়" : "Promo discount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "−₹",
                    discountAmount.toFixed(2)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: t("total") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-2xl font-bold text-accent", children: [
                  "₹",
                  grandTotal.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground/70 -mt-1", children: lang === "bn" ? "সমস্ত ট্যাক্স অন্তর্ভুক্ত" : "All taxes included" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/checkout",
                  "data-ocid": "cart.checkout_button",
                  className: "cta-primary flex items-center justify-center gap-2 w-full py-3.5 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16 }),
                    t("checkout"),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/shop",
                  "data-ocid": "cart.continue_shopping_link",
                  className: "block text-center text-xs text-accent hover:text-accent/80 transition-colors py-1",
                  children: [
                    "← ",
                    lang === "bn" ? "কেনাকাটা চালিয়ে যান" : "Continue Shopping"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-4 space-y-2", children: TRUST_BADGES.map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(badge.icon, { size: 13, className: badge.color }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: lang === "bn" ? badge.bn : badge.en })
              ] }, badge.en)) })
            ] })
          ]
        }
      ) })
    ] })
  ] }) });
}
export {
  CartPage as default
};
