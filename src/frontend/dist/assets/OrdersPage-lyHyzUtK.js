import { u as useLanguage, A as useAuth, a4 as useListMyOrders, j as jsxRuntimeExports, a3 as LogIn, B as Button, e as Link, x as formatPrice } from "./index-C7rxycPz.js";
import { S as Skeleton } from "./skeleton-DNOiY00N.js";
import { P as Package } from "./package-CHoBCR-o.js";
import { m as motion } from "./proxy-CmsuwCUl.js";
import { S as ShoppingBag } from "./shopping-bag-BlrClNon.js";
import { C as Clock } from "./clock-DXPahB6t.js";
import { B as BookOpen } from "./book-open-lYScRFrB.js";
import { C as ChevronRight } from "./chevron-right-lCaA2nHO.js";
const STATUS_CONFIG = {
  processing: {
    label: "Processing",
    labelBn: "প্রক্রিয়া চলছে",
    className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    dotClass: "bg-amber-500"
  },
  shipped: {
    label: "Shipped",
    labelBn: "পাঠানো হয়েছে",
    className: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/40",
    dotClass: "bg-blue-500"
  },
  delivered: {
    label: "Delivered",
    labelBn: "পৌঁছে গেছে",
    className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
    dotClass: "bg-emerald-500"
  },
  cancelled: {
    label: "Cancelled",
    labelBn: "বাতিল",
    className: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/40",
    dotClass: "bg-red-500"
  },
  refundRequested: {
    label: "Refund Requested",
    labelBn: "ফেরত চাওয়া হয়েছে",
    className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    dotClass: "bg-amber-500"
  },
  refunded: {
    label: "Refunded",
    labelBn: "ফেরত দেওয়া হয়েছে",
    className: "bg-muted text-muted-foreground border-border",
    dotClass: "bg-muted-foreground"
  }
};
function OrderCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevation p-0 overflow-hidden animate-pulse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 bg-muted/30 border-b border-border flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-16 rounded-md" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-20" })
    ] })
  ] });
}
function OrdersPage() {
  const { lang, t } = useLanguage();
  const { isAuthenticated, login } = useAuth();
  const { data: orders, isLoading } = useListMyOrders();
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-lg mx-auto px-4 py-24 flex flex-col items-center gap-6 text-center",
        "data-ocid": "orders.login_required",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 52, className: "text-accent opacity-80" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 16, className: "text-accent-foreground" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: t("myOrders") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs leading-relaxed", children: t("signInDesc") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: login,
              "data-ocid": "orders.login_button",
              className: "cta-primary text-sm px-8 py-2.5 h-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 15, className: "mr-2" }),
                t("login")
              ]
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 min-h-screen", "data-ocid": "orders.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-6 sm:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "mb-7 flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 20, className: "text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground tracking-tight", children: t("orderHistory") }),
            orders && orders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              orders.length,
              " ",
              orders.length === 1 ? lang === "bn" ? "টি অর্ডার" : "order" : lang === "bn" ? "টি অর্ডার" : "orders"
            ] })
          ] })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "orders.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCardSkeleton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCardSkeleton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCardSkeleton, {})
    ] }) : !orders || orders.length === 0 ? (
      /* Empty state */
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          animate: { opacity: 1, scale: 1 },
          className: "card-elevation flex flex-col items-center py-20 gap-6 text-center",
          "data-ocid": "orders.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 80 80",
                  className: "w-16 h-16",
                  fill: "none",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "10",
                        y: "20",
                        width: "60",
                        height: "48",
                        rx: "6",
                        fill: "currentColor",
                        className: "text-muted-foreground/10"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "10",
                        y: "20",
                        width: "60",
                        height: "48",
                        rx: "6",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        className: "text-muted-foreground/30"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M26 44l8 8 20-20",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "text-accent/60"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "24",
                        y: "12",
                        width: "32",
                        height: "12",
                        rx: "4",
                        fill: "currentColor",
                        className: "text-accent/20"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "24",
                        y: "12",
                        width: "32",
                        height: "12",
                        rx: "4",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        className: "text-accent/40"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 text-2xl", children: "📦" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground", children: lang === "bn" ? "এখনো কোনো অর্ডার নেই" : "No orders yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: lang === "bn" ? "কেনাকাটা শুরু করুন — আপনার অর্ডার এখানে দেখাবে" : "Start shopping and your orders will appear here" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/shop",
                "data-ocid": "orders.shop_link",
                className: "cta-primary inline-flex items-center gap-2 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 15 }),
                  t("shopNow")
                ]
              }
            )
          ]
        }
      )
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [...orders].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)).map((order, idx) => {
      const cfg = STATUS_CONFIG[order.status] ?? STATUS_CONFIG.processing;
      const orderDate = new Date(Number(order.createdAt) / 1e6);
      const previewItems = order.items.slice(0, 3);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.06, duration: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/orders/$id",
              params: { id: order.id.toString() },
              "data-ocid": `orders.item.${idx + 1}`,
              className: "block card-elevation hover:shadow-elevated group overflow-hidden no-underline",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-muted/40 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-muted-foreground shrink-0", children: [
                      "#",
                      order.id.toString()
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cfg.className}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: `w-1.5 h-1.5 rounded-full ${cfg.dotClass} shrink-0`
                            }
                          ),
                          lang === "bn" ? cfg.labelBn : cfg.label
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 ml-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                    orderDate.toLocaleDateString(
                      lang === "bn" ? "bn-IN" : "en-IN",
                      { day: "numeric", month: "short", year: "numeric" }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
                    previewItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-11 h-15 rounded-md bg-primary/10 border border-border overflow-hidden flex items-center justify-center text-lg shadow-subtle",
                        style: { height: "56px" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-accent/60" })
                      },
                      item.productId.toString()
                    )),
                    order.items.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "w-11 rounded-md bg-muted border border-border flex items-center justify-center text-xs font-bold text-muted-foreground",
                        style: { height: "56px" },
                        children: [
                          "+",
                          order.items.length - 3
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground line-clamp-1 leading-snug", children: [
                      previewItems.map((i) => i.titleEn).join(", "),
                      order.items.length > 3 && ` +${order.items.length - 3} more`
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                      order.items.length,
                      " ",
                      lang === "bn" ? "টি বই" : order.items.length === 1 ? "item" : "items"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold font-mono text-accent", children: formatPrice(order.totalInPaisa) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        size: 18,
                        className: "text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200"
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        },
        order.id.toString()
      );
    }) })
  ] }) });
}
export {
  OrdersPage as default
};
