import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  Heart,
  HelpCircle,
  MessageCircle,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  ThumbsDown,
  ThumbsUp,
  Truck,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type { Answer, Question, Review } from "../backend.d.ts";
import { StarRating } from "../components/StarRating";
import { useAuth } from "../hooks/use-auth";
import { useCart } from "../hooks/use-cart";
import { useLanguage } from "../hooks/use-language";
import {
  useAddToWishlist,
  useAskQuestion,
  useCreateReview,
  useGetProduct,
  useGetWishlist,
  useListAnswers,
  useListQuestions,
  useListReviews,
  usePostAnswer,
  useRecordRecentlyViewed,
  useRemoveFromWishlist,
  useVoteAnswerHelpful,
} from "../hooks/useQueries";
import { formatPrice } from "../lib/i18n";

type SortMode = "helpfulness" | "recency" | "rating";
type TabMode = "reviews" | "qanda" | "details";

const GENRE_LABELS: Record<string, { en: string; bn: string }> = {
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
  other: { en: "Other", bn: "অন্যান্য" },
};

const LANG_LABELS: Record<string, { en: string; bn: string; flag: string }> = {
  bengali: { en: "Bengali", bn: "বাংলা", flag: "🇧🇩" },
  english: { en: "English", bn: "ইংরেজি", flag: "🇬🇧" },
  bilingual: { en: "Bilingual", bn: "দ্বিভাষিক", flag: "🌐" },
};

