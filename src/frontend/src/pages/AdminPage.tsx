import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import {
  BarChart2,
  BookOpen,
  CheckCircle2,
  Edit2,
  Eye,
  FlameIcon,
  Inbox,
  ListOrdered,
  Lock,
  MessageSquare,
  Package,
  Plus,
  RefreshCw,
  RotateCcw,
  ShoppingBag,
  Star,
  Tag,
  Trash2,
  TrendingDown,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { EnquiryStatus, OrderStatus } from "../backend";
import type {
  AdminReviewView,
  CreateFlashSaleInput,
  CreateProductInput,
  Enquiry,
  FlashSaleView,
  Genre,
  Language,
  Order,
  ProductView,
  PromoCode,
} from "../backend.d.ts";

import { ThankYouImage } from "../components/FloatingEnquiry";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useAuth, useIsAdmin } from "../hooks/use-auth";
import { useLanguage } from "../hooks/use-language";
import {
  type BulkImportResult,
  type OrderedQuantityRow,
  useApproveReview,
  useBulkImportProducts,
  useCreateFlashSale,
  useCreateProduct,
  useCreatePromoCode,
  useDeactivateFlashSale,
  useDeactivatePromoCode,
  useDeleteProduct,
  useDeleteReview,
  useGetAdminAnalytics,
  useGetAnalyticsEvents,
  useGetOrderedQuantityReport,
  useListAllEnquiries,
  useListAllOrders,
  useListAllPromoCodes,
  useListAllReturns,
  useListAllReviews,
  useListFlashSales,
  useListProducts,
  useRefreshBestsellers,
  useUpdateEnquiryStatus,
  useUpdateOrderStatus,
  useUpdateProduct,
  useUpdateStock,
} from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";

// ─── Admin Password Gate ───────────────────────────────────────────────────────

const ADMIN_PASSWORD = "Anirban@2006";

function AdminPasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminUnlocked", "true");
      onUnlock();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "oklch(var(--background))" }}
      data-ocid="admin.password_gate"
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8 space-y-7"
        style={{
          background: "oklch(var(--card))",
          border: "1px solid oklch(var(--border))",
          boxShadow: "0 8px 40px oklch(0 0 0 / 0.25)",
        }}
      >
        <div className="text-center space-y-3">
          <div
            className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
              boxShadow: "0 4px 16px oklch(var(--accent) / 0.35)",
            }}
          >
            <Lock
              size={26}
              style={{ color: "oklch(var(--accent-foreground))" }}
            />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-tight">
              VIDYAMANDIR
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Admin Access — Developer Only
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">
              Admin Password
            </Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="input-field h-11 rounded-xl text-base text-center tracking-widest"
              data-ocid="admin.password_input"
              placeholder="••••••••••••"
              autoFocus
              required
            />
          </div>

          {error && (
            <p
              className="text-xs font-semibold text-center py-2.5 px-3 rounded-lg"
              style={{
                background: "oklch(var(--destructive) / 0.1)",
                color: "oklch(var(--destructive))",
              }}
              data-ocid="admin.password_error_state"
            >
              Incorrect password. Access denied.
            </p>
          )}

          <button
            type="submit"
            data-ocid="admin.password_submit_button"
            className="cta-primary w-full py-3 text-sm font-bold"
          >
            Unlock Admin Panel
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ENQUIRY_STATUS_STYLES: Record<
  string,
  { bg: string; text: string; dot: string; label: string }
> = {
  new: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    dot: "bg-blue-400",
    label: "New",
  },
  viewed: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    dot: "bg-amber-400",
    label: "Viewed",
  },
  replied: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    dot: "bg-green-400",
    label: "Replied",
  },
};

const STATUS_STYLES: Record<
  string,
  { bg: string; text: string; dot: string; label: string }
> = {
  processing: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    dot: "bg-blue-400",
    label: "Processing",
  },
  shipped: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    dot: "bg-amber-400",
    label: "Shipped",
  },
  delivered: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    dot: "bg-green-400",
    label: "Delivered",
  },
  cancelled: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    dot: "bg-red-400",
    label: "Cancelled",
  },
  refundRequested: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    dot: "bg-purple-400",
    label: "Refund Req.",
  },
  refunded: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-muted-foreground",
    label: "Refunded",
  },
};

const GENRES = [
  "fiction",
  "bengaliClassics",
  "poetry",
  "nonFiction",
  "childrens",
  "academic",
  "history",
  "biography",
  "religion",
  "science",
  "other",
] as const;

const ORDER_STATUSES: OrderStatus[] = [
  OrderStatus.processing,
  OrderStatus.shipped,
  OrderStatus.delivered,
  OrderStatus.cancelled,
  OrderStatus.refundRequested,
  OrderStatus.refunded,
];

const EMPTY_PRODUCT: CreateProductInput = {
  info: {
    titleEn: "",
    titleBn: "",
    authorEn: "",
    authorBn: "",
    descriptionEn: "",
    descriptionBn: "",
  },
  coverImageUrl: "",
  isbn: "",
  publisher: "",
  priceInPaisa: BigInt(29900),
  language: "bengali" as Language,
  stockCount: BigInt(100),
  genre: "fiction" as Genre,
  publicationDate: BigInt(Date.now()) * BigInt(1_000_000),
};

const EMPTY_FLASH_SALE: CreateFlashSaleInput = {
  titleEn: "",
  titleBn: "",
  startTime: BigInt(Date.now()) * BigInt(1_000_000),
  endTime: BigInt(Date.now() + 24 * 60 * 60 * 1000) * BigInt(1_000_000),
  items: [],
};

function StatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.processing;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text} border border-current/20`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {style.label}
    </span>
  );
}

function EnquiryStatusBadge({ status }: { status: string }) {
  const style = ENQUIRY_STATUS_STYLES[status] ?? ENQUIRY_STATUS_STYLES.new;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text} border border-current/20`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {style.label}
    </span>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  action,
}: {
  icon: React.ElementType;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <Icon size={15} className="text-primary" />
        </div>
        <h2 className="font-display font-bold text-sm uppercase tracking-widest text-foreground">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  iconBg,
  trend,
  loading,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  iconBg: string;
  trend?: { direction: "up" | "down"; pct: string };
  loading: boolean;
}) {
  return (
    <div className="card-elevation p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <Icon size={18} />
        </div>
        {trend && !loading && (
          <div
            className={`flex items-center gap-1 text-xs font-semibold ${trend.direction === "up" ? "text-green-400" : "text-red-400"}`}
          >
            {trend.direction === "up" ? (
              <TrendingUp size={13} />
            ) : (
              <TrendingDown size={13} />
            )}
            {trend.pct}
          </div>
        )}
      </div>
      {loading ? (
        <Skeleton className="h-8 w-28 rounded-lg" />
      ) : (
        <p className="font-mono font-bold text-3xl text-foreground tabular-nums">
          {value}
        </p>
      )}
      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

function StarRating({ rating }: { rating: bigint }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          className={
            s <= Number(rating)
              ? "text-amber-400 fill-amber-400"
              : "text-muted-foreground/30"
          }
        />
      ))}
    </div>
  );
}

// ─── Analytics Events Section ─────────────────────────────────────────────────

