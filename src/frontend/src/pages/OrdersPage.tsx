import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronRight,
  Clock,
  LogIn,
  Package,
  ShoppingBag,
} from "lucide-react";
import { motion } from "motion/react";
import type { OrderStatus } from "../backend.d.ts";
import { useAuth } from "../hooks/use-auth";
import { useLanguage } from "../hooks/use-language";
import { useListMyOrders } from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";

type StatusConfig = {
  label: string;
  labelBn: string;
  className: string;
  dotClass: string;
};

const STATUS_CONFIG: Record<OrderStatus, StatusConfig> = {
  processing: {
    label: "Processing",
    labelBn: "প্রক্রিয়া চলছে",
    className:
      "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    dotClass: "bg-amber-500",
  },
  shipped: {
    label: "Shipped",
    labelBn: "পাঠানো হয়েছে",
    className:
      "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/40",
    dotClass: "bg-blue-500",
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

function OrderCardSkeleton() {
  return (
    <div className="card-elevation p-0 overflow-hidden animate-pulse">
      <div className="px-5 py-3 bg-muted/30 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="px-5 py-4 flex items-center gap-4">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="w-12 h-16 rounded-md" />
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/4" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  );
}

export default function OrdersPage() {
  const { lang, t } = useLanguage();
  const { isAuthenticated, login } = useAuth();
  const { data: orders, isLoading } = useListMyOrders();

  if (!isAuthenticated) {
    return (
      <div
        className="max-w-lg mx-auto px-4 py-24 flex flex-col items-center gap-6 text-center"
        data-ocid="orders.login_required"
      >
        {/* Illustration */}
        <div className="relative w-28 h-28">
          <div className="w-28 h-28 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
            <Package size={52} className="text-accent opacity-80" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-elevated">
            <LogIn size={16} className="text-accent-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-bold text-foreground">
            {t("myOrders")}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {t("signInDesc")}
          </p>
        </div>
        <Button
          type="button"
          onClick={login}
          data-ocid="orders.login_button"
          className="cta-primary text-sm px-8 py-2.5 h-auto"
        >
          <LogIn size={15} className="mr-2" />
          {t("login")}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-muted/20 min-h-screen" data-ocid="orders.page">
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-7 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
            <Package size={20} className="text-accent" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground tracking-tight">
              {t("orderHistory")}
            </h1>
            {orders && orders.length > 0 && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {orders.length}{" "}
                {orders.length === 1
                  ? lang === "bn"
                    ? "টি অর্ডার"
                    : "order"
                  : lang === "bn"
                    ? "টি অর্ডার"
                    : "orders"}
              </p>
            )}
          </div>
        </motion.div>

        {/* Loading skeletons */}
        {isLoading ? (
          <div className="space-y-4" data-ocid="orders.loading_state">
            <OrderCardSkeleton />
            <OrderCardSkeleton />
            <OrderCardSkeleton />
          </div>
        ) : !orders || orders.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-elevation flex flex-col items-center py-20 gap-6 text-center"
            data-ocid="orders.empty_state"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <svg
                  viewBox="0 0 80 80"
                  className="w-16 h-16"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="10"
                    y="20"
                    width="60"
                    height="48"
                    rx="6"
                    fill="currentColor"
                    className="text-muted-foreground/10"
                  />
                  <rect
                    x="10"
                    y="20"
                    width="60"
                    height="48"
                    rx="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground/30"
                  />
                  <path
                    d="M26 44l8 8 20-20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent/60"
                  />
                  <rect
                    x="24"
                    y="12"
                    width="32"
                    height="12"
                    rx="4"
                    fill="currentColor"
                    className="text-accent/20"
                  />
                  <rect
                    x="24"
                    y="12"
                    width="32"
                    height="12"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent/40"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 text-2xl">📦</div>
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-display font-bold text-foreground">
                {lang === "bn" ? "এখনো কোনো অর্ডার নেই" : "No orders yet"}
              </h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                {lang === "bn"
                  ? "কেনাকাটা শুরু করুন — আপনার অর্ডার এখানে দেখাবে"
                  : "Start shopping and your orders will appear here"}
              </p>
            </div>
            <Link
              to="/shop"
              data-ocid="orders.shop_link"
              className="cta-primary inline-flex items-center gap-2 text-sm"
            >
              <ShoppingBag size={15} />
              {t("shopNow")}
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {[...orders]
              .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
              .map((order, idx) => {
                const cfg =
                  STATUS_CONFIG[order.status] ?? STATUS_CONFIG.processing;
                const orderDate = new Date(Number(order.createdAt) / 1_000_000);
                const previewItems = order.items.slice(0, 3);

                return (
                  <motion.div
                    key={order.id.toString()}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to="/orders/$id"
                      params={{ id: order.id.toString() }}
                      data-ocid={`orders.item.${idx + 1}`}
                      className="block card-elevation hover:shadow-elevated group overflow-hidden no-underline"
                    >
                      {/* Order header strip */}
                      <div className="flex items-center justify-between px-5 py-3 bg-muted/40 border-b border-border">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-xs font-mono text-muted-foreground shrink-0">
                            #{order.id.toString()}
                          </span>
                          {/* Status pill */}
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cfg.className}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${cfg.dotClass} shrink-0`}
                            />
                            {lang === "bn" ? cfg.labelBn : cfg.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 ml-2">
                          <Clock size={11} />
                          {orderDate.toLocaleDateString(
                            lang === "bn" ? "bn-IN" : "en-IN",
                            { day: "numeric", month: "short", year: "numeric" },
                          )}
                        </div>
                      </div>

                      {/* Order body */}
                      <div className="px-5 py-4 flex items-center gap-4">
                        {/* Thumbnail stack */}
                        <div className="flex gap-1.5 shrink-0">
                          {previewItems.map((item) => (
                            <div
                              key={item.productId.toString()}
                              className="w-11 h-15 rounded-md bg-primary/10 border border-border overflow-hidden flex items-center justify-center text-lg shadow-subtle"
                              style={{ height: "56px" }}
                            >
                              <BookOpen size={18} className="text-accent/60" />
                            </div>
                          ))}
                          {order.items.length > 3 && (
                            <div
                              className="w-11 rounded-md bg-muted border border-border flex items-center justify-center text-xs font-bold text-muted-foreground"
                              style={{ height: "56px" }}
                            >
                              +{order.items.length - 3}
                            </div>
                          )}
                        </div>

                        {/* Title summary */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground line-clamp-1 leading-snug">
                            {previewItems.map((i) => i.titleEn).join(", ")}
                            {order.items.length > 3 &&
                              ` +${order.items.length - 3} more`}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {order.items.length}{" "}
                            {lang === "bn"
                              ? "টি বই"
                              : order.items.length === 1
                                ? "item"
                                : "items"}
                          </p>
                        </div>

                        {/* Total + chevron */}
                        <div className="text-right shrink-0 flex items-center gap-2">
                          <span className="text-base font-bold font-mono text-accent">
                            {formatPrice(order.totalInPaisa)}
                          </span>
                          <ChevronRight
                            size={18}
                            className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
