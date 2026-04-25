import { u as useLanguage, A as useAuth, w as useGetWishlist, K as useRemoveFromWishlist, j as jsxRuntimeExports, a1 as LoadingSpinner, H as Heart, B as Button, e as Link, N as ue, a3 as LogIn, C as useGetProduct, v as useCart, s as Badge, x as formatPrice, y as ShoppingCart } from "./index-Bv-3Ax_9.js";
import { S as Skeleton } from "./skeleton-CWQrScHx.js";
import { m as motion } from "./proxy-ChrsvNNJ.js";
import { S as ShoppingBag } from "./shopping-bag-BO8oeBV1.js";
import { T as Trash2 } from "./trash-2-COTD3qLq.js";
function WishlistCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevation p-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full aspect-[3/4]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full rounded-lg" })
    ] })
  ] });
}
function LoginRequiredState() {
  const { t, lang } = useLanguage();
  const { login } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-7 py-24 px-4 text-center",
      "data-ocid": "wishlist.login_required",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 52, className: "text-accent/70" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 16, className: "text-accent-foreground" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: t("wishlist") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs leading-relaxed", children: t("signInDesc") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            onClick: login,
            "data-ocid": "wishlist.login_button",
            className: "cta-primary h-11 px-8 text-sm",
            children: lang === "bn" ? "সাইন ইন করুন" : t("signIn")
          }
        )
      ]
    }
  );
}
function EmptyWishlistState() {
  const { t, lang } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.97 },
      animate: { opacity: 1, scale: 1 },
      className: "card-elevation flex flex-col items-center py-24 px-6 gap-6 text-center",
      "data-ocid": "wishlist.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              viewBox: "0 0 80 80",
              className: "w-16 h-16",
              fill: "none",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M40 65 C40 65 10 48 10 27 C10 18 17 12 25 12 C31 12 37 16 40 21 C43 16 49 12 55 12 C63 12 70 18 70 27 C70 48 40 65 40 65Z",
                    fill: "currentColor",
                    className: "text-accent/15",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeDasharray: "4 3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "58",
                    cy: "24",
                    r: "4",
                    fill: "currentColor",
                    className: "text-accent/40"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 text-2xl", children: "📚" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: t("emptyWishlist") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs leading-relaxed", children: lang === "bn" ? "আপনার পছন্দের বইগুলো এখানে সংরক্ষণ করুন" : "Save books you love for later — they'll wait here for you" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/shop",
            "data-ocid": "wishlist.shop_link",
            className: "cta-primary inline-flex items-center gap-2 text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 15 }),
              t("shop")
            ]
          }
        )
      ]
    }
  );
}
function WishlistCard({
  productId,
  index,
  onRemove
}) {
  const { lang, t } = useLanguage();
  const { data: product, isLoading } = useGetProduct(productId);
  const { addItem, isInCart } = useCart();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(WishlistCardSkeleton, {});
  if (!product) return null;
  const title = lang === "bn" && product.info.titleBn ? product.info.titleBn : product.info.titleEn;
  const author = lang === "bn" && product.info.authorBn ? product.info.authorBn : product.info.authorEn;
  const inCart = isInCart(product.id);
  const isOutOfStock = product.stockCount === BigInt(0);
  const handleAddToCart = () => {
    if (inCart || isOutOfStock) return;
    addItem({
      productId: product.id,
      titleEn: product.info.titleEn,
      titleBn: product.info.titleBn,
      priceInPaisa: product.priceInPaisa,
      quantity: 1,
      coverImageUrl: product.coverImageUrl
    });
    ue.success(lang === "bn" ? "কার্টে যোগ করা হয়েছে!" : "Added to cart!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05, duration: 0.3 },
      "data-ocid": `wishlist.item.${index + 1}`,
      className: "card-elevation overflow-hidden group flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/product/$id",
            params: { id: product.id.toString() },
            className: "block relative overflow-hidden bg-primary/10",
            style: { aspectRatio: "3/4" },
            "data-ocid": `wishlist.item_link.${index + 1}`,
            children: [
              product.coverImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: product.coverImageUrl,
                  alt: title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-5xl bg-primary/5", children: "📚" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.preventDefault();
                    onRemove(productId);
                  },
                  "data-ocid": `wishlist.remove.${index + 1}`,
                  "aria-label": t("removeFromWishlist"),
                  className: "absolute top-2 right-2 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-subtle",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                }
              ),
              isOutOfStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/60 backdrop-blur-[1px] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-card border border-border text-foreground font-semibold text-xs shadow-card", children: t("outOfStock") }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-2 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/product/$id",
                params: { id: product.id.toString() },
                className: "text-sm font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 leading-snug",
                children: title
              }
            ),
            lang === "bn" && product.info.titleBn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: product.info.titleEn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: author })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold font-mono text-accent", children: formatPrice(product.priceInPaisa) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium", children: lang === "bn" ? "বিনামূল্যে ডেলিভারি" : "Free Delivery" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: handleAddToCart,
              disabled: inCart || isOutOfStock,
              "data-ocid": `wishlist.add_to_cart.${index + 1}`,
              className: `w-full h-9 text-xs font-semibold gap-1.5 rounded-lg ${inCart ? "bg-primary/15 text-foreground border border-primary/40 cursor-default" : isOutOfStock ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60" : "cta-primary"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 13 }),
                inCart ? t("inCart") : isOutOfStock ? t("outOfStock") : t("addToCart")
              ]
            }
          )
        ] })
      ]
    }
  );
}
function WishlistPage() {
  const { t, lang } = useLanguage();
  const { isAuthenticated, isInitializing } = useAuth();
  const { data: wishlist, isLoading } = useGetWishlist();
  const { mutate: removeFromWishlist } = useRemoveFromWishlist();
  if (isInitializing) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { fullPage: true, text: t("loading") });
  if (!isAuthenticated) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginRequiredState, {});
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { fullPage: true, text: t("loading") });
  const handleRemove = (productId) => {
    removeFromWishlist(productId, {
      onSuccess: () => ue.success(
        lang === "bn" ? "উইশলিস্ট থেকে সরানো হয়েছে" : "Removed from wishlist"
      )
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-7xl mx-auto px-4 py-6 sm:py-10",
      "data-ocid": "wishlist.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            className: "flex items-center justify-between mb-7",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 20, className: "text-accent", fill: "currentColor" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground tracking-tight", children: t("wishlist") }),
                  wishlist && wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    wishlist.length,
                    " ",
                    lang === "bn" ? "টি বই সংরক্ষিত" : "books saved"
                  ] })
                ] })
              ] }),
              wishlist && wishlist.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  "data-ocid": "wishlist.browse_shop_button",
                  className: "btn-secondary text-xs h-9 gap-1.5 sm:hidden",
                  asChild: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 13 }),
                    lang === "bn" ? "আরও কিনুন" : "Browse More"
                  ] })
                }
              )
            ]
          }
        ),
        !wishlist || wishlist.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyWishlistState, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", children: wishlist.map((id, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          WishlistCard,
          {
            productId: id,
            index: idx,
            onRemove: handleRemove
          },
          id.toString()
        )) })
      ]
    }
  ) });
}
export {
  WishlistPage as default
};
