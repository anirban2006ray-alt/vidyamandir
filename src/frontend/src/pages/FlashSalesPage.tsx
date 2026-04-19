import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { Clock, Flame, ShoppingCart, Zap } from "lucide-react";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { FlashSaleItem, FlashSaleView } from "../backend.d.ts";
import { StarRating } from "../components/StarRating";
import { useCart } from "../hooks/use-cart";
import { useLanguage } from "../hooks/use-language";
import { useGetProduct, useListFlashSales } from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";

// ─── Digit Box ───────────────────────────────────────────────────────────────

function DigitBox({ value, label }: { value: number; label: string }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-card/20 border border-primary-foreground/20 backdrop-blur-sm rounded-xl px-3 py-2 min-w-[52px] shadow-elevated">
        <span className="font-mono font-bold text-2xl sm:text-3xl text-primary-foreground leading-none tabular-nums block text-center">
          {pad(value)}
        </span>
      </div>
      <span className="text-[10px] text-primary-foreground/70 font-semibold uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

// ─── Hero Countdown ───────────────────────────────────────────────────────────

function HeroCountdown({
  endTime,
  title,
  titleBn,
  lang,
}: {
  endTime: bigint;
  title: string;
  titleBn: string;
  lang: string;
}) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, Number(endTime) / 1_000_000 - Date.now());
      const s = Math.floor(diff / 1000);
      setTimeLeft({
        d: Math.floor(s / 86400),
        h: Math.floor((s % 86400) / 3600),
        m: Math.floor((s % 3600) / 60),
        s: s % 60,
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  const units = [
    { label: lang === "bn" ? "দিন" : "Days", val: timeLeft.d },
    { label: lang === "bn" ? "ঘণ্টা" : "Hrs", val: timeLeft.h },
    { label: lang === "bn" ? "মিনিট" : "Mins", val: timeLeft.m },
    { label: lang === "bn" ? "সেকেন্ড" : "Secs", val: timeLeft.s },
  ];

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 sm:p-8 mb-8"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.64 0.23 38), oklch(0.52 0.27 30), oklch(0.45 0.24 250))",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.90 0.20 80), transparent)",
        }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, oklch(0.80 0.15 255), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Flame
              size={20}
              className="text-yellow-300 animate-pulse"
              fill="currentColor"
            />
            <span className="text-primary-foreground/90 text-sm font-semibold uppercase tracking-widest">
              {lang === "bn" ? "🔴 এখন চলছে" : "🔴 Live Now"}
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground leading-tight">
            {lang === "bn" ? titleBn : title}
          </h2>
          <p className="text-primary-foreground/70 text-sm mt-1">
            {lang === "bn"
              ? "সময় শেষ হওয়ার আগেই কিনুন!"
              : "Hurry — limited time deal!"}
          </p>
        </div>

        <div className="flex items-end gap-2">
          {units.map(({ label, val }) => (
            <DigitBox key={label} value={val} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mini Countdown (per card) ────────────────────────────────────────────────

function MiniCountdown({ endTime }: { endTime: bigint }) {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, Number(endTime) / 1_000_000 - Date.now());
      const s = Math.floor(diff / 1000);
      setTimeLeft({
        h: Math.floor(s / 3600),
        m: Math.floor((s % 3600) / 60),
        s: s % 60,
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-1 text-[10px] text-accent font-mono font-bold">
      <Clock size={9} className="shrink-0" />
      <span>
        {pad(timeLeft.h)}:{pad(timeLeft.m)}:{pad(timeLeft.s)}
      </span>
    </div>
  );
}

// ─── Flash Sale Item Card ──────────────────────────────────────────────────────

function FlashSaleItemCard({
  item,
  saleId,
  saleEndTime,
  isActive,
}: {
  item: FlashSaleItem;
  saleId: bigint;
  saleEndTime: bigint;
  isActive: boolean;
}) {
  const { lang, t } = useLanguage();
  const { data: product } = useGetProduct(item.productId);
  const { addItem, isInCart } = useCart();

  if (!product) {
    return (
      <div className="rounded-xl overflow-hidden bg-card border border-border shadow-subtle">
        <Skeleton className="aspect-[3/4] w-full" />
        <div className="p-3 space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-7 w-full rounded-lg" />
        </div>
      </div>
    );
  }

  const title =
    lang === "bn" && product.info.titleBn
      ? product.info.titleBn
      : product.info.titleEn;
  const inCart = isInCart(product.id);
  const soldPct = item.quantityLimit
    ? Math.min(100, (Number(item.soldCount) / Number(item.quantityLimit)) * 100)
    : 0;
  const isAlmostGone = soldPct > 70;

  return (
    <div
      className={`card-dense flex flex-col group relative ${!isActive ? "opacity-60 grayscale" : ""}`}
      data-ocid={`flash.item.${saleId}-${item.productId}`}
    >
      {/* Sale badge */}
      <div className="absolute top-2 left-2 z-10">
        <span className="badge-sale text-[11px] font-bold shadow-elevated">
          {item.discountPercent.toString()}% {t("off")}
        </span>
      </div>

      {/* Sale ended overlay */}
      {!isActive && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/60 rounded-xl">
          <span className="bg-muted text-muted-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border">
            {lang === "bn" ? "সেল শেষ" : "Sale Ended"}
          </span>
        </div>
      )}

      <Link to="/product/$id" params={{ id: product.id.toString() }}>
        <div className="aspect-[3/4] overflow-hidden bg-muted/30">
          {product.coverImageUrl ? (
            <img
              src={product.coverImageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-muted to-muted/50">
              📚
            </div>
          )}
        </div>
      </Link>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <Link to="/product/$id" params={{ id: product.id.toString() }}>
          <h3 className="text-xs font-semibold line-clamp-2 leading-tight hover:text-accent transition-colors">
            {title}
          </h3>
        </Link>

        <StarRating
          rating={product.averageRating}
          count={Number(product.reviewCount)}
        />

        {/* Price + mini countdown */}
        <div className="flex items-center justify-between gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">
              {formatPrice(item.discountedPriceInPaisa)}
            </span>
            <span className="text-[10px] text-muted-foreground line-through">
              {formatPrice(item.originalPriceInPaisa)}
            </span>
          </div>
          {isActive && <MiniCountdown endTime={saleEndTime} />}
        </div>

        {/* Stock progress bar */}
        {item.quantityLimit && (
          <div className="space-y-1">
            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-1.5 rounded-full transition-all ${isAlmostGone ? "bg-destructive" : "bg-accent"}`}
                style={{ width: `${soldPct}%` }}
              />
            </div>
            {isAlmostGone && (
              <p className="text-[10px] text-destructive font-semibold">
                {lang === "bn" ? "শেষ হয়ে যাচ্ছে!" : "Almost gone!"}
              </p>
            )}
          </div>
        )}

        <Button
          type="button"
          onClick={() => {
            if (inCart || !isActive) return;
            addItem({
              productId: product.id,
              titleEn: product.info.titleEn,
              titleBn: product.info.titleBn,
              priceInPaisa: item.discountedPriceInPaisa,
              quantity: 1,
              coverImageUrl: product.coverImageUrl,
            });
            toast.success(
              lang === "bn" ? "কার্টে যোগ করা হয়েছে" : "Added to cart!",
            );
          }}
          disabled={inCart || !isActive}
          className={`w-full text-xs rounded-lg font-semibold py-2 transition-smooth ${
            inCart
              ? "bg-muted text-muted-foreground"
              : isActive
                ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-card"
                : "bg-muted text-muted-foreground"
          }`}
        >
          <ShoppingCart size={12} className="mr-1 inline" />
          {inCart ? t("inCart") : t("addToCart")}
        </Button>
      </div>
    </div>
  );
}

// ─── Sale Section ─────────────────────────────────────────────────────────────

function SaleSection({
  sale,
  isFirst,
}: { sale: FlashSaleView; isFirst: boolean }) {
  const { lang } = useLanguage();
  const isActive = sale.isCurrentlyActive;

  return (
    <div
      className={`rounded-2xl overflow-hidden border ${isActive ? "border-accent/40 shadow-elevated" : "border-border shadow-subtle"}`}
      data-ocid={`flash.sale.${sale.id}`}
    >
      {/* Section header */}
      {isActive && isFirst ? (
        <HeroCountdown
          endTime={sale.endTime}
          title={sale.titleEn}
          titleBn={sale.titleBn}
          lang={lang}
        />
      ) : (
        <div
          className={`px-5 py-4 flex flex-wrap items-center justify-between gap-3 ${isActive ? "bg-accent" : "bg-muted/40"}`}
        >
          <div className="flex items-center gap-2.5">
            {isActive ? (
              <Flame
                size={18}
                className="text-accent-foreground"
                fill="currentColor"
              />
            ) : (
              <Zap size={16} className="text-muted-foreground/60" />
            )}
            <div>
              <h2
                className={`text-base font-bold ${isActive ? "text-accent-foreground" : "text-muted-foreground"}`}
              >
                {lang === "bn" ? sale.titleBn : sale.titleEn}
              </h2>
              {!isActive && (
                <p className="text-xs text-muted-foreground/60">
                  {lang === "bn" ? "সেল শেষ হয়েছে" : "This sale has ended"}
                </p>
              )}
            </div>
          </div>
          {isActive && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-foreground/20 border border-accent-foreground/30">
              <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
              <span className="text-xs text-accent-foreground font-bold uppercase tracking-wider">
                {lang === "bn" ? "চলছে" : "Live"}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Items grid */}
      <div
        className={`p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 ${!isActive ? "bg-muted/10" : "bg-background"}`}
      >
        {sale.items.map((item) => (
          <FlashSaleItemCard
            key={item.productId.toString()}
            item={item}
            saleId={sale.id}
            saleEndTime={sale.endTime}
            isActive={isActive}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Flash Sales Page ──────────────────────────────────────────────────────────

export default function FlashSalesPage() {
  const { lang, t } = useLanguage();
  const { data: flashSales, isLoading } = useListFlashSales(false);

  const activeSales = flashSales?.filter((s) => s.isCurrentlyActive) ?? [];
  const endedSales = flashSales?.filter((s) => !s.isCurrentlyActive) ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6" data-ocid="flash.page">
      {/* Page header */}
      <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
        <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
          <Zap size={20} className="text-accent" fill="currentColor" />
        </div>
        <div>
          <h1 className="text-xl font-display font-bold uppercase tracking-wide">
            {t("flashSales")}
          </h1>
          <p className="text-xs text-muted-foreground">
            {lang === "bn"
              ? "সীমিত সময়ের অফার — দ্রুত কিনুন!"
              : "Limited time deals — grab them fast!"}
          </p>
        </div>
      </div>

      {/* Skeleton loading */}
      {isLoading ? (
        <div className="space-y-6" data-ocid="flash.loading_state">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-border"
            >
              <Skeleton className="h-48 w-full" />
              <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="rounded-xl overflow-hidden">
                    <Skeleton className="aspect-[3/4] w-full" />
                    <div className="p-3 space-y-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-7 w-full rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : !flashSales || flashSales.length === 0 ? (
        /* Empty state */
        <div
          className="card-elevation flex flex-col items-center py-24 gap-6"
          data-ocid="flash.empty_state"
        >
          <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-card">
            <Zap size={40} className="text-accent/50" fill="currentColor" />
          </div>
          <div className="text-center max-w-sm space-y-2">
            <h2 className="text-xl font-display font-bold">
              {lang === "bn" ? "কোনো সেল সক্রিয় নেই" : "No Active Flash Sales"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {lang === "bn"
                ? "শীঘ্রই আবার দেখুন — দারুণ ডিল আসছে!"
                : "Check back soon for exciting limited-time deals!"}
            </p>
          </div>
          <Link to="/shop" data-ocid="flash.shop_link">
            <button
              type="button"
              className="cta-primary flex items-center gap-2 px-6 py-3"
            >
              📚 {t("shop")}
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Active sales */}
          {activeSales.length > 0 && (
            <div className="space-y-6">
              {activeSales.map((sale, idx) => (
                <SaleSection
                  key={sale.id.toString()}
                  sale={sale}
                  isFirst={idx === 0}
                />
              ))}
            </div>
          )}

          {/* Ended sales */}
          {endedSales.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap size={16} className="text-muted-foreground/50" />
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  {lang === "bn" ? "শেষ হওয়া সেল" : "Ended Sales"}
                </h2>
                <div className="flex-1 h-px bg-border" />
              </div>
              {endedSales.map((sale) => (
                <SaleSection
                  key={sale.id.toString()}
                  sale={sale}
                  isFirst={false}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
