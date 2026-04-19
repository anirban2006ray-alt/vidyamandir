import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Edit2,
  Lock,
  MapPin,
  Package,
  Plus,
  RefreshCw,
  ShoppingBag,
  Tag,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { Address, AddressInput } from "../backend.d.ts";
import { useAuth } from "../hooks/use-auth";
import { useLanguage } from "../hooks/use-language";
import {
  useAddAddress,
  useCreateCheckoutSession,
  useGetCart,
  useIsStripeConfigured,
  useListAddresses,
  useUpdateAddress,
  useValidatePromoCode,
} from "../hooks/useQueries";
import {
  DELIVERY_CHARGE_NUM,
  FREE_DELIVERY_THRESHOLD_NUM,
  GST_RATE,
  MAX_SAVED_ADDRESSES,
} from "../lib/constants";
import { formatPrice } from "../lib/i18n";

type CheckoutPromoError =
  | "expired"
  | "minSpend"
  | "ineligible"
  | "notFound"
  | null;

const CHECKOUT_PROMO_ERROR_MESSAGES: Record<
  NonNullable<CheckoutPromoError>,
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

const EMPTY_FORM: AddressInput = {
  fullName: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  district: "",
  state: "West Bengal",
  pincode: "",
};

// ─── Step Indicator ──────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, labelEn: "Address", labelBn: "ঠিকানা", icon: MapPin },
  { id: 2, labelEn: "Payment", labelBn: "পেমেন্ট", icon: CreditCard },
  { id: 3, labelEn: "Confirm", labelBn: "নিশ্চিত", icon: CheckCircle2 },
];

