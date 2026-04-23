import { j as jsxRuntimeExports } from "./index-C7rxycPz.js";
import { S as Star } from "./star-Br0M2B3s.js";
function StarRating({
  rating,
  max = 5,
  size = 14,
  showValue = false,
  count,
  interactive = false,
  onRate
}) {
  const goldenYellow = "oklch(0.85 0.18 85)";
  const mutedStar = "oklch(0.85 0.18 85 / 0.2)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: Array.from({ length: max }, (_, i) => {
      const filled = i < Math.floor(rating);
      const partial = !filled && i < rating;
      const starKey = `star-${rating}-${i}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative",
          style: { width: size + 1, height: size + 1 },
          role: interactive ? "button" : void 0,
          tabIndex: interactive ? 0 : void 0,
          onClick: () => interactive && (onRate == null ? void 0 : onRate(i + 1)),
          onKeyDown: (e) => {
            if (interactive && (e.key === "Enter" || e.key === " "))
              onRate == null ? void 0 : onRate(i + 1);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                size,
                style: { color: mutedStar },
                fill: "currentColor"
              }
            ),
            (filled || partial) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 overflow-hidden",
                style: { width: filled ? "100%" : `${rating % 1 * 100}%` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size,
                    style: { color: goldenYellow },
                    fill: "currentColor"
                  }
                )
              }
            )
          ]
        },
        starKey
      );
    }) }),
    showValue && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "text-xs font-bold font-mono",
        style: { color: goldenYellow, fontFamily: "var(--font-mono)" },
        children: rating.toFixed(1)
      }
    ),
    count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "text-xs",
        style: { color: "oklch(var(--muted-foreground))" },
        children: [
          "(",
          count,
          ")"
        ]
      }
    )
  ] });
}
export {
  StarRating as S
};
