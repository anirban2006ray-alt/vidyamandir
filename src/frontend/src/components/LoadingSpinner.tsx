interface LoadingSpinnerProps {
  size?: number;
  text?: string;
  fullPage?: boolean;
}

// CSS-only spinning ring (no icon dependency)
function SpinnerRing({ size = 32 }: { size?: number }) {
  return (
    <div
      className="rounded-full animate-spin"
      style={{
        width: size,
        height: size,
        border: `${Math.max(2, Math.round(size / 10))}px solid oklch(var(--accent) / 0.15)`,
        borderTopColor: "oklch(var(--accent))",
        borderRightColor: "oklch(var(--accent) / 0.5)",
      }}
      role="status"
      aria-label="Loading"
    />
  );
}

export function LoadingSpinner({
  size = 32,
  text,
  fullPage = false,
}: LoadingSpinnerProps) {
  if (fullPage) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{
          background: "oklch(var(--background) / 0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        data-ocid="app.loading_state"
      >
        <div className="flex flex-col items-center gap-4 animate-scale-in">
          <SpinnerRing size={size} />
          {text && (
            <p
              className="text-sm font-medium"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center py-16"
      data-ocid="loading_state"
    >
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <SpinnerRing size={size} />
        {text && (
          <p
            className="text-sm font-medium"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

// ProductCardSkeleton — shimmer effect
export function ProductCardSkeleton() {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden border"
      style={{
        background: "oklch(var(--card))",
        borderColor: "oklch(var(--border))",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Cover image placeholder */}
      <div
        className="aspect-[3/4] w-full shimmer"
        style={{ background: "oklch(var(--muted))" }}
      />
      <div className="p-3 space-y-2.5 flex-1">
        {/* Title lines */}
        <div
          className="h-3 rounded-md shimmer w-4/5"
          style={{ background: "oklch(var(--muted))" }}
        />
        <div
          className="h-3 rounded-md shimmer w-3/5"
          style={{ background: "oklch(var(--muted))" }}
        />
        {/* Author */}
        <div
          className="h-2.5 rounded-md shimmer w-1/2"
          style={{ background: "oklch(var(--muted))" }}
        />
        {/* Stars */}
        <div
          className="h-3 rounded-md shimmer w-2/5"
          style={{ background: "oklch(var(--muted))" }}
        />
        {/* Price */}
        <div
          className="h-5 rounded-md shimmer w-1/3 mt-2"
          style={{ background: "oklch(var(--muted))" }}
        />
        {/* Button */}
        <div
          className="h-8 rounded-lg shimmer w-full mt-1"
          style={{ background: "oklch(var(--muted))" }}
        />
      </div>
    </div>
  );
}

// OrderRowSkeleton for OrdersPage
export function OrderRowSkeleton() {
  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        background: "oklch(var(--card))",
        borderColor: "oklch(var(--border))",
        boxShadow: "var(--shadow-subtle)",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-3 border-b shimmer"
        style={{ borderColor: "oklch(var(--border))" }}
      >
        <div
          className="h-3 rounded-md w-32"
          style={{ background: "oklch(var(--muted))" }}
        />
        <div
          className="h-3 rounded-md w-20"
          style={{ background: "oklch(var(--muted))" }}
        />
      </div>
      <div className="px-4 py-3 flex items-center gap-4">
        <div className="flex gap-1.5">
          {["a", "b", "c"].map((k) => (
            <div
              key={k}
              className="w-10 rounded-md shimmer"
              style={{ height: "52px", background: "oklch(var(--muted))" }}
            />
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <div
            className="h-3 rounded-md w-3/4"
            style={{ background: "oklch(var(--muted))" }}
          />
          <div
            className="h-2.5 rounded-md w-1/4"
            style={{ background: "oklch(var(--muted))" }}
          />
        </div>
        <div
          className="h-6 rounded-full w-16"
          style={{ background: "oklch(var(--muted))" }}
        />
      </div>
    </div>
  );
}

// FlashSaleCardSkeleton for FlashSalesPage
export function FlashSaleCardSkeleton() {
  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        borderColor: "oklch(var(--border))",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        className="h-14 w-full shimmer"
        style={{ background: "oklch(var(--accent) / 0.2)" }}
      />
      <div
        className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        style={{ background: "oklch(var(--card))" }}
      >
        {(["a", "b", "c", "d", "e", "f"] as const).map((k) => (
          <ProductCardSkeleton key={k} />
        ))}
      </div>
    </div>
  );
}
