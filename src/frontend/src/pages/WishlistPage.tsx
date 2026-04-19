import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { Heart, LogIn, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useAuth } from "../hooks/use-auth";
import { useCart } from "../hooks/use-cart";
import { useLanguage } from "../hooks/use-language";
import {
  useGetProduct,
  useGetWishlist,
  useRemoveFromWishlist,
} from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";

// ─── Skeleton ─────────────────────────────────────────
function WishlistCardSkeleton() {
  return (
    <div className="card-elevation p-0 overflow-hidden">
      <Skeleton className="w-full aspect-[3/4]" />
      <div className="p-3 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-8 w-full rounded-lg" />
      </div>
    </div>
  );
}

// ─── Login required ───────────────────────────────────
function LoginRequiredState() {
  const { t, lang } = useLanguage();
  const { login } = useAuth();
  return (
    <div
      className="flex flex-col items-center gap-7 py-24 px-4 text-center"
      data-ocid="wishlist.login_required"
    >
      <div className="relative">
        <div className="w-28 h-28 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <Heart size={52} className="text-accent/70" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-elevated">
          <LogIn size={16} className="text-accent-foreground" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-display font-bold text-foreground">
          {t("wishlist")}
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          {t("signInDesc")}
        </p>
      </div>
      <Button
        type="button"
        onClick={login}
        data-ocid="wishlist.login_button"
        className="cta-primary h-11 px-8 text-sm"
      >
        {lang === "bn" ? "সাইন ইন করুন" : t("signIn")}
      </Button>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────
function EmptyWishlistState() {
  const { t, lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card-elevation flex flex-col items-center py-24 px-6 gap-6 text-center"
      data-ocid="wishlist.empty_state"
    >
      <div className="relative">
        <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center">
          <svg
            viewBox="0 0 80 80"
            className="w-16 h-16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M40 65 C40 65 10 48 10 27 C10 18 17 12 25 12 C31 12 37 16 40 21 C43 16 49 12 55 12 C63 12 70 18 70 27 C70 48 40 65 40 65Z"
              fill="currentColor"
              className="text-accent/15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 3"
            />
            <circle
              cx="58"
              cy="24"
              r="4"
              fill="currentColor"
              className="text-accent/40"
            />
          </svg>
        </div>
        <div className="absolute -bottom-1 -right-1 text-2xl">📚</div>
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-display font-bold text-foreground">
          {t("emptyWishlist")}
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          {lang === "bn"
            ? "আপনার পছন্দের বইগুলো এখানে সংরক্ষণ করুন"
            : "Save books you love for later — they'll wait here for you"}
        </p>
      </div>
      <Link
        to="/shop"
        data-ocid="wishlist.shop_link"
        className="cta-primary inline-flex items-center gap-2 text-sm"
      >
        <ShoppingBag size={15} />
        {t("shop")}
      </Link>
    </motion.div>
  );
}

// ─── Wishlist card ────────────────────────────────────
function WishlistCard({
  productId,
  index,
  onRemove,
}: {
  productId: bigint;
  index: number;
  onRemove: (id: bigint) => void;
}) {
  const { lang, t } = useLanguage();
  const { data: product, isLoading } = useGetProduct(productId);
  const { addItem, isInCart } = useCart();

  if (isLoading) return <WishlistCardSkeleton />;
  if (!product) return null;

  const title =
    lang === "bn" && product.info.titleBn
      ? product.info.titleBn
      : product.info.titleEn;
  const author =
    lang === "bn" && product.info.authorBn
      ? product.info.authorBn
      : product.info.authorEn;
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
      coverImageUrl: product.coverImageUrl,
    });
    toast.success(lang === "bn" ? "কার্টে যোগ করা হয়েছে!" : "Added to cart!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      data-ocid={`wishlist.item.${index + 1}`}
      className="card-elevation overflow-hidden group flex flex-col"
    >
      {/* Cover image */}
      <Link
        to="/product/$id"
        params={{ id: product.id.toString() }}
        className="block relative overflow-hidden bg-primary/10"
        style={{ aspectRatio: "3/4" }}
        data-ocid={`wishlist.item_link.${index + 1}`}
      >
        {product.coverImageUrl ? (
          <img
            src={product.coverImageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl bg-primary/5">
            📚
          </div>
        )}
        {/* Remove button overlay */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onRemove(productId);
          }}
          data-ocid={`wishlist.remove.${index + 1}`}
          aria-label={t("removeFromWishlist")}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-subtle"
        >
          <Trash2 size={13} />
        </button>
        {isOutOfStock && (
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] flex items-center justify-center">
            <Badge className="bg-card border border-border text-foreground font-semibold text-xs shadow-card">
              {t("outOfStock")}
            </Badge>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <div className="flex-1">
          <Link
            to="/product/$id"
            params={{ id: product.id.toString() }}
            className="text-sm font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 leading-snug"
          >
            {title}
          </Link>
          {lang === "bn" && product.info.titleBn && (
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              {product.info.titleEn}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {author}
          </p>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-base font-bold font-mono text-accent">
            {formatPrice(product.priceInPaisa)}
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
            {lang === "bn" ? "বিনামূল্যে ডেলিভারি" : "Free Delivery"}
          </span>
        </div>

        <Button
          type="button"
          onClick={handleAddToCart}
          disabled={inCart || isOutOfStock}
          data-ocid={`wishlist.add_to_cart.${index + 1}`}
          className={`w-full h-9 text-xs font-semibold gap-1.5 rounded-lg ${
            inCart
              ? "bg-primary/15 text-foreground border border-primary/40 cursor-default"
              : isOutOfStock
                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                : "cta-primary"
          }`}
        >
          <ShoppingCart size={13} />
          {inCart
            ? t("inCart")
            : isOutOfStock
              ? t("outOfStock")
              : t("addToCart")}
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────
export default function WishlistPage() {
  const { t, lang } = useLanguage();
  const { isAuthenticated, isInitializing } = useAuth();
  const { data: wishlist, isLoading } = useGetWishlist();
  const { mutate: removeFromWishlist } = useRemoveFromWishlist();

  if (isInitializing) return <LoadingSpinner fullPage text={t("loading")} />;
  if (!isAuthenticated) return <LoginRequiredState />;
  if (isLoading) return <LoadingSpinner fullPage text={t("loading")} />;

  const handleRemove = (productId: bigint) => {
    removeFromWishlist(productId, {
      onSuccess: () =>
        toast.success(
          lang === "bn" ? "উইশলিস্ট থেকে সরানো হয়েছে" : "Removed from wishlist",
        ),
    });
  };

  return (
    <div className="bg-muted/20 min-h-screen">
      <div
        className="max-w-7xl mx-auto px-4 py-6 sm:py-10"
        data-ocid="wishlist.page"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-7"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
              <Heart size={20} className="text-accent" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-foreground tracking-tight">
                {t("wishlist")}
              </h1>
              {wishlist && wishlist.length > 0 && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {wishlist.length}{" "}
                  {lang === "bn" ? "টি বই সংরক্ষিত" : "books saved"}
                </p>
              )}
            </div>
          </div>

          {/* Mobile bulk "Move all to cart" — optional convenience button */}
          {wishlist && wishlist.length > 1 && (
            <Button
              type="button"
              variant="outline"
              data-ocid="wishlist.browse_shop_button"
              className="btn-secondary text-xs h-9 gap-1.5 sm:hidden"
              asChild
            >
              <Link to="/shop">
                <ShoppingBag size={13} />
                {lang === "bn" ? "আরও কিনুন" : "Browse More"}
              </Link>
            </Button>
          )}
        </motion.div>

        {!wishlist || wishlist.length === 0 ? (
          <EmptyWishlistState />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {wishlist.map((id, idx) => (
              <WishlistCard
                key={id.toString()}
                productId={id}
                index={idx}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
