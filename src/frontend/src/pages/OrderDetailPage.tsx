import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Download,
  MapPin,
  Package,
  PackageCheck,
  RefreshCw,
  Truck,
  Wallet,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { OrderStatus } from "../backend.d.ts";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useAuth } from "../hooks/use-auth";
import { useLanguage } from "../hooks/use-language";
import {
  useCancelOrder,
  useDownloadInvoice,
  useGetOrder,
  useUpdateOrderStatus,
} from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";

// ─── Types ────────────────────────────────────────────────────────────────────

type StatusConfig = {
  label: string;
  labelBn: string;
  className: string;
  dotClass: string;
};

const STATUS_CONFIG: Record<string, StatusConfig> = {
  processing: {
    label: "Processing",
    labelBn: "প্রক্রিয়া চলছে",
    className:
      "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    dotClass: "bg-amber-500",
  },
  packed: {
    label: "Packed",
    labelBn: "প্যাক করা হয়েছে",
    className:
      "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/40",
    dotClass: "bg-blue-500",
  },
  shipped: {
    label: "Shipped",
    labelBn: "পাঠানো হয়েছে",
    className:
      "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/40",
    dotClass: "bg-purple-500",
  },
  outForDelivery: {
    label: "Out for Delivery",
    labelBn: "ডেলিভারিতে আছে",
    className:
      "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/40",
    dotClass: "bg-orange-500",
  },
  delivered: {
    label: "Delivered",
    labelBn: "পৌঁছে গেছে",
    className:
      "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
    dotClass: "bg-emerald-500",
  },
  cancelled: {
    label: "Cancelled",
    labelBn: "বাতিল",
    className: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/40",
    dotClass: "bg-red-500",
  },
  refundRequested: {
    label: "Refund Requested",
    labelBn: "ফেরত চাওয়া হয়েছে",
    className:
      "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    dotClass: "bg-amber-500",
  },
  refunded: {
    label: "Refunded",
    labelBn: "ফেরত দেওয়া হয়েছে",
    className: "bg-muted text-muted-foreground border-border",
    dotClass: "bg-muted-foreground",
  },
};

// ─── 5-step timeline definition ───────────────────────────────────────────────

type StepDef = {
  key: string;
  backendStatus: OrderStatus | null;
  icon: typeof Package;
  en: string;
  bn: string;
};

const TIMELINE_STEPS: StepDef[] = [
  {
    key: "placed",
    backendStatus: "processing" as OrderStatus,
    icon: Package,
    en: "Order Placed",
    bn: "অর্ডার দেওয়া হয়েছে",
  },
  {
    key: "packed",
    backendStatus: null, // no direct OrderStatus — comes from history
    icon: PackageCheck,
    en: "Packed",
    bn: "প্যাক করা হয়েছে",
  },
  {
    key: "shipped",
    backendStatus: "shipped" as OrderStatus,
    icon: Truck,
    en: "Shipped",
    bn: "পাঠানো হয়েছে",
  },
  {
    key: "outForDelivery",
    backendStatus: null,
    icon: Truck,
    en: "Out for Delivery",
    bn: "ডেলিভারিতে আছে",
  },
  {
    key: "delivered",
    backendStatus: "delivered" as OrderStatus,
    icon: CheckCircle2,
    en: "Delivered",
    bn: "পৌঁছে গেছে",
  },
];

// map backend OrderStatus → step index
const STATUS_TO_STEP: Record<string, number> = {
  processing: 0,
  shipped: 2,
  delivered: 4,
};