function StepIndicator({ current }: { current: 1 | 2 | 3 }) {
  const { lang } = useLanguage();
  return (
    <div
      className="flex items-center justify-center gap-0 mb-6"
      aria-label="Checkout progress"
    >
      {STEPS.map((step, idx) => {
        const done = step.id < current;
        const active = step.id === current;
        return (
          <div key={step.id} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={{
                  backgroundColor:
                    done || active ? "oklch(var(--accent))" : "transparent",
                  borderColor:
                    done || active
                      ? "oklch(var(--accent))"
                      : "oklch(var(--border))",
                  scale: active ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center relative"
              >
                {done ? (
                  <CheckCircle2 size={16} className="text-accent-foreground" />
                ) : (
                  <step.icon
                    size={15}
                    className={
                      active
                        ? "text-accent-foreground"
                        : "text-muted-foreground"
                    }
                  />
                )}
                {active && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent/25"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  />
                )}
              </motion.div>
              <span
                className={`text-[11px] font-semibold ${active ? "text-accent" : done ? "text-foreground" : "text-muted-foreground"}`}
              >
                {lang === "bn" ? step.labelBn : step.labelEn}
              </span>
            </div>

            {/* Connector */}
            {idx < STEPS.length - 1 && (
              <div className="w-16 h-0.5 mx-1 mb-6 rounded-full overflow-hidden bg-border">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  animate={{ width: step.id < current ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Address Form ─────────────────────────────────────────────────────────────

interface AddressFormProps {
  initial?: AddressInput;
  onSave: (data: AddressInput) => void;
  onCancel: () => void;
  isSaving: boolean;
}

function AddressForm({
  initial = EMPTY_FORM,
  onSave,
  onCancel,
  isSaving,
}: AddressFormProps) {
  const [form, setForm] = useState<AddressInput>(initial);
  const set = (field: keyof AddressInput, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.fullName.trim() ||
      !form.phone.trim() ||
      !form.line1.trim() ||
      !form.city.trim() ||
      !form.pincode.trim()
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    onSave(form);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-3 bg-muted/20 border border-border rounded-xl p-4"
      data-ocid="address.form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          {
            id: "fullName",
            label: "Full Name *",
            placeholder: "Suresh Kumar Das",
            field: "fullName" as const,
            ocid: "address.name.input",
          },
          {
            id: "phone",
            label: "Phone *",
            placeholder: "+91 98765 43210",
            field: "phone" as const,
            ocid: "address.phone.input",
          },
        ].map((f) => (
          <div key={f.id} className="space-y-1.5">
            <Label
              htmlFor={f.id}
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
            >
              {f.label}
            </Label>
            <Input
              id={f.id}
              value={form[f.field] as string}
              onChange={(e) => set(f.field, e.target.value)}
              placeholder={f.placeholder}
              className="input-field h-9 text-sm rounded-lg"
              required
              data-ocid={f.ocid}
            />
          </div>
        ))}
      </div>

      {[
        {
          id: "line1",
          label: "Address Line 1 *",
          placeholder: "House No., Street Name",
          field: "line1" as const,
          ocid: "address.line1.input",
          required: true,
        },
        {
          id: "line2",
          label: "Address Line 2",
          placeholder: "Landmark, Area (optional)",
          field: "line2" as const,
          ocid: "address.line2.input",
          required: false,
        },
      ].map((f) => (
        <div key={f.id} className="space-y-1.5">
          <Label
            htmlFor={f.id}
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
          >
            {f.label}
          </Label>
          <Input
            id={f.id}
            value={form[f.field] as string}
            onChange={(e) => set(f.field, e.target.value)}
            placeholder={f.placeholder}
            className="input-field h-9 text-sm rounded-lg"
            required={f.required}
            data-ocid={f.ocid}
          />
        </div>
      ))}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="col-span-2 space-y-1.5">
          <Label
            htmlFor="city"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
          >
            City *
          </Label>
          <Input
            id="city"
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            placeholder="Burdwan"
            className="input-field h-9 text-sm rounded-lg"
            required
            data-ocid="address.city.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="district"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
          >
            District *
          </Label>
          <Input
            id="district"
            value={form.district}
            onChange={(e) => set("district", e.target.value)}
            placeholder="Purba Bardhaman"
            className="input-field h-9 text-sm rounded-lg"
            required
            data-ocid="address.district.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="pincode"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
          >
            PIN *
          </Label>
          <Input
            id="pincode"
            value={form.pincode}
            onChange={(e) => set("pincode", e.target.value)}
            placeholder="713101"
            maxLength={6}
            className="input-field h-9 text-sm rounded-lg"
            required
            data-ocid="address.pincode.input"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="state"
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
        >
          State
        </Label>
        <Input
          id="state"
          value={form.state}
          onChange={(e) => set("state", e.target.value)}
          className="input-field h-9 text-sm rounded-lg"
          data-ocid="address.state.input"
        />
      </div>

      <div className="flex gap-2 pt-1">
        <Button
          type="submit"
          disabled={isSaving}
          className="cta-primary h-9 px-5 text-sm"
          data-ocid="address.save_button"
        >
          {isSaving ? "Saving…" : "Save Address"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="btn-secondary h-9 px-4 text-sm rounded-lg"
          data-ocid="address.cancel_button"
        >
          Cancel
        </Button>
      </div>
    </motion.form>
  );
}

// ─── Address Card ─────────────────────────────────────────────────────────────

interface AddressCardProps {
  address: Address;
  selected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  index: number;
}

function AddressCard({
  address,
  selected,
  onSelect,
  onEdit,
  index,
}: AddressCardProps) {
  return (
    <motion.label
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.998 }}
      className={`relative rounded-xl p-4 cursor-pointer transition-smooth flex items-start gap-3 border-2 ${
        selected
          ? "border-accent bg-accent/6 shadow-subtle"
          : "border-border bg-card hover:border-accent/40"
      }`}
      data-ocid={`checkout.address.item.${index}`}
    >
      <input
        type="radio"
        name="shipping-address"
        checked={selected}
        onChange={onSelect}
        className="sr-only"
      />

      {/* Radio indicator */}
      <div
        className={`mt-0.5 h-5 w-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-smooth ${selected ? "border-accent" : "border-muted-foreground/40"}`}
      >
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-2.5 w-2.5 rounded-full bg-accent"
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-display font-semibold text-sm text-foreground">
            {address.fullName}
          </span>
          {address.isDefault && (
            <Badge
              variant="secondary"
              className="text-[10px] px-2 py-0 rounded-full font-semibold bg-accent/15 text-accent border-0"
            >
              Default
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {address.line1}
          {address.line2 ? `, ${address.line2}` : ""}, {address.city},{" "}
          {address.district}, {address.state} — {address.pincode}
        </p>
        <p className="text-xs text-muted-foreground/80 mt-0.5">
          {address.phone}
        </p>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        className="p-1.5 text-muted-foreground hover:text-accent rounded-lg hover:bg-accent/10 transition-smooth flex-shrink-0"
        aria-label="Edit address"
        data-ocid={`checkout.address.edit_button.${index}`}
      >
        <Edit2 className="h-3.5 w-3.5" />
      </button>
    </motion.label>
  );
}

// ─── Order Summary panel ──────────────────────────────────────────────────────

interface CartItemDisplay {
  productId: bigint;
  quantity: bigint;
  priceSnapshotInPaisa: bigint;
}

interface OrderSummaryProps {
  cartItems: CartItemDisplay[];
  isLoading: boolean;
  promoDiscount: number;
  promoApplied: string;
  promoCode: string;
  onPromoChange: (v: string) => void;
  onApplyPromo: () => void;
  promoLoading: boolean;
  promoError: CheckoutPromoError;
  onProceed: () => void;
  onRetry: () => void;
  isProcessing: boolean;
  canProceed: boolean;
  stripeConfigured: boolean | undefined;
  hasPaymentError: boolean;
}

function OrderSummary({
  cartItems,
  isLoading,
  promoDiscount,
  promoApplied,
  promoCode,
  onPromoChange,
  onApplyPromo,
  promoLoading,
  promoError,
  onProceed,
  onRetry,
  isProcessing,
  canProceed,
  stripeConfigured,
  hasPaymentError,
}: OrderSummaryProps) {
  const { lang } = useLanguage();
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + Number(item.priceSnapshotInPaisa) * Number(item.quantity),
    0,
  );
  const gst = Math.round(subtotal * GST_RATE);
  const shipping =
    subtotal >= FREE_DELIVERY_THRESHOLD_NUM ? 0 : DELIVERY_CHARGE_NUM;
  const discountAmount = promoApplied
    ? Math.round((subtotal * promoDiscount) / 100)
    : 0;
  const total = subtotal + gst + shipping - discountAmount;

  return (
    <div
      className="bg-card border border-border rounded-xl shadow-card overflow-hidden sticky top-4"
      data-ocid="checkout.order_summary.panel"
    >
      {/* Header */}
      <div className="bg-primary px-5 py-3.5 flex items-center gap-2">
        <ShoppingBag className="h-4 w-4 text-primary-foreground/80" />
        <h3 className="font-display font-semibold text-primary-foreground text-sm uppercase tracking-wider">
          Order Summary
        </h3>
      </div>

      <div className="p-5 space-y-4">
        {/* Cart items */}
        {isLoading ? (
          <div
            className="space-y-2"
            data-ocid="checkout.order_summary.loading_state"
          >
            {["a", "b", "c"].map((k) => (
              <Skeleton key={k} className="h-8 w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="space-y-1.5 max-h-44 overflow-y-auto">
            {cartItems.map((item, idx) => (
              <div
                key={item.productId.toString()}
                className="flex justify-between gap-2 text-sm"
                data-ocid={`checkout.order_item.${idx + 1}`}
              >
                <span className="text-muted-foreground truncate min-w-0 flex-1 leading-tight">
                  Item #{item.productId.toString()}
                  <span className="ml-1 text-xs">×{Number(item.quantity)}</span>
                </span>
                <span className="font-mono text-foreground font-medium flex-shrink-0">
                  {formatPrice(item.priceSnapshotInPaisa * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        )}

        {cartItems.length === 0 && !isLoading && (
          <p
            className="text-xs text-muted-foreground text-center py-3"
            data-ocid="checkout.cart.empty_state"
          >
            Your cart is empty
          </p>
        )}

        <Separator />

        {/* Promo code */}
        <div className="space-y-2" data-ocid="checkout.promo.section">
          <div className="flex items-center gap-1.5">
            <Tag className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Promo Code
            </span>
          </div>
          {promoApplied ? (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20">
              ✓ {promoApplied} applied — {promoDiscount}% off
            </p>
          ) : (
            <>
              <div className="flex gap-2">
                <Input
                  value={promoCode}
                  onChange={(e) => onPromoChange(e.target.value.toUpperCase())}
                  placeholder="VIDYA10"
                  className="input-field h-9 text-xs flex-1 rounded-lg"
                  data-ocid="checkout.promo.input"
                />
                <Button
                  type="button"
                  onClick={onApplyPromo}
                  disabled={promoLoading || !promoCode.trim()}
                  className="h-9 px-3 text-xs rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shrink-0"
                  data-ocid="checkout.promo.submit_button"
                >
                  {promoLoading ? "…" : "Apply"}
                </Button>
              </div>
              <AnimatePresence>
                {promoError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-destructive flex items-center gap-1.5"
                    data-ocid="checkout.promo.error_state"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {CHECKOUT_PROMO_ERROR_MESSAGES[promoError][lang]}
                  </motion.p>
                )}
              </AnimatePresence>
            </>
          )}
        </div>

        <Separator />

        {/* Price breakdown */}
        <div className="space-y-2 text-sm">
          {[
            {
              label: "Subtotal",
              value: formatPrice(BigInt(subtotal)),
              muted: true,
            },
            {
              label: "GST (18%)",
              value: formatPrice(BigInt(gst)),
              muted: true,
            },
            {
              label: "Delivery",
              value: shipping === 0 ? "FREE" : formatPrice(BigInt(shipping)),
              free: shipping === 0,
              muted: shipping !== 0,
            },
          ].map((row) => (
            <div key={row.label} className="flex justify-between">
              <span className="text-muted-foreground">{row.label}</span>
              <span
                className={
                  row.free
                    ? "text-emerald-500 font-semibold"
                    : "font-medium text-foreground"
                }
              >
                {row.value}
              </span>
            </div>
          ))}
          {promoApplied && discountAmount > 0 && (
            <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
              <span>Promo discount</span>
              <span>−{formatPrice(BigInt(discountAmount))}</span>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex justify-between items-baseline">
          <span className="text-sm font-semibold text-foreground">Total</span>
          <span className="font-mono text-2xl font-bold text-accent">
            {formatPrice(BigInt(Math.max(0, total)))}
          </span>
        </div>

        {!stripeConfigured && stripeConfigured !== undefined && (
          <p className="text-xs text-amber-600 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20">
            ⚠ Payments not configured. Contact admin.
          </p>
        )}

        {/* Payment error */}
        {hasPaymentError && (
          <div
            className="bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 space-y-2"
            data-ocid="checkout.payment.error_state"
          >
            <p className="text-xs text-destructive flex items-center gap-1.5 font-medium">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              Payment failed — please try again
            </p>
            <Button
              type="button"
              size="sm"
              onClick={onRetry}
              className="w-full rounded-lg text-xs h-8 bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5"
              data-ocid="checkout.payment.retry_button"
            >
              <RefreshCw className="h-3 w-3" />
              Retry Payment
            </Button>
          </div>
        )}

        {!hasPaymentError && (
          <Button
            className="w-full cta-primary h-12 gap-2 text-sm font-bold"
            onClick={onProceed}
            disabled={
              !canProceed ||
              isProcessing ||
              isLoading ||
              cartItems.length === 0 ||
              !stripeConfigured
            }
            data-ocid="checkout.pay_button"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin" />
                Processing…
              </span>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                Pay with Stripe
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        )}

        {/* Security note */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <Lock size={11} className="text-muted-foreground/60" />
          <span className="text-[11px] text-muted-foreground/60">
            256-bit SSL encrypted
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main CheckoutPage ────────────────────────────────────────────────────────

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isInitializing, login } = useAuth();
  const { t } = useLanguage();

  const { data: addresses = [], isLoading: addressesLoading } =
    useListAddresses();
  const { data: cartItems = [], isLoading: cartLoading } = useGetCart();
  const { data: stripeConfigured } = useIsStripeConfigured();

  const addAddressMut = useAddAddress();
  const updateAddressMut = useUpdateAddress();
  const createSessionMut = useCreateCheckoutSession();
  const validatePromoMut = useValidatePromoCode();

  const [selectedAddressId, setSelectedAddressId] = useState<bigint | null>(
    null,
  );
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasPaymentError, setHasPaymentError] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState("");
  const [promoError, setPromoError] = useState<CheckoutPromoError>(null);

  useEffect(() => {
    if (addresses.length > 0 && selectedAddressId === null) {
      const def = addresses.find((a) => a.isDefault) ?? addresses[0];
      setSelectedAddressId(def.id);
    }
  }, [addresses, selectedAddressId]);

  if (isInitializing) {
    return (
      <div
        className="min-h-[60vh] flex items-center justify-center"
        data-ocid="checkout.loading_state"
      >
        <div className="space-y-3 text-center">
          <Skeleton className="h-8 w-48 mx-auto rounded-lg" />
          <Skeleton className="h-4 w-32 mx-auto rounded" />
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-5 max-w-sm mx-auto px-4"
          data-ocid="checkout.auth_gate"
        >
          <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto shadow-card">
            <CreditCard className="h-9 w-9 text-primary" />
          </div>
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl font-bold text-foreground">
              {t("checkout")}
            </h2>
            <p className="text-sm text-muted-foreground">{t("signInDesc")}</p>
          </div>
          <Button
            onClick={login}
            className="cta-primary w-full h-11 font-bold"
            data-ocid="checkout.login_button"
          >
            {t("login")}
          </Button>
        </motion.div>
      </div>
    );
  }

  const handleSaveNewAddress = async (data: AddressInput) => {
    if (addresses.length >= MAX_SAVED_ADDRESSES) {
      toast.error(`You can save up to ${MAX_SAVED_ADDRESSES} addresses only`);
      return;
    }
    try {
      const result = await addAddressMut.mutateAsync(data);
      if (result.__kind__ === "ok") setSelectedAddressId(result.ok);
      setShowAddForm(false);
      toast.success("Address saved successfully");
    } catch {
      toast.error("Failed to save address");
    }
  };

  const handleUpdateAddress = async (data: AddressInput) => {
    if (!editingAddress) return;
    try {
      await updateAddressMut.mutateAsync({
        id: editingAddress.id,
        input: data,
      });
      setEditingAddress(null);
      toast.success("Address updated");
    } catch {
      toast.error("Failed to update address");
    }
  };

  const handleApplyPromo = () => {
    if (!promoCode.trim()) return;
    setPromoError(null);
    validatePromoMut.mutate(promoCode.trim().toUpperCase(), {
      onSuccess: (promo) => {
        if (promo) {
          setPromoDiscount(Number(promo.discountPercent));
          setPromoApplied(promoCode.trim().toUpperCase());
          toast.success(`Promo applied! ${promo.discountPercent}% off`);
        } else {
          setPromoError("notFound");
        }
      },
      onError: (err) => {
        const kind =
          err && typeof err === "object" && "__kind__" in err
            ? (err as { __kind__: string }).__kind__
            : "";
        if (kind === "PromoExpired") setPromoError("expired");
        else if (kind === "PromoMinSpendNotMet") setPromoError("minSpend");
        else if (kind === "PromoNotApplicable") setPromoError("ineligible");
        else setPromoError("notFound");
      },
    });
  };

  const doCheckout = async () => {
    if (!selectedAddressId) {
      toast.error("Please select a shipping address");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (!stripeConfigured) {
      toast.error("Payment is not configured yet. Please contact the store.");
      return;
    }

    setIsProcessing(true);
    setHasPaymentError(false);
    try {
      const origin = window.location.origin;
      const sessionUrl = await createSessionMut.mutateAsync({
        items: cartItems.map((item) => ({
          productName: `Book #${item.productId}`,
          currency: "inr",
          quantity: item.quantity,
          priceInCents: item.priceSnapshotInPaisa,
          productDescription: `Product ID: ${item.productId}`,
        })),
        successUrl: `${origin}/orders?payment=success`,
        cancelUrl: `${origin}/checkout?payment=cancelled`,
      });
      window.location.href = sessionUrl;
    } catch {
      toast.error("Payment failed — please try again");
      setHasPaymentError(true);
      setIsProcessing(false);
    }
  };

  const canProceed = selectedAddressId !== null && cartItems.length > 0;

  return (
    <div
      className="min-h-screen bg-muted/20 pb-20 md:pb-0"
      data-ocid="checkout.page"
    >
      {/* Top breadcrumb bar */}
      <div className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={() => void navigate({ to: "/cart" })}
            className="hover:text-accent transition-colors font-medium"
            data-ocid="checkout.back_to_cart.link"
          >
            {t("cart")}
          </button>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <span className="text-foreground font-semibold">{t("checkout")}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Step progress */}
        <StepIndicator current={1} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Shipping Address */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-subtle"
              data-ocid="checkout.shipping.section"
            >
              <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
                <h2 className="font-display font-semibold text-foreground text-sm flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                  </div>
                  {t("shippingAddress")}
                </h2>
                {addresses.length < MAX_SAVED_ADDRESSES &&
                  !showAddForm &&
                  !editingAddress && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-secondary rounded-lg text-xs gap-1 h-8"
                      onClick={() => setShowAddForm(true)}
                      data-ocid="checkout.add_address.open_modal_button"
                    >
                      <Plus className="h-3 w-3" />
                      {t("addAddress")}
                    </Button>
                  )}
              </div>

              <div className="p-5 space-y-3">
                {addressesLoading ? (
                  <div
                    className="space-y-2"
                    data-ocid="checkout.addresses.loading_state"
                  >
                    {[1, 2].map((i) => (
                      <Skeleton key={i} className="h-20 w-full rounded-xl" />
                    ))}
                  </div>
                ) : addresses.length === 0 && !showAddForm ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-2 border-dashed border-border rounded-xl p-8 text-center"
                    data-ocid="checkout.addresses.empty_state"
                  >
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      No saved addresses yet
                    </p>
                    <Button
                      size="sm"
                      className="cta-primary px-6 text-xs h-9"
                      onClick={() => setShowAddForm(true)}
                      data-ocid="checkout.no_address.add_button"
                    >
                      <Plus className="h-3.5 w-3.5 mr-1.5" />
                      {t("addAddress")}
                    </Button>
                  </motion.div>
                ) : (
                  <div
                    className="space-y-2.5"
                    data-ocid="checkout.address_list"
                  >
                    {addresses.map((addr, idx) =>
                      editingAddress?.id === addr.id ? (
                        <div key={addr.id.toString()}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                              {t("editAddress")}
                            </span>
                            <button
                              type="button"
                              onClick={() => setEditingAddress(null)}
                              className="text-muted-foreground hover:text-foreground p-1"
                              data-ocid="checkout.edit_address.close_button"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <AddressForm
                            initial={{
                              fullName: addr.fullName,
                              phone: addr.phone,
                              line1: addr.line1,
                              line2: addr.line2,
                              city: addr.city,
                              district: addr.district,
                              state: addr.state,
                              pincode: addr.pincode,
                            }}
                            onSave={handleUpdateAddress}
                            onCancel={() => setEditingAddress(null)}
                            isSaving={updateAddressMut.isPending}
                          />
                        </div>
                      ) : (
                        <AddressCard
                          key={addr.id.toString()}
                          address={addr}
                          index={idx + 1}
                          selected={selectedAddressId === addr.id}
                          onSelect={() => setSelectedAddressId(addr.id)}
                          onEdit={() => {
                            setEditingAddress(addr);
                            setShowAddForm(false);
                          }}
                        />
                      ),
                    )}
                  </div>
                )}

                <AnimatePresence>
                  {showAddForm && (
                    <motion.div
                      key="add-form"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      data-ocid="checkout.add_address.dialog"
                    >
                      <div className="flex items-center justify-between mb-2 mt-1">
                        <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                          {t("addAddress")}
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowAddForm(false)}
                          className="text-muted-foreground hover:text-foreground p-1"
                          data-ocid="checkout.add_address.close_button"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <AddressForm
                        onSave={handleSaveNewAddress}
                        onCancel={() => setShowAddForm(false)}
                        isSaving={addAddressMut.isPending}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Billing Address */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-subtle"
              data-ocid="checkout.billing.section"
            >
              <div className="px-5 py-3.5 border-b border-border">
                <h2 className="font-display font-semibold text-foreground text-sm flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
                    <CreditCard className="h-3.5 w-3.5 text-primary" />
                  </div>
                  Billing Address
                </h2>
              </div>
              <div className="px-5 py-4 flex items-center gap-3">
                <Switch
                  checked={billingSameAsShipping}
                  onCheckedChange={setBillingSameAsShipping}
                  id="billing-same"
                  data-ocid="checkout.billing_same.toggle"
                />
                <Label
                  htmlFor="billing-same"
                  className="text-sm cursor-pointer text-foreground"
                >
                  Same as shipping address
                </Label>
              </div>
              {!billingSameAsShipping && (
                <p className="text-xs text-muted-foreground bg-muted/30 mx-5 mb-4 px-3 py-2 rounded-lg border border-border">
                  Billing address is managed by Stripe during payment.
                </p>
              )}
            </motion.div>

            {/* Secure checkout note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="bg-emerald-500/6 border border-emerald-500/20 rounded-xl p-4 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                <Lock className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  Secure Checkout via Stripe.
                </span>{" "}
                Your card details are never stored on our servers. All
                transactions are 256-bit SSL encrypted.
              </div>
            </motion.div>

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                What happens next
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: CreditCard,
                    step: "1",
                    text: "You'll be redirected to Stripe's secure payment page",
                  },
                  {
                    icon: CheckCircle2,
                    step: "2",
                    text: "Complete payment with your card or UPI",
                  },
                  {
                    icon: Package,
                    step: "3",
                    text: "Receive order confirmation & tracking details",
                  },
                  {
                    icon: Truck,
                    step: "4",
                    text: "Books delivered to your doorstep in 3–7 days",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-accent">
                        {item.step}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              cartItems={cartItems}
              isLoading={cartLoading}
              promoDiscount={promoDiscount}
              promoApplied={promoApplied}
              promoCode={promoCode}
              onPromoChange={(v) => {
                setPromoCode(v);
                setPromoError(null);
              }}
              onApplyPromo={handleApplyPromo}
              promoLoading={validatePromoMut.isPending}
              promoError={promoError}
              onProceed={doCheckout}
              onRetry={doCheckout}
              isProcessing={isProcessing}
              canProceed={canProceed}
              stripeConfigured={stripeConfigured}
              hasPaymentError={hasPaymentError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
