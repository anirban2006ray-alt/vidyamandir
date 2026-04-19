import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  showValue?: boolean;
  count?: number;
  interactive?: boolean;
  onRate?: (value: number) => void;
}

export function StarRating({
  rating,
  max = 5,
  size = 14,
  showValue = false,
  count,
  interactive = false,
  onRate,
}: StarRatingProps) {
  const goldenYellow = "oklch(0.85 0.18 85)";
  const mutedStar = "oklch(0.85 0.18 85 / 0.2)";

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          const filled = i < Math.floor(rating);
          const partial = !filled && i < rating;
          const starKey = `star-${rating}-${i}`;

          return (
            <div
              key={starKey}
              className="relative"
              style={{ width: size + 1, height: size + 1 }}
              role={interactive ? "button" : undefined}
              tabIndex={interactive ? 0 : undefined}
              onClick={() => interactive && onRate?.(i + 1)}
              onKeyDown={(e) => {
                if (interactive && (e.key === "Enter" || e.key === " "))
                  onRate?.(i + 1);
              }}
            >
              {/* Base star — muted */}
              <Star
                size={size}
                style={{ color: mutedStar }}
                fill="currentColor"
              />
              {/* Filled portion */}
              {(filled || partial) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}
                >
                  <Star
                    size={size}
                    style={{ color: goldenYellow }}
                    fill="currentColor"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showValue && (
        <span
          className="text-xs font-bold font-mono"
          style={{ color: goldenYellow, fontFamily: "var(--font-mono)" }}
        >
          {rating.toFixed(1)}
        </span>
      )}

      {count !== undefined && (
        <span
          className="text-xs"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          ({count})
        </span>
      )}
    </div>
  );
}