function formatStepDate(ts: bigint, locale: string): string {
  return new Date(Number(ts) / 1_000_000).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatEstDelivery(ts: bigint, lang: "en" | "bn"): string {
  const date = new Date(Number(ts) / 1_000_000);
  return date.toLocaleDateString(lang === "bn" ? "bn-IN" : "en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ─── Vertical Stepper ─────────────────────────────────────────────────────────

function VerticalStepper({
  currentStatus,
  statusHistory,
  estimatedDeliveryDate,
  courierNote,
  lang,
}: {
  currentStatus: OrderStatus;
  statusHistory: Array<{
    status: OrderStatus;
    timestamp: bigint;
    note: string;
  }>;
  estimatedDeliveryDate?: bigint;
  courierNote?: string;
  lang: "en" | "bn";
}) {
  const locale = lang === "bn" ? "bn-IN" : "en-IN";
  const currentStepIdx = STATUS_TO_STEP[currentStatus] ?? 0;

  // Build a map from step key → matching history entry
  const historyByStepKey: Record<string, { timestamp: bigint; note: string }> =
    {};
  for (const entry of statusHistory) {
    const stepIdx = STATUS_TO_STEP[entry.status];
    if (stepIdx !== undefined) {
      const stepKey = TIMELINE_STEPS[stepIdx]?.key;
      if (stepKey)
        historyByStepKey[stepKey] = {
          timestamp: entry.timestamp,
          note: entry.note,
        };
    }
  }

  return (
    <div className="space-y-4" data-ocid="order_detail.timeline">
      <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {lang === "bn" ? "ডেলিভারি স্ট্যাটাস" : "Delivery Status"}
      </h2>

      <div className="relative pl-10">
        {/* Vertical connector */}
        <div
          className="absolute left-[18px] top-4 bottom-4 w-0.5"
          style={{ background: "oklch(var(--border))" }}
        />
        {/* Progress fill */}
        <div
          className="absolute left-[18px] top-4 w-0.5 transition-all duration-700"
          style={{
            background: "oklch(0.72 0.25 40)",
            height: `${(currentStepIdx / (TIMELINE_STEPS.length - 1)) * 100}%`,
          }}
        />

        <div className="space-y-0">
          {TIMELINE_STEPS.map((step, i) => {
            const done = i < currentStepIdx;
            const active = i === currentStepIdx;
            const future = i > currentStepIdx;
            const hist = historyByStepKey[step.key];
            const StepIcon = done ? CheckCircle2 : step.icon;

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className="relative flex items-start gap-4 pb-6 last:pb-0"
                data-ocid={`order_detail.step.${i + 1}`}
              >
                {/* Step icon */}
                <div
                  className={`absolute -left-10 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-all duration-300 shrink-0 ${
                    done
                      ? "bg-accent text-accent-foreground shadow-elevated"
                      : active
                        ? "bg-accent text-accent-foreground ring-4 ring-accent/25 shadow-elevated"
                        : "bg-card border-2 border-border text-muted-foreground"
                  }`}
                >
                  <StepIcon size={15} />
                </div>

                {/* Step content */}
                <div className="flex-1 min-w-0 pt-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p
                      className={`text-sm font-bold leading-tight ${
                        active
                          ? "text-accent"
                          : done
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                      }`}
                    >
                      {lang === "bn" ? step.bn : step.en}
                    </p>
                    {active && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                        {lang === "bn" ? "বর্তমান" : "Current"}
                      </span>
                    )}
                  </div>

                  {/* Date & note from history */}
                  {hist && (
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {formatStepDate(hist.timestamp, locale)}
                      {hist.note &&
                        hist.note !== "Order placed" &&
                        ` · ${hist.note}`}
                    </p>
                  )}

                  {future && (
                    <p className="text-xs text-muted-foreground/40 mt-0.5">
                      {lang === "bn" ? "অপেক্ষমাণ" : "Pending"}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Estimated delivery */}
      {estimatedDeliveryDate && (
        <div className="mt-4 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-accent/30 bg-accent/8">
          <Calendar size={15} className="text-accent shrink-0" />
          <p className="text-sm font-semibold text-accent">
            {lang === "bn" ? "আনুমানিক ডেলিভারি: " : "Estimated Delivery: "}
            <span className="font-bold">
              {formatEstDelivery(estimatedDeliveryDate, lang)}
            </span>
          </p>
        </div>
      )}

      {/* Courier note */}
      {courierNote && (
        <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl border border-border bg-muted/30">
          <Truck size={14} className="text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">
              {lang === "bn" ? "কুরিয়ার নোট: " : "Courier Note: "}
            </span>
            {courierNote}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Admin Status Update Form ─────────────────────────────────────────────────

function AdminStatusForm({
  orderId,
  currentStatus,
}: {
  orderId: bigint;
  currentStatus: OrderStatus;
}) {
  const [status, setStatus] = useState<OrderStatus>(currentStatus);
  const [note, setNote] = useState("");
  const [estDate, setEstDate] = useState("");
  const [courierNote, setCourierNote] = useState("");
  const { mutate: updateStatus, isPending } = useUpdateOrderStatus();

  const ADMIN_STATUSES: Array<{ value: OrderStatus; label: string }> = [
    { value: "processing" as OrderStatus, label: "Processing" },
    { value: "shipped" as OrderStatus, label: "Shipped" },
    { value: "delivered" as OrderStatus, label: "Delivered" },
    { value: "cancelled" as OrderStatus, label: "Cancelled" },
    { value: "refundRequested" as OrderStatus, label: "Refund Requested" },
    { value: "refunded" as OrderStatus, label: "Refunded" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const estDeliveryBigInt = estDate
      ? BigInt(new Date(estDate).getTime()) * BigInt(1_000_000)
      : null;
    updateStatus(
      {
        orderId,
        status,
        note: note.trim() || "Status updated by admin",
        estimatedDeliveryDate: estDeliveryBigInt,
        courierNote: courierNote.trim() || null,
      },
      {
        onSuccess: () => {
          toast.success("Order status updated!");
          setNote("");
          setEstDate("");
          setCourierNote("");
        },
        onError: () => toast.error("Failed to update status"),
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 pt-4 border-t border-border"
      data-ocid="order_detail.admin_form"
    >
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Admin: Update Status
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Status select */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            New Status
          </Label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as OrderStatus)}
            className="w-full h-9 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            data-ocid="order_detail.admin_status_select"
          >
            {ADMIN_STATUSES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Estimated delivery date */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            Estimated Delivery Date (optional)
          </Label>
          <Input
            type="date"
            value={estDate}
            onChange={(e) => setEstDate(e.target.value)}
            className="h-9 rounded-lg bg-background border-input text-sm"
            data-ocid="order_detail.admin_est_delivery_input"
          />
        </div>
      </div>

      {/* Courier note */}
      <div className="space-y-1.5">
        <Label className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
          Courier Note (optional)
        </Label>
        <Input
          type="text"
          value={courierNote}
          onChange={(e) => setCourierNote(e.target.value)}
          placeholder="e.g. Blue Dart - AWB 123456789"
          className="h-9 rounded-lg bg-background border-input text-sm"
          data-ocid="order_detail.admin_courier_note_input"
        />
      </div>

      {/* Status note */}
      <div className="space-y-1.5">
        <Label className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
          Internal Note (optional)
        </Label>
        <Input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="e.g. Picked up from warehouse"
          className="h-9 rounded-lg bg-background border-input text-sm"
          data-ocid="order_detail.admin_note_input"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="cta-primary h-9 px-5 text-sm"
        data-ocid="order_detail.admin_update_button"
      >
        {isPending ? "Updating…" : "Update Status"}
      </Button>
    </form>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function OrderDetailPage() {
  const { id } = useParams({ from: "/orders/$id" });
  const { t, lang } = useLanguage();
  const { isAuthenticated } = useAuth();
  const orderId = BigInt(id);
  const { data: order, isLoading } = useGetOrder(orderId);
  const { mutate: downloadInvoice, isPending: isDownloading } =
    useDownloadInvoice();
  const { mutate: cancelOrder, isPending: isCancelling } = useCancelOrder();
  const { mutate: updateStatus, isPending: isRefundPending } =
    useUpdateOrderStatus();

  // Admin gate — simple frontend check (dev/owner only)
  const [isAdmin] = useState(() => {
    try {
      return sessionStorage.getItem("adminUnlocked") === "true";
    } catch {
      return false;
    }
  });

  const handleDownloadInvoice = () => {
    downloadInvoice(orderId, {
      onSuccess: (data) => {
        const blob = new Blob([data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice-${id}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success("Invoice downloaded!");
      },
      onError: () => toast.error("Failed to download invoice"),
    });
  };

  const handleCancelOrder = () => {
    cancelOrder(orderId, {
      onSuccess: () =>
        toast.success(
          lang === "bn" ? "অর্ডার বাতিল করা হয়েছে" : "Order cancelled successfully",
        ),
      onError: () =>
        toast.error(
          lang === "bn" ? "অর্ডার বাতিল করতে ব্যর্থ" : "Failed to cancel order",
        ),
    });
  };

  const handleRefundRequest = () => {
    updateStatus(
      {
        orderId,
        status: "refundRequested" as OrderStatus,
        note: "Refund requested by customer",
        estimatedDeliveryDate: null,
        courierNote: null,
      },
      {
        onSuccess: () =>
          toast.success(
            lang === "bn" ? "ফেরতের অনুরোধ সম্পন্ন" : "Refund request submitted",
          ),
        onError: () =>
          toast.error(
            lang === "bn" ? "ফেরতের অনুরোধ ব্যর্থ" : "Failed to request refund",
          ),
      },
    );
  };

  if (!isAuthenticated) {
    return (
      <div
        className="max-w-3xl mx-auto px-4 py-16 text-center"
        data-ocid="order_detail.login_required"
      >
        <p className="text-muted-foreground">{t("signInDesc")}</p>
        <Link
          to="/orders"
          className="text-accent hover:underline text-sm mt-2 inline-block"
        >
          {t("back")}
        </Link>
      </div>
    );
  }

  if (isLoading) return <LoadingSpinner text={t("loading")} />;

  if (!order) {
    return (
      <div
        className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center gap-3"
        data-ocid="order_detail.error_state"
      >
        <Package size={52} className="text-muted-foreground/30" />
        <p className="text-foreground font-semibold">Order not found</p>
        <Link
          to="/orders"
          data-ocid="order_detail.back_link"
          className="text-accent hover:underline text-sm"
        >
          ← {t("back")}
        </Link>
      </div>
    );
  }

  const cfg = STATUS_CONFIG[order.status] ?? STATUS_CONFIG.processing;
  const isActiveOrder = !["cancelled", "refundRequested", "refunded"].includes(
    order.status,
  );
  const canCancel = order.status === ("processing" as OrderStatus);
  const canRefund = order.status === ("delivered" as OrderStatus);
  const orderDate = new Date(Number(order.createdAt) / 1_000_000);

  // Build status history — use the actual StatusUpdate shape from backend
  const statusHistory = (order.statusHistory ?? []).map((h) => ({
    status: h.status,
    timestamp: h.updatedAt,
    note: h.note,
  }));

  return (
    <div className="bg-muted/20 min-h-screen" data-ocid="order_detail.page">
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 space-y-4">
        {/* ── Page header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevation p-5"
        >
          <div className="flex items-start gap-3">
            <Link
              to="/orders"
              data-ocid="order_detail.back_link"
              className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-accent mt-0.5"
              aria-label="Back to orders"
            >
              <ArrowLeft size={18} />
            </Link>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-xl font-display font-bold text-foreground tracking-tight">
                  {lang === "bn" ? "অর্ডার" : "Order"}
                </h1>
                <span className="font-mono text-accent text-base font-bold">
                  #{id}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cfg.className}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${cfg.dotClass}`}
                  />
                  {lang === "bn" ? cfg.labelBn : cfg.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                <Clock size={13} />
                {orderDate.toLocaleDateString(
                  lang === "bn" ? "bn-IN" : "en-IN",
                  {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                )}
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleDownloadInvoice}
              disabled={isDownloading}
              data-ocid="order_detail.download_invoice_button"
              className="btn-secondary text-xs px-3 py-2 h-auto shrink-0 hidden sm:flex items-center gap-1.5"
            >
              <Download size={13} />
              {isDownloading
                ? lang === "bn"
                  ? "ডাউনলোড..."
                  : "Downloading..."
                : lang === "bn"
                  ? "ইনভয়েস"
                  : "Invoice"}
            </Button>
          </div>
        </motion.div>

        {/* ── Tracking timeline ───────────────────────── */}
        {isActiveOrder && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="card-elevation p-5"
          >
            <VerticalStepper
              currentStatus={order.status}
              statusHistory={statusHistory}
              estimatedDeliveryDate={
                order.estimatedDeliveryDate !== undefined &&
                order.estimatedDeliveryDate !== null
                  ? (order.estimatedDeliveryDate as bigint)
                  : undefined
              }
              courierNote={
                order.courierNote !== undefined && order.courierNote !== null
                  ? (order.courierNote as string)
                  : undefined
              }
              lang={lang}
            />

            {/* Admin update form */}
            {isAdmin && (
              <AdminStatusForm orderId={orderId} currentStatus={order.status} />
            )}
          </motion.div>
        )}

        {/* ── Items breakdown ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="card-elevation overflow-hidden"
          data-ocid="order_detail.items"
        >
          <div className="px-5 py-3 border-b border-border bg-muted/30 flex items-center gap-2">
            <Package size={15} className="text-accent" />
            <h2 className="text-sm font-bold text-foreground">
              {order.items.length}{" "}
              {lang === "bn"
                ? "টি বই"
                : order.items.length === 1
                  ? "Item"
                  : "Items"}
            </h2>
          </div>
          <div className="divide-y divide-border">
            {order.items.map((item, idx) => (
              <div
                key={item.productId.toString()}
                className="flex items-start gap-4 px-5 py-4 hover:bg-muted/20 transition-colors group"
                data-ocid={`order_detail.item.${idx + 1}`}
              >
                <Link
                  to="/product/$id"
                  params={{ id: item.productId.toString() }}
                  className="shrink-0 w-14 rounded-lg bg-primary/10 border border-border overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ height: "72px" }}
                >
                  <span className="text-2xl">📚</span>
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    to="/product/$id"
                    params={{ id: item.productId.toString() }}
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 leading-snug"
                  >
                    {item.titleEn}
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">
                    {lang === "bn" ? "পরিমাণ" : "Qty"}: {Number(item.quantity)}{" "}
                    <span className="mx-1">·</span>
                    {formatPrice(item.priceInPaisa)}{" "}
                    {lang === "bn" ? "প্রতিটি" : "each"}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold font-mono text-accent">
                    {formatPrice(
                      BigInt(Number(item.priceInPaisa) * Number(item.quantity)),
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Price summary + Shipping side-by-side on md+ ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Price summary */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="card-elevation p-5"
            data-ocid="order_detail.price_summary"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              {lang === "bn" ? "মূল্য বিবরণ" : "Price Details"}
            </h2>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t("subtotal")} ({order.items.length})
                </span>
                <span className="font-medium">
                  {formatPrice(order.totalInPaisa + order.discountInPaisa)}
                </span>
              </div>
              {order.promoCodeApplied && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                  <span>
                    {lang === "bn" ? "ছাড়" : "Promo"}:{" "}
                    <span className="font-mono text-xs">
                      {order.promoCodeApplied}
                    </span>
                  </span>
                  <span>−{formatPrice(order.discountInPaisa)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("delivery")}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  FREE
                </span>
              </div>
            </div>
            <Separator className="my-3" />
            <div className="flex justify-between items-center">
              <span className="font-bold text-base">{t("total")}</span>
              <span className="text-lg font-bold font-mono text-accent">
                {formatPrice(order.totalInPaisa)}
              </span>
            </div>
          </motion.div>

          {/* Shipping address */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevation p-5 space-y-3"
            data-ocid="order_detail.shipping_address"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {lang === "bn" ? "ডেলিভারি ঠিকানা" : "Delivery Address"}
            </h2>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} className="text-accent" />
              </div>
              <div className="text-sm space-y-0.5 min-w-0">
                <p className="font-semibold text-foreground">
                  {order.shippingAddress.fullName}
                </p>
                <p className="text-muted-foreground">
                  {order.shippingAddress.line1}
                </p>
                {order.shippingAddress.line2 && (
                  <p className="text-muted-foreground">
                    {order.shippingAddress.line2}
                  </p>
                )}
                <p className="text-muted-foreground">
                  {order.shippingAddress.city}, {order.shippingAddress.district}
                </p>
                <p className="text-muted-foreground">
                  {order.shippingAddress.state} —{" "}
                  {order.shippingAddress.pincode}
                </p>
                <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
                  📞 {order.shippingAddress.phone}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Payment method ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="card-elevation p-5"
          data-ocid="order_detail.payment_method"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
              <Wallet size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
                {lang === "bn" ? "পেমেন্ট পদ্ধতি" : "Payment Method"}
              </p>
              <p className="text-sm font-semibold text-foreground mt-0.5">
                {order.stripePaymentIntentId
                  ? `Card · ****${order.stripePaymentIntentId.slice(-4).toUpperCase()}`
                  : lang === "bn"
                    ? "অনলাইন পেমেন্ট"
                    : "Online Payment"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Action buttons ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {/* Download invoice (mobile visible) */}
          <Button
            type="button"
            onClick={handleDownloadInvoice}
            disabled={isDownloading}
            data-ocid="order_detail.download_invoice_button_mobile"
            className="sm:hidden btn-secondary flex items-center justify-center gap-2 h-11"
          >
            <Download size={15} />
            {isDownloading
              ? lang === "bn"
                ? "ডাউনলোড হচ্ছে..."
                : "Downloading..."
              : t("downloadInvoice")}
          </Button>

          {canCancel && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  data-ocid="order_detail.cancel_order_button"
                  className="flex-1 h-11 rounded-lg border-red-500/50 text-red-600 dark:text-red-400 hover:bg-red-500/10 font-semibold gap-2"
                >
                  <XCircle size={15} />
                  {lang === "bn" ? "অর্ডার বাতিল করুন" : "Cancel Order"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent
                data-ocid="order_detail.cancel_dialog"
                className="rounded-xl"
              >
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    {lang === "bn" ? "অর্ডার বাতিল করবেন?" : "Cancel this order?"}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {lang === "bn"
                      ? "এই অর্ডারটি বাতিল হয়ে যাবে। এই পদক্ষেপটি পূর্বাবস্থায় ফেরানো যাবে না।"
                      : "This order will be permanently cancelled and cannot be undone."}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel data-ocid="order_detail.cancel_dialog_cancel_button">
                    {lang === "bn" ? "না, রাখুন" : "Keep Order"}
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleCancelOrder}
                    disabled={isCancelling}
                    data-ocid="order_detail.cancel_dialog_confirm_button"
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    {isCancelling
                      ? lang === "bn"
                        ? "বাতিল হচ্ছে..."
                        : "Cancelling..."
                      : lang === "bn"
                        ? "হ্যাঁ, বাতিল করুন"
                        : "Yes, Cancel"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          {canRefund && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  data-ocid="order_detail.refund_button"
                  className="flex-1 h-11 rounded-lg border-amber-500/50 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-semibold gap-2"
                >
                  <RefreshCw size={15} />
                  {lang === "bn" ? "ফেরত চাইুন" : "Request Refund"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent
                data-ocid="order_detail.refund_dialog"
                className="rounded-xl"
              >
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    {lang === "bn" ? "ফেরত চাইবেন?" : "Request a refund?"}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {lang === "bn"
                      ? "আপনি কি এই অর্ডারের জন্য ফেরত চাইতে চান?"
                      : "Are you sure you want to request a refund for this order?"}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel data-ocid="order_detail.refund_dialog_cancel_button">
                    {lang === "bn" ? "না" : "Cancel"}
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleRefundRequest}
                    disabled={isRefundPending}
                    data-ocid="order_detail.refund_dialog_confirm_button"
                    className="cta-primary"
                  >
                    {isRefundPending
                      ? lang === "bn"
                        ? "পাঠানো হচ্ছে..."
                        : "Submitting..."
                      : lang === "bn"
                        ? "হ্যাঁ, ফেরত চাই"
                        : "Yes, Request Refund"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </motion.div>
      </div>
    </div>
  );
}
