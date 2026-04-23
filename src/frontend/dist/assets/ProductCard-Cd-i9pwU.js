import { g as createLucideIcon, u as useLanguage, v as useCart, r as reactExports, w as useGetWishlist, j as jsxRuntimeExports, H as Heart, e as Link, x as formatPrice, y as ShoppingCart } from "./index-I7mPq6na.js";
import { S as StarRating } from "./StarRating-BjhgqPbz.js";
import { Z as Zap } from "./zap-DeV4gcem.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
function ProductCard({
  product,
  onWishlistToggle,
  isWishlisted: isWishlistedProp,
  flashDiscountPercent,
  flashDiscountedPrice,
  index = 0
}) {
  const { lang, t } = useLanguage();
  const { addItem, isInCart } = useCart();
  const [addingToCart, setAddingToCart] = reactExports.useState(false);
  const { data: wishlistIds } = useGetWishlist();
  const isWishlisted = isWishlistedProp !== void 0 ? isWishlistedProp : (wishlistIds == null ? void 0 : wishlistIds.some((id) => id === product.id)) ?? false;
  const inCart = isInCart(product.id);
  const title = lang === "bn" && product.info.titleBn ? product.info.titleBn : product.info.titleEn;
  const author = lang === "bn" && product.info.authorBn ? product.info.authorBn : product.info.authorEn;
  const displayPrice = flashDiscountedPrice ?? product.priceInPaisa;
  const isOutOfStock = product.stockCount === BigInt(0);
  const itemIndex = index + 1;
  const handleAddToCart = () => {
    if (isOutOfStock || inCart || addingToCart) return;
    setAddingToCart(true);
    addItem({
      productId: product.id,
      titleEn: product.info.titleEn,
      titleBn: product.info.titleBn,
      priceInPaisa: displayPrice,
      quantity: 1,
      coverImageUrl: product.coverImageUrl
    });
    setTimeout(() => setAddingToCart(false), 600);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "card-dense flex flex-col group relative",
      "data-ocid": `product.item.${itemIndex}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 z-10 flex flex-col gap-1.5", children: [
          flashDiscountPercent && flashDiscountPercent > BigInt(0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-sale", children: [
            flashDiscountPercent.toString(),
            "% ",
            t("off")
          ] }),
          isOutOfStock && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-full",
              style: {
                background: "oklch(var(--muted))",
                color: "oklch(var(--muted-foreground))"
              },
              children: t("outOfStock")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onWishlistToggle == null ? void 0 : onWishlistToggle(product.id),
            "data-ocid": `product.wishlist.${itemIndex}`,
            "aria-label": isWishlisted ? t("removeFromWishlist") : t("addToWishlist"),
            className: `absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-smooth ${isWishlisted ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
            style: {
              background: isWishlisted ? "oklch(var(--accent) / 0.15)" : "oklch(var(--background) / 0.75)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: `1px solid ${isWishlisted ? "oklch(var(--accent) / 0.4)" : "oklch(var(--border) / 0.6)"}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Heart,
              {
                size: 13,
                className: isWishlisted ? "fill-current" : "",
                style: {
                  color: isWishlisted ? "oklch(var(--accent))" : "oklch(var(--muted-foreground))"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/product/$id",
            params: { id: product.id.toString() },
            "data-ocid": `product.link.${itemIndex}`,
            className: "block",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `aspect-[3/4] overflow-hidden relative ${isOutOfStock ? "opacity-70" : ""}`,
                style: { background: "oklch(var(--primary) / 0.15)" },
                children: [
                  product.coverImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: product.coverImageUrl,
                      alt: title,
                      loading: "lazy",
                      className: `w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isOutOfStock ? "grayscale" : ""}`
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "📚" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute bottom-0 left-0 right-0 h-12 pointer-events-none",
                      style: {
                        background: "linear-gradient(to top, oklch(var(--card) / 0.6), transparent)"
                      }
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-1.5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: product.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-xs font-semibold line-clamp-2 leading-snug transition-colors-fast",
              style: { color: "oklch(var(--card-foreground))" },
              onMouseEnter: (e) => {
                e.currentTarget.style.color = "oklch(var(--accent))";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.color = "oklch(var(--card-foreground))";
              },
              children: title
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs italic truncate",
              style: { color: "oklch(var(--muted-foreground))", fontSize: "11px" },
              children: author
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StarRating,
            {
              rating: product.averageRating,
              count: Number(product.reviewCount),
              showValue: product.reviewCount > BigInt(0)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-mono font-bold text-sm",
                style: {
                  color: "oklch(var(--foreground))",
                  fontFamily: "var(--font-mono)"
                },
                children: formatPrice(displayPrice)
              }
            ),
            flashDiscountedPrice && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs line-through",
                style: { color: "oklch(var(--muted-foreground))" },
                children: formatPrice(product.priceInPaisa)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-xs font-medium",
              style: { color: "oklch(0.65 0.18 150)", fontSize: "11px" },
              children: [
                "✓ ",
                t("free"),
                " ",
                t("delivery")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleAddToCart,
              disabled: isOutOfStock || addingToCart,
              "data-ocid": inCart ? `product.incart.${itemIndex}` : `product.add_button.${itemIndex}`,
              className: `w-full mt-1 py-2 px-3 rounded-lg text-xs font-semibold transition-smooth flex items-center justify-center gap-1.5 ${isOutOfStock ? "cursor-not-allowed" : inCart ? "cursor-default" : "active:scale-[0.98]"}`,
              style: inCart ? {
                background: "oklch(var(--muted))",
                border: "1px solid oklch(var(--border))",
                color: "oklch(var(--muted-foreground))"
              } : isOutOfStock ? {
                background: "oklch(var(--muted))",
                border: "1px solid oklch(var(--border))",
                color: "oklch(var(--muted-foreground))",
                opacity: 0.6
              } : {
                background: "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                color: "oklch(var(--accent-foreground))",
                boxShadow: "0 2px 8px oklch(var(--accent) / 0.3)",
                border: "none"
              },
              children: addingToCart ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 11, className: "animate-spin" }) : inCart ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 11 }),
                t("inCart")
              ] }) : isOutOfStock ? t("outOfStock") : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 11 }),
                t("addToCart")
              ] })
            }
          )
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
