import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  Info,
  Lock,
  Minus,
  Package,
  Plus,
  RotateCcw,
  ShoppingCart,
  Sparkles,
  Tag,
  Trash2,
  Truck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { BookCover } from "../components/BookCover";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useAuth } from "../hooks/use-auth";
import { useCart } from "../hooks/use-cart";
import { useLanguage } from "../hooks/use-language";
import {
  useGetCart,
  useRemoveFromCart,
  useUpdateCartQuantity,
  useValidatePromoCode,
} from "../hooks/useQueries";
import {
  DELIVERY_CHARGE_PAISA,
  FREE_DELIVERY_THRESHOLD_PAISA,
  GST_RATE,
} from "../lib/constants";
import { formatPrice } from "../lib/i18n";

type PromoError = "expired" | "minSpend" | "ineligible" | "notFound" | null;

const PROMO_ERROR_MESSAGES: Record<
  NonNullable<PromoError>,
  { en: string; bn: string }
> = {
  expired: { en: "Promo code has expired", bn: "প্রমো কোডের মেয়াদ শেষ হয়ে গেছে" },
  minSpend: {
    en: "Minimum order value not met",
    bn: "ন্যূনতম অর্ডার মূল্য পূরণ হয়নি",
  },
  ineligible: {
    en: "Code not valid for these items",
    bn: "এই পণ্যগুলির জন্য কোড প্রযোজ্য নয়",
  },
  notFound: { en: "Invalid promo code", bn: "অবৈধ প্রমো কোড" },
};

const TRUST_BADGES = [
  {
    icon: Lock,
    en: "100% Secure Payments",
    bn: "১০০% নিরাপদ পেমেন্ট",
    color: "text-emerald-500",
  },
  {
    icon: RotateCcw,
    en: "Easy Returns",
    bn: "সহজ রিটার্ন",
    color: "text-blue-400",
  },
  {
    icon: Package,
    en: "Authentic Products",
    bn: "আসল পণ্য নিশ্চিত",
    color: "text-accent",
  },
];

function CartItemSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex gap-4">
      <Skeleton className="w-20 h-28 rounded-md shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-1/4 rounded" />
        <div className="flex gap-2 mt-2">
          <Skeleton className="h-9 w-28 rounded-full" />
          <Skeleton className="h-9 w-20 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-6 w-20 rounded shrink-0" />
    </div>
  );
}

function EmptyCartState() {
  const { t, lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 py-24 px-4"
      data-ocid="cart.empty_state"
    >
      {/* Illustrated bag */}
      <div className="relative">
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center shadow-card">
          <svg
            viewBox="0 0 80 80"
            className="w-20 h-20"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="12"
              y="28"
              width="56"
              height="42"
              rx="8"
              fill="oklch(var(--accent)/0.15)"
              stroke="oklch(var(--accent)/0.4)"
              strokeWidth="2"
            />
            <path
              d="M28 28V22a12 12 0 0 1 24 0v6"
              stroke="oklch(var(--accent)/0.5)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M32 44h16M40 38v12"
              stroke="oklch(var(--accent)/0.6)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-elevated">
          <span className="text-accent-foreground text-sm font-bold font-mono">
            0
          </span>
        </div>
      </div>

      <div className="text-center space-y-2 max-w-xs">
        <h2 className="text-2xl font-display font-bold text-foreground">
          {t("emptyCart")}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {lang === "bn"
            ? "আপনি এখনও কোনো বই যোগ করেননি।"
            : "Your cart is waiting for its first book."}
        </p>
      </div>

      <Link
        to="/shop"
        data-ocid="cart.shop_link"
        className="cta-primary inline-flex items-center gap-2.5 px-8 py-3 text-sm"
      >
        <ShoppingCart size={16} />
        {lang === "bn" ? "কেনাকাটা শুরু করুন" : "Start Shopping"}
        <ArrowRight size={14} />
      </Link>

      <p className="text-xs text-muted-foreground/60">
        {lang === "bn"
          ? "হাজারো বই আপনার জন্য অপেক্ষা করছে"
          : "Thousands of books waiting for you"}
      </p>
    </motion.div>
  );
}

