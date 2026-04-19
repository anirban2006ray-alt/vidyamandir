import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Heart, Loader2, ShoppingCart, Zap } from "lucide-react";
import { useState } from "react";
import type { ProductView } from "../backend.d.ts";
import { useCart } from "../hooks/use-cart";
import { useLanguage } from "../hooks/use-language";
import { useGetWishlist } from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: ProductView;
  onWishlistToggle?: (productId: bigint) => void;
  isWishlisted?: boolean;
  flashDiscountPercent?: bigint;
  flashDiscountedPrice?: bigint;
  index?: number;
}

export function ProductCard({
  product,
  onWishlistToggle,
  isWishlisted: isWishlistedProp,
  flashDiscountPercent,
  flashDiscountedPrice,
  index = 0,
}: ProductCardProps) {
  const { lang, t } = useLanguage();
  const { addItem, isInCart } = useCart();
  const [addingToCart, setAddingToCart] = useState(false);

  const { data: wishlistIds } = useGetWishlist();
  const isWishlisted =
    isWishlistedProp !== undefined
      ? isWishlistedProp
      : (wishlistIds?.some((id) => id === product.id) ?? false);

  const inCart = isInCart(product.id);
  const title =
    lang === "bn" && product.info.titleBn
      ? product.info.titleBn
      : product.info.titleEn;
  const author =
    lang === "bn" && product.info.authorBn
      ? product.info.authorBn
      : product.info.authorEn;
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
      coverImageUrl: product.coverImageUrl,
    });
    setTimeout(() => setAddingToCart(false), 600);
  };

  return (
    <div
      className="card-dense flex flex-col group relative"
      data-ocid={`product.item.${itemIndex}`}
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
        {flashDiscountPercent && flashDiscountPercent > BigInt(0) && (
          <span className="badge-sale">
            {flashDiscountPercent.toString()}% {t("off")}
          </span>
        )}
        {isOutOfStock && (
          <span
            className="inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-full"
            style={{
              background: "oklch(var(--muted))",
              color: "oklch(var(--muted-foreground))",
            }}
          >
            {t("outOfStock")}
          </span>
        )}
      </div>

      {/* Wishlist heart — frosted glass */}
      <button
        type="button"
        onClick={() => onWishlistToggle?.(product.id)}
        data-ocid={`product.wishlist.${itemIndex}`}
        aria-label={isWishlisted ? t("removeFromWishlist") : t("addToWishlist")}
        className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-smooth ${
          isWishlisted ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          background: isWishlisted
            ? "oklch(var(--accent) / 0.15)"
            : "oklch(var(--background) / 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: `1px solid ${isWishlisted ? "oklch(var(--accent) / 0.4)" : "oklch(var(--border) / 0.6)"}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <Heart
          size={13}
          className={isWishlisted ? "fill-current" : ""}
          style={{
            color: isWishlisted
              ? "oklch(var(--accent))"
              : "oklch(var(--muted-foreground))",
          }}
        />
      </button>

      {/* Image */}
      <Link
        to="/product/$id"
        params={{ id: product.id.toString() }}
        data-ocid={`product.link.${itemIndex}`}
        className="block"
      >
        <div
          className={`aspect-[3/4] overflow-hidden relative ${isOutOfStock ? "opacity-70" : ""}`}
          style={{ background: "oklch(var(--primary) / 0.15)" }}
        >
          {product.coverImageUrl ? (
            <img
              src={product.coverImageUrl}
              alt={title}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isOutOfStock ? "grayscale" : ""}`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
          )}
          {/* Subtle gradient overlay at bottom of image */}
          <div
            className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, oklch(var(--card) / 0.6), transparent)",
            }}
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <Link to="/product/$id" params={{ id: product.id.toString() }}>
          <h3
            className="text-xs font-semibold line-clamp-2 leading-snug transition-colors-fast"
            style={{ color: "oklch(var(--card-foreground))" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "oklch(var(--accent))";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "oklch(var(--card-foreground))";
            }}
          >
            {title}
          </h3>
        </Link>

        <p
          className="text-xs italic truncate"
          style={{ color: "oklch(var(--muted-foreground))", fontSize: "11px" }}
        >
          {author}
        </p>

        <StarRating
          rating={product.averageRating}
          count={Number(product.reviewCount)}
          showValue={product.reviewCount > BigInt(0)}
        />

        <div className="flex items-baseline gap-2 mt-auto">
          <span
            className="font-mono font-bold text-sm"
            style={{
              color: "oklch(var(--foreground))",
              fontFamily: "var(--font-mono)",
            }}
          >
            {formatPrice(displayPrice)}
          </span>
          {flashDiscountedPrice && (
            <span
              className="text-xs line-through"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              {formatPrice(product.priceInPaisa)}
            </span>
          )}
        </div>

        <p
          className="text-xs font-medium"
          style={{ color: "oklch(0.65 0.18 150)", fontSize: "11px" }}
        >
          ✓ {t("free")} {t("delivery")}
        </p>

        {/* Add to Cart button */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isOutOfStock || addingToCart}
          data-ocid={
            inCart
              ? `product.incart.${itemIndex}`
              : `product.add_button.${itemIndex}`
          }
          className={`w-full mt-1 py-2 px-3 rounded-lg text-xs font-semibold transition-smooth flex items-center justify-center gap-1.5 ${
            isOutOfStock
              ? "cursor-not-allowed"
              : inCart
                ? "cursor-default"
                : "active:scale-[0.98]"
          }`}
          style={
            inCart
              ? {
                  background: "oklch(var(--muted))",
                  border: "1px solid oklch(var(--border))",
                  color: "oklch(var(--muted-foreground))",
                }
              : isOutOfStock
                ? {
                    background: "oklch(var(--muted))",
                    border: "1px solid oklch(var(--border))",
                    color: "oklch(var(--muted-foreground))",
                    opacity: 0.6,
                  }
                : {
                    background:
                      "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                    color: "oklch(var(--accent-foreground))",
                    boxShadow: "0 2px 8px oklch(var(--accent) / 0.3)",
                    border: "none",
                  }
          }
        >
          {addingToCart ? (
            <Loader2 size={11} className="animate-spin" />
          ) : inCart ? (
            <>
              <ShoppingCart size={11} />
              {t("inCart")}
            </>
          ) : isOutOfStock ? (
            t("outOfStock")
          ) : (
            <>
              <Zap size={11} />
              {t("addToCart")}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// Compact badge variant for flash sale items
export function FlashSaleBadge({ percent }: { percent: bigint }) {
  return (
    <Badge
      className="rounded-full text-xs px-2.5 py-0.5 font-bold border-0"
      style={{
        background: "oklch(var(--accent))",
        color: "oklch(var(--accent-foreground))",
        boxShadow: "0 0 0 2px oklch(var(--accent) / 0.25)",
      }}
    >
      {percent.toString()}% off
    </Badge>
  );
}