// ─── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({
  images,
  title,
  isOutOfStock,
  isWishlisted,
  onWishlist,
}: {
  images: string[];
  title: string;
  isOutOfStock: boolean;
  isWishlisted: boolean;
  onWishlist: () => void;
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const validImages = images.filter(Boolean);
  const displayImages =
    validImages.length > 0 ? validImages : ["/assets/images/placeholder.svg"];

  const goTo = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () =>
    goTo((active - 1 + displayImages.length) % displayImages.length);
  const next = () => goTo((active + 1) % displayImages.length);

  return (
    <div className="sticky top-24 space-y-3" data-ocid="product.image_carousel">
      {/* Main image */}
      <div className="relative rounded-xl overflow-hidden shadow-elevated bg-card border border-border aspect-[3/4] w-full max-w-[380px] mx-auto md:mx-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className={`w-full h-full overflow-hidden transition-transform duration-300 ${isZoomed ? "scale-105" : "scale-100"}`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={displayImages[active]}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Out-of-stock overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px] flex items-center justify-center z-10">
            <span className="badge-sale text-sm px-5 py-2">Out of Stock</span>
          </div>
        )}

        {/* Nav arrows */}
        {displayImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-card/90 border border-border backdrop-blur-sm shadow-card text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth z-10"
              data-ocid="product.image_prev"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-card/90 border border-border backdrop-blur-sm shadow-card text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth z-10"
              data-ocid="product.image_next"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Wishlist toggle */}
        <button
          type="button"
          onClick={onWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm border shadow-card transition-smooth ${
            isWishlisted
              ? "bg-rose-500/20 border-rose-400/50 text-rose-400"
              : "bg-card/90 border-border text-muted-foreground hover:border-rose-400/50 hover:text-rose-400"
          }`}
          data-ocid="product.wishlist_toggle"
        >
          <Heart size={17} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Image counter dot */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {displayImages.map((src, i) => (
              <button
                key={`dot-${src}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`View image ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === active
                    ? "w-5 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 max-w-[380px] mx-auto md:mx-0 scroll-smooth">
          {displayImages.map((src, i) => (
            <button
              key={`thumb-${src}`}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Thumbnail ${i + 1}`}
              className={`shrink-0 w-14 h-18 rounded-md overflow-hidden border-2 transition-smooth ${
                i === active
                  ? "border-accent shadow-card"
                  : "border-border opacity-60 hover:opacity-100 hover:border-accent/50"
              }`}
              data-ocid={`product.thumbnail.${i + 1}`}
            >
              <img
                src={src}
                alt={`View ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Rating Bar ───────────────────────────────────────────────────────────────
function RatingBar({
  star,
  count,
  total,
}: { star: number; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 text-xs group cursor-default">
      <span className="w-3 shrink-0 text-right text-muted-foreground font-medium">
        {star}
      </span>
      <Star size={11} className="shrink-0 star-golden" fill="currentColor" />
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, delay: star * 0.05, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.72 0.25 40), oklch(0.64 0.23 38))",
          }}
        />
      </div>
      <span className="w-7 text-right text-muted-foreground font-medium tabular-nums">
        {count}
      </span>
    </div>
  );
}

// ─── Avatar Initials ──────────────────────────────────────────────────────────
function AvatarInitials({
  name,
  size = "md",
}: { name: string; size?: "sm" | "md" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const sizeClass = size === "sm" ? "w-7 h-7 text-[10px]" : "w-9 h-9 text-xs";
  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center font-bold shrink-0 border border-border`}
      style={{
        background:
          "linear-gradient(135deg, oklch(0.64 0.23 38 / 0.3), oklch(0.14 0.08 255))",
      }}
    >
      <span style={{ color: "oklch(0.72 0.25 40)" }}>{initials || "U"}</span>
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────
function ReviewCard({ review, index }: { review: Review; index: number }) {
  const date = new Date(
    Number(review.createdAt / BigInt(1_000_000)),
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const authorName = `Reader ${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-card border border-border rounded-xl p-5 space-y-3 shadow-subtle hover:shadow-card transition-smooth"
      data-ocid={`review.item.${index + 1}`}
    >
      <div className="flex items-start gap-3">
        <AvatarInitials name={authorName} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <StarRating rating={Number(review.rating)} size={13} />
              {review.isVerifiedPurchase && (
                <span
                  className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.35 0.08 145 / 0.25)",
                    color: "oklch(0.72 0.16 145)",
                  }}
                >
                  <BadgeCheck size={11} /> Verified
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground shrink-0">
              {date}
            </span>
          </div>
          <p className="font-semibold text-sm text-foreground leading-tight mt-1">
            {review.titleEn}
          </p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed pl-12">
        {review.bodyEn}
      </p>

      <div className="flex items-center gap-3 pt-1 border-t border-border/40 pl-12">
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
          data-ocid={`review.helpful.${index + 1}`}
        >
          <ThumbsUp size={11} />
          Helpful ({review.helpfulVotes.toString()})
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors"
          data-ocid={`review.not_helpful.${index + 1}`}
        >
          <ThumbsDown size={11} />
          Not helpful
        </button>
      </div>
    </motion.div>
  );
}

// ─── Write Review Form ────────────────────────────────────────────────────────
function WriteReviewForm({
  productId,
  onSuccess,
}: { productId: bigint; onSuccess: () => void }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [titleEn, setTitleEn] = useState("");
  const [bodyEn, setBodyEn] = useState("");
  const { mutate: createReview, isPending } = useCreateReview();
  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (!titleEn.trim()) {
      toast.error("Please add a review title");
      return;
    }
    if (!bodyEn.trim()) {
      toast.error("Please write your review");
      return;
    }
    createReview(
      {
        productId,
        rating: BigInt(rating),
        titleEn: titleEn.trim(),
        bodyEn: bodyEn.trim(),
      },
      {
        onSuccess: () => {
          toast.success("Review submitted successfully!");
          setRating(0);
          setTitleEn("");
          setBodyEn("");
          onSuccess();
        },
        onError: () =>
          toast.error("Failed to submit review. Please try again."),
      },
    );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl p-6 space-y-5 shadow-card"
      data-ocid="review.write_form"
    >
      <h4 className="font-display font-bold text-foreground text-lg">
        Write a Review
      </h4>
      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          Your Rating *
        </Label>
        <div
          className="flex items-center gap-2"
          data-ocid="review.rating_select"
        >
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onMouseEnter={() => setHoverRating(s)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(s)}
              className="transition-transform hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label={`Rate ${s} stars`}
            >
              <Star
                size={28}
                fill="currentColor"
                style={{
                  color:
                    (hoverRating || rating) >= s
                      ? "oklch(0.85 0.18 85)"
                      : "oklch(0.85 0.18 85 / 0.18)",
                }}
              />
            </button>
          ))}
          {rating > 0 && (
            <span
              className="ml-2 text-sm font-bold"
              style={{ color: "oklch(0.85 0.18 85)" }}
            >
              {ratingLabels[rating]}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label
          htmlFor="review-title"
          className="text-xs text-muted-foreground uppercase tracking-wider font-semibold"
        >
          Review Title *
        </Label>
        <Input
          id="review-title"
          value={titleEn}
          onChange={(e) => setTitleEn(e.target.value)}
          placeholder="Summarise your experience"
          maxLength={100}
          className="rounded-lg bg-background border-input input-field"
          data-ocid="review.title_input"
        />
      </div>
      <div className="space-y-1.5">
        <Label
          htmlFor="review-body"
          className="text-xs text-muted-foreground uppercase tracking-wider font-semibold"
        >
          Your Review *
        </Label>
        <Textarea
          id="review-body"
          value={bodyEn}
          onChange={(e) => setBodyEn(e.target.value)}
          placeholder="Share your thoughts about this book…"
          rows={4}
          maxLength={2000}
          className="rounded-lg bg-background border-input resize-none input-field"
          data-ocid="review.body_textarea"
        />
        <p className="text-xs text-muted-foreground text-right">
          {bodyEn.length}/2000
        </p>
      </div>
      <div className="flex items-center gap-3 pt-1">
        <Button
          type="submit"
          disabled={isPending}
          className="cta-primary rounded-lg px-6"
          data-ocid="review.submit_button"
        >
          {isPending ? "Submitting…" : "Submit Review"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={onSuccess}
          className="btn-secondary rounded-lg"
          data-ocid="review.cancel_button"
        >
          Cancel
        </Button>
      </div>
    </motion.form>
  );
}

// ─── Answer Row ───────────────────────────────────────────────────────────────
function AnswerRow({
  answer,
  index,
  votedIds,
  onVote,
}: {
  answer: Answer;
  index: number;
  votedIds: Set<string>;
  onVote: (id: bigint) => void;
}) {
  const voted = votedIds.has(answer.id.toString());
  return (
    <div
      className="flex items-start gap-3 py-3 border-t border-border/30"
      data-ocid={`qanda.answer.${index + 1}`}
    >
      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
      <p className="flex-1 text-sm text-foreground/80 leading-relaxed">
        {answer.answerText}
      </p>
      <button
        type="button"
        onClick={() => onVote(answer.id)}
        disabled={voted}
        className={`flex items-center gap-1.5 text-xs shrink-0 px-2 py-1 rounded-full border transition-smooth ${
          voted
            ? "border-accent/40 bg-accent/10 text-accent cursor-default"
            : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent"
        }`}
        aria-label={voted ? "Voted helpful" : "Mark as helpful"}
        data-ocid={`qanda.vote.${index + 1}`}
      >
        <Heart size={11} fill={voted ? "currentColor" : "none"} />
        {Number(answer.helpfulVotes)}
      </button>
    </div>
  );
}

// ─── Question Card ─────────────────────────────────────────────────────────────
function QuestionCard({
  question,
  index,
  lang,
  isAuthenticated,
  login,
}: {
  question: Question;
  index: number;
  lang: "en" | "bn";
  isAuthenticated: boolean;
  login: () => void;
}) {
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const { data: answers = [] } = useListAnswers(question.id);
  const { mutate: postAnswer, isPending } = usePostAnswer();
  const { mutate: voteHelpful } = useVoteAnswerHelpful();

  const handleSubmitAnswer = () => {
    if (answerText.trim().length < 5) {
      toast.error("Answer too short");
      return;
    }
    postAnswer(
      { questionId: question.id, answerText: answerText.trim() },
      {
        onSuccess: () => {
          toast.success(
            lang === "bn"
              ? "আপনার উত্তর পোস্ট হয়েছে!"
              : "Your answer has been posted!",
          );
          setAnswerText("");
          setShowAnswerForm(false);
        },
        onError: () => toast.error("Failed to post answer"),
      },
    );
  };

  const handleVote = (answerId: bigint) => {
    if (!isAuthenticated) {
      login();
      return;
    }
    const key = answerId.toString();
    if (votedIds.has(key)) return;
    voteHelpful(answerId, {
      onSuccess: () => {
        setVotedIds((prev) => new Set([...prev, key]));
        toast.success(lang === "bn" ? "ভোট নথিভুক্ত হয়েছে!" : "Vote recorded!");
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.25 }}
      className="bg-card border border-border rounded-xl p-5 space-y-3 shadow-subtle"
      data-ocid={`qanda.question.${index + 1}`}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
          style={{
            background: "oklch(0.64 0.23 38 / 0.15)",
            color: "oklch(0.72 0.25 40)",
          }}
        >
          <HelpCircle size={14} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground leading-snug">
            {question.questionText}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {answers.length} {lang === "bn" ? "উত্তর" : "answers"}
          </p>
        </div>
      </div>

      {answers.length > 0 && (
        <div className="pl-10 space-y-0">
          {answers.map((ans, ai) => (
            <AnswerRow
              key={ans.id.toString()}
              answer={ans}
              index={ai}
              votedIds={votedIds}
              onVote={handleVote}
            />
          ))}
        </div>
      )}

      {showAnswerForm ? (
        <div
          className="pl-10 pt-2 space-y-2"
          data-ocid={`qanda.answer_form.${index + 1}`}
        >
          <Textarea
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value.slice(0, 250))}
            placeholder={
              lang === "bn" ? "আপনার উত্তর লিখুন..." : "Write your answer..."
            }
            rows={2}
            className="rounded-lg bg-background border-input resize-none text-sm"
            data-ocid={`qanda.answer_textarea.${index + 1}`}
          />
          <p className="text-xs text-muted-foreground text-right">
            {answerText.length}/250
          </p>
          <div className="flex gap-2">
            <Button
              type="button"
              size="sm"
              onClick={handleSubmitAnswer}
              disabled={isPending}
              className="cta-primary text-xs h-8 rounded-lg"
              data-ocid={`qanda.answer_submit.${index + 1}`}
            >
              {isPending
                ? "Posting…"
                : lang === "bn"
                  ? "পোস্ট করুন"
                  : "Post Answer"}
            </Button>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => setShowAnswerForm(false)}
              className="btn-secondary text-xs h-8 rounded-lg"
              data-ocid={`qanda.answer_cancel.${index + 1}`}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            if (!isAuthenticated) {
              login();
              return;
            }
            setShowAnswerForm(true);
          }}
          className="pl-10 text-xs text-accent hover:underline flex items-center gap-1.5 mt-1 transition-smooth"
          data-ocid={`qanda.answer_this.${index + 1}`}
        >
          <MessageCircle size={12} />
          {lang === "bn" ? "উত্তর দিন" : "Answer This"}
        </button>
      )}
    </motion.div>
  );
}

// ─── Ask Question Form ────────────────────────────────────────────────────────
function AskQuestionForm({
  productId,
  lang,
  onSuccess,
}: { productId: bigint; lang: "en" | "bn"; onSuccess: () => void }) {
  const [text, setText] = useState("");
  const { mutate: askQuestion, isPending } = useAskQuestion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length < 10) {
      toast.error(
        lang === "bn"
          ? "প্রশ্ন খুব ছোট (ন্যূনতম ১০ অক্ষর)"
          : "Question too short (min 10 characters)",
      );
      return;
    }
    askQuestion(
      { productId, questionText: text.trim() },
      {
        onSuccess: () => {
          toast.success(
            lang === "bn"
              ? "আপনার প্রশ্ন পোস্ট হয়েছে!"
              : "Your question has been posted!",
          );
          setText("");
          onSuccess();
        },
        onError: () => toast.error("Failed to post question"),
      },
    );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-card"
      data-ocid="qanda.ask_form"
    >
      <h4 className="font-display font-bold text-foreground text-lg">
        {lang === "bn" ? "প্রশ্ন করুন" : "Ask a Question"}
      </h4>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, 500))}
        placeholder={
          lang === "bn"
            ? "আপনার প্রশ্ন লিখুন (ন্যূনতম ১০ অক্ষর)..."
            : "Write your question (min 10 chars)..."
        }
        rows={3}
        className="rounded-lg bg-background border-input resize-none text-sm"
        data-ocid="qanda.ask_textarea"
      />
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{text.length}/500</p>
        <div className="flex gap-2">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={onSuccess}
            className="btn-secondary rounded-lg text-xs h-8"
            data-ocid="qanda.ask_cancel_button"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="sm"
            disabled={isPending}
            className="cta-primary rounded-lg text-xs h-8"
            data-ocid="qanda.ask_submit_button"
          >
            {isPending
              ? "Posting…"
              : lang === "bn"
                ? "পোস্ট করুন"
                : "Post Question"}
          </Button>
        </div>
      </div>
    </motion.form>
  );
}

// ─── Description Panel ────────────────────────────────────────────────────────
function DescriptionPanel({
  descEn,
  descBn,
  lang,
}: { descEn: string; descBn: string; lang: "en" | "bn" }) {
  const [expanded, setExpanded] = useState(false);
  const [showBn, setShowBn] = useState(lang === "bn");
  const text = showBn && descBn ? descBn : descEn;
  const CLIP = 280;
  const isLong = text.length > CLIP;
  const displayed = expanded || !isLong ? text : `${text.slice(0, CLIP)}…`;

  return (
    <div className="space-y-3" data-ocid="product.description_panel">
      {descBn && descEn && (
        <div className="pill-toggle w-fit">
          <button
            type="button"
            className="pill-toggle-btn"
            data-active={(!showBn).toString()}
            onClick={() => setShowBn(false)}
            data-ocid="product.desc_en_toggle"
          >
            EN
          </button>
          <button
            type="button"
            className="pill-toggle-btn"
            data-active={showBn.toString()}
            onClick={() => setShowBn(true)}
            data-ocid="product.desc_bn_toggle"
          >
            বাং
          </button>
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.p
          key={`${showBn}-${expanded}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-muted-foreground leading-relaxed"
        >
          {displayed}
        </motion.p>
      </AnimatePresence>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-xs text-accent hover:underline font-semibold transition-smooth"
          data-ocid="product.desc_expand_toggle"
        >
          {expanded
            ? lang === "bn"
              ? "কম দেখুন ▲"
              : "Show less ▲"
            : lang === "bn"
              ? "আরও পড়ুন ▼"
              : "Read more ▼"}
        </button>
      )}
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
function ProductPageSkeleton() {
  return (
    <div
      className="max-w-6xl mx-auto px-4 py-8 space-y-8"
      data-ocid="product.loading_state"
    >
      <div className="flex items-center gap-2">
        {([80, 60, 80, 120] as number[]).map((w) => (
          <Skeleton key={w} className="h-3 rounded-full" style={{ width: w }} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-8">
        <Skeleton className="aspect-[3/4] w-full rounded-xl" />
        <div className="space-y-5 pt-2">
          <Skeleton className="h-4 w-1/3 rounded-full" />
          <Skeleton className="h-9 w-3/4 rounded-lg" />
          <Skeleton className="h-5 w-2/5 rounded-lg" />
          <Skeleton className="h-4 w-1/3 rounded-lg" />
          <Skeleton className="h-12 w-1/3 rounded-lg" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-12 flex-1 rounded-xl" />
            <Skeleton className="h-12 flex-1 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sticky Mobile Bar ─────────────────────────────────────────────────────────
function StickyMobileBar({
  title,
  price,
  isOutOfStock,
  onAddToCart,
  onBuyNow,
}: {
  title: string;
  price: bigint;
  isOutOfStock: boolean;
  onAddToCart: () => void;
  onBuyNow: () => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-deep px-4 py-3"
          data-ocid="product.sticky_bar"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground truncate">{title}</p>
              <p
                className="font-mono font-bold text-base"
                style={{ color: "oklch(0.72 0.25 40)" }}
              >
                {formatPrice(price)}
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              disabled={isOutOfStock}
              onClick={onAddToCart}
              className="rounded-lg border-accent text-accent hover:bg-accent/10 shrink-0 h-10 px-3"
              data-ocid="product.sticky_cart_button"
            >
              <ShoppingCart size={15} />
            </Button>
            <Button
              size="sm"
              disabled={isOutOfStock}
              onClick={onBuyNow}
              className="cta-primary rounded-lg shrink-0 h-10 px-4 text-sm"
              data-ocid="product.sticky_buy_button"
            >
              Buy Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ProductPage() {
  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const { isAuthenticated, login } = useAuth();
  const { addItem, items: cartItems } = useCart();

  const productId = BigInt(id);

  const { data: product, isLoading, isError } = useGetProduct(productId);
  const { data: wishlist = [] } = useGetWishlist();
  const { data: reviews = [], isLoading: reviewsLoading } =
    useListReviews(productId);
  const { data: questions = [], isLoading: questionsLoading } =
    useListQuestions(productId);
  const { mutate: recordView } = useRecordRecentlyViewed();
  const { mutate: addWishlist } = useAddToWishlist();
  const { mutate: removeWishlist } = useRemoveFromWishlist();

  const [activeTab, setActiveTab] = useState<TabMode>("reviews");
  const [sortMode, setSortMode] = useState<SortMode>("helpfulness");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showAskForm, setShowAskForm] = useState(false);
  const [qty, setQty] = useState(1);
  const tabsRef = useRef<HTMLDivElement>(null);

  const isWishlisted = wishlist.some((wid) => wid === productId);
  const inCart = cartItems.some((c) => c.productId === productId);

  useEffect(() => {
    if (product) recordView(productId);
  }, [product, productId, recordView]);

  const handleWishlist = () => {
    if (!isAuthenticated) {
      login();
      return;
    }
    if (isWishlisted) {
      removeWishlist(productId, {
        onSuccess: () => toast.success("Removed from wishlist"),
      });
    } else {
      addWishlist(productId, {
        onSuccess: () => toast.success("Added to wishlist ♥"),
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
      coverImageUrl: product.coverImageUrl,
    });
    toast.success(lang === "bn" ? "কার্টে যোগ হয়েছে" : "Added to cart");
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
        coverImageUrl: product.coverImageUrl,
      });
    }
    void navigate({ to: "/checkout" });
  };

  const scrollToReviews = () => {
    setActiveTab("reviews");
    tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortMode === "helpfulness")
      return Number(b.helpfulVotes - a.helpfulVotes);
    if (sortMode === "recency") return Number(b.createdAt - a.createdAt);
    return Number(b.rating - a.rating);
  });

  const ratingCounts = [5, 4, 3, 2, 1].map((s) => ({
    star: s,
    count: reviews.filter((r) => Number(r.rating) === s).length,
  }));

  if (isLoading) return <ProductPageSkeleton />;

  if (isError || !product) {
    return (
      <div
        className="max-w-6xl mx-auto px-4 py-24 flex flex-col items-center gap-5"
        data-ocid="product.error_state"
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "oklch(var(--muted))" }}
        >
          <BookOpen size={36} className="text-muted-foreground/50" />
        </div>
        <p className="text-muted-foreground text-lg">{t("error")}</p>
        <Button
          variant="outline"
          onClick={() => void navigate({ to: "/shop" })}
          className="rounded-xl border-accent text-accent hover:bg-accent/10"
          data-ocid="product.back_button"
        >
          {t("back")} to Shop
        </Button>
      </div>
    );
  }

  const isOutOfStock = product.stockCount === BigInt(0);
  const maxQty = Number(product.stockCount);
  const title = lang === "bn" ? product.info.titleBn : product.info.titleEn;
  const author = lang === "bn" ? product.info.authorBn : product.info.authorEn;
  const genreLabel = GENRE_LABELS[product.genre]?.[lang] ?? product.genre;
  const langInfo = LANG_LABELS[product.language] ?? {
    en: product.language,
    bn: product.language,
    flag: "📖",
  };

  const TABS: {
    key: TabMode;
    label: { en: string; bn: string };
    count?: number;
  }[] = [
    {
      key: "reviews",
      label: { en: "Reviews", bn: "রিভিউ" },
      count: reviews.length,
    },
    {
      key: "qanda",
      label: { en: "Q&A", bn: "প্রশ্নোত্তর" },
      count: questions.length,
    },
    { key: "details", label: { en: "Details", bn: "বিস্তারিত" } },
  ];

  const images = [product.coverImageUrl].filter(Boolean) as string[];

  return (
    <div className="min-h-screen bg-background" data-ocid="product.page">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div
          className="max-w-6xl mx-auto px-4 py-2.5 flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto"
          data-ocid="product.breadcrumb"
        >
          <button
            type="button"
            onClick={() => void navigate({ to: "/" })}
            className="hover:text-accent transition-smooth whitespace-nowrap font-medium"
            data-ocid="product.breadcrumb_home"
          >
            {t("home")}
          </button>
          <ChevronRight size={12} className="shrink-0 opacity-50" />
          <button
            type="button"
            onClick={() => void navigate({ to: "/shop" })}
            className="hover:text-accent transition-smooth whitespace-nowrap font-medium"
            data-ocid="product.breadcrumb_shop"
          >
            {t("shop")}
          </button>
          <ChevronRight size={12} className="shrink-0 opacity-50" />
          <button
            type="button"
            onClick={() =>
              void navigate({ to: "/shop", search: { genre: product.genre } })
            }
            className="hover:text-accent transition-smooth whitespace-nowrap font-medium"
            data-ocid="product.breadcrumb_genre"
          >
            {genreLabel}
          </button>
          <ChevronRight size={12} className="shrink-0 opacity-50" />
          <span className="text-foreground/50 truncate min-w-0 max-w-[180px]">
            {title}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Product block */}
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
          {/* Image carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            data-ocid="product.image_section"
          >
            <ImageCarousel
              images={images}
              title={title}
              isOutOfStock={isOutOfStock}
              isWishlisted={isWishlisted}
              onWishlist={handleWishlist}
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-5"
            data-ocid="product.info_panel"
          >
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge
                variant="secondary"
                className="rounded-full text-xs font-semibold px-3 py-1"
              >
                {genreLabel}
              </Badge>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-border"
                style={{ background: "oklch(var(--muted) / 0.5)" }}
                data-ocid="product.lang_badge"
              >
                <span>{langInfo.flag}</span>
                {langInfo[lang]}
              </span>
              {/* Featured badge removed — field not in ProductView */}
            </div>

            {/* Title */}
            <div>
              <h1
                className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight tracking-tight"
                data-ocid="product.title"
              >
                {title}
              </h1>
              {lang === "en" && product.info.titleBn && (
                <p className="text-sm text-muted-foreground mt-1.5 font-medium">
                  {product.info.titleBn}
                </p>
              )}
              {lang === "bn" && product.info.titleEn && (
                <p className="text-xs text-muted-foreground mt-1 italic">
                  {product.info.titleEn}
                </p>
              )}
            </div>

            {/* Author */}
            <p className="text-sm" data-ocid="product.author">
              <span className="text-muted-foreground">{t("author")}: </span>
              <span className="text-accent font-semibold italic">{author}</span>
              {lang === "en" && product.info.authorBn && (
                <span className="text-muted-foreground ml-2 text-xs">
                  ({product.info.authorBn})
                </span>
              )}
            </p>

            {/* Rating */}
            <div
              className="flex items-center gap-3"
              data-ocid="product.rating_row"
            >
              <StarRating rating={product.averageRating} size={16} showValue />
              <button
                type="button"
                onClick={scrollToReviews}
                className="text-xs text-accent underline-offset-2 hover:underline font-medium"
                data-ocid="product.review_count_link"
              >
                {product.reviewCount.toString()} {t("reviews")}
              </button>
              <span className="text-muted-foreground/40 text-xs">|</span>
              <span className="text-xs text-muted-foreground">
                {product.stockCount.toString()} sold
              </span>
            </div>

            <Separator />

            {/* Price */}
            <div className="space-y-1.5" data-ocid="product.price">
              <div className="flex items-baseline gap-3">
                <span
                  className="font-mono text-4xl font-bold leading-none"
                  style={{ color: "oklch(0.72 0.25 40)" }}
                >
                  {formatPrice(product.priceInPaisa)}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span
                  className="flex items-center gap-1.5 font-medium"
                  style={{ color: "oklch(0.72 0.16 145)" }}
                >
                  <CheckCircle2 size={13} />
                  {t("free")} {t("delivery")}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Truck size={12} />
                  2–4 days
                </span>
              </div>
            </div>

            {/* Stock status */}
            <div data-ocid="product.stock_status">
              {isOutOfStock ? (
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "oklch(0.55 0.22 25 / 0.15)",
                    color: "oklch(0.65 0.21 25)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                  {t("outOfStock")}
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "oklch(0.35 0.08 145 / 0.2)",
                    color: "oklch(0.72 0.16 145)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "oklch(0.72 0.16 145)" }}
                  />
                  {lang === "bn"
                    ? `${product.stockCount} টি স্টকে আছে`
                    : `${product.stockCount} in stock`}
                </span>
              )}
            </div>

            {/* Description */}
            {(product.info.descriptionEn || product.info.descriptionBn) && (
              <DescriptionPanel
                descEn={product.info.descriptionEn}
                descBn={product.info.descriptionBn}
                lang={lang}
              />
            )}

            <Separator />

            {/* Quantity selector */}
            {!isOutOfStock && (
              <div className="space-y-2" data-ocid="product.qty_selector">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  {lang === "bn" ? "পরিমাণ" : "Quantity"}
                </span>
                <div className="flex items-center gap-1 w-fit rounded-full border border-border overflow-hidden shadow-subtle">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-smooth text-foreground"
                    aria-label="Decrease quantity"
                    data-ocid="product.qty_decrease"
                  >
                    <Minus size={14} />
                  </button>
                  <span
                    className="w-10 text-center text-sm font-bold tabular-nums"
                    data-ocid="product.qty_value"
                  >
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (qty >= maxQty) {
                        toast.warning(
                          lang === "bn"
                            ? "সর্বোচ্চ স্টক সীমায় পৌঁছেছে"
                            : "Maximum available stock reached",
                        );
                        return;
                      }
                      setQty((q) => Math.min(maxQty, q + 1));
                    }}
                    className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-smooth text-foreground"
                    aria-label="Increase quantity"
                    data-ocid="product.qty_increase"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                {qty >= maxQty && (
                  <p
                    className="text-xs text-amber-500 font-medium"
                    data-ocid="product.stock_limit_warning"
                  >
                    {lang === "bn"
                      ? "সর্বোচ্চ স্টক সীমায় পৌঁছেছে"
                      : "Maximum available stock reached"}
                  </p>
                )}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                variant="outline"
                className="flex-1 h-12 rounded-xl border-2 font-semibold text-sm transition-smooth"
                style={{
                  borderColor: "oklch(0.72 0.25 40)",
                  color: "oklch(0.72 0.25 40)",
                }}
                data-ocid="product.add_to_cart_button"
              >
                <ShoppingCart size={17} className="mr-2" />
                {inCart ? t("inCart") : t("addToCart")}
              </Button>
              <Button
                onClick={handleBuyNow}
                disabled={isOutOfStock}
                className="flex-1 h-12 rounded-xl font-bold text-sm cta-primary"
                data-ocid="product.buy_now_button"
              >
                <Zap size={17} className="mr-2" />
                {t("buyNow")}
              </Button>
            </div>

            {/* Wishlist row */}
            <button
              type="button"
              onClick={handleWishlist}
              className={`flex items-center gap-2 text-sm transition-smooth py-1 group ${
                isWishlisted
                  ? "text-rose-400"
                  : "text-muted-foreground hover:text-rose-400"
              }`}
              data-ocid="product.wishlist_text_button"
            >
              <Heart
                size={15}
                fill={isWishlisted ? "currentColor" : "none"}
                className="transition-transform group-hover:scale-110"
              />
              {isWishlisted
                ? lang === "bn"
                  ? "উইশলিস্টে আছে"
                  : "Saved to Wishlist"
                : lang === "bn"
                  ? "উইশলিস্টে যোগ করুন"
                  : "Add to Wishlist"}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { icon: "🔒", label: "Secure Payment" },
                { icon: "🔄", label: "Easy Returns" },
                { icon: "⚡", label: "Fast Delivery" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-1 py-2.5 rounded-xl text-center"
                  style={{ background: "oklch(var(--muted) / 0.4)" }}
                >
                  <span className="text-lg">{b.icon}</span>
                  <span className="text-[10px] text-muted-foreground font-medium leading-tight">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── Tabs ──────────────────────────────────────────────────────────── */}
        <div className="space-y-6" ref={tabsRef}>
          {/* Tab nav */}
          <div
            className="flex border-b border-border overflow-x-auto scroll-smooth"
            data-ocid="product.tabs"
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3 text-sm font-semibold transition-smooth border-b-2 -mb-px whitespace-nowrap ${
                  activeTab === tab.key
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
                data-ocid={`product.tab.${tab.key}`}
              >
                {tab.label[lang]}
                {tab.count !== undefined && (
                  <span
                    className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 ${
                      activeTab === tab.key
                        ? "bg-accent/15 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div
              id="reviews"
              className="space-y-6 scroll-mt-24"
              data-ocid="review.section"
            >
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {t("reviews")}
                  <span className="ml-2 text-base font-normal text-muted-foreground">
                    ({reviews.length})
                  </span>
                </h2>
                {isAuthenticated ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowReviewForm((v) => !v)}
                    className="rounded-xl border-accent text-accent hover:bg-accent/10 font-semibold"
                    data-ocid="review.write_review_button"
                  >
                    {showReviewForm ? "Cancel" : t("writeReview")}
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={login}
                    className="rounded-xl text-accent font-semibold"
                    data-ocid="review.login_to_review_button"
                  >
                    {t("signIn")} to write a review
                  </Button>
                )}
              </div>

              {/* Rating summary */}
              {reviews.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-center shadow-subtle">
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className="font-display text-6xl font-bold leading-none"
                      style={{ color: "oklch(0.85 0.18 85)" }}
                    >
                      {product.averageRating.toFixed(1)}
                    </span>
                    <StarRating rating={product.averageRating} size={18} />
                    <span className="text-xs text-muted-foreground font-medium">
                      {reviews.length} {t("reviews")}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {ratingCounts.map(({ star, count }) => (
                      <RatingBar
                        key={star}
                        star={star}
                        count={count}
                        total={reviews.length}
                      />
                    ))}
                  </div>
                </div>
              )}

              {showReviewForm && (
                <WriteReviewForm
                  productId={productId}
                  onSuccess={() => setShowReviewForm(false)}
                />
              )}

              {/* Sort controls */}
              {reviews.length > 0 && (
                <div
                  className="flex items-center gap-2 flex-wrap"
                  data-ocid="review.sort_controls"
                >
                  <span className="text-xs text-muted-foreground font-semibold">
                    {t("sortBy")}:
                  </span>
                  {(["helpfulness", "recency", "rating"] as SortMode[]).map(
                    (mode) => {
                      const labels: Record<
                        SortMode,
                        { en: string; bn: string }
                      > = {
                        helpfulness: { en: "Most Helpful", bn: "সহায়ক" },
                        recency: { en: "Most Recent", bn: "সাম্প্রতিক" },
                        rating: { en: "Top Rated", bn: "সর্বোচ্চ রেটিং" },
                      };
                      return (
                        <button
                          type="button"
                          key={mode}
                          onClick={() => setSortMode(mode)}
                          className={`px-3 py-1 text-xs rounded-full border font-medium transition-smooth ${
                            sortMode === mode
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                          }`}
                          data-ocid={`review.sort_${mode}`}
                        >
                          {labels[mode][lang]}
                        </button>
                      );
                    },
                  )}
                </div>
              )}

              {reviewsLoading && (
                <div className="space-y-3" data-ocid="review.loading_state">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-card border border-border rounded-xl p-5 space-y-3 animate-pulse"
                    >
                      <div className="flex gap-3">
                        <Skeleton className="w-9 h-9 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-3 w-24 rounded-full" />
                          <Skeleton className="h-4 w-1/2 rounded-full" />
                        </div>
                      </div>
                      <Skeleton className="h-14 w-full rounded-lg" />
                    </div>
                  ))}
                </div>
              )}

              {!reviewsLoading && sortedReviews.length === 0 && (
                <div
                  className="bg-card border border-border rounded-xl p-12 flex flex-col items-center gap-4 shadow-subtle"
                  data-ocid="review.empty_state"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(var(--muted))" }}
                  >
                    <Star size={28} className="text-muted-foreground/40" />
                  </div>
                  <p className="text-muted-foreground text-sm text-center max-w-xs">
                    {lang === "bn"
                      ? "এখনো কোনো রিভিউ নেই। প্রথম রিভিউ লিখুন!"
                      : "No reviews yet. Be the first to review this book!"}
                  </p>
                  {isAuthenticated && !showReviewForm && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowReviewForm(true)}
                      className="rounded-xl border-accent text-accent hover:bg-accent/10"
                      data-ocid="review.empty_write_button"
                    >
                      {t("writeReview")}
                    </Button>
                  )}
                </div>
              )}

              {!reviewsLoading && sortedReviews.length > 0 && (
                <div className="space-y-3" data-ocid="review.list">
                  {sortedReviews.map((review, idx) => (
                    <ReviewCard
                      key={review.id.toString()}
                      review={review}
                      index={idx}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Q&A Tab */}
          {activeTab === "qanda" && (
            <div className="space-y-5" data-ocid="qanda.section">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {t("qanda")}
                  <span className="ml-2 text-base font-normal text-muted-foreground">
                    ({questions.length})
                  </span>
                </h2>
                {isAuthenticated ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAskForm((v) => !v)}
                    className="rounded-xl border-accent text-accent hover:bg-accent/10 font-semibold"
                    data-ocid="qanda.ask_button"
                  >
                    {showAskForm
                      ? "Cancel"
                      : lang === "bn"
                        ? "প্রশ্ন করুন"
                        : "Ask a Question"}
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={login}
                    className="rounded-xl text-accent font-semibold"
                    data-ocid="qanda.login_to_ask_button"
                  >
                    {t("signIn")} to ask
                  </Button>
                )}
              </div>

              {showAskForm && (
                <AskQuestionForm
                  productId={productId}
                  lang={lang}
                  onSuccess={() => setShowAskForm(false)}
                />
              )}

              {questionsLoading && (
                <div className="space-y-3" data-ocid="qanda.loading_state">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="bg-card border border-border rounded-xl p-5 space-y-3 animate-pulse"
                    >
                      <div className="flex gap-3">
                        <Skeleton className="w-7 h-7 rounded-full" />
                        <Skeleton className="h-4 w-3/4 rounded-full" />
                      </div>
                      <Skeleton className="h-3 w-1/4 rounded-full ml-10" />
                    </div>
                  ))}
                </div>
              )}

              {!questionsLoading && questions.length === 0 && (
                <div
                  className="bg-card border border-border rounded-xl p-12 flex flex-col items-center gap-4 shadow-subtle"
                  data-ocid="qanda.empty_state"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(var(--muted))" }}
                  >
                    <HelpCircle
                      size={28}
                      className="text-muted-foreground/40"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm text-center max-w-xs">
                    {lang === "bn"
                      ? "এখনো কোনো প্রশ্ন নেই। প্রথম প্রশ্নটি করুন!"
                      : "No questions yet. Be the first to ask about this book!"}
                  </p>
                  {isAuthenticated && !showAskForm && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAskForm(true)}
                      className="rounded-xl border-accent text-accent hover:bg-accent/10"
                      data-ocid="qanda.empty_ask_button"
                    >
                      {lang === "bn" ? "প্রশ্ন করুন" : "Ask a Question"}
                    </Button>
                  )}
                </div>
              )}

              {!questionsLoading && questions.length > 0 && (
                <div className="space-y-3" data-ocid="qanda.list">
                  {questions.map((q, idx) => (
                    <QuestionCard
                      key={q.id.toString()}
                      question={q}
                      index={idx}
                      lang={lang}
                      isAuthenticated={isAuthenticated}
                      login={login}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Details Tab */}
          {activeTab === "details" && (
            <div className="space-y-5" data-ocid="product.details_section">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {lang === "bn" ? "বইয়ের তথ্য" : "Book Details"}
              </h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-subtle">
                <dl className="divide-y divide-border">
                  {[
                    product.publisher && {
                      key: t("publisher"),
                      value: product.publisher,
                    },
                    product.isbn && {
                      key: t("isbn"),
                      value: product.isbn,
                      mono: true,
                    },
                    product.publicationDate > BigInt(0) && {
                      key: lang === "bn" ? "প্রকাশকাল" : "Published",
                      value: new Date(
                        Number(product.publicationDate / BigInt(1_000_000)),
                      )
                        .getFullYear()
                        .toString(),
                    },
                    { key: t("genre"), value: genreLabel },
                    {
                      key: t("language"),
                      value: `${langInfo.flag} ${langInfo[lang]}`,
                    },
                    {
                      key: lang === "bn" ? "স্টক" : "Stock",
                      value: isOutOfStock
                        ? lang === "bn"
                          ? "স্টক নেই"
                          : "Out of Stock"
                        : `${product.stockCount} available`,
                    },
                  ]
                    .filter(Boolean)
                    .map((row) => {
                      if (!row) return null;
                      return (
                        <div
                          key={row.key}
                          className="flex items-start gap-4 px-6 py-3.5"
                        >
                          <dt className="w-32 shrink-0 text-sm text-muted-foreground font-medium">
                            {row.key}
                          </dt>
                          <dd
                            className={`text-sm text-foreground/80 ${row.mono ? "font-mono tracking-wide" : ""}`}
                          >
                            {row.value}
                          </dd>
                        </div>
                      );
                    })}
                </dl>
              </div>

              {(product.info.descriptionEn || product.info.descriptionBn) && (
                <div className="bg-card border border-border rounded-xl p-6 shadow-subtle space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe size={15} className="text-accent" />
                    <h3 className="font-display font-semibold text-foreground">
                      {t("description")}
                    </h3>
                  </div>
                  <DescriptionPanel
                    descEn={product.info.descriptionEn}
                    descBn={product.info.descriptionBn}
                    lang={lang}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sticky mobile bottom bar */}
      <StickyMobileBar
        title={title}
        price={product.priceInPaisa}
        isOutOfStock={isOutOfStock}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
}