function LoginRequiredState() {
  const { t, lang } = useLanguage();
  const { login } = useAuth();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 py-24 px-4"
      data-ocid="cart.login_required"
    >
      <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shadow-card">
        <ShoppingCart size={52} className="text-primary/60" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-display font-bold text-foreground">
          {t("cart")}
        </h2>
        <p className="text-sm text-muted-foreground">{t("signInDesc")}</p>
      </div>
      <Button
        type="button"
        onClick={login}
        data-ocid="cart.login_button"
        className="cta-primary px-10 py-3 h-auto font-bold"
      >
        {lang === "bn" ? "সাইন ইন করুন" : t("signIn")}
      </Button>
    </motion.div>
  );
}

export default function CartPage() {
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
    totalItems,
  } = useCart();

  // biome-ignore lint/correctness/useExhaustiveDependencies: addLocal is useCallback-stable
  useEffect(() => {
    if (!backendCart || backendCart.length === 0) return;
    for (const backendItem of backendCart) {
      addLocal({
        productId: backendItem.productId,
        quantity: Number(backendItem.quantity),
        priceInPaisa: backendItem.priceSnapshotInPaisa,
        titleEn: `Book #${backendItem.productId}`,
        titleBn: "",
        coverImageUrl: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backendCart]);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState<PromoError>(null);

  if (isInitializing) return <LoadingSpinner fullPage text={t("loading")} />;
  if (!isAuthenticated) return <LoginRequiredState />;
  if (cartLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
        <Skeleton className="h-9 w-52 rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <CartItemSkeleton />
            <CartItemSkeleton />
            <CartItemSkeleton />
          </div>
          <Skeleton className="h-80 rounded-xl" />
        </div>
      </div>
    );
  }

  const items = localItems;
  const subtotalPaisa = items.reduce(
    (sum, i) => sum + Number(i.priceInPaisa) * i.quantity,
    0,
  );
  const subtotal = subtotalPaisa / 100;
  const gst = subtotal * GST_RATE;
  const deliveryFree = subtotalPaisa >= Number(FREE_DELIVERY_THRESHOLD_PAISA);
  const delivery = deliveryFree ? 0 : Number(DELIVERY_CHARGE_PAISA) / 100;
  const discountAmount = promoApplied
    ? Math.round((subtotalPaisa * promoDiscount) / 100) / 100
    : 0;
  const grandTotal = subtotal + gst + delivery - discountAmount;
  const amountToFreeDelivery =
    FREE_DELIVERY_THRESHOLD_PAISA - BigInt(Math.round(subtotalPaisa));

  if (items.length === 0) return <EmptyCartState />;

  const handleRemove = (productId: bigint) => {
    removeLocal(productId);
    removeFromCartMut.mutate(productId);
    toast.success(lang === "bn" ? "কার্ট থেকে সরানো হয়েছে" : "Removed from cart");
  };

  const handleQtyDecrease = (productId: bigint, qty: number) => {
    if (qty <= 1) {
      removeLocal(productId);
      removeFromCartMut.mutate(productId);
    } else {
      updateLocal(productId, qty - 1);
      updateCartQtyMut.mutate({ productId, quantity: BigInt(qty - 1) });
    }
  };

  const handleQtyIncrease = (
    productId: bigint,
    qty: number,
    maxStock?: number,
  ) => {
    if (maxStock !== undefined && qty >= maxStock) {
      toast.warning(
        lang === "bn"
          ? "সর্বোচ্চ স্টক সীমায় পৌঁছেছে"
          : "Maximum available stock reached",
      );
      return;
    }
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
          toast.success(
            `${lang === "bn" ? "প্রমো প্রয়োগ হয়েছে!" : "Promo applied!"} ${promo.discountPercent}% ${lang === "bn" ? "ছাড়" : "off"}`,
          );
        } else {
          setPromoError("notFound");
        }
      },
      onError: () => setPromoError("notFound"),
    });
  };

  const handleRemovePromo = () => {
    setPromoApplied("");
    setPromoDiscount(0);
    setPromoCode("");
    setPromoError(null);
  };

  return (
    <div className="bg-muted/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6" data-ocid="cart.page">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
            <ShoppingCart size={18} className="text-accent" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">
              {t("cart")}
            </h1>
            <p className="text-xs text-muted-foreground">
              {totalItems} {lang === "bn" ? "টি আইটেম" : "items in your cart"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3" data-ocid="cart.items_list">
            <AnimatePresence mode="popLayout">
              {items.map((item, idx) => (
                <motion.div
                  key={item.productId.toString()}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -40, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-card border border-border rounded-xl p-4 flex gap-4 shadow-subtle hover:shadow-card transition-smooth group"
                  data-ocid={`cart.item.${idx + 1}`}
                >
                  {/* Cover Image */}
                  <Link
                    to="/product/$id"
                    params={{ id: item.productId.toString() }}
                    className="shrink-0"
                  >
                    <div
                      className="w-20 h-28 rounded-md overflow-hidden shadow-subtle border border-border/60 relative"
                      style={{ background: "#0A1628" }}
                    >
                      <BookCover
                        coverImageUrl={item.coverImageUrl}
                        title={
                          lang === "bn" && item.titleBn
                            ? item.titleBn
                            : item.titleEn
                        }
                        imgClassName="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to="/product/$id"
                      params={{ id: item.productId.toString() }}
                      className="text-sm font-display font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 leading-snug"
                      data-ocid={`cart.item_link.${idx + 1}`}
                    >
                      {lang === "bn" && item.titleBn
                        ? item.titleBn
                        : item.titleEn}
                    </Link>
                    {lang === "bn" && item.titleBn && (
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {item.titleEn}
                      </p>
                    )}

                    {/* Unit price */}
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="font-mono text-sm font-bold text-accent">
                        {formatPrice(item.priceInPaisa)}
                      </span>
                      {deliveryFree && (
                        <Badge className="bg-emerald-500/15 text-emerald-500 border-0 text-[10px] px-1.5 py-0 rounded-full font-semibold">
                          {lang === "bn" ? "বিনামূল্যে ডেলিভারি" : "Free Delivery"}
                        </Badge>
                      )}
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex items-center gap-3 mt-3 flex-wrap">
                      {/* Pill-shaped quantity control */}
                      <div
                        className="flex items-center rounded-full border border-border bg-muted/40 overflow-hidden"
                        data-ocid={`cart.quantity.${idx + 1}`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            handleQtyDecrease(item.productId, item.quantity)
                          }
                          data-ocid={`cart.decrease.${idx + 1}`}
                          className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/15 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-9 h-9 flex items-center justify-center text-sm font-bold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleQtyIncrease(item.productId, item.quantity)
                          }
                          data-ocid={`cart.increase.${idx + 1}`}
                          className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/15 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={() => handleRemove(item.productId)}
                        data-ocid={`cart.delete_button.${idx + 1}`}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors px-3 py-2 rounded-full hover:bg-destructive/10"
                      >
                        <Trash2 size={12} />
                        {lang === "bn" ? "সরান" : "Remove"}
                      </button>
                    </div>
                  </div>

                  {/* Line total */}
                  <div className="shrink-0 text-right flex flex-col items-end gap-1">
                    <p className="font-mono text-base font-bold text-foreground">
                      {formatPrice(
                        BigInt(
                          Math.round(Number(item.priceInPaisa) * item.quantity),
                        ),
                      )}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-[11px] text-muted-foreground">
                        {formatPrice(item.priceInPaisa)} × {item.quantity}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Free delivery progress banner */}
            {!deliveryFree && amountToFreeDelivery > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/8 border border-primary/20 rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Truck size={14} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground">
                    {lang === "bn"
                      ? `বিনামূল্যে ডেলিভারির জন্য আরও ${formatPrice(amountToFreeDelivery)} কেনাকাটা করুন`
                      : `Add ${formatPrice(amountToFreeDelivery)} more for FREE delivery`}
                  </p>
                  <div className="mt-1.5 h-1 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{
                        width: `${Math.min(100, (subtotalPaisa / Number(FREE_DELIVERY_THRESHOLD_PAISA)) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
            {deliveryFree && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-3 flex items-center gap-2.5"
              >
                <Sparkles size={14} className="text-emerald-500 shrink-0" />
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {lang === "bn"
                    ? "আপনি বিনামূল্যে ডেলিভারি পাচ্ছেন!"
                    : "You've unlocked FREE delivery!"}
                </p>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className="bg-card border border-border rounded-xl shadow-card overflow-hidden sticky top-4"
              data-ocid="cart.summary"
            >
              {/* Header */}
              <div className="bg-primary px-5 py-3.5 flex items-center gap-2">
                <ShoppingCart
                  size={15}
                  className="text-primary-foreground/80"
                />
                <h2 className="text-sm font-display font-semibold text-primary-foreground uppercase tracking-wider">
                  {lang === "bn" ? "অর্ডার সারাংশ" : "Order Summary"}
                </h2>
              </div>

              <div className="p-5 space-y-4">
                {/* Promo Code */}
                <div className="space-y-2" data-ocid="cart.promo.section">
                  <div className="flex items-center gap-1.5">
                    <Tag size={12} className="text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {t("promoCode")}
                    </span>
                  </div>
                  {promoApplied ? (
                    <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/25 rounded-lg px-3 py-2.5 text-xs">
                      <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <span className="text-base leading-none">✓</span>
                        {promoApplied} — {promoDiscount}% {t("off")}
                      </div>
                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="text-muted-foreground hover:text-destructive transition-colors ml-2 text-base leading-none"
                        data-ocid="cart.promo_remove_button"
                        aria-label="Remove promo"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex gap-2">
                        <Input
                          value={promoCode}
                          onChange={(e) => {
                            setPromoCode(e.target.value.toUpperCase());
                            setPromoError(null);
                          }}
                          placeholder="VIDYA10"
                          className="input-field h-9 text-xs flex-1 rounded-lg"
                          data-ocid="cart.promo.input"
                        />
                        <Button
                          type="button"
                          onClick={handleApplyPromo}
                          disabled={
                            validatePromoMut.isPending || !promoCode.trim()
                          }
                          className="h-9 px-4 text-xs rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shrink-0"
                          data-ocid="cart.promo.submit_button"
                        >
                          {validatePromoMut.isPending ? "…" : t("apply")}
                        </Button>
                      </div>
                      <AnimatePresence>
                        {promoError && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-destructive flex items-center gap-1.5"
                            data-ocid="cart.promo.error_state"
                          >
                            <AlertCircle size={11} />
                            {PROMO_ERROR_MESSAGES[promoError][lang]}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>

                <Separator />

                {/* Price lines */}
                <div className="space-y-2.5">
                  {[
                    {
                      label: `${t("subtotal")} (${totalItems} ${lang === "bn" ? "টি" : "items"})`,
                      value: `₹${subtotal.toFixed(2)}`,
                      muted: true,
                    },
                    {
                      label: lang === "bn" ? "জিএসটি (১৮%)" : "GST (18%)",
                      value: `₹${gst.toFixed(2)}`,
                      muted: true,
                    },
                    {
                      label: t("delivery"),
                      value: deliveryFree
                        ? lang === "bn"
                          ? "বিনামূল্যে"
                          : "FREE"
                        : `₹${delivery.toFixed(2)}`,
                      free: deliveryFree,
                      muted: !deliveryFree,
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-muted-foreground">{row.label}</span>
                      <span
                        className={
                          row.free
                            ? "text-emerald-500 font-semibold"
                            : row.muted
                              ? "font-medium text-foreground"
                              : "font-medium text-foreground"
                        }
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}

                  {promoApplied && discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>
                        {lang === "bn" ? "প্রমো ছাড়" : "Promo discount"}
                      </span>
                      <span>−₹{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Grand total */}
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-foreground">
                    {t("total")}
                  </span>
                  <span className="font-mono text-2xl font-bold text-accent">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>

                <p className="text-[11px] text-muted-foreground/70 -mt-1">
                  {lang === "bn" ? "সমস্ত ট্যাক্স অন্তর্ভুক্ত" : "All taxes included"}
                </p>

                {/* Checkout CTA */}
                <Link
                  to="/checkout"
                  data-ocid="cart.checkout_button"
                  className="cta-primary flex items-center justify-center gap-2 w-full py-3.5 text-sm"
                >
                  <ShoppingCart size={16} />
                  {t("checkout")}
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/shop"
                  data-ocid="cart.continue_shopping_link"
                  className="block text-center text-xs text-accent hover:text-accent/80 transition-colors py-1"
                >
                  ← {lang === "bn" ? "কেনাকাটা চালিয়ে যান" : "Continue Shopping"}
                </Link>

                {/* Trust badges */}
                <div className="border-t border-border pt-4 space-y-2">
                  {TRUST_BADGES.map((badge) => (
                    <div key={badge.en} className="flex items-center gap-2">
                      <badge.icon size={13} className={badge.color} />
                      <span className="text-xs text-muted-foreground">
                        {lang === "bn" ? badge.bn : badge.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
