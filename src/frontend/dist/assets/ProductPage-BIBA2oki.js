import { g as createLucideIcon, z as useParams, d as useNavigate, u as useLanguage, A as useAuth, v as useCart, C as useGetProduct, w as useGetWishlist, D as useListReviews, E as useListQuestions, F as useRecordRecentlyViewed, J as useAddToWishlist, K as useRemoveFromWishlist, M as useVoteReviewHelpful, r as reactExports, j as jsxRuntimeExports, B as Button, s as Badge, x as formatPrice, N as ue, y as ShoppingCart, H as Heart, O as useCreateReview, t as Label, I as Input, T as Textarea, Q as useAskQuestion, R as useListAnswers, U as usePostAnswer, V as useVoteAnswerHelpful, W as MessageCircle } from "./index-CkX-FUTT.js";
import { S as Separator } from "./separator-CbmwW1Ju.js";
import { S as Skeleton } from "./skeleton-PRVUKlos.js";
import { S as StarRating } from "./StarRating-tHFhQVr6.js";
import { B as BookOpen } from "./book-open-C-rtK5Zx.js";
import { C as ChevronRight } from "./chevron-right-Dnk6-D71.js";
import { m as motion } from "./proxy-DTHE9lA6.js";
import { C as CircleCheck } from "./circle-check-77caLksi.js";
import { T as Truck } from "./truck-D8y6sfya.js";
import { M as Minus } from "./minus-HkCRvNG5.js";
import { P as Plus } from "./plus-C3B7Fwzc.js";
import { Z as Zap } from "./zap-DyuGZbXi.js";
import { S as Star } from "./star-BuZgBhva.js";
import { G as Globe } from "./globe-BfK5gvtI.js";
import { A as AnimatePresence } from "./index-B36P5Edi.js";
import { C as ChevronLeft } from "./chevron-left-CxI-WmtI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
];
const ThumbsUp = createLucideIcon("thumbs-up", __iconNode);
const GENRE_LABELS = {
  fiction: { en: "Fiction", bn: "কথাসাহিত্য" },
  nonFiction: { en: "Non-Fiction", bn: "তথ্যমূলক" },
  bengaliClassics: { en: "Bengali Classics", bn: "বাংলা ক্লাসিক" },
  poetry: { en: "Poetry", bn: "কবিতা" },
  childrens: { en: "Children's", bn: "শিশু সাহিত্য" },
  academic: { en: "Academic", bn: "একাডেমিক" },
  history: { en: "History", bn: "ইতিহাস" },
  biography: { en: "Biography", bn: "জীবনী" },
  religion: { en: "Religion", bn: "ধর্ম" },
  science: { en: "Science", bn: "বিজ্ঞান" },
  other: { en: "Other", bn: "অন্যান্য" }
};
const LANG_LABELS = {
  bengali: { en: "Bengali", bn: "বাংলা", flag: "🇧🇩" },
  english: { en: "English", bn: "ইংরেজি", flag: "🇬🇧" },
  bilingual: { en: "Bilingual", bn: "দ্বিভাষিক", flag: "🌐" }
};
function ImageCarousel({
  images,
  title,
  isOutOfStock,
  isWishlisted,
  onWishlist
}) {
  const [active, setActive] = reactExports.useState(0);
  const [direction, setDirection] = reactExports.useState(1);
  const [isZoomed, setIsZoomed] = reactExports.useState(false);
  const validImages = images.filter(Boolean);
  const displayImages = validImages.length > 0 ? validImages : ["/assets/images/placeholder.svg"];
  const goTo = (idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => goTo((active - 1 + displayImages.length) % displayImages.length);
  const next = () => goTo((active + 1) % displayImages.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24 space-y-3", "data-ocid": "product.image_carousel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden shadow-elevated bg-card border border-border aspect-[3/4] w-full max-w-[380px] mx-auto md:mx-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: direction * 40 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: direction * -40 },
          transition: { duration: 0.25, ease: "easeInOut" },
          className: "absolute inset-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-full h-full overflow-hidden transition-transform duration-300 ${isZoomed ? "scale-105" : "scale-100"}`,
              onMouseEnter: () => setIsZoomed(true),
              onMouseLeave: () => setIsZoomed(false),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: displayImages[active],
                  alt: title,
                  className: "w-full h-full object-cover"
                }
              )
            }
          )
        },
        active
      ) }),
      isOutOfStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/75 backdrop-blur-[2px] flex items-center justify-center z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-sale text-sm px-5 py-2", children: "Out of Stock" }) }),
      displayImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: prev,
            "aria-label": "Previous image",
            className: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-card/90 border border-border backdrop-blur-sm shadow-card text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth z-10",
            "data-ocid": "product.image_prev",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: next,
            "aria-label": "Next image",
            className: "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-card/90 border border-border backdrop-blur-sm shadow-card text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth z-10",
            "data-ocid": "product.image_next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onWishlist,
          "aria-label": isWishlisted ? "Remove from wishlist" : "Add to wishlist",
          className: `absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm border shadow-card transition-smooth ${isWishlisted ? "bg-rose-500/20 border-rose-400/50 text-rose-400" : "bg-card/90 border-border text-muted-foreground hover:border-rose-400/50 hover:text-rose-400"}`,
          "data-ocid": "product.wishlist_toggle",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 17, fill: isWishlisted ? "currentColor" : "none" })
        }
      ),
      displayImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10", children: displayImages.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => goTo(i),
          "aria-label": `View image ${i + 1}`,
          className: `rounded-full transition-all duration-200 ${i === active ? "w-5 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-foreground/30 hover:bg-foreground/60"}`
        },
        `dot-${src}`
      )) })
    ] }),
    displayImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1 max-w-[380px] mx-auto md:mx-0 scroll-smooth", children: displayImages.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => goTo(i),
        "aria-label": `Thumbnail ${i + 1}`,
        className: `shrink-0 w-14 h-18 rounded-md overflow-hidden border-2 transition-smooth ${i === active ? "border-accent shadow-card" : "border-border opacity-60 hover:opacity-100 hover:border-accent/50"}`,
        "data-ocid": `product.thumbnail.${i + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt: `View ${i + 1}`,
            className: "w-full h-full object-cover"
          }
        )
      },
      `thumb-${src}`
    )) })
  ] });
}
function RatingBar({
  star,
  count,
  total
}) {
  const pct = total > 0 ? Math.round(count / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs group cursor-default", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 shrink-0 text-right text-muted-foreground font-medium", children: star }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, className: "shrink-0 star-golden", fill: "currentColor" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { width: 0 },
        animate: { width: `${pct}%` },
        transition: { duration: 0.6, delay: star * 0.05, ease: "easeOut" },
        className: "h-full rounded-full",
        style: {
          background: "linear-gradient(90deg, oklch(0.72 0.25 40), oklch(0.64 0.23 38))"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 text-right text-muted-foreground font-medium tabular-nums", children: count })
  ] });
}
function AvatarInitials({
  name,
  size = "md"
}) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const sizeClass = size === "sm" ? "w-7 h-7 text-[10px]" : "w-9 h-9 text-xs";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${sizeClass} rounded-full flex items-center justify-center font-bold shrink-0 border border-border`,
      style: {
        background: "linear-gradient(135deg, oklch(0.64 0.23 38 / 0.3), oklch(0.14 0.08 255))"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.72 0.25 40)" }, children: initials || "U" })
    }
  );
}
function ReviewCard({
  review,
  index,
  votedReviewIds,
  onVote,
  lang
}) {
  var _a;
  const date = new Date(
    Number(review.createdAt / BigInt(1e6))
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const principalStr = ((_a = review.userId) == null ? void 0 : _a.toString()) ?? "";
  const shortId = principalStr.length > 8 ? principalStr.slice(0, 8) : `user${index + 1}`;
  const authorName = `Reader #${shortId}`;
  const voted = votedReviewIds.has(review.id.toString());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05, duration: 0.3 },
      className: "bg-card border border-border rounded-xl p-5 space-y-3 shadow-subtle hover:shadow-card transition-smooth",
      "data-ocid": `review.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarInitials, { name: authorName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: Number(review.rating), size: 13 }),
                review.isVerifiedPurchase && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full",
                    style: {
                      background: "oklch(0.35 0.08 145 / 0.25)",
                      color: "oklch(0.72 0.16 145)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 11 }),
                      " Verified Purchase"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: date })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground leading-tight mt-1", children: review.titleEn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mt-0.5", children: authorName })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pl-12", children: review.bodyEn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 pt-1 border-t border-border/40 pl-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onVote(review.id),
            disabled: voted,
            className: `flex items-center gap-1.5 text-xs transition-smooth px-2.5 py-1 rounded-full border ${voted ? "border-accent/40 bg-accent/10 text-accent cursor-default" : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent"}`,
            "aria-label": voted ? "Already voted helpful" : "Mark as helpful",
            "data-ocid": `review.helpful.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { size: 11, fill: voted ? "currentColor" : "none" }),
              lang === "bn" ? "সহায়ক" : "Helpful",
              " (",
              review.helpfulVotes.toString(),
              ")"
            ]
          }
        ) })
      ]
    }
  );
}
function WriteReviewForm({
  productId,
  onSuccess
}) {
  const [rating, setRating] = reactExports.useState(0);
  const [hoverRating, setHoverRating] = reactExports.useState(0);
  const [titleEn, setTitleEn] = reactExports.useState("");
  const [bodyEn, setBodyEn] = reactExports.useState("");
  const { mutate: createReview, isPending } = useCreateReview();
  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      ue.error("Please select a rating");
      return;
    }
    if (!titleEn.trim()) {
      ue.error("Please add a review title");
      return;
    }
    if (!bodyEn.trim()) {
      ue.error("Please write your review");
      return;
    }
    createReview(
      {
        productId,
        rating: BigInt(rating),
        titleEn: titleEn.trim(),
        bodyEn: bodyEn.trim()
      },
      {
        onSuccess: () => {
          ue.success("Review submitted successfully!");
          setRating(0);
          setTitleEn("");
          setBodyEn("");
          onSuccess();
        },
        onError: () => ue.error("Failed to submit review. Please try again.")
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.form,
    {
      onSubmit: handleSubmit,
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      className: "bg-card border border-border rounded-xl p-6 space-y-5 shadow-card",
      "data-ocid": "review.write_form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-lg", children: "Write a Review" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold", children: "Your Rating *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2",
              "data-ocid": "review.rating_select",
              children: [
                [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onMouseEnter: () => setHoverRating(s),
                    onMouseLeave: () => setHoverRating(0),
                    onClick: () => setRating(s),
                    className: "transition-transform hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded",
                    "aria-label": `Rate ${s} stars`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        size: 28,
                        fill: "currentColor",
                        style: {
                          color: (hoverRating || rating) >= s ? "oklch(0.85 0.18 85)" : "oklch(0.85 0.18 85 / 0.18)"
                        }
                      }
                    )
                  },
                  s
                )),
                rating > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "ml-2 text-sm font-bold",
                    style: { color: "oklch(0.85 0.18 85)" },
                    children: ratingLabels[rating]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "review-title",
              className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold",
              children: "Review Title *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "review-title",
              value: titleEn,
              onChange: (e) => setTitleEn(e.target.value),
              placeholder: "Summarise your experience",
              maxLength: 100,
              className: "rounded-lg bg-background border-input input-field",
              "data-ocid": "review.title_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "review-body",
              className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold",
              children: "Your Review *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "review-body",
              value: bodyEn,
              onChange: (e) => setBodyEn(e.target.value),
              placeholder: "Share your thoughts about this book…",
              rows: 4,
              maxLength: 2e3,
              className: "rounded-lg bg-background border-input resize-none input-field",
              "data-ocid": "review.body_textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-right", children: [
            bodyEn.length,
            "/2000"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isPending,
              className: "cta-primary rounded-lg px-6",
              "data-ocid": "review.submit_button",
              children: isPending ? "Submitting…" : "Submit Review"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              onClick: onSuccess,
              className: "btn-secondary rounded-lg",
              "data-ocid": "review.cancel_button",
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
function AnswerRow({
  answer,
  index,
  votedIds,
  onVote
}) {
  const voted = votedIds.has(answer.id.toString());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-start gap-3 py-3 border-t border-border/30",
      "data-ocid": `qanda.answer.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-accent mt-2 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 text-sm text-foreground/80 leading-relaxed", children: answer.answerText }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onVote(answer.id),
            disabled: voted,
            className: `flex items-center gap-1.5 text-xs shrink-0 px-2 py-1 rounded-full border transition-smooth ${voted ? "border-accent/40 bg-accent/10 text-accent cursor-default" : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent"}`,
            "aria-label": voted ? "Voted helpful" : "Mark as helpful",
            "data-ocid": `qanda.vote.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 11, fill: voted ? "currentColor" : "none" }),
              Number(answer.helpfulVotes)
            ]
          }
        )
      ]
    }
  );
}
function QuestionCard({
  question,
  index,
  lang,
  isAuthenticated,
  login
}) {
  const [showAnswerForm, setShowAnswerForm] = reactExports.useState(false);
  const [answerText, setAnswerText] = reactExports.useState("");
  const [votedIds, setVotedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const { data: answers = [] } = useListAnswers(question.id);
  const { mutate: postAnswer, isPending } = usePostAnswer();
  const { mutate: voteHelpful } = useVoteAnswerHelpful();
  const handleSubmitAnswer = () => {
    if (answerText.trim().length < 5) {
      ue.error("Answer too short");
      return;
    }
    postAnswer(
      { questionId: question.id, answerText: answerText.trim() },
      {
        onSuccess: () => {
          ue.success(
            lang === "bn" ? "আপনার উত্তর পোস্ট হয়েছে!" : "Your answer has been posted!"
          );
          setAnswerText("");
          setShowAnswerForm(false);
        },
        onError: () => ue.error("Failed to post answer")
      }
    );
  };
  const handleVote = (answerId) => {
    if (!isAuthenticated) {
      login();
      return;
    }
    const key = answerId.toString();
    if (votedIds.has(key)) return;
    voteHelpful(answerId, {
      onSuccess: () => {
        setVotedIds((prev) => /* @__PURE__ */ new Set([...prev, key]));
        ue.success(lang === "bn" ? "ভোট নথিভুক্ত হয়েছে!" : "Vote recorded!");
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.06, duration: 0.25 },
      className: "bg-card border border-border rounded-xl p-5 space-y-3 shadow-subtle",
      "data-ocid": `qanda.question.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5",
              style: {
                background: "oklch(0.64 0.23 38 / 0.15)",
                color: "oklch(0.72 0.25 40)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 14 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-snug", children: question.questionText }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              answers.length,
              " ",
              lang === "bn" ? "উত্তর" : "answers"
            ] })
          ] })
        ] }),
        answers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-10 space-y-0", children: answers.map((ans, ai) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnswerRow,
          {
            answer: ans,
            index: ai,
            votedIds,
            onVote: handleVote
          },
          ans.id.toString()
        )) }),
        showAnswerForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "pl-10 pt-2 space-y-2",
            "data-ocid": `qanda.answer_form.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: answerText,
                  onChange: (e) => setAnswerText(e.target.value.slice(0, 250)),
                  placeholder: lang === "bn" ? "আপনার উত্তর লিখুন..." : "Write your answer...",
                  rows: 2,
                  className: "rounded-lg bg-background border-input resize-none text-sm",
                  "data-ocid": `qanda.answer_textarea.${index + 1}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-right", children: [
                answerText.length,
                "/250"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    onClick: handleSubmitAnswer,
                    disabled: isPending,
                    className: "cta-primary text-xs h-8 rounded-lg",
                    "data-ocid": `qanda.answer_submit.${index + 1}`,
                    children: isPending ? "Posting…" : lang === "bn" ? "পোস্ট করুন" : "Post Answer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "ghost",
                    onClick: () => setShowAnswerForm(false),
                    className: "btn-secondary text-xs h-8 rounded-lg",
                    "data-ocid": `qanda.answer_cancel.${index + 1}`,
                    children: "Cancel"
                  }
                )
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              if (!isAuthenticated) {
                login();
                return;
              }
              setShowAnswerForm(true);
            },
            className: "pl-10 text-xs text-accent hover:underline flex items-center gap-1.5 mt-1 transition-smooth",
            "data-ocid": `qanda.answer_this.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 12 }),
              lang === "bn" ? "উত্তর দিন" : "Answer This"
            ]
          }
        )
      ]
    }
  );
}
function AskQuestionForm({
  productId,
  lang,
  onSuccess
}) {
  const [text, setText] = reactExports.useState("");
  const { mutate: askQuestion, isPending } = useAskQuestion();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) {
      ue.error(
        lang === "bn" ? "প্রশ্ন খুব ছোট (ন্যূনতম ১০ অক্ষর)" : "Question too short (min 10 characters)"
      );
      return;
    }
    askQuestion(
      { productId, questionText: text.trim() },
      {
        onSuccess: () => {
          ue.success(
            lang === "bn" ? "আপনার প্রশ্ন পোস্ট হয়েছে!" : "Your question has been posted!"
          );
          setText("");
          onSuccess();
        },
        onError: () => ue.error("Failed to post question")
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.form,
    {
      onSubmit: handleSubmit,
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      className: "bg-card border border-border rounded-xl p-6 space-y-4 shadow-card",
      "data-ocid": "qanda.ask_form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-lg", children: lang === "bn" ? "প্রশ্ন করুন" : "Ask a Question" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: text,
            onChange: (e) => setText(e.target.value.slice(0, 500)),
            placeholder: lang === "bn" ? "আপনার প্রশ্ন লিখুন (ন্যূনতম ১০ অক্ষর)..." : "Write your question (min 10 chars)...",
            rows: 3,
            className: "rounded-lg bg-background border-input resize-none text-sm",
            "data-ocid": "qanda.ask_textarea"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            text.length,
            "/500"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                variant: "ghost",
                onClick: onSuccess,
                className: "btn-secondary rounded-lg text-xs h-8",
                "data-ocid": "qanda.ask_cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                size: "sm",
                disabled: isPending,
                className: "cta-primary rounded-lg text-xs h-8",
                "data-ocid": "qanda.ask_submit_button",
                children: isPending ? "Posting…" : lang === "bn" ? "পোস্ট করুন" : "Post Question"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function DescriptionPanel({
  descEn,
  descBn,
  lang
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const [showBn, setShowBn] = reactExports.useState(lang === "bn");
  const text = showBn && descBn ? descBn : descEn;
  const CLIP = 280;
  const isLong = text.length > CLIP;
  const displayed = expanded || !isLong ? text : `${text.slice(0, CLIP)}…`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "product.description_panel", children: [
    descBn && descEn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pill-toggle w-fit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "pill-toggle-btn",
          "data-active": (!showBn).toString(),
          onClick: () => setShowBn(false),
          "data-ocid": "product.desc_en_toggle",
          children: "EN"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "pill-toggle-btn",
          "data-active": showBn.toString(),
          onClick: () => setShowBn(true),
          "data-ocid": "product.desc_bn_toggle",
          children: "বাং"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 },
        className: "text-sm text-muted-foreground leading-relaxed",
        children: displayed
      },
      `${showBn}-${expanded}`
    ) }),
    isLong && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setExpanded((v) => !v),
        className: "text-xs text-accent hover:underline font-semibold transition-smooth",
        "data-ocid": "product.desc_expand_toggle",
        children: expanded ? lang === "bn" ? "কম দেখুন ▲" : "Show less ▲" : lang === "bn" ? "আরও পড়ুন ▼" : "Read more ▼"
      }
    )
  ] });
}
function ProductPageSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 py-8 space-y-8",
      "data-ocid": "product.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [80, 60, 80, 120].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 rounded-full", style: { width: w } }, w)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[360px_1fr] gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] w-full rounded-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-3/4 rounded-lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-2/5 rounded-lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3 rounded-lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-1/3 rounded-lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 flex-1 rounded-xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 flex-1 rounded-xl" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function StickyMobileBar({
  title,
  price,
  isOutOfStock,
  onAddToCart,
  onBuyNow
}) {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      transition: { duration: 0.25, ease: "easeInOut" },
      className: "fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-deep px-4 py-3",
      "data-ocid": "product.sticky_bar",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-mono font-bold text-base",
              style: { color: "oklch(0.72 0.25 40)" },
              children: formatPrice(price)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            disabled: isOutOfStock,
            onClick: onAddToCart,
            className: "rounded-lg border-accent text-accent hover:bg-accent/10 shrink-0 h-10 px-3",
            "data-ocid": "product.sticky_cart_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 15 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            disabled: isOutOfStock,
            onClick: onBuyNow,
            className: "cta-primary rounded-lg shrink-0 h-10 px-4 text-sm",
            "data-ocid": "product.sticky_buy_button",
            children: "Buy Now"
          }
        )
      ] })
    }
  ) });
}
function ProductPage() {
  var _a;
  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const { isAuthenticated, login } = useAuth();
  const { addItem, items: cartItems } = useCart();
  const productId = BigInt(id);
  const { data: product, isLoading, isError } = useGetProduct(productId);
  const { data: wishlist = [] } = useGetWishlist();
  const { data: reviews = [], isLoading: reviewsLoading } = useListReviews(productId);
  const { data: questions = [], isLoading: questionsLoading } = useListQuestions(productId);
  const { mutate: recordView } = useRecordRecentlyViewed();
  const { mutate: addWishlist } = useAddToWishlist();
  const { mutate: removeWishlist } = useRemoveFromWishlist();
  const { mutate: voteReview } = useVoteReviewHelpful();
  const [activeTab, setActiveTab] = reactExports.useState("reviews");
  const [sortMode, setSortMode] = reactExports.useState("helpfulness");
  const [showReviewForm, setShowReviewForm] = reactExports.useState(false);
  const [showAskForm, setShowAskForm] = reactExports.useState(false);
  const [qty, setQty] = reactExports.useState(1);
  const [votedReviewIds, setVotedReviewIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const tabsRef = reactExports.useRef(null);
  const handleVoteReview = (reviewId) => {
    if (!isAuthenticated) {
      login();
      return;
    }
    const key = reviewId.toString();
    if (votedReviewIds.has(key)) return;
    voteReview(reviewId, {
      onSuccess: () => {
        setVotedReviewIds((prev) => /* @__PURE__ */ new Set([...prev, key]));
        ue.success(lang === "bn" ? "ভোট নথিভুক্ত হয়েছে!" : "Vote recorded!");
      },
      onError: () => ue.error(lang === "bn" ? "ভোট দিতে ব্যর্থ" : "Failed to vote")
    });
  };
  const isWishlisted = wishlist.some((wid) => wid === productId);
  const inCart = cartItems.some((c) => c.productId === productId);
  reactExports.useEffect(() => {
    if (product) recordView(productId);
  }, [product, productId, recordView]);
  const handleWishlist = () => {
    if (!isAuthenticated) {
      login();
      return;
    }
    if (isWishlisted) {
      removeWishlist(productId, {
        onSuccess: () => ue.success("Removed from wishlist")
      });
    } else {
      addWishlist(productId, {
        onSuccess: () => ue.success("Added to wishlist ♥")
      });
    }
  };
  const handleAddToCart = () => {
    if (!product) return;
    if (!isAuthenticated) {
      login();
      return;
    }
    addItem({
      productId,
      titleEn: product.info.titleEn,
      titleBn: product.info.titleBn,
      priceInPaisa: product.priceInPaisa,
      quantity: qty,
      coverImageUrl: product.coverImageUrl
    });
    ue.success(lang === "bn" ? "কার্টে যোগ হয়েছে" : "Added to cart");
  };
  const handleBuyNow = () => {
    if (!product) return;
    if (!isAuthenticated) {
      login();
      return;
    }
    if (!inCart) {
      addItem({
        productId,
        titleEn: product.info.titleEn,
        titleBn: product.info.titleBn,
        priceInPaisa: product.priceInPaisa,
        quantity: qty,
        coverImageUrl: product.coverImageUrl
      });
    }
    void navigate({ to: "/checkout" });
  };
  const scrollToReviews = () => {
    var _a2;
    setActiveTab("reviews");
    (_a2 = tabsRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortMode === "helpfulness")
      return Number(b.helpfulVotes - a.helpfulVotes);
    if (sortMode === "recency") return Number(b.createdAt - a.createdAt);
    return Number(b.rating - a.rating);
  });
  const ratingCounts = [5, 4, 3, 2, 1].map((s) => ({
    star: s,
    count: reviews.filter((r) => Number(r.rating) === s).length
  }));
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductPageSkeleton, {});
  if (isError || !product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-6xl mx-auto px-4 py-24 flex flex-col items-center gap-5",
        "data-ocid": "product.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-20 rounded-full flex items-center justify-center",
              style: { background: "oklch(var(--muted))" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 36, className: "text-muted-foreground/50" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: t("error") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => void navigate({ to: "/shop" }),
              className: "rounded-xl border-accent text-accent hover:bg-accent/10",
              "data-ocid": "product.back_button",
              children: [
                t("back"),
                " to Shop"
              ]
            }
          )
        ]
      }
    );
  }
  const isOutOfStock = product.stockCount === BigInt(0);
  const maxQty = Number(product.stockCount);
  const title = lang === "bn" ? product.info.titleBn : product.info.titleEn;
  const author = lang === "bn" ? product.info.authorBn : product.info.authorEn;
  const genreLabel = ((_a = GENRE_LABELS[product.genre]) == null ? void 0 : _a[lang]) ?? product.genre;
  const langInfo = LANG_LABELS[product.language] ?? {
    en: product.language,
    bn: product.language,
    flag: "📖"
  };
  const TABS = [
    {
      key: "reviews",
      label: { en: "Reviews", bn: "রিভিউ" },
      count: reviews.length
    },
    {
      key: "qanda",
      label: { en: "Q&A", bn: "প্রশ্নোত্তর" },
      count: questions.length
    },
    { key: "details", label: { en: "Details", bn: "বিস্তারিত" } }
  ];
  const images = [product.coverImageUrl].filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "product.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-6xl mx-auto px-4 py-2.5 flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto",
        "data-ocid": "product.breadcrumb",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => void navigate({ to: "/" }),
              className: "hover:text-accent transition-smooth whitespace-nowrap font-medium",
              "data-ocid": "product.breadcrumb_home",
              children: t("home")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: "shrink-0 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => void navigate({ to: "/shop" }),
              className: "hover:text-accent transition-smooth whitespace-nowrap font-medium",
              "data-ocid": "product.breadcrumb_shop",
              children: t("shop")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: "shrink-0 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => void navigate({ to: "/shop", search: { genre: product.genre } }),
              className: "hover:text-accent transition-smooth whitespace-nowrap font-medium",
              "data-ocid": "product.breadcrumb_genre",
              children: genreLabel
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: "shrink-0 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/50 truncate min-w-0 max-w-[180px]", children: title })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-8 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[400px_1fr] gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.45 },
            "data-ocid": "product.image_section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ImageCarousel,
              {
                images,
                title,
                isOutOfStock,
                isWishlisted,
                onWishlist: handleWishlist
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45, delay: 0.1 },
            className: "space-y-5",
            "data-ocid": "product.info_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "rounded-full text-xs font-semibold px-3 py-1",
                    children: genreLabel
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-border",
                    style: { background: "oklch(var(--muted) / 0.5)" },
                    "data-ocid": "product.lang_badge",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: langInfo.flag }),
                      langInfo[lang]
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight tracking-tight",
                    "data-ocid": "product.title",
                    children: title
                  }
                ),
                lang === "en" && product.info.titleBn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1.5 font-medium", children: product.info.titleBn }),
                lang === "bn" && product.info.titleEn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 italic", children: product.info.titleEn })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", "data-ocid": "product.author", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  t("author"),
                  ": "
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold italic", children: author }),
                lang === "en" && product.info.authorBn && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-2 text-xs", children: [
                  "(",
                  product.info.authorBn,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3",
                  "data-ocid": "product.rating_row",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.averageRating, size: 16, showValue: true }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: scrollToReviews,
                        className: "text-xs text-accent underline-offset-2 hover:underline font-medium",
                        "data-ocid": "product.review_count_link",
                        children: [
                          product.reviewCount.toString(),
                          " ",
                          t("reviews")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40 text-xs", children: "|" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                      product.stockCount.toString(),
                      " sold"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-ocid": "product.price", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-baseline gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-mono text-4xl font-bold leading-none",
                    style: { color: "oklch(0.72 0.25 40)" },
                    children: formatPrice(product.priceInPaisa)
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1.5 font-medium",
                      style: { color: "oklch(0.72 0.16 145)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13 }),
                        t("free"),
                        " ",
                        t("delivery")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 12 }),
                    "2–4 days"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "product.stock_status", children: isOutOfStock ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full",
                  style: {
                    background: "oklch(0.55 0.22 25 / 0.15)",
                    color: "oklch(0.65 0.21 25)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-destructive animate-pulse" }),
                    t("outOfStock")
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full",
                  style: {
                    background: "oklch(0.35 0.08 145 / 0.2)",
                    color: "oklch(0.72 0.16 145)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-2 h-2 rounded-full animate-pulse",
                        style: { background: "oklch(0.72 0.16 145)" }
                      }
                    ),
                    lang === "bn" ? `${product.stockCount} টি স্টকে আছে` : `${product.stockCount} in stock`
                  ]
                }
              ) }),
              (product.info.descriptionEn || product.info.descriptionBn) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                DescriptionPanel,
                {
                  descEn: product.info.descriptionEn,
                  descBn: product.info.descriptionBn,
                  lang
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              !isOutOfStock && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-ocid": "product.qty_selector", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider", children: lang === "bn" ? "পরিমাণ" : "Quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 w-fit rounded-full border border-border overflow-hidden shadow-subtle", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setQty((q) => Math.max(1, q - 1)),
                      className: "w-9 h-9 flex items-center justify-center hover:bg-muted transition-smooth text-foreground",
                      "aria-label": "Decrease quantity",
                      "data-ocid": "product.qty_decrease",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-10 text-center text-sm font-bold tabular-nums",
                      "data-ocid": "product.qty_value",
                      children: qty
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        if (qty >= maxQty) {
                          ue.warning(
                            lang === "bn" ? "সর্বোচ্চ স্টক সীমায় পৌঁছেছে" : "Maximum available stock reached"
                          );
                          return;
                        }
                        setQty((q) => Math.min(maxQty, q + 1));
                      },
                      className: "w-9 h-9 flex items-center justify-center hover:bg-muted transition-smooth text-foreground",
                      "aria-label": "Increase quantity",
                      "data-ocid": "product.qty_increase",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 })
                    }
                  )
                ] }),
                qty >= maxQty && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs text-amber-500 font-medium",
                    "data-ocid": "product.stock_limit_warning",
                    children: lang === "bn" ? "সর্বোচ্চ স্টক সীমায় পৌঁছেছে" : "Maximum available stock reached"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: handleAddToCart,
                    disabled: isOutOfStock,
                    variant: "outline",
                    className: "flex-1 h-12 rounded-xl border-2 font-semibold text-sm transition-smooth",
                    style: {
                      borderColor: "oklch(0.72 0.25 40)",
                      color: "oklch(0.72 0.25 40)"
                    },
                    "data-ocid": "product.add_to_cart_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 17, className: "mr-2" }),
                      inCart ? t("inCart") : t("addToCart")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: handleBuyNow,
                    disabled: isOutOfStock,
                    className: "flex-1 h-12 rounded-xl font-bold text-sm cta-primary",
                    "data-ocid": "product.buy_now_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 17, className: "mr-2" }),
                      t("buyNow")
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleWishlist,
                  className: `flex items-center gap-2 text-sm transition-smooth py-1 group ${isWishlisted ? "text-rose-400" : "text-muted-foreground hover:text-rose-400"}`,
                  "data-ocid": "product.wishlist_text_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Heart,
                      {
                        size: 15,
                        fill: isWishlisted ? "currentColor" : "none",
                        className: "transition-transform group-hover:scale-110"
                      }
                    ),
                    isWishlisted ? lang === "bn" ? "উইশলিস্টে আছে" : "Saved to Wishlist" : lang === "bn" ? "উইশলিস্টে যোগ করুন" : "Add to Wishlist"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 pt-1", children: [
                { icon: "🔒", label: "Secure Payment" },
                { icon: "🔄", label: "Easy Returns" },
                { icon: "⚡", label: "Fast Delivery" }
              ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex flex-col items-center gap-1 py-2.5 rounded-xl text-center",
                  style: { background: "oklch(var(--muted) / 0.4)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: b.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-medium leading-tight", children: b.label })
                  ]
                },
                b.label
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", ref: tabsRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex border-b border-border overflow-x-auto scroll-smooth",
            "data-ocid": "product.tabs",
            children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveTab(tab.key),
                className: `px-5 py-3 text-sm font-semibold transition-smooth border-b-2 -mb-px whitespace-nowrap ${activeTab === tab.key ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"}`,
                "data-ocid": `product.tab.${tab.key}`,
                children: [
                  tab.label[lang],
                  tab.count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `ml-1.5 text-xs rounded-full px-1.5 py-0.5 ${activeTab === tab.key ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"}`,
                      children: tab.count
                    }
                  )
                ]
              },
              tab.key
            ))
          }
        ),
        activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "reviews",
            className: "space-y-6 scroll-mt-24",
            "data-ocid": "review.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold text-foreground", children: [
                  t("reviews"),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-base font-normal text-muted-foreground", children: [
                    "(",
                    reviews.length,
                    ")"
                  ] })
                ] }),
                isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setShowReviewForm((v) => !v),
                    className: "rounded-xl border-accent text-accent hover:bg-accent/10 font-semibold",
                    "data-ocid": "review.write_review_button",
                    children: showReviewForm ? "Cancel" : t("writeReview")
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: login,
                    className: "rounded-xl text-accent font-semibold",
                    "data-ocid": "review.login_to_review_button",
                    children: [
                      t("signIn"),
                      " to write a review"
                    ]
                  }
                )
              ] }),
              reviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-center shadow-subtle", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display text-6xl font-bold leading-none",
                      style: { color: "oklch(0.85 0.18 85)" },
                      children: product.averageRating.toFixed(1)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.averageRating, size: 18 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-medium", children: [
                    reviews.length,
                    " ",
                    t("reviews")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: ratingCounts.map(({ star, count }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RatingBar,
                  {
                    star,
                    count,
                    total: reviews.length
                  },
                  star
                )) })
              ] }),
              showReviewForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
                WriteReviewForm,
                {
                  productId,
                  onSuccess: () => setShowReviewForm(false)
                }
              ),
              reviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 flex-wrap",
                  "data-ocid": "review.sort_controls",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-semibold", children: [
                      t("sortBy"),
                      ":"
                    ] }),
                    ["helpfulness", "recency", "rating"].map(
                      (mode) => {
                        const labels = {
                          helpfulness: { en: "Most Helpful", bn: "সহায়ক" },
                          recency: { en: "Most Recent", bn: "সাম্প্রতিক" },
                          rating: { en: "Top Rated", bn: "সর্বোচ্চ রেটিং" }
                        };
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setSortMode(mode),
                            className: `px-3 py-1 text-xs rounded-full border font-medium transition-smooth ${sortMode === mode ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"}`,
                            "data-ocid": `review.sort_${mode}`,
                            children: labels[mode][lang]
                          },
                          mode
                        );
                      }
                    )
                  ]
                }
              ),
              reviewsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "review.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-card border border-border rounded-xl p-5 space-y-3 animate-pulse",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-9 h-9 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24 rounded-full" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2 rounded-full" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full rounded-lg" })
                  ]
                },
                i
              )) }),
              !reviewsLoading && sortedReviews.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-card border border-border rounded-xl p-12 flex flex-col items-center gap-4 shadow-subtle",
                  "data-ocid": "review.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-16 h-16 rounded-full flex items-center justify-center",
                        style: { background: "oklch(var(--muted))" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 28, className: "text-muted-foreground/40" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center max-w-xs", children: lang === "bn" ? "এখনো কোনো রিভিউ নেই। প্রথম রিভিউ লিখুন!" : "No reviews yet. Be the first to review this book!" }),
                    isAuthenticated && !showReviewForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => setShowReviewForm(true),
                        className: "rounded-xl border-accent text-accent hover:bg-accent/10",
                        "data-ocid": "review.empty_write_button",
                        children: t("writeReview")
                      }
                    )
                  ]
                }
              ),
              !reviewsLoading && sortedReviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "review.list", children: sortedReviews.map((review, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReviewCard,
                {
                  review,
                  index: idx,
                  lang,
                  votedReviewIds,
                  onVote: handleVoteReview
                },
                review.id.toString()
              )) })
            ]
          }
        ),
        activeTab === "qanda" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "qanda.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold text-foreground", children: [
              t("qanda"),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-base font-normal text-muted-foreground", children: [
                "(",
                questions.length,
                ")"
              ] })
            ] }),
            isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setShowAskForm((v) => !v),
                className: "rounded-xl border-accent text-accent hover:bg-accent/10 font-semibold",
                "data-ocid": "qanda.ask_button",
                children: showAskForm ? "Cancel" : lang === "bn" ? "প্রশ্ন করুন" : "Ask a Question"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: login,
                className: "rounded-xl text-accent font-semibold",
                "data-ocid": "qanda.login_to_ask_button",
                children: [
                  t("signIn"),
                  " to ask"
                ]
              }
            )
          ] }),
          showAskForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
            AskQuestionForm,
            {
              productId,
              lang,
              onSuccess: () => setShowAskForm(false)
            }
          ),
          questionsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "qanda.loading_state", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-5 space-y-3 animate-pulse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-7 h-7 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4 rounded-full" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/4 rounded-full ml-10" })
              ]
            },
            i
          )) }),
          !questionsLoading && questions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-12 flex flex-col items-center gap-4 shadow-subtle",
              "data-ocid": "qanda.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-16 h-16 rounded-full flex items-center justify-center",
                    style: { background: "oklch(var(--muted))" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleHelp,
                      {
                        size: 28,
                        className: "text-muted-foreground/40"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center max-w-xs", children: lang === "bn" ? "এখনো কোনো প্রশ্ন নেই। প্রথম প্রশ্নটি করুন!" : "No questions yet. Be the first to ask about this book!" }),
                isAuthenticated && !showAskForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setShowAskForm(true),
                    className: "rounded-xl border-accent text-accent hover:bg-accent/10",
                    "data-ocid": "qanda.empty_ask_button",
                    children: lang === "bn" ? "প্রশ্ন করুন" : "Ask a Question"
                  }
                )
              ]
            }
          ),
          !questionsLoading && questions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "qanda.list", children: questions.map((q, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuestionCard,
            {
              question: q,
              index: idx,
              lang,
              isAuthenticated,
              login
            },
            q.id.toString()
          )) })
        ] }),
        activeTab === "details" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "product.details_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: lang === "bn" ? "বইয়ের তথ্য" : "Book Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-border", children: [
            product.publisher && {
              key: t("publisher"),
              value: product.publisher
            },
            product.isbn && {
              key: t("isbn"),
              value: product.isbn,
              mono: true
            },
            product.publicationDate > BigInt(0) && {
              key: lang === "bn" ? "প্রকাশকাল" : "Published",
              value: new Date(
                Number(product.publicationDate / BigInt(1e6))
              ).getFullYear().toString()
            },
            { key: t("genre"), value: genreLabel },
            {
              key: t("language"),
              value: `${langInfo.flag} ${langInfo[lang]}`
            },
            {
              key: lang === "bn" ? "স্টক" : "Stock",
              value: isOutOfStock ? lang === "bn" ? "স্টক নেই" : "Out of Stock" : `${product.stockCount} available`
            }
          ].filter(Boolean).map((row) => {
            if (!row) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-4 px-6 py-3.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "w-32 shrink-0 text-sm text-muted-foreground font-medium", children: row.key }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "dd",
                    {
                      className: `text-sm text-foreground/80 ${row.mono ? "font-mono tracking-wide" : ""}`,
                      children: row.value
                    }
                  )
                ]
              },
              row.key
            );
          }) }) }),
          (product.info.descriptionEn || product.info.descriptionBn) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 shadow-subtle space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: t("description") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DescriptionPanel,
              {
                descEn: product.info.descriptionEn,
                descBn: product.info.descriptionBn,
                lang
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StickyMobileBar,
      {
        title,
        price: product.priceInPaisa,
        isOutOfStock,
        onAddToCart: handleAddToCart,
        onBuyNow: handleBuyNow
      }
    )
  ] });
}
export {
  ProductPage as default
};