function AnalyticsEventsSection() {
  const { data: events, isLoading } = useGetAnalyticsEvents(
    BigInt(0),
    BigInt(50),
  );

  const formatTs = (ts: bigint) =>
    new Date(Number(ts) / 1_000_000).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="mt-6" data-ocid="admin.analytics_events_section">
      <SectionHeader icon={TrendingUp} title="Recent Analytics Events" />
      {isLoading ? (
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-10 w-full rounded-lg" />
          ))}
        </div>
      ) : events?.length ? (
        <div
          className="card-elevation overflow-x-auto"
          data-ocid="admin.analytics_events_table"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {[
                  { label: "Timestamp", align: "left" },
                  { label: "Event Type", align: "left" },
                  {
                    label: "Product",
                    align: "right",
                    hidden: "hidden sm:table-cell",
                  },
                  {
                    label: "Order",
                    align: "right",
                    hidden: "hidden sm:table-cell",
                  },
                  { label: "Amount", align: "right" },
                ].map(({ label, align, hidden }) => (
                  <th
                    key={label}
                    className={`p-3 text-xs text-muted-foreground font-bold uppercase tracking-widest text-${align} ${hidden ?? ""}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((ev, idx) => (
                <tr
                  key={`${ev.timestamp.toString()}-${idx}`}
                  className="border-b border-border hover:bg-muted/15 transition-smooth"
                  data-ocid={`admin.analytics_event.${idx + 1}`}
                >
                  <td className="p-3 text-xs text-muted-foreground">
                    {formatTs(ev.timestamp)}
                  </td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                      {ev.eventType}
                    </span>
                  </td>
                  <td className="p-3 text-right font-mono text-xs hidden sm:table-cell text-muted-foreground">
                    {ev.productId !== undefined && ev.productId !== null
                      ? `#${ev.productId.toString()}`
                      : "—"}
                  </td>
                  <td className="p-3 text-right font-mono text-xs hidden sm:table-cell text-muted-foreground">
                    {ev.orderId !== undefined && ev.orderId !== null
                      ? `#${ev.orderId.toString()}`
                      : "—"}
                  </td>
                  <td className="p-3 text-right font-mono text-xs font-semibold">
                    {ev.amount !== undefined && ev.amount !== null
                      ? formatPrice(ev.amount)
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="card-elevation flex flex-col items-center py-12 gap-3"
          data-ocid="admin.analytics_events.empty_state"
        >
          <BarChart2 size={28} className="text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">
            No analytics events yet
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Analytics Tab ────────────────────────────────────────────────────────────

function AnalyticsTab({
  analyticsLoading,
  analytics,
  products,
}: {
  analyticsLoading: boolean;
  analytics:
    | {
        totalRevenueInPaisa: bigint;
        totalOrders: bigint;
        totalProducts: bigint;
        totalUsers: bigint;
        bestsellers: Array<[bigint, bigint]>;
        recentRevenueInPaisa: bigint;
        recentOrderCount: bigint;
      }
    | undefined;
  products: ProductView[] | undefined;
}) {
  const statCards = [
    {
      label: "Total Revenue",
      value: analytics ? formatPrice(analytics.totalRevenueInPaisa) : "—",
      icon: TrendingUp,
      iconBg: "bg-accent/15 text-accent",
      trend: { direction: "up" as const, pct: "+12%" },
    },
    {
      label: "Total Orders",
      value: analytics?.totalOrders?.toString() ?? "—",
      icon: ShoppingBag,
      iconBg: "bg-blue-500/15 text-blue-400",
      trend: { direction: "up" as const, pct: "+8%" },
    },
    {
      label: "Total Products",
      value: analytics?.totalProducts?.toString() ?? "—",
      icon: Package,
      iconBg: "bg-green-500/15 text-green-400",
    },
    {
      label: "Total Users",
      value: analytics?.totalUsers?.toString() ?? "—",
      icon: Users,
      iconBg: "bg-purple-500/15 text-purple-400",
      trend: { direction: "up" as const, pct: "+5%" },
    },
  ];

  const productMap = new Map(products?.map((p) => [p.id.toString(), p]) ?? []);
  const lowStock = products?.filter((p) => Number(p.stockCount) < 5) ?? [];

  return (
    <div
      className="space-y-6 animate-fade-in"
      data-ocid="admin.analytics_section"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(({ label, value, icon, iconBg, trend }) => (
          <StatCard
            key={label}
            label={label}
            value={value}
            icon={icon}
            iconBg={iconBg}
            trend={trend}
            loading={analyticsLoading}
          />
        ))}
      </div>

      {analytics && (
        <div
          className="rounded-2xl p-6 border border-accent/30 overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--accent)/0.12), oklch(var(--card)))",
          }}
        >
          <div
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(var(--accent)), transparent)",
            }}
          />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-semibold">
                Last 30 Days Revenue
              </p>
              <p className="text-2xl font-bold font-mono text-accent">
                {formatPrice(analytics.recentRevenueInPaisa)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-semibold">
                Recent Orders
              </p>
              <p className="text-2xl font-bold font-mono text-foreground">
                {analytics.recentOrderCount.toString()}
              </p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-semibold">
                Avg Order Value
              </p>
              <p className="text-2xl font-bold font-mono text-foreground">
                {analytics.recentOrderCount > BigInt(0)
                  ? formatPrice(
                      analytics.recentRevenueInPaisa /
                        analytics.recentOrderCount,
                    )
                  : "—"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Low Stock Warnings */}
      {lowStock.length > 0 && (
        <div>
          <SectionHeader
            icon={TrendingDown}
            title={`Low Stock Warnings (${lowStock.length})`}
          />
          <div
            className="card-elevation overflow-hidden"
            data-ocid="admin.low_stock_list"
          >
            {lowStock.map((p, idx) => (
              <div
                key={p.id.toString()}
                className={`flex items-center gap-4 px-5 py-3.5 ${idx < lowStock.length - 1 ? "border-b border-border" : ""} hover:bg-muted/20 transition-smooth`}
                data-ocid={`admin.low_stock.${idx + 1}`}
              >
                <div className="w-8 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                  {p.coverImageUrl ? (
                    <img
                      src={p.coverImageUrl}
                      alt={p.info.titleEn}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  ) : (
                    <BookOpen size={13} className="text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {p.info.titleEn}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {p.info.authorEn}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className={`font-mono font-bold text-lg ${p.stockCount === BigInt(0) ? "text-destructive" : "text-amber-400"}`}
                  >
                    {Number(p.stockCount)}
                  </span>
                  <p className="text-xs text-muted-foreground">units left</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bestsellers */}
      <div>
        <SectionHeader icon={TrendingUp} title="Top Bestsellers" />
        {analyticsLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-14 w-full rounded-xl" />
            ))}
          </div>
        ) : analytics?.bestsellers.length ? (
          <div
            className="card-elevation overflow-hidden"
            data-ocid="admin.bestsellers_list"
          >
            {analytics.bestsellers.map(([productId, soldCount], idx) => {
              const product = productMap.get(productId.toString());
              return (
                <div
                  key={productId.toString()}
                  className={`flex items-center gap-4 px-5 py-3.5 ${idx < analytics.bestsellers.length - 1 ? "border-b border-border" : ""} hover:bg-muted/20 transition-smooth`}
                  data-ocid={`admin.bestseller.${idx + 1}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono font-bold text-sm ${idx === 0 ? "bg-amber-500/20 text-amber-400" : idx === 1 ? "bg-muted text-muted-foreground" : "bg-muted/50 text-muted-foreground/70"}`}
                  >
                    #{idx + 1}
                  </div>
                  {product?.coverImageUrl && (
                    <img
                      src={product.coverImageUrl}
                      alt={product.info.titleEn}
                      className="w-8 h-10 object-cover rounded-sm shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">
                      {product?.info.titleEn ?? `Product #${productId}`}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {product?.info.authorEn ?? ""}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-bold font-mono text-accent">
                      {soldCount.toString()}
                    </p>
                    <p className="text-xs text-muted-foreground">sold</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="card-elevation flex flex-col items-center py-12 gap-3"
            data-ocid="admin.bestsellers.empty_state"
          >
            <BookOpen size={28} className="text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground">No sales data yet</p>
          </div>
        )}
      </div>

      {/* Analytics Events */}
      <AnalyticsEventsSection />
    </div>
  );
}

// ─── Products Tab ─────────────────────────────────────────────────────────────

function ProductsTab({
  products,
  productsLoading,
  onAdd,
  onEdit,
  onDelete,
  onUpdateStock,
}: {
  products: ProductView[] | undefined;
  productsLoading: boolean;
  onAdd: () => void;
  onEdit: (p: ProductView) => void;
  onDelete: (id: bigint) => void;
  onUpdateStock: (p: ProductView) => void;
}) {
  return (
    <div className="animate-fade-in" data-ocid="admin.products_section">
      <SectionHeader
        icon={Package}
        title={`Products (${products?.length ?? 0})`}
        action={
          <button
            type="button"
            onClick={onAdd}
            data-ocid="admin.add_product_button"
            className="cta-primary flex items-center gap-1.5 text-xs px-4 py-2"
          >
            <Plus size={13} /> Add Product
          </button>
        }
      />
      {productsLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="card-elevation overflow-x-auto">
          <table className="w-full text-sm" data-ocid="admin.products_table">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {["Product", "Price", "Stock", "Genre", "Lang", "Actions"].map(
                  (h, i) => (
                    <th
                      key={h}
                      className={`p-4 text-xs text-muted-foreground font-bold uppercase tracking-widest ${i === 0 ? "text-left" : i === 5 ? "text-center" : "text-right"} ${i === 3 || i === 4 ? "hidden sm:table-cell" : ""}`}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {products?.map((p, idx) => (
                <tr
                  key={p.id.toString()}
                  className="border-b border-border hover:bg-muted/15 transition-smooth"
                  data-ocid={`admin.product.${idx + 1}`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {p.coverImageUrl ? (
                        <img
                          src={p.coverImageUrl}
                          alt={p.info.titleEn}
                          className="w-8 h-10 object-cover rounded-sm shrink-0"
                        />
                      ) : (
                        <div className="w-8 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                          <BookOpen
                            size={13}
                            className="text-muted-foreground"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold truncate max-w-[160px] text-xs">
                          {p.info.titleEn}
                        </p>
                        <p className="text-xs text-muted-foreground truncate max-w-[160px]">
                          {p.info.titleBn}
                        </p>
                        <p className="text-xs text-muted-foreground/60 truncate">
                          {p.info.authorEn}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right font-mono font-semibold text-xs">
                    {formatPrice(p.priceInPaisa)}
                  </td>
                  <td className="p-4 text-right">
                    <span
                      className={`font-mono text-sm font-bold ${p.stockCount === BigInt(0) ? "text-destructive" : Number(p.stockCount) < 10 ? "text-amber-400" : "text-green-400"}`}
                    >
                      {Number(p.stockCount)}
                    </span>
                  </td>
                  <td className="p-4 text-center hidden sm:table-cell">
                    <Badge className="rounded-full text-xs bg-muted text-muted-foreground border-0 capitalize">
                      {p.genre}
                    </Badge>
                  </td>
                  <td className="p-4 text-center hidden sm:table-cell">
                    <Badge className="rounded-full text-xs bg-muted/60 text-muted-foreground border-0 capitalize">
                      {p.language}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => onUpdateStock(p)}
                        data-ocid={`admin.update_stock.${idx + 1}`}
                        className="h-8 w-8 p-0 rounded-lg text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10"
                        title="Update Stock"
                      >
                        <RefreshCw size={13} />
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => onEdit(p)}
                        data-ocid={`admin.edit_product.${idx + 1}`}
                        className="h-8 w-8 p-0 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10"
                        title="Edit"
                      >
                        <Edit2 size={13} />
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => onDelete(p.id)}
                        data-ocid={`admin.delete_product.${idx + 1}`}
                        className="h-8 w-8 p-0 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        title="Delete"
                      >
                        <Trash2 size={13} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {!products?.length && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-16 text-center"
                    data-ocid="admin.products.empty_state"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <BookOpen
                        size={28}
                        className="text-muted-foreground/30"
                      />
                      <p className="text-sm text-muted-foreground">
                        No products yet. Add your first product.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Flash Sales Tab ───────────────────────────────────────────────────────────

function FlashSalesTab({
  flashSales,
  flashSalesLoading,
  products,
  onDeactivate: _onDeactivate,
  onCreateNew,
}: {
  flashSales: FlashSaleView[] | undefined;
  flashSalesLoading: boolean;
  products: ProductView[] | undefined;
  onDeactivate: (id: bigint) => void;
  onCreateNew: () => void;
}) {
  const formatTime = (ts: bigint) =>
    new Date(Number(ts) / 1_000_000).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="animate-fade-in" data-ocid="admin.flash_sales_section">
      <SectionHeader
        icon={Zap}
        title={`Flash Sales (${flashSales?.length ?? 0})`}
        action={
          <button
            type="button"
            onClick={onCreateNew}
            data-ocid="admin.create_flash_sale_button"
            className="cta-primary flex items-center gap-1.5 text-xs px-4 py-2"
          >
            <Plus size={13} /> New Flash Sale
          </button>
        }
      />
      {flashSalesLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      ) : flashSales?.length ? (
        <div className="space-y-3" data-ocid="admin.flash_sales_list">
          {flashSales.map((sale, idx) => (
            <div
              key={sale.id.toString()}
              className={`card-elevation p-5 ${sale.isCurrentlyActive ? "border-accent/40" : ""}`}
              data-ocid={`admin.flash_sale.${idx + 1}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <FlameIcon
                      size={15}
                      className={
                        sale.isCurrentlyActive
                          ? "text-accent"
                          : "text-muted-foreground/40"
                      }
                    />
                    <h3 className="font-semibold text-sm truncate">
                      {sale.titleEn}
                    </h3>
                    {sale.isCurrentlyActive && (
                      <span className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-accent/15 text-accent border border-accent/30 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />{" "}
                        LIVE
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>
                      Start:{" "}
                      <span className="text-foreground font-medium">
                        {formatTime(sale.startTime)}
                      </span>
                    </span>
                    <span>
                      End:{" "}
                      <span className="text-foreground font-medium">
                        {formatTime(sale.endTime)}
                      </span>
                    </span>
                    <span>
                      Items:{" "}
                      <span className="text-foreground font-medium">
                        {sale.items.length}
                      </span>
                    </span>
                  </div>
                  {sale.items.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sale.items.slice(0, 5).map((item) => {
                        const product = products?.find(
                          (p) => p.id === item.productId,
                        );
                        return (
                          <div
                            key={item.productId.toString()}
                            className="flex items-center gap-1.5 bg-muted/40 px-2.5 py-1 rounded-full text-xs border border-border"
                          >
                            <span className="text-muted-foreground truncate max-w-[90px]">
                              {product?.info.titleEn ?? `#${item.productId}`}
                            </span>
                            <span className="text-accent font-bold">
                              {item.discountPercent.toString()}% off
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                {sale.isCurrentlyActive && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => _onDeactivate(sale.id)}
                    data-ocid={`admin.deactivate_flash_sale.${idx + 1}`}
                    className="rounded-lg text-xs border-destructive/40 text-destructive hover:bg-destructive/10 shrink-0"
                  >
                    Deactivate
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="card-elevation flex flex-col items-center py-16 gap-4"
          data-ocid="admin.flash_sales.empty_state"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Zap size={28} className="text-accent/50" />
          </div>
          <p className="text-sm text-muted-foreground">
            No flash sales yet. Create your first one!
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Orders Tab ───────────────────────────────────────────────────────────────

function OrdersTab({
  orders,
  ordersLoading,
  onUpdateStatus,
}: {
  orders: Order[] | undefined;
  ordersLoading: boolean;
  onUpdateStatus: (order: Order) => void;
}) {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const filteredOrders =
    statusFilter === "all"
      ? orders
      : orders?.filter((o) => o.status === statusFilter);

  return (
    <div className="animate-fade-in" data-ocid="admin.orders_section">
      <SectionHeader
        icon={ShoppingBag}
        title={`Orders (${orders?.length ?? 0})`}
        action={
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger
              className="h-9 text-xs rounded-lg w-40"
              data-ocid="admin.orders_status_filter"
            >
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="all" className="text-xs">
                All Statuses
              </SelectItem>
              {ORDER_STATUSES.map((s) => (
                <SelectItem key={s} value={s} className="text-xs capitalize">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
      />
      {ordersLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="card-elevation overflow-x-auto">
          <table className="w-full text-sm" data-ocid="admin.orders_table">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {[
                  { label: "Order", align: "left" },
                  {
                    label: "Customer",
                    align: "left",
                    hidden: "hidden sm:table-cell",
                  },
                  { label: "Total", align: "right" },
                  { label: "Status", align: "center" },
                  {
                    label: "Date",
                    align: "right",
                    hidden: "hidden sm:table-cell",
                  },
                  { label: "Action", align: "center" },
                ].map(({ label, align, hidden }) => (
                  <th
                    key={label}
                    className={`p-4 text-xs text-muted-foreground font-bold uppercase tracking-widest text-${align} ${hidden ?? ""}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredOrders?.map((order, idx) => (
                <tr
                  key={order.id.toString()}
                  className="border-b border-border hover:bg-muted/15 transition-smooth"
                  data-ocid={`admin.order.${idx + 1}`}
                >
                  <td className="p-4">
                    <p className="font-mono text-xs font-bold text-foreground">
                      #{order.id.toString()}
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      {order.items.length} item
                      {order.items.length !== 1 ? "s" : ""}
                    </p>
                  </td>
                  <td className="p-4 hidden sm:table-cell">
                    <p className="text-xs font-medium truncate max-w-[120px]">
                      {order.shippingAddress.fullName}
                    </p>
                    <p className="text-xs text-muted-foreground/60 truncate">
                      {order.shippingAddress.city}
                    </p>
                  </td>
                  <td className="p-4 text-right font-mono font-bold text-sm">
                    {formatPrice(order.totalInPaisa)}
                  </td>
                  <td className="p-4 text-center">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="p-4 text-right text-xs text-muted-foreground hidden sm:table-cell">
                    {new Date(
                      Number(order.createdAt) / 1_000_000,
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })}
                  </td>
                  <td className="p-4 text-center">
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => onUpdateStatus(order)}
                      data-ocid={`admin.update_order_status.${idx + 1}`}
                      className="h-8 px-2.5 rounded-lg text-xs text-muted-foreground hover:text-accent hover:bg-accent/10"
                    >
                      <Edit2 size={12} className="mr-1" /> Update
                    </Button>
                  </td>
                </tr>
              ))}
              {!filteredOrders?.length && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-16 text-center"
                    data-ocid="admin.orders.empty_state"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <ListOrdered
                        size={28}
                        className="text-muted-foreground/30"
                      />
                      <p className="text-sm text-muted-foreground">
                        {statusFilter === "all"
                          ? "No orders yet"
                          : `No orders with status "${statusFilter}"`}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Enquiries Tab ─────────────────────────────────────────────────────────────

function EnquiriesTab({
  enquiries,
  loading,
}: { enquiries: Enquiry[] | undefined; loading: boolean }) {
  const { mutate: updateStatus } = useUpdateEnquiryStatus();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleMark = (id: string, status: EnquiryStatus) => {
    updateStatus(
      { id, status },
      {
        onSuccess: () => toast.success(`Marked as ${status}`),
        onError: () => toast.error("Failed to update status"),
      },
    );
  };

  return (
    <div className="animate-fade-in" data-ocid="admin.enquiries_section">
      <SectionHeader
        icon={Inbox}
        title={`Enquiries (${enquiries?.length ?? 0})`}
      />
      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-xl" />
          ))}
        </div>
      ) : enquiries?.length ? (
        <div
          className="card-elevation overflow-hidden"
          data-ocid="admin.enquiries_list"
        >
          {enquiries.map((enq, idx) => {
            const isExpanded = expandedId === enq.id;
            const dateStr = new Date(
              Number(enq.submittedAt) / 1_000_000,
            ).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div
                key={enq.id}
                className={`border-b border-border last:border-b-0 ${enq.status === "new" ? "bg-blue-500/3" : ""}`}
                data-ocid={`admin.enquiry.${idx + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-start gap-4 p-4 hover:bg-muted/10 cursor-pointer transition-smooth text-left"
                  onClick={() => setExpandedId(isExpanded ? null : enq.id)}
                >
                  <div className="w-9 h-9 rounded-lg bg-muted/40 flex items-center justify-center shrink-0">
                    <MessageSquare
                      size={15}
                      className="text-muted-foreground"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <p className="font-semibold text-sm">{enq.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {enq.email} · {enq.phone}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <EnquiryStatusBadge status={enq.status} />
                        <span className="text-xs text-muted-foreground/60">
                          {dateStr}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                      {enq.message}
                    </p>
                  </div>
                </button>
                {isExpanded && (
                  <div
                    className="px-4 pb-4 ml-13 border-t"
                    style={{ borderColor: "oklch(var(--border))" }}
                  >
                    {/* Thank You header banner */}
                    <div
                      className="mt-3 px-4 py-3 rounded-xl flex items-center gap-2.5"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.68 0.25 42 / 0.92), oklch(0.58 0.27 38 / 0.92))",
                      }}
                    >
                      <span
                        className="text-lg flex-shrink-0"
                        role="img"
                        aria-label="gratitude"
                      >
                        🙏
                      </span>
                      <p className="text-sm font-bold text-white leading-snug">
                        ধন্যবাদ • Thank You for your enquiry!
                      </p>
                    </div>

                    {/* Full message */}
                    <p className="text-sm text-foreground/80 mt-3 leading-relaxed bg-muted/20 rounded-xl p-3">
                      {enq.message}
                    </p>

                    {/* AI Response card */}
                    <div
                      className="mt-3 rounded-xl p-4 text-sm leading-relaxed"
                      style={{
                        background: "oklch(var(--card))",
                        border: "1px solid oklch(var(--border))",
                        borderLeft: "4px solid oklch(var(--accent))",
                      }}
                    >
                      <p
                        className="text-[11px] font-bold uppercase tracking-widest mb-2"
                        style={{ color: "oklch(var(--accent))" }}
                      >
                        AI Response / আমাদের উত্তর:
                      </p>
                      <p className="text-foreground">
                        {enq.aiReply?.trim()
                          ? enq.aiReply
                          : "Thank you for reaching out! We will get back to you shortly. / আপনার যোগাযোগের জন্য ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      {enq.status !== "viewed" && enq.status !== "replied" && (
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleMark(enq.id, EnquiryStatus.viewed)
                          }
                          data-ocid={`admin.mark_viewed.${idx + 1}`}
                          className="h-8 px-3 rounded-lg text-xs text-amber-400 hover:bg-amber-500/10 gap-1"
                        >
                          <Eye size={12} /> Mark as Viewed
                        </Button>
                      )}
                      {enq.status !== "replied" && (
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleMark(enq.id, EnquiryStatus.replied)
                          }
                          data-ocid={`admin.mark_replied.${idx + 1}`}
                          className="h-8 px-3 rounded-lg text-xs text-green-400 hover:bg-green-500/10 gap-1"
                        >
                          <CheckCircle2 size={12} /> Mark as Replied
                        </Button>
                      )}
                      <a
                        href={`mailto:${enq.email}?subject=Re: Your Enquiry at Vidyamandir`}
                        className="flex items-center gap-1 h-8 px-3 rounded-lg text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 transition-smooth"
                        data-ocid={`admin.reply_email.${idx + 1}`}
                      >
                        Reply via Email
                      </a>
                      <a
                        href={`https://wa.me/91${enq.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 h-8 px-3 rounded-lg text-xs text-green-400 hover:bg-green-500/10 transition-smooth"
                        data-ocid={`admin.reply_whatsapp.${idx + 1}`}
                      >
                        Reply on WhatsApp
                      </a>
                    </div>

                    {/* Illustrated Thank-You card at the bottom */}
                    <ThankYouImage />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="card-elevation flex flex-col items-center py-16 gap-4"
          data-ocid="admin.enquiries.empty_state"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center">
            <Inbox size={28} className="text-muted-foreground/30" />
          </div>
          <p className="text-sm text-muted-foreground">No enquiries yet</p>
        </div>
      )}
    </div>
  );
}

// ─── Reviews Moderation Tab ───────────────────────────────────────────────────

function ReviewsModerationTab() {
  const { data: reviews, isLoading } = useListAllReviews();
  const { mutate: approveReview, isPending: approving } = useApproveReview();
  const { mutate: deleteReview, isPending: deleting } = useDeleteReview();
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");

  const filtered =
    reviews?.filter((r) => {
      if (filter === "all") return true;
      if (filter === "approved") return r.isApproved === true;
      if (filter === "pending") return r.isApproved === false;
      return true;
    }) ?? [];

  return (
    <div className="animate-fade-in" data-ocid="admin.reviews_section">
      <SectionHeader
        icon={Star}
        title={`Reviews (${reviews?.length ?? 0})`}
        action={
          <div className="flex gap-1 rounded-lg p-1 bg-muted/30">
            {(["all", "pending", "approved"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                data-ocid={`admin.reviews_filter.${f}`}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-smooth ${filter === f ? "bg-accent text-accent-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>
        }
      />
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      ) : filtered.length ? (
        <div className="space-y-3" data-ocid="admin.reviews_list">
          {filtered.map((review, idx) => (
            <div
              key={review.id.toString()}
              className="card-elevation p-5"
              data-ocid={`admin.review.${idx + 1}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <StarRating rating={review.rating} />
                    <span className="text-xs font-bold text-foreground">
                      {review.titleEn}
                    </span>
                    {review.isVerifiedPurchase && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-semibold">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-3">
                    {review.bodyEn}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground/60">
                    <span>Product #{review.productId.toString()}</span>
                    <span>
                      {new Date(
                        Number(review.createdAt) / 1_000_000,
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      })}
                    </span>
                    <span>{review.helpfulVotes.toString()} helpful votes</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      approveReview(review.id, {
                        onSuccess: () => toast.success("Review approved"),
                        onError: () => toast.error("Failed to approve"),
                      })
                    }
                    disabled={approving}
                    data-ocid={`admin.approve_review.${idx + 1}`}
                    className="h-8 px-3 rounded-lg text-xs text-green-400 hover:bg-green-500/10 gap-1"
                  >
                    <CheckCircle2 size={12} /> Approve
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      deleteReview(review.id, {
                        onSuccess: () => toast.success("Review deleted"),
                        onError: () => toast.error("Failed to delete"),
                      })
                    }
                    disabled={deleting}
                    data-ocid={`admin.delete_review.${idx + 1}`}
                    className="h-8 px-3 rounded-lg text-xs text-destructive hover:bg-destructive/10 gap-1"
                  >
                    <Trash2 size={12} /> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="card-elevation flex flex-col items-center py-16 gap-4"
          data-ocid="admin.reviews.empty_state"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center">
            <Star size={28} className="text-muted-foreground/30" />
          </div>
          <p className="text-sm text-muted-foreground">No reviews yet</p>
        </div>
      )}
    </div>
  );
}

// ─── Returns & Refunds Tab ────────────────────────────────────────────────────

function ReturnsTab({
  onUpdateStatus,
}: { onUpdateStatus: (order: Order) => void }) {
  const { data: returns, isLoading } = useListAllReturns();

  return (
    <div className="animate-fade-in" data-ocid="admin.returns_section">
      <SectionHeader
        icon={RotateCcw}
        title={`Returns & Refunds (${returns?.length ?? 0})`}
      />
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      ) : returns?.length ? (
        <div className="space-y-3" data-ocid="admin.returns_list">
          {returns.map((order, idx) => (
            <div
              key={order.id.toString()}
              className="card-elevation p-5"
              data-ocid={`admin.return.${idx + 1}`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <p className="font-mono text-xs font-bold text-foreground">
                      Order #{order.id.toString()}
                    </p>
                    <StatusBadge status={order.status} />
                  </div>
                  <p className="text-sm font-semibold">
                    {order.shippingAddress.fullName}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {order.shippingAddress.city}, {order.shippingAddress.state}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {order.items.map((item) => (
                      <span
                        key={item.productId.toString()}
                        className="text-xs bg-muted/40 px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                      >
                        {item.titleEn} ×{item.quantity.toString()}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground/60">
                    <span>
                      Total:{" "}
                      <span className="text-foreground font-mono font-bold">
                        {formatPrice(order.totalInPaisa)}
                      </span>
                    </span>
                    <span>
                      Placed:{" "}
                      {new Date(
                        Number(order.createdAt) / 1_000_000,
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => onUpdateStatus(order)}
                    data-ocid={`admin.process_return.${idx + 1}`}
                    className="h-8 px-3 rounded-lg text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 gap-1"
                  >
                    <Edit2 size={12} /> Process
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="card-elevation flex flex-col items-center py-16 gap-4"
          data-ocid="admin.returns.empty_state"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center">
            <RotateCcw size={28} className="text-muted-foreground/30" />
          </div>
          <p className="text-sm text-muted-foreground">No return requests</p>
        </div>
      )}
    </div>
  );
}

// ─── Promo Codes Tab ──────────────────────────────────────────────────────────

function PromoCodesTab() {
  const { data: codes, isLoading } = useListAllPromoCodes();
  const { mutate: createCode, isPending: creating } = useCreatePromoCode();
  const { mutate: deactivate } = useDeactivatePromoCode();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    code: "",
    discountPercent: "10",
    maxUsageCount: "",
    minSpendInPaisa: "0",
    validFrom: new Date().toISOString().slice(0, 10),
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    createCode(
      {
        code: form.code.toUpperCase(),
        discountPercent: BigInt(form.discountPercent),
        maxUsageCount: form.maxUsageCount ? BigInt(form.maxUsageCount) : null,
        minSpendInPaisa: BigInt(Math.round(Number(form.minSpendInPaisa) * 100)),
        validFrom:
          BigInt(new Date(form.validFrom).getTime()) * BigInt(1_000_000),
        validUntil:
          BigInt(new Date(form.validUntil).getTime()) * BigInt(1_000_000),
      },
      {
        onSuccess: () => {
          toast.success("Promo code created!");
          setShowForm(false);
          setForm({
            code: "",
            discountPercent: "10",
            maxUsageCount: "",
            minSpendInPaisa: "0",
            validFrom: new Date().toISOString().slice(0, 10),
            validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
              .toISOString()
              .slice(0, 10),
          });
        },
        onError: () => toast.error("Failed to create promo code"),
      },
    );
  };

  return (
    <div className="animate-fade-in" data-ocid="admin.promo_codes_section">
      <SectionHeader
        icon={Tag}
        title={`Promo Codes (${codes?.length ?? 0})`}
        action={
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            data-ocid="admin.add_promo_code_button"
            className="cta-primary flex items-center gap-1.5 text-xs px-4 py-2"
          >
            <Plus size={13} /> New Code
          </button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleCreate}
          className="card-elevation p-5 mb-5 space-y-4"
          data-ocid="admin.promo_code_form"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Create New Promo Code
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground font-semibold">
                Code *
              </Label>
              <Input
                value={form.code}
                onChange={(e) =>
                  setForm((f) => ({ ...f, code: e.target.value }))
                }
                className="input-field h-9 rounded-lg font-mono"
                placeholder="SAVE20"
                required
                data-ocid="admin.promo_code_input"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground font-semibold">
                Discount %
              </Label>
              <Input
                type="number"
                min="1"
                max="99"
                value={form.discountPercent}
                onChange={(e) =>
                  setForm((f) => ({ ...f, discountPercent: e.target.value }))
                }
                className="input-field h-9 rounded-lg"
                data-ocid="admin.promo_discount_input"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground font-semibold">
                Max Uses
              </Label>
              <Input
                type="number"
                min="1"
                value={form.maxUsageCount}
                onChange={(e) =>
                  setForm((f) => ({ ...f, maxUsageCount: e.target.value }))
                }
                className="input-field h-9 rounded-lg"
                placeholder="Unlimited"
                data-ocid="admin.promo_max_uses_input"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground font-semibold">
                Min Spend (₹)
              </Label>
              <Input
                type="number"
                min="0"
                step="0.01"
                value={form.minSpendInPaisa}
                onChange={(e) =>
                  setForm((f) => ({ ...f, minSpendInPaisa: e.target.value }))
                }
                className="input-field h-9 rounded-lg"
                data-ocid="admin.promo_min_spend_input"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground font-semibold">
                Valid From
              </Label>
              <Input
                type="date"
                value={form.validFrom}
                onChange={(e) =>
                  setForm((f) => ({ ...f, validFrom: e.target.value }))
                }
                className="input-field h-9 rounded-lg"
                data-ocid="admin.promo_valid_from_input"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground font-semibold">
                Valid Until
              </Label>
              <Input
                type="date"
                value={form.validUntil}
                onChange={(e) =>
                  setForm((f) => ({ ...f, validUntil: e.target.value }))
                }
                className="input-field h-9 rounded-lg"
                data-ocid="admin.promo_valid_until_input"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowForm(false)}
              data-ocid="admin.promo_cancel_button"
              className="btn-secondary rounded-lg text-xs"
            >
              Cancel
            </Button>
            <button
              type="submit"
              disabled={creating}
              data-ocid="admin.promo_submit_button"
              className="cta-primary text-xs px-5 py-2 disabled:opacity-60"
            >
              {creating ? "Creating..." : "Create Code"}
            </button>
          </div>
        </form>
      )}

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      ) : codes?.length ? (
        <div
          className="card-elevation overflow-x-auto"
          data-ocid="admin.promo_codes_list"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {[
                  "Code",
                  "Discount",
                  "Usage",
                  "Valid Until",
                  "Status",
                  "Action",
                ].map((h, i) => (
                  <th
                    key={h}
                    className={`p-4 text-xs text-muted-foreground font-bold uppercase tracking-widest ${i === 0 ? "text-left" : i === 5 ? "text-center" : "text-right"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {codes.map((code: PromoCode, idx) => (
                <tr
                  key={code.code}
                  className="border-b border-border hover:bg-muted/15 transition-smooth"
                  data-ocid={`admin.promo_code.${idx + 1}`}
                >
                  <td className="p-4">
                    <span className="font-mono font-bold text-sm text-foreground tracking-widest">
                      {code.code}
                    </span>
                    {code.minSpendInPaisa > BigInt(0) && (
                      <p className="text-xs text-muted-foreground">
                        Min: {formatPrice(code.minSpendInPaisa)}
                      </p>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-mono font-bold text-accent text-lg">
                      {code.discountPercent.toString()}%
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-mono text-sm">
                      {code.usageCount.toString()}
                    </span>
                    {code.maxUsageCount !== undefined && (
                      <span className="text-muted-foreground text-xs">
                        /{code.maxUsageCount.toString()}
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right text-xs text-muted-foreground">
                    {new Date(
                      Number(code.validUntil) / 1_000_000,
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${code.isActive ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-muted text-muted-foreground border border-border"}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${code.isActive ? "bg-green-400" : "bg-muted-foreground"}`}
                      />
                      {code.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {code.isActive && (
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          deactivate(code.code, {
                            onSuccess: () => toast.success("Deactivated"),
                            onError: () => toast.error("Failed"),
                          })
                        }
                        data-ocid={`admin.deactivate_promo.${idx + 1}`}
                        className="h-8 px-3 rounded-lg text-xs text-destructive hover:bg-destructive/10"
                      >
                        Deactivate
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="card-elevation flex flex-col items-center py-16 gap-4"
          data-ocid="admin.promo_codes.empty_state"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Tag size={28} className="text-accent/50" />
          </div>
          <p className="text-sm text-muted-foreground">
            No promo codes yet. Create your first one!
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Ordered Quantity Report Tab ──────────────────────────────────────────────

function OrderedQtyTab() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sortBy, setSortBy] = useState<"units" | "revenue">("units");

  const fromTs = fromDate
    ? BigInt(new Date(fromDate).getTime()) * BigInt(1_000_000)
    : null;
  const toTs = toDate
    ? BigInt(new Date(toDate).setHours(23, 59, 59, 999)) * BigInt(1_000_000)
    : null;

  const { data: rows, isLoading } = useGetOrderedQuantityReport(fromTs, toTs);

  const sorted = rows
    ? [...rows].sort((a, b) =>
        sortBy === "units"
          ? a.totalUnits > b.totalUnits
            ? -1
            : 1
          : a.totalRevenue > b.totalRevenue
            ? -1
            : 1,
      )
    : [];

  return (
    <div className="animate-fade-in" data-ocid="admin.ordered_qty_section">
      <SectionHeader icon={ListOrdered} title="Ordered Quantity Report" />

      <div className="flex flex-wrap items-end gap-3 mb-5 p-4 rounded-2xl bg-muted/20 border border-border">
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground font-semibold">
            From Date
          </Label>
          <Input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="input-field h-9 rounded-lg text-xs"
            data-ocid="admin.qty_from_date_input"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground font-semibold">
            To Date
          </Label>
          <Input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="input-field h-9 rounded-lg text-xs"
            data-ocid="admin.qty_to_date_input"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground font-semibold">
            Sort By
          </Label>
          <Select
            value={sortBy}
            onValueChange={(v) => setSortBy(v as "units" | "revenue")}
          >
            <SelectTrigger
              className="h-9 text-xs rounded-lg w-36"
              data-ocid="admin.qty_sort_select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="units" className="text-xs">
                Most Ordered
              </SelectItem>
              <SelectItem value="revenue" className="text-xs">
                Most Revenue
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {(fromDate || toDate) && (
          <button
            type="button"
            onClick={() => {
              setFromDate("");
              setToDate("");
            }}
            className="h-9 px-3 rounded-lg text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth"
            data-ocid="admin.qty_clear_filter_button"
          >
            Clear Filters
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-14 w-full rounded-xl" />
          ))}
        </div>
      ) : sorted.length ? (
        <div
          className="card-elevation overflow-x-auto"
          data-ocid="admin.ordered_qty_table"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {[
                  { label: "#", align: "center" },
                  { label: "Book Title", align: "left" },
                  {
                    label: "Genre",
                    align: "center",
                    hidden: "hidden sm:table-cell",
                  },
                  { label: "Units Ordered", align: "right" },
                  { label: "Total Revenue", align: "right" },
                ].map(({ label, align, hidden }) => (
                  <th
                    key={label}
                    className={`p-4 text-xs text-muted-foreground font-bold uppercase tracking-widest text-${align} ${hidden ?? ""}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row: OrderedQuantityRow, idx) => (
                <tr
                  key={row.productId.toString()}
                  className="border-b border-border hover:bg-muted/15 transition-smooth"
                  data-ocid={`admin.qty_row.${idx + 1}`}
                >
                  <td className="p-4 text-center">
                    <span
                      className={`w-7 h-7 rounded-lg inline-flex items-center justify-center font-mono font-bold text-xs ${idx === 0 ? "bg-amber-500/20 text-amber-400" : "bg-muted/50 text-muted-foreground"}`}
                    >
                      {idx + 1}
                    </span>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-sm truncate max-w-[200px]">
                      {row.titleEn}
                    </p>
                    <p className="text-xs text-muted-foreground/60 font-mono">
                      #{row.productId.toString()}
                    </p>
                  </td>
                  <td className="p-4 text-center hidden sm:table-cell">
                    <Badge className="rounded-full text-xs bg-muted text-muted-foreground border-0 capitalize">
                      {row.genre}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-mono font-bold text-xl text-foreground">
                      {row.totalUnits.toString()}
                    </span>
                    <p className="text-xs text-muted-foreground">units</p>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-mono font-bold text-accent">
                      {formatPrice(row.totalRevenue)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="card-elevation flex flex-col items-center py-16 gap-4"
          data-ocid="admin.ordered_qty.empty_state"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center">
            <ListOrdered size={28} className="text-muted-foreground/30" />
          </div>
          <p className="text-sm text-muted-foreground">
            No order data for the selected period
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Bulk Import Tab ──────────────────────────────────────────────────────────

function BulkImportTab() {
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [importResult, setImportResult] = useState<BulkImportResult | null>(
    null,
  );
  const { mutate: bulkImport, isPending: importing } = useBulkImportProducts();
  const { mutate: refreshCache, isPending: refreshing } =
    useRefreshBestsellers();
  const [refreshDone, setRefreshDone] = useState(false);

  const validateJson = (text: string): string | null => {
    if (!text.trim()) return null;
    try {
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed))
        return "JSON must be an array of book objects";
      return null;
    } catch (e) {
      return e instanceof Error ? e.message : "Invalid JSON";
    }
  };

  const handleTextChange = (text: string) => {
    setJsonText(text);
    setJsonError(validateJson(text));
    if (importResult) setImportResult(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const content = ev.target?.result as string;
      handleTextChange(content);
    };
    reader.readAsText(file);
    // Reset input so same file can be re-uploaded
    e.target.value = "";
  };

  const handleImport = () => {
    if (jsonError || !jsonText.trim()) return;
    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonText);
    } catch {
      setJsonError("Invalid JSON");
      return;
    }
    if (!Array.isArray(parsed)) {
      setJsonError("JSON must be an array of book objects");
      return;
    }
    bulkImport(parsed as import("../backend.d.ts").CreateProductInput[], {
      onSuccess: (result) => {
        setImportResult(result);
        toast.success(
          `Import complete: ${result.inserted} inserted, ${result.skipped} skipped`,
        );
      },
      onError: (err) => {
        toast.error(err instanceof Error ? err.message : "Bulk import failed");
      },
    });
  };

  const handleRefresh = () => {
    setRefreshDone(false);
    refreshCache(undefined, {
      onSuccess: (count) => {
        setRefreshDone(true);
        toast.success(`Bestsellers cache refreshed — ${count} entries`);
        setTimeout(() => setRefreshDone(false), 4000);
      },
      onError: () => toast.error("Failed to refresh bestsellers cache"),
    });
  };

  const hasContent = jsonText.trim().length > 0;
  const isValid = hasContent && !jsonError;

  return (
    <div
      className="animate-fade-in space-y-6"
      data-ocid="admin.bulk_import_section"
    >
      {/* Section Header */}
      <SectionHeader
        icon={Upload}
        title="Bulk Import Books"
        action={
          <button
            type="button"
            onClick={handleRefresh}
            disabled={refreshing}
            data-ocid="admin.refresh_bestsellers_button"
            className={`flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg font-bold border transition-smooth disabled:opacity-60 ${refreshDone ? "bg-green-500/15 text-green-400 border-green-500/30" : "btn-secondary"}`}
          >
            {refreshing ? (
              <>
                <RefreshCw size={12} className="animate-spin" /> Refreshing…
              </>
            ) : refreshDone ? (
              <>
                <CheckCircle2 size={12} /> Cache Refreshed!
              </>
            ) : (
              <>
                <RefreshCw size={12} /> Refresh Bestsellers Cache
              </>
            )}
          </button>
        }
      />

      {/* Instructions */}
      <div
        className="rounded-2xl p-4 text-xs leading-relaxed space-y-1.5"
        style={{
          background: "oklch(var(--muted) / 0.4)",
          border: "1px solid oklch(var(--border))",
        }}
        data-ocid="admin.bulk_import_instructions"
      >
        <p className="font-bold text-foreground uppercase tracking-widest text-[11px] mb-2">
          How to use Bulk Import
        </p>
        <p className="text-muted-foreground">
          Paste a JSON array of book objects, or upload a{" "}
          <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">
            .json
          </code>{" "}
          file. Each object must have the same shape as a{" "}
          <strong className="text-foreground">CreateProductInput</strong>.
        </p>
        <details className="mt-2">
          <summary className="cursor-pointer text-accent font-semibold hover:opacity-80 transition-smooth">
            View example format
          </summary>
          <pre
            className="mt-2 p-3 rounded-xl text-[11px] overflow-x-auto font-mono leading-relaxed"
            style={{
              background: "oklch(var(--card))",
              border: "1px solid oklch(var(--border))",
              color: "oklch(var(--foreground) / 0.85)",
            }}
          >{`[
  {
    "info": {
      "titleEn": "The Alchemist",
      "titleBn": "আলকেমিস্ট",
      "authorEn": "Paulo Coelho",
      "authorBn": "পাওলো কোয়েলো",
      "descriptionEn": "A classic novel...",
      "descriptionBn": "একটি ক্লাসিক উপন্যাস..."
    },
    "coverImageUrl": "https://example.com/cover.jpg",
    "isbn": "978-0-06-112241-5",
    "publisher": "HarperCollins",
    "priceInPaisa": 29900,
    "language": "english",
    "stockCount": 100,
    "genre": "fiction",
    "publicationDate": 0
  }
]`}</pre>
        </details>
      </div>

      {/* File Upload */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="bulk-json-file"
          className="btn-secondary flex items-center gap-2 text-xs px-4 py-2.5 rounded-lg cursor-pointer font-bold transition-smooth hover:opacity-90"
          data-ocid="admin.bulk_import_upload_button"
        >
          <Upload size={13} />
          Upload .json File
          <input
            id="bulk-json-file"
            type="file"
            accept=".json,application/json"
            onChange={handleFileUpload}
            className="sr-only"
          />
        </label>
        <span className="text-xs text-muted-foreground">
          or paste JSON below
        </span>
      </div>

      {/* JSON Textarea */}
      <div className="space-y-2">
        <label
          htmlFor="bulk-import-textarea"
          className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
        >
          JSON Array
        </label>
        <Textarea
          id="bulk-import-textarea"
          value={jsonText}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={`[\n  {\n    "info": { "titleEn": "Book Title", ... },\n    "priceInPaisa": 29900,\n    ...\n  }\n]`}
          rows={12}
          className={`font-mono text-xs resize-y rounded-xl transition-smooth ${jsonError && hasContent ? "border-destructive focus-visible:ring-destructive" : isValid ? "border-green-500/60 focus-visible:ring-green-500/40" : ""}`}
          data-ocid="admin.bulk_import_textarea"
          spellCheck={false}
        />
        {/* Validation feedback */}
        {hasContent && (
          <div
            className={`flex items-start gap-2 text-xs px-3 py-2 rounded-lg ${jsonError ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-400"}`}
            data-ocid={
              jsonError
                ? "admin.bulk_import_json_error_state"
                : "admin.bulk_import_json_success_state"
            }
          >
            {jsonError ? (
              <>
                <span className="font-bold shrink-0">✗ Invalid JSON:</span>
                <span>{jsonError}</span>
              </>
            ) : (
              <>
                <span className="font-bold shrink-0">✓ Valid JSON</span>
                <span className="text-green-400/70">
                  — {(() => {
                    try {
                      return (JSON.parse(jsonText) as unknown[]).length;
                    } catch {
                      return 0;
                    }
                  })()} books ready to import
                </span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Import Button */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleImport}
          disabled={!isValid || importing}
          data-ocid="admin.bulk_import_submit_button"
          className="cta-primary flex items-center gap-2 px-6 py-2.5 text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {importing ? (
            <>
              <RefreshCw size={14} className="animate-spin" /> Importing…
            </>
          ) : (
            <>
              <Upload size={14} /> Import Books
            </>
          )}
        </button>
        {hasContent && (
          <button
            type="button"
            onClick={() => {
              setJsonText("");
              setJsonError(null);
              setImportResult(null);
            }}
            className="text-xs text-muted-foreground hover:text-destructive transition-smooth px-3 py-2 rounded-lg hover:bg-destructive/10"
            data-ocid="admin.bulk_import_clear_button"
          >
            Clear
          </button>
        )}
      </div>

      {/* Import Result Summary */}
      {importResult && (
        <div
          className="rounded-2xl p-5 space-y-4"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--accent)/0.1), oklch(var(--card)))",
            border: "1px solid oklch(var(--accent)/0.3)",
          }}
          data-ocid="admin.bulk_import_result_card"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
            Import Summary
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-mono font-bold text-3xl text-green-400">
                {importResult.inserted.toString()}
              </p>
              <p className="text-xs text-muted-foreground font-semibold mt-1 uppercase tracking-wider">
                Imported
              </p>
            </div>
            <div className="text-center">
              <p className="font-mono font-bold text-3xl text-amber-400">
                {importResult.skipped.toString()}
              </p>
              <p className="text-xs text-muted-foreground font-semibold mt-1 uppercase tracking-wider">
                Skipped
              </p>
            </div>
            <div className="text-center">
              <p className="font-mono font-bold text-3xl text-destructive">
                {importResult.errors.length.toString()}
              </p>
              <p className="text-xs text-muted-foreground font-semibold mt-1 uppercase tracking-wider">
                Errors
              </p>
            </div>
          </div>

          {/* Error list */}
          {importResult.errors.length > 0 && (
            <div
              className="mt-4 space-y-1.5"
              data-ocid="admin.bulk_import_errors_list"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-2">
                Validation Errors
              </p>
              <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                {importResult.errors.map(([idx, reason]) => (
                  <div
                    key={idx.toString()}
                    className="flex items-start gap-2 text-xs bg-destructive/5 border border-destructive/20 rounded-lg px-3 py-2"
                    data-ocid={`admin.bulk_import_error.${(Number(idx) + 1).toString()}`}
                  >
                    <span className="font-mono font-bold text-destructive shrink-0">
                      #{idx.toString()}
                    </span>
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main AdminPage ────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { t } = useLanguage();
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const { data: isAdmin, isLoading: adminLoading } = useIsAdmin();
  const [adminUnlocked, setAdminUnlocked] = useState(
    () => sessionStorage.getItem("adminUnlocked") === "true",
  );

  const { data: analytics, isLoading: analyticsLoading } =
    useGetAdminAnalytics();
  const { data: products, isLoading: productsLoading } = useListProducts(
    null,
    null,
    BigInt(0),
    BigInt(200),
  );
  const { data: flashSales, isLoading: flashSalesLoading } =
    useListFlashSales(false);
  const { data: orders, isLoading: ordersLoading } = useListAllOrders();
  const { data: enquiries, isLoading: enquiriesLoading } =
    useListAllEnquiries();

  const { mutate: deleteProduct } = useDeleteProduct();
  const { mutate: createProduct, isPending: creatingProduct } =
    useCreateProduct();
  const { mutate: updateProduct, isPending: updatingProduct } =
    useUpdateProduct();
  const { mutate: updateStock, isPending: updatingStock } = useUpdateStock();
  const { mutate: createFlashSale, isPending: creatingFlashSale } =
    useCreateFlashSale();
  const { mutate: deactivateFlashSale } = useDeactivateFlashSale();
  const { mutate: updateOrderStatus, isPending: updatingOrderStatus } =
    useUpdateOrderStatus();

  // Dialog state
  const [productDialog, setProductDialog] = useState(false);
  const [productForm, setProductForm] =
    useState<CreateProductInput>(EMPTY_PRODUCT);
  const [editingProductId, setEditingProductId] = useState<bigint | null>(null);

  const [stockDialog, setStockDialog] = useState(false);
  const [stockProduct, setStockProduct] = useState<ProductView | null>(null);
  const [stockDelta, setStockDelta] = useState("0");

  const [flashSaleDialog, setFlashSaleDialog] = useState(false);
  const [flashSaleForm, setFlashSaleForm] =
    useState<CreateFlashSaleInput>(EMPTY_FLASH_SALE);
  const [flashSaleItems, setFlashSaleItems] = useState<
    Array<{ productId: bigint; discountPercent: bigint; quantityLimit: bigint }>
  >([]);
  const [selectedFlashProduct, setSelectedFlashProduct] = useState("");
  const [flashDiscount, setFlashDiscount] = useState("20");
  const [flashQtyLimit, setFlashQtyLimit] = useState("50");

  const [orderStatusDialog, setOrderStatusDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [newOrderStatus, setNewOrderStatus] = useState<OrderStatus>(
    "processing" as OrderStatus,
  );
  const [orderStatusNote, setOrderStatusNote] = useState("");
  const [orderDeliveryDate, setOrderDeliveryDate] = useState("");
  const [orderCourierNote, setOrderCourierNote] = useState("");

  if (!adminUnlocked) {
    return <AdminPasswordGate onUnlock={() => setAdminUnlocked(true)} />;
  }

  if (!isAuthenticated) {
    return (
      <div
        className="max-w-lg mx-auto px-4 py-24 flex flex-col items-center gap-8 text-center"
        data-ocid="admin.login_required"
      >
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-card">
          <Lock size={32} className="text-primary/60" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl mb-2">
            Admin Access Required
          </h1>
          <p className="text-muted-foreground text-sm">
            Please sign in to access the admin dashboard.
          </p>
        </div>
        <button
          type="button"
          onClick={login}
          data-ocid="admin.login_button"
          className="cta-primary px-8 py-3"
        >
          {t("login")}
        </button>
      </div>
    );
  }

  if (adminLoading)
    return <LoadingSpinner fullPage text="Checking permissions..." />;

  if (!isAdmin) {
    return (
      <div
        className="max-w-lg mx-auto px-4 py-24 flex flex-col items-center gap-8 text-center"
        data-ocid="admin.access_denied"
      >
        <div className="w-20 h-20 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center shadow-card">
          <Lock size={32} className="text-destructive/60" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl mb-2 text-destructive">
            Access Denied
          </h1>
          <p className="text-muted-foreground text-sm">
            You do not have admin privileges.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => void navigate({ to: "/" })}
          className="rounded-xl"
          data-ocid="admin.go_home_button"
        >
          Go to Homepage
        </Button>
      </div>
    );
  }

  // Handlers
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProductId) {
      updateProduct(
        { id: editingProductId, ...productForm },
        {
          onSuccess: () => {
            toast.success("Product updated!");
            setProductDialog(false);
          },
          onError: () => toast.error("Failed to update product"),
        },
      );
    } else {
      createProduct(productForm, {
        onSuccess: () => {
          toast.success("Product created!");
          setProductDialog(false);
          setProductForm(EMPTY_PRODUCT);
        },
        onError: () => toast.error("Failed to create product"),
      });
    }
  };

  const handleUpdateStock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stockProduct) return;
    updateStock(
      { id: stockProduct.id, delta: BigInt(stockDelta) },
      {
        onSuccess: () => {
          toast.success("Stock updated!");
          setStockDialog(false);
        },
        onError: () => toast.error("Failed to update stock"),
      },
    );
  };

  const handleAddFlashItem = () => {
    if (!selectedFlashProduct) return;
    const productId = BigInt(selectedFlashProduct);
    if (flashSaleItems.some((i) => i.productId === productId)) {
      toast.error("Product already added");
      return;
    }
    setFlashSaleItems((prev) => [
      ...prev,
      {
        productId,
        discountPercent: BigInt(flashDiscount),
        quantityLimit: BigInt(flashQtyLimit),
      },
    ]);
    setSelectedFlashProduct("");
  };

  const handleCreateFlashSale = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flashSaleItems.length) {
      toast.error("Add at least one product to the flash sale");
      return;
    }
    const items = flashSaleItems.map((fi) => {
      const product = products?.find((p) => p.id === fi.productId);
      const originalPrice = product?.priceInPaisa ?? BigInt(0);
      const discounted =
        (originalPrice * (BigInt(100) - fi.discountPercent)) / BigInt(100);
      return {
        productId: fi.productId,
        discountPercent: fi.discountPercent,
        quantityLimit: fi.quantityLimit,
        originalPriceInPaisa: originalPrice,
        discountedPriceInPaisa: discounted,
        soldCount: BigInt(0),
      };
    });
    createFlashSale(
      { ...flashSaleForm, items },
      {
        onSuccess: () => {
          toast.success("Flash sale created!");
          setFlashSaleDialog(false);
          setFlashSaleForm(EMPTY_FLASH_SALE);
          setFlashSaleItems([]);
        },
        onError: () => toast.error("Failed to create flash sale"),
      },
    );
  };

  const handleUpdateOrderStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    const estDelivery = orderDeliveryDate
      ? BigInt(new Date(orderDeliveryDate).getTime()) * BigInt(1_000_000)
      : null;
    updateOrderStatus(
      {
        orderId: selectedOrder.id,
        status: newOrderStatus,
        note: orderStatusNote,
        estimatedDeliveryDate: estDelivery,
        courierNote: orderCourierNote || null,
      },
      {
        onSuccess: () => {
          toast.success("Order status updated!");
          setOrderStatusDialog(false);
          setOrderStatusNote("");
          setOrderDeliveryDate("");
          setOrderCourierNote("");
        },
        onError: () => toast.error("Failed to update order status"),
      },
    );
  };

  const openOrderStatus = (order: Order) => {
    setSelectedOrder(order);
    setNewOrderStatus(order.status as OrderStatus);
    setOrderStatusNote("");
    setOrderDeliveryDate("");
    setOrderCourierNote("");
    setOrderStatusDialog(true);
  };

  const TABS = [
    { value: "analytics", icon: BarChart2, label: "Analytics" },
    { value: "products", icon: Package, label: "Products" },
    { value: "flash-sales", icon: Zap, label: "Flash Sales" },
    { value: "orders", icon: ShoppingBag, label: "Orders" },
    { value: "enquiries", icon: Inbox, label: "Enquiries" },
    { value: "reviews", icon: Star, label: "Reviews" },
    { value: "returns", icon: RotateCcw, label: "Returns" },
    { value: "promo-codes", icon: Tag, label: "Promo Codes" },
    { value: "qty-report", icon: ListOrdered, label: "Qty Report" },
    { value: "bulk-import", icon: Upload, label: "Bulk Import" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6" data-ocid="admin.page">
      {/* Page Header */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shadow-card">
            <BarChart2 size={20} className="text-accent" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl uppercase tracking-widest text-foreground">
              {t("adminDashboard")}
            </h1>
            <p className="text-xs text-muted-foreground">
              Vidyamandir — Purba Bardhaman
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            sessionStorage.removeItem("adminUnlocked");
            setAdminUnlocked(false);
          }}
          className="text-xs text-muted-foreground hover:text-destructive transition-smooth flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-destructive/10"
          data-ocid="admin.lock_button"
        >
          <Lock size={12} /> Lock Panel
        </button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="analytics" data-ocid="admin.tabs">
        <div className="overflow-x-auto pb-1 mb-6">
          <TabsList className="bg-muted/30 rounded-xl h-auto p-1 gap-1 inline-flex min-w-max">
            {TABS.map(({ value, icon: Icon, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                data-ocid={`admin.${value.replace(/-/g, "_")}_tab`}
                className="rounded-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-card px-3 py-2.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-smooth"
              >
                <Icon size={12} className="mr-1.5" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="analytics">
          <AnalyticsTab
            analyticsLoading={analyticsLoading}
            analytics={analytics}
            products={products}
          />
        </TabsContent>

        <TabsContent value="products">
          <ProductsTab
            products={products}
            productsLoading={productsLoading}
            onAdd={() => {
              setEditingProductId(null);
              setProductForm(EMPTY_PRODUCT);
              setProductDialog(true);
            }}
            onEdit={(p) => {
              setEditingProductId(p.id);
              setProductForm({
                info: p.info,
                coverImageUrl: p.coverImageUrl,
                isbn: p.isbn,
                publisher: p.publisher,
                priceInPaisa: p.priceInPaisa,
                language: p.language,
                stockCount: p.stockCount,
                genre: p.genre,
                publicationDate: p.publicationDate,
              });
              setProductDialog(true);
            }}
            onDelete={(id) =>
              deleteProduct(id, {
                onSuccess: () => toast.success("Product deleted"),
                onError: () => toast.error("Failed to delete"),
              })
            }
            onUpdateStock={(p) => {
              setStockProduct(p);
              setStockDelta("0");
              setStockDialog(true);
            }}
          />
        </TabsContent>

        <TabsContent value="flash-sales">
          <FlashSalesTab
            flashSales={flashSales}
            flashSalesLoading={flashSalesLoading}
            products={products}
            onDeactivate={(id) =>
              deactivateFlashSale(id, {
                onSuccess: (ok) => {
                  if (ok) toast.success("Flash sale deactivated");
                  else toast.error("Could not deactivate");
                },
                onError: () => toast.error("Failed to deactivate flash sale"),
              })
            }
            onCreateNew={() => {
              setFlashSaleForm(EMPTY_FLASH_SALE);
              setFlashSaleItems([]);
              setFlashSaleDialog(true);
            }}
          />
        </TabsContent>

        <TabsContent value="orders">
          <OrdersTab
            orders={orders}
            ordersLoading={ordersLoading}
            onUpdateStatus={openOrderStatus}
          />
        </TabsContent>

        <TabsContent value="enquiries">
          <EnquiriesTab enquiries={enquiries} loading={enquiriesLoading} />
        </TabsContent>

        <TabsContent value="reviews">
          <ReviewsModerationTab />
        </TabsContent>

        <TabsContent value="returns">
          <ReturnsTab onUpdateStatus={openOrderStatus} />
        </TabsContent>

        <TabsContent value="promo-codes">
          <PromoCodesTab />
        </TabsContent>

        <TabsContent value="qty-report">
          <OrderedQtyTab />
        </TabsContent>

        <TabsContent value="bulk-import">
          <BulkImportTab />
        </TabsContent>
      </Tabs>

      {/* ── Product Dialog ─────────────────────────────────────────────── */}
      <Dialog open={productDialog} onOpenChange={setProductDialog}>
        <DialogContent
          className="rounded-2xl max-w-xl max-h-[90vh] overflow-y-auto"
          data-ocid="admin.product_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              {editingProductId ? t("editProduct") : t("addProduct")}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveProduct} className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Title (EN)
                </Label>
                <Input
                  value={productForm.info.titleEn}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      info: { ...p.info, titleEn: e.target.value },
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_title_en_input"
                  required
                  placeholder="Title in English"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Title (BN)
                </Label>
                <Input
                  value={productForm.info.titleBn}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      info: { ...p.info, titleBn: e.target.value },
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_title_bn_input"
                  placeholder="বাংলায় শিরোনাম"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Author (EN)
                </Label>
                <Input
                  value={productForm.info.authorEn}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      info: { ...p.info, authorEn: e.target.value },
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_author_en_input"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Author (BN)
                </Label>
                <Input
                  value={productForm.info.authorBn}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      info: { ...p.info, authorBn: e.target.value },
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_author_bn_input"
                  placeholder="লেখকের নাম"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground font-semibold">
                Cover Image URL
              </Label>
              <Input
                value={productForm.coverImageUrl}
                onChange={(e) =>
                  setProductForm((p) => ({
                    ...p,
                    coverImageUrl: e.target.value,
                  }))
                }
                className="input-field h-9 rounded-lg"
                data-ocid="admin.product_cover_input"
                placeholder="https://..."
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Description (EN)
                </Label>
                <Textarea
                  value={productForm.info.descriptionEn}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      info: { ...p.info, descriptionEn: e.target.value },
                    }))
                  }
                  className="rounded-lg text-xs resize-none"
                  rows={3}
                  data-ocid="admin.product_desc_en_input"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Description (BN)
                </Label>
                <Textarea
                  value={productForm.info.descriptionBn}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      info: { ...p.info, descriptionBn: e.target.value },
                    }))
                  }
                  className="rounded-lg text-xs resize-none"
                  rows={3}
                  data-ocid="admin.product_desc_bn_input"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Price (₹)
                </Label>
                <Input
                  type="number"
                  min="1"
                  step="0.01"
                  value={Number(productForm.priceInPaisa) / 100}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      priceInPaisa: BigInt(
                        Math.round(Number(e.target.value) * 100),
                      ),
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_price_input"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Stock
                </Label>
                <Input
                  type="number"
                  min="0"
                  value={Number(productForm.stockCount)}
                  onChange={(e) =>
                    setProductForm((p) => ({
                      ...p,
                      stockCount: BigInt(e.target.value),
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_stock_input"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  ISBN
                </Label>
                <Input
                  value={productForm.isbn}
                  onChange={(e) =>
                    setProductForm((p) => ({ ...p, isbn: e.target.value }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_isbn_input"
                  placeholder="978-..."
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Genre
                </Label>
                <Select
                  value={productForm.genre}
                  onValueChange={(v) =>
                    setProductForm((p) => ({ ...p, genre: v as Genre }))
                  }
                >
                  <SelectTrigger
                    className="h-9 text-xs rounded-lg"
                    data-ocid="admin.product_genre_select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {GENRES.map((g) => (
                      <SelectItem key={g} value={g} className="text-xs">
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Language
                </Label>
                <Select
                  value={productForm.language}
                  onValueChange={(v) =>
                    setProductForm((p) => ({ ...p, language: v as Language }))
                  }
                >
                  <SelectTrigger
                    className="h-9 text-xs rounded-lg"
                    data-ocid="admin.product_language_select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="bengali" className="text-xs">
                      Bengali
                    </SelectItem>
                    <SelectItem value="english" className="text-xs">
                      English
                    </SelectItem>
                    <SelectItem value="bilingual" className="text-xs">
                      Bilingual
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Publisher
                </Label>
                <Input
                  value={productForm.publisher}
                  onChange={(e) =>
                    setProductForm((p) => ({ ...p, publisher: e.target.value }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.product_publisher_input"
                />
              </div>
            </div>
            <DialogFooter className="pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setProductDialog(false)}
                data-ocid="admin.product_cancel_button"
                className="btn-secondary rounded-lg text-xs"
              >
                Cancel
              </Button>
              <button
                type="submit"
                disabled={creatingProduct || updatingProduct}
                data-ocid="admin.product_save_button"
                className="cta-primary text-xs px-5 py-2 disabled:opacity-60"
              >
                {creatingProduct || updatingProduct
                  ? "Saving..."
                  : editingProductId
                    ? "Update Product"
                    : "Create Product"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ── Stock Dialog ─────────────────────────────────────────────────── */}
      <Dialog open={stockDialog} onOpenChange={setStockDialog}>
        <DialogContent
          className="rounded-2xl max-w-sm"
          data-ocid="admin.stock_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              {t("updateStock")}
            </DialogTitle>
          </DialogHeader>
          {stockProduct && (
            <form onSubmit={handleUpdateStock} className="space-y-4">
              <div className="rounded-xl bg-muted/30 border border-border p-4">
                <p className="font-semibold text-sm">
                  {stockProduct.info.titleEn}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Current stock:{" "}
                  <span className="font-mono font-bold text-foreground">
                    {Number(stockProduct.stockCount)}
                  </span>
                </p>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Stock Adjustment (+ add, − remove)
                </Label>
                <Input
                  type="number"
                  value={stockDelta}
                  onChange={(e) => setStockDelta(e.target.value)}
                  className="input-field h-10 rounded-lg font-mono"
                  data-ocid="admin.stock_delta_input"
                  placeholder="e.g. 50 or -10"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  New stock:{" "}
                  <span className="font-mono font-bold text-foreground">
                    {Math.max(
                      0,
                      Number(stockProduct.stockCount) + Number(stockDelta || 0),
                    )}
                  </span>
                </p>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStockDialog(false)}
                  data-ocid="admin.stock_cancel_button"
                  className="btn-secondary rounded-lg text-xs"
                >
                  Cancel
                </Button>
                <button
                  type="submit"
                  disabled={updatingStock}
                  data-ocid="admin.stock_confirm_button"
                  className="cta-primary text-xs px-5 py-2 disabled:opacity-60"
                >
                  {updatingStock ? "Updating..." : "Update Stock"}
                </button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Flash Sale Dialog ─────────────────────────────────────────────── */}
      <Dialog open={flashSaleDialog} onOpenChange={setFlashSaleDialog}>
        <DialogContent
          className="rounded-2xl max-w-2xl max-h-[90vh] overflow-y-auto"
          data-ocid="admin.flash_sale_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              {t("createFlashSale")}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateFlashSale} className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Sale Title (EN)
                </Label>
                <Input
                  value={flashSaleForm.titleEn}
                  onChange={(e) =>
                    setFlashSaleForm((f) => ({ ...f, titleEn: e.target.value }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.flash_sale_title_en_input"
                  required
                  placeholder="Flash Sale Title"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Sale Title (BN)
                </Label>
                <Input
                  value={flashSaleForm.titleBn}
                  onChange={(e) =>
                    setFlashSaleForm((f) => ({ ...f, titleBn: e.target.value }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.flash_sale_title_bn_input"
                  placeholder="ফ্ল্যাশ সেলের নাম"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Start Time
                </Label>
                <Input
                  type="datetime-local"
                  defaultValue={new Date().toISOString().slice(0, 16)}
                  onChange={(e) =>
                    setFlashSaleForm((f) => ({
                      ...f,
                      startTime:
                        BigInt(new Date(e.target.value).getTime()) *
                        BigInt(1_000_000),
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.flash_sale_start_input"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  End Time
                </Label>
                <Input
                  type="datetime-local"
                  defaultValue={new Date(Date.now() + 24 * 60 * 60 * 1000)
                    .toISOString()
                    .slice(0, 16)}
                  onChange={(e) =>
                    setFlashSaleForm((f) => ({
                      ...f,
                      endTime:
                        BigInt(new Date(e.target.value).getTime()) *
                        BigInt(1_000_000),
                    }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="admin.flash_sale_end_input"
                  required
                />
              </div>
            </div>
            <div className="rounded-xl border border-border p-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Add Products to Sale
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-3 sm:col-span-1">
                  <Select
                    value={selectedFlashProduct}
                    onValueChange={setSelectedFlashProduct}
                  >
                    <SelectTrigger
                      className="h-9 text-xs rounded-lg"
                      data-ocid="admin.flash_sale_product_select"
                    >
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl max-h-48">
                      {products?.map((p) => (
                        <SelectItem
                          key={p.id.toString()}
                          value={p.id.toString()}
                          className="text-xs"
                        >
                          {p.info.titleEn} — {formatPrice(p.priceInPaisa)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  type="number"
                  min="1"
                  max="99"
                  value={flashDiscount}
                  onChange={(e) => setFlashDiscount(e.target.value)}
                  className="input-field h-9 rounded-lg text-xs"
                  data-ocid="admin.flash_sale_discount_input"
                  placeholder="Discount %"
                />
                <Input
                  type="number"
                  min="1"
                  value={flashQtyLimit}
                  onChange={(e) => setFlashQtyLimit(e.target.value)}
                  className="input-field h-9 rounded-lg text-xs"
                  data-ocid="admin.flash_sale_qty_input"
                  placeholder="Qty limit"
                />
              </div>
              <button
                type="button"
                onClick={handleAddFlashItem}
                data-ocid="admin.flash_sale_add_item_button"
                className="btn-secondary w-full text-xs flex items-center justify-center gap-1.5 py-2 rounded-lg"
              >
                <Plus size={13} /> Add Product to Sale
              </button>
              {flashSaleItems.length > 0 && (
                <div className="space-y-1.5 mt-2">
                  {flashSaleItems.map((item, idx) => {
                    const product = products?.find(
                      (p) => p.id === item.productId,
                    );
                    return (
                      <div
                        key={item.productId.toString()}
                        className="flex items-center justify-between bg-muted/30 rounded-lg px-3 py-2 text-xs border border-border"
                        data-ocid={`admin.flash_sale_item.${idx + 1}`}
                      >
                        <span className="truncate flex-1 font-medium">
                          {product?.info.titleEn ?? `#${item.productId}`}
                        </span>
                        <span className="text-accent font-bold mx-3">
                          {item.discountPercent.toString()}% off
                        </span>
                        <span className="text-muted-foreground mr-3">
                          Limit: {item.quantityLimit.toString()}
                        </span>
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            setFlashSaleItems((prev) =>
                              prev.filter(
                                (i) => i.productId !== item.productId,
                              ),
                            )
                          }
                          className="h-6 w-6 p-0 rounded-lg text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 size={11} />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setFlashSaleDialog(false)}
                data-ocid="admin.flash_sale_cancel_button"
                className="btn-secondary rounded-lg text-xs"
              >
                Cancel
              </Button>
              <button
                type="submit"
                disabled={creatingFlashSale || !flashSaleItems.length}
                data-ocid="admin.flash_sale_submit_button"
                className="cta-primary text-xs px-5 py-2 disabled:opacity-50"
              >
                {creatingFlashSale
                  ? "Creating..."
                  : `Create Flash Sale (${flashSaleItems.length} products)`}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ── Order Status Dialog ─────────────────────────────────────────── */}
      <Dialog open={orderStatusDialog} onOpenChange={setOrderStatusDialog}>
        <DialogContent
          className="rounded-2xl max-w-sm"
          data-ocid="admin.order_status_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              Update Order Status
            </DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <form onSubmit={handleUpdateOrderStatus} className="space-y-4">
              <div className="rounded-xl bg-muted/30 border border-border p-4 space-y-1.5">
                <p className="text-xs text-muted-foreground">
                  Order{" "}
                  <span className="font-mono text-foreground font-bold">
                    #{selectedOrder.id.toString()}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    Current:
                  </span>
                  <StatusBadge status={selectedOrder.status} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Total:{" "}
                  <span className="font-mono font-bold text-foreground">
                    {formatPrice(selectedOrder.totalInPaisa)}
                  </span>
                </p>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  New Status
                </Label>
                <Select
                  value={newOrderStatus}
                  onValueChange={(v) => setNewOrderStatus(v as OrderStatus)}
                >
                  <SelectTrigger
                    className="h-10 text-xs rounded-lg"
                    data-ocid="admin.order_status_select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {ORDER_STATUSES.map((s) => (
                      <SelectItem
                        key={s}
                        value={s}
                        className="text-xs capitalize"
                      >
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  Note (optional)
                </Label>
                <Textarea
                  value={orderStatusNote}
                  onChange={(e) => setOrderStatusNote(e.target.value)}
                  className="rounded-lg text-xs resize-none"
                  rows={2}
                  data-ocid="admin.order_status_note_input"
                  placeholder="e.g. Dispatched via DTDC, tracking: ABC123"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground font-semibold">
                    Est. Delivery Date
                  </Label>
                  <Input
                    type="date"
                    value={orderDeliveryDate}
                    onChange={(e) => setOrderDeliveryDate(e.target.value)}
                    className="input-field h-9 rounded-lg text-xs"
                    data-ocid="admin.order_delivery_date_input"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground font-semibold">
                    Courier Note
                  </Label>
                  <Input
                    value={orderCourierNote}
                    onChange={(e) => setOrderCourierNote(e.target.value)}
                    className="input-field h-9 rounded-lg text-xs"
                    data-ocid="admin.order_courier_note_input"
                    placeholder="e.g. DTDC #12345"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOrderStatusDialog(false)}
                  data-ocid="admin.order_status_cancel_button"
                  className="btn-secondary rounded-lg text-xs"
                >
                  Cancel
                </Button>
                <button
                  type="submit"
                  disabled={updatingOrderStatus}
                  data-ocid="admin.order_status_confirm_button"
                  className="cta-primary text-xs px-5 py-2 disabled:opacity-60"
                >
                  {updatingOrderStatus ? "Updating..." : "Update Status"}
                </button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
