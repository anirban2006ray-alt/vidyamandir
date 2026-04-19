import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Home,
  LayoutGrid,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Genre, Language, SortField, SortOrder } from "../backend.d.ts";
import { ProductCard } from "../components/ProductCard";
import { useLanguage } from "../hooks/use-language";
import { useListProducts, useSearchProducts } from "../hooks/useQueries";

// ─── Constants ────────────────────────────────────────────────────────────────

const GENRES: {
  value: Genre;
  labelEn: string;
  labelBn: string;
  icon: string;
}[] = [
  {
    value: "fiction" as Genre,
    labelEn: "Fiction",
    labelBn: "কথাসাহিত্য",
    icon: "📖",
  },
  {
    value: "bengaliClassics" as Genre,
    labelEn: "Bengali Classics",
    labelBn: "বাংলা ক্লাসিক",
    icon: "🪷",
  },
  { value: "poetry" as Genre, labelEn: "Poetry", labelBn: "কবিতা", icon: "✍️" },
  {
    value: "nonFiction" as Genre,
    labelEn: "Non-Fiction",
    labelBn: "তথ্যমূলক",
    icon: "📊",
  },
  {
    value: "childrens" as Genre,
    labelEn: "Children's",
    labelBn: "শিশু সাহিত্য",
    icon: "🎨",
  },
  {
    value: "academic" as Genre,
    labelEn: "Academic",
    labelBn: "একাডেমিক",
    icon: "🎓",
  },
  {
    value: "history" as Genre,
    labelEn: "History",
    labelBn: "ইতিহাস",
    icon: "🏛️",
  },
  {
    value: "biography" as Genre,
    labelEn: "Biography",
    labelBn: "জীবনী",
    icon: "👤",
  },
  {
    value: "religion" as Genre,
    labelEn: "Religion",
    labelBn: "ধর্ম",
    icon: "🕊️",
  },
  {
    value: "science" as Genre,
    labelEn: "Science",
    labelBn: "বিজ্ঞান",
    icon: "🔬",
  },
  { value: "other" as Genre, labelEn: "Other", labelBn: "অন্যান্য", icon: "📚" },
];

const SORT_OPTIONS: {
  id: string;
  labelEn: string;
  labelBn: string;
  field: SortField;
  order: SortOrder;
}[] = [
  {
    id: "rating_desc",
    labelEn: "Top Rated",
    labelBn: "সর্বোচ্চ রেটিং",
    field: "rating" as SortField,
    order: "desc" as SortOrder,
  },
  {
    id: "price_asc",
    labelEn: "Price: Low to High",
    labelBn: "মূল্য: কম থেকে বেশি",
    field: "price" as SortField,
    order: "asc" as SortOrder,
  },
  {
    id: "price_desc",
    labelEn: "Price: High to Low",
    labelBn: "মূল্য: বেশি থেকে কম",
    field: "price" as SortField,
    order: "desc" as SortOrder,
  },
  {
    id: "newest",
    labelEn: "Newest First",
    labelBn: "নতুন প্রথমে",
    field: "publicationDate" as SortField,
    order: "desc" as SortOrder,
  },
];

const RATING_OPTIONS = [
  { value: 4, labelEn: "4★ & above", labelBn: "৪★ ও তার বেশি", stars: 4 },
  { value: 3, labelEn: "3★ & above", labelBn: "৩★ ও তার বেশি", stars: 3 },
  { value: 2, labelEn: "2★ & above", labelBn: "২★ ও তার বেশি", stars: 2 },
];

const LANGUAGE_LABELS: Record<string, { en: string; bn: string }> = {
  bengali: { en: "Bengali", bn: "বাংলা" },
  english: { en: "English", bn: "ইংরেজি" },
  bilingual: { en: "Bilingual", bn: "দ্বিভাষিক" },
};

const PAGE_SIZE = BigInt(24);
const MAX_PRICE_RS = 2000;

// ─── Filter State Type ────────────────────────────────────────────────────────

interface FilterState {
  genre: Genre | undefined;
  langFilter: Language | undefined;
  inStock: boolean;
  minPriceRs: number;
  maxPriceRs: number;
  minRating: number | undefined;
  sortId: string;
}

const DEFAULT_FILTERS: FilterState = {
  genre: undefined,
  langFilter: undefined,
  inStock: false,
  minPriceRs: 0,
  maxPriceRs: MAX_PRICE_RS,
  minRating: undefined,
  sortId: "",
};

// ─── FilterSection ────────────────────────────────────────────────────────────

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="py-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-[11px] font-bold text-foreground uppercase tracking-widest mb-2 hover:text-accent transition-colors"
        aria-expanded={open}
      >
        {title}
        <motion.span
          animate={{ rotate: open ? 0 : -90 }}
          transition={{ duration: 0.18 }}
        >
          <ChevronDown size={13} className="text-muted-foreground" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <Separator className="mt-3 opacity-50" />
    </div>
  );
}

// ─── Active Filter Chip ────────────────────────────────────────────────────────

function FilterChip({
  label,
  onRemove,
}: { label: string; onRemove: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onRemove}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border border-accent/40 text-accent bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer"
    >
      {label}
      <X size={10} />
    </motion.button>
  );
}

// ─── Star Row ─────────────────────────────────────────────────────────────────

function StarRow({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={11}
          className={
            i < count
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30 fill-current"
          }
        />
      ))}
    </span>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ lang, onClear }: { lang: string; onClear: () => void }) {
  return (
    <motion.div
      className="col-span-full py-16 flex flex-col items-center gap-5 text-center"
      data-ocid="shop.empty_state"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated book stack SVG */}
      <div className="relative mb-2">
        <svg
          width="100"
          height="90"
          viewBox="0 0 100 90"
          fill="none"
          className="opacity-60"
          aria-label="Empty book stack illustration"
          role="img"
        >
          <rect
            x="14"
            y="54"
            width="72"
            height="14"
            rx="3"
            fill="currentColor"
            className="text-accent/30"
          />
          <rect
            x="18"
            y="42"
            width="64"
            height="14"
            rx="3"
            fill="currentColor"
            className="text-primary/20"
          />
          <rect
            x="22"
            y="30"
            width="56"
            height="14"
            rx="3"
            fill="currentColor"
            className="text-accent/40"
          />
          <rect
            x="26"
            y="18"
            width="48"
            height="14"
            rx="3"
            fill="currentColor"
            className="text-primary/30"
          />
          <circle
            cx="50"
            cy="72"
            r="12"
            fill="currentColor"
            className="text-muted/60"
          />
          <path
            d="M44 72 L56 72 M50 66 L50 78"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-muted-foreground"
          />
        </svg>
        <Sparkles
          size={18}
          className="absolute -top-1 -right-1 text-accent animate-pulse"
        />
      </div>
      <div className="space-y-1">
        <p className="text-base font-display font-bold text-foreground">
          {lang === "bn" ? "কোনো ফলাফল পাওয়া যায়নি" : "No results found"}
        </p>
        <p className="text-sm text-muted-foreground max-w-xs">
          {lang === "bn"
            ? "অন্য ফিল্টার বা অনুসন্ধান শব্দ ব্যবহার করুন"
            : "Try adjusting your filters or searching with different keywords"}
        </p>
      </div>
      <Button
        type="button"
        onClick={onClear}
        data-ocid="shop.clear_filters_button"
        className="cta-primary text-xs h-9 px-5"
      >
        {lang === "bn" ? "সব ফিল্টার মুছুন" : "Clear All Filters"}
      </Button>
    </motion.div>
  );
}

// ─── Skeleton Loader ──────────────────────────────────────────────────────────

function ProductGridSkeleton() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <div key={i} className="card-dense overflow-hidden">
          <Skeleton className="aspect-[3/4] w-full" />
          <div className="p-3 space-y-2">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ShopPage() {
  const { lang } = useLanguage();
  const searchParams = useSearch({ from: "/shop" });
  const navigate = useNavigate();

  const [filters, setFilters] = useState<FilterState>({
    ...DEFAULT_FILTERS,
    genre: searchParams.genre as Genre | undefined,
    sortId: searchParams.sort ?? "",
  });
  const [page, setPage] = useState(searchParams.page ?? 1);
  const [searchInput, setSearchInput] = useState(searchParams.q ?? "");
  const [searchQuery, setSearchQuery] = useState(searchParams.q ?? "");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSearchInput(searchParams.q ?? "");
    setSearchQuery(searchParams.q ?? "");
  }, [searchParams.q]);

  useEffect(() => {
    setFilters((f) => ({
      ...f,
      genre: searchParams.genre as Genre | undefined,
    }));
  }, [searchParams.genre]);

  const handleSearchInputChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setSearchQuery(value.trim());
        void navigate({
          to: "/shop",
          search: (prev) => ({
            ...prev,
            q: value.trim() || undefined,
            page: 1,
          }),
        });
      }, 300);
    },
    [navigate],
  );

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const pushFiltersToURL = useCallback(
    (newFilters: FilterState, newPage: number, q?: string) => {
      void navigate({
        to: "/shop",
        search: {
          q: q ?? (searchQuery || undefined),
          genre: newFilters.genre ?? undefined,
          lang: newFilters.langFilter ?? undefined,
          sort: newFilters.sortId || undefined,
          page: newPage > 1 ? newPage : undefined,
        },
      });
    },
    [navigate, searchQuery],
  );

  const isSearchMode = searchQuery.trim().length > 1;
  const offset = BigInt(page - 1) * PAGE_SIZE;

  const filter = {
    inStockOnly: filters.inStock,
    genre: filters.genre,
    language: filters.langFilter,
    searchQuery: isSearchMode ? searchQuery : undefined,
    minPriceInPaisa:
      filters.minPriceRs > 0 ? BigInt(filters.minPriceRs * 100) : undefined,
    maxPriceInPaisa:
      filters.maxPriceRs < MAX_PRICE_RS
        ? BigInt(filters.maxPriceRs * 100)
        : undefined,
    minRating: filters.minRating,
  };

  const activeSortOption = SORT_OPTIONS.find((s) => s.id === filters.sortId);
  const sort = activeSortOption
    ? { field: activeSortOption.field, order: activeSortOption.order }
    : null;

  const { data: browseProducts, isLoading: browseLoading } = useListProducts(
    isSearchMode ? null : filter,
    isSearchMode ? null : sort,
    isSearchMode ? BigInt(0) : offset,
    PAGE_SIZE,
  );

  const { data: searchResults, isLoading: searchLoading } = useSearchProducts(
    searchQuery,
    PAGE_SIZE,
  );

  const { data: relatedProducts } = useListProducts(
    { inStockOnly: false },
    { field: "rating" as SortField, order: "desc" as SortOrder },
    BigInt(0),
    BigInt(4),
  );

  const products = isSearchMode ? searchResults : browseProducts;
  const isLoading = isSearchMode ? searchLoading : browseLoading;

  // ─── Build active chips ──────────────────────────────────────────────────
  const activeChips: { key: string; label: string; remove: () => void }[] = [];

  if (searchQuery) {
    activeChips.push({
      key: "q",
      label: `"${searchQuery}"`,
      remove: () => {
        setSearchInput("");
        setSearchQuery("");
        void navigate({
          to: "/shop",
          search: { ...searchParams, q: undefined },
        });
      },
    });
  }
  if (filters.genre) {
    const g = GENRES.find((x) => x.value === filters.genre);
    activeChips.push({
      key: "genre",
      label: lang === "bn" ? (g?.labelBn ?? "") : (g?.labelEn ?? ""),
      remove: () => {
        const n = { ...filters, genre: undefined };
        setFilters(n);
        pushFiltersToURL(n, 1);
      },
    });
  }
  if (filters.langFilter) {
    const lbl = LANGUAGE_LABELS[filters.langFilter];
    activeChips.push({
      key: "lang",
      label: lang === "bn" ? lbl.bn : lbl.en,
      remove: () => {
        const n = { ...filters, langFilter: undefined };
        setFilters(n);
        pushFiltersToURL(n, 1);
      },
    });
  }
  if (filters.inStock) {
    activeChips.push({
      key: "inStock",
      label: lang === "bn" ? "স্টকে আছে" : "In Stock",
      remove: () => {
        const n = { ...filters, inStock: false };
        setFilters(n);
        pushFiltersToURL(n, 1);
      },
    });
  }
  if (filters.minPriceRs > 0 || filters.maxPriceRs < MAX_PRICE_RS) {
    activeChips.push({
      key: "price",
      label: `₹${filters.minPriceRs}–₹${filters.maxPriceRs}`,
      remove: () => {
        const n = { ...filters, minPriceRs: 0, maxPriceRs: MAX_PRICE_RS };
        setFilters(n);
        pushFiltersToURL(n, 1);
      },
    });
  }
  if (filters.minRating) {
    activeChips.push({
      key: "rating",
      label: `${filters.minRating}★+`,
      remove: () => {
        const n = { ...filters, minRating: undefined };
        setFilters(n);
        pushFiltersToURL(n, 1);
      },
    });
  }
  if (filters.sortId) {
    const s = SORT_OPTIONS.find((x) => x.id === filters.sortId);
    activeChips.push({
      key: "sort",
      label: lang === "bn" ? (s?.labelBn ?? "") : (s?.labelEn ?? ""),
      remove: () => {
        const n = { ...filters, sortId: "" };
        setFilters(n);
        pushFiltersToURL(n, 1);
      },
    });
  }

  const clearAllFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setSearchInput("");
    setSearchQuery("");
    setPage(1);
    void navigate({ to: "/shop", search: {} });
  }, [navigate]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const q = searchInput.trim();
    setSearchQuery(q);
    setPage(1);
    void navigate({
      to: "/shop",
      search: (prev) => ({ ...prev, q: q || undefined, page: undefined }),
    });
  };

  const handleGenreClick = (g: Genre) => {
    const next = { ...filters, genre: filters.genre === g ? undefined : g };
    setFilters(next);
    setPage(1);
    pushFiltersToURL(next, 1);
  };

  // ─── Sidebar Content ──────────────────────────────────────────────────────

  const SidebarContent = () => (
    <div className="w-full space-y-0">
      {/* Genre pills */}
      <FilterSection title={lang === "bn" ? "ধরন" : "Genre"} defaultOpen={true}>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {GENRES.map((g) => {
            const active = filters.genre === g.value;
            return (
              <button
                key={g.value}
                type="button"
                data-ocid={`shop.genre.${g.value}`}
                onClick={() => handleGenreClick(g.value)}
                className={[
                  "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 border",
                  active
                    ? "bg-accent text-accent-foreground border-accent shadow-sm"
                    : "bg-muted/30 text-muted-foreground border-border hover:border-accent/50 hover:text-foreground hover:bg-muted/60",
                ].join(" ")}
              >
                <span className="text-[11px]">{g.icon}</span>
                {lang === "bn" ? g.labelBn : g.labelEn}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title={lang === "bn" ? "মূল্য পরিসর" : "Price Range"}>
        <div className="px-1 pt-1">
          {/* Price display */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold px-2 py-0.5 bg-muted/40 rounded-md text-foreground">
              ₹{filters.minPriceRs}
            </span>
            <span className="text-[10px] text-muted-foreground">—</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-muted/40 rounded-md text-foreground">
              ₹{filters.maxPriceRs}
            </span>
          </div>
          <Slider
            min={0}
            max={MAX_PRICE_RS}
            step={50}
            value={[filters.minPriceRs, filters.maxPriceRs]}
            onValueChange={([min, max]) =>
              setFilters((f) => ({ ...f, minPriceRs: min, maxPriceRs: max }))
            }
            onValueCommit={([min, max]) => {
              pushFiltersToURL(
                { ...filters, minPriceRs: min, maxPriceRs: max },
                1,
              );
            }}
            data-ocid="shop.price_range_slider"
            className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[role=slider]]:shadow-md [&_.relative]:h-1.5 [&_.bg-primary]:bg-accent"
          />
          <div className="flex justify-between mt-1.5 text-[10px] text-muted-foreground">
            <span>₹0</span>
            <span>₹{MAX_PRICE_RS}</span>
          </div>
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title={lang === "bn" ? "সর্বনিম্ন রেটিং" : "Min Rating"}>
        <div className="flex flex-col gap-1 pt-1">
          {RATING_OPTIONS.map((r) => {
            const active = filters.minRating === r.value;
            return (
              <button
                key={r.value}
                type="button"
                data-ocid={`shop.rating.${r.value}`}
                onClick={() => {
                  const n = {
                    ...filters,
                    minRating: active ? undefined : r.value,
                  };
                  setFilters(n);
                  pushFiltersToURL(n, 1);
                }}
                className={[
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-200 border",
                  active
                    ? "bg-accent/15 border-accent/50 text-foreground font-semibold"
                    : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground",
                ].join(" ")}
              >
                <StarRow count={r.stars} />
                <span>{lang === "bn" ? r.labelBn : r.labelEn}</span>
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Language */}
      <FilterSection title={lang === "bn" ? "ভাষা" : "Language"}>
        <div className="flex flex-col gap-1 pt-1">
          {(["bengali", "english", "bilingual"] as Language[]).map((l) => {
            const active = filters.langFilter === l;
            return (
              <button
                key={l}
                type="button"
                data-ocid={`shop.lang_filter.${l}`}
                onClick={() => {
                  const n = { ...filters, langFilter: active ? undefined : l };
                  setFilters(n);
                  pushFiltersToURL(n, 1);
                }}
                className={[
                  "flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-200 border",
                  active
                    ? "bg-accent/15 border-accent/50 text-foreground font-semibold"
                    : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground",
                ].join(" ")}
              >
                <span>
                  {lang === "bn"
                    ? LANGUAGE_LABELS[l].bn
                    : LANGUAGE_LABELS[l].en}
                </span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Sort */}
      <FilterSection
        title={lang === "bn" ? "সাজান" : "Sort By"}
        defaultOpen={false}
      >
        <div className="flex flex-col gap-1 pt-1">
          {SORT_OPTIONS.map((s) => {
            const active = filters.sortId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                data-ocid={`shop.sort.${s.id}`}
                onClick={() => {
                  const n = { ...filters, sortId: active ? "" : s.id };
                  setFilters(n);
                  setPage(1);
                  pushFiltersToURL(n, 1);
                }}
                className={[
                  "flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-200 border",
                  active
                    ? "bg-accent/15 border-accent/50 text-foreground font-semibold"
                    : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground",
                ].join(" ")}
              >
                <span>{lang === "bn" ? s.labelBn : s.labelEn}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* In Stock */}
      <div className="py-3 flex items-center justify-between">
        <Label
          htmlFor="inStock"
          className="text-[11px] font-bold uppercase tracking-widest text-foreground cursor-pointer"
        >
          {lang === "bn" ? "শুধু স্টকে আছে" : "In Stock Only"}
        </Label>
        <Switch
          id="inStock"
          checked={filters.inStock}
          onCheckedChange={(v) => {
            const n = { ...filters, inStock: v };
            setFilters(n);
            pushFiltersToURL(n, 1);
          }}
          data-ocid="shop.in_stock_switch"
          className="data-[state=checked]:bg-accent"
        />
      </div>

      {/* Clear All */}
      <AnimatePresence>
        {activeChips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-1"
          >
            <Button
              type="button"
              variant="ghost"
              onClick={clearAllFilters}
              data-ocid="shop.clear_all_button"
              className="w-full text-xs h-8 rounded-lg border border-dashed border-accent/40 text-accent hover:bg-accent/10 hover:border-accent gap-1.5"
            >
              <X size={11} />
              {lang === "bn" ? "সব ফিল্টার মুছুন" : "Clear All Filters"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const searchPlaceholder =
    lang === "bn"
      ? "বই, লেখক বা ধরন অনুসন্ধান করুন..."
      : "Search books, authors or genres...";
  const currentGenre = GENRES.find((x) => x.value === filters.genre);

  return (
    <div className="min-h-screen bg-background" data-ocid="shop.page">
      {/* Page Header Band */}
      <div className="bg-card border-b border-border shadow-subtle">
        <div className="max-w-[1400px] mx-auto px-4 py-3">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3"
            aria-label="Breadcrumb"
          >
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Home size={12} />
              {lang === "bn" ? "হোম" : "Home"}
            </button>
            <ChevronRight size={11} className="opacity-50" />
            <span className="text-foreground font-medium">
              {currentGenre
                ? lang === "bn"
                  ? currentGenre.labelBn
                  : currentGenre.labelEn
                : lang === "bn"
                  ? "সব বই"
                  : "All Books"}
            </span>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10"
            />
            <Input
              type="text"
              value={searchInput}
              onChange={(e) => handleSearchInputChange(e.target.value)}
              placeholder={searchPlaceholder}
              data-ocid="shop.search_input"
              className="pl-10 pr-28 h-11 rounded-full border-border bg-background text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent/60 shadow-subtle transition-shadow hover:shadow-card"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => {
                  setSearchInput("");
                  setSearchQuery("");
                  void navigate({
                    to: "/shop",
                    search: (p) => ({ ...p, q: undefined }),
                  });
                }}
                className="absolute right-20 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
            <Button
              type="submit"
              data-ocid="shop.search_button"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-9 px-4 rounded-full cta-primary text-xs font-semibold"
            >
              {lang === "bn" ? "খুঁজুন" : "Search"}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Active Filter Strip */}
        <AnimatePresence>
          {activeChips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex flex-wrap items-center gap-1.5 mb-4 p-3 bg-muted/20 rounded-xl border border-border/50"
              data-ocid="shop.active_filters"
            >
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mr-1">
                {lang === "bn" ? "ফিল্টার:" : "Active:"}
              </span>
              {activeChips.map((chip) => (
                <FilterChip
                  key={chip.key}
                  label={chip.label}
                  onRemove={chip.remove}
                />
              ))}
              {activeChips.length > 1 && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  data-ocid="shop.clear_all_chips"
                  className="ml-auto text-[11px] text-muted-foreground hover:text-accent transition-colors underline underline-offset-2"
                >
                  {lang === "bn" ? "সব মুছুন" : "Clear all"}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-6">
          {/* ── Desktop Sidebar ── */}
          <aside
            className="hidden lg:block w-56 flex-shrink-0"
            data-ocid="shop.sidebar"
          >
            <div className="card-elevation rounded-xl p-4 sticky top-6">
              <div className="flex items-center justify-between mb-1 pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
                    <SlidersHorizontal size={12} className="text-accent" />
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    {lang === "bn" ? "ফিল্টার" : "Filters"}
                  </span>
                </div>
                {activeChips.length > 0 && (
                  <Badge className="bg-accent text-accent-foreground text-[10px] h-4 w-4 p-0 flex items-center justify-center rounded-full">
                    {activeChips.length}
                  </Badge>
                )}
              </div>
              <SidebarContent />
            </div>
          </aside>

          {/* ── Product Grid Area ── */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4 gap-3">
              <div className="flex items-center gap-2 min-w-0">
                {/* Mobile filter trigger */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setMobileSidebarOpen(true)}
                  data-ocid="shop.mobile_filter_toggle"
                  className="lg:hidden h-9 text-xs rounded-lg flex items-center gap-1.5 border-border hover:border-accent transition-colors"
                >
                  <SlidersHorizontal size={13} />
                  {lang === "bn" ? "ফিল্টার" : "Filter"}
                  {activeChips.length > 0 && (
                    <Badge className="bg-accent text-accent-foreground rounded-full h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                      {activeChips.length}
                    </Badge>
                  )}
                </Button>

                {/* Results count */}
                <div className="hidden sm:block">
                  {isLoading ? (
                    <Skeleton className="h-4 w-28" />
                  ) : products !== undefined ? (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {products.length === Number(PAGE_SIZE)
                          ? `${products.length}+`
                          : products.length}
                      </span>{" "}
                      {lang === "bn" ? "টি বই পাওয়া গেছে" : "books found"}
                      {isSearchMode && (
                        <span className="text-accent font-medium">
                          {" "}
                          — "{searchQuery}"
                        </span>
                      )}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <LayoutGrid
                  size={14}
                  className="text-muted-foreground hidden sm:block"
                />
                <Select
                  value={filters.sortId || "relevance"}
                  onValueChange={(v) => {
                    const sortId = v === "relevance" ? "" : v;
                    const next = { ...filters, sortId };
                    setFilters(next);
                    setPage(1);
                    pushFiltersToURL(next, 1);
                  }}
                >
                  <SelectTrigger
                    className="w-44 text-xs h-9 rounded-lg border-border shadow-subtle hover:border-accent transition-colors"
                    data-ocid="shop.sort_select"
                  >
                    <SelectValue
                      placeholder={lang === "bn" ? "সাজান" : "Sort By"}
                    />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl shadow-elevated">
                    <SelectItem value="relevance">
                      {lang === "bn" ? "প্রাসঙ্গিকতা" : "Relevance"}
                    </SelectItem>
                    {SORT_OPTIONS.map((s) => (
                      <SelectItem key={s.id} value={s.id}>
                        {lang === "bn" ? s.labelBn : s.labelEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            <motion.div
              key={`${filters.genre}-${filters.sortId}-${filters.minRating}-${page}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
              data-ocid="shop.products_list"
            >
              {isLoading ? (
                <ProductGridSkeleton />
              ) : products?.length === 0 ? (
                <EmptyState lang={lang} onClear={clearAllFilters} />
              ) : (
                products?.map((p, i) => (
                  <motion.div
                    key={p.id.toString()}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: Math.min(i * 0.04, 0.4),
                    }}
                  >
                    <ProductCard product={p} index={i} />
                  </motion.div>
                ))
              )}
            </motion.div>

            {/* Related products fallback when empty + not loading */}
            {!isLoading &&
              products?.length === 0 &&
              relatedProducts &&
              relatedProducts.length > 0 && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={14} className="text-accent" />
                    <p className="text-sm font-semibold text-foreground">
                      {lang === "bn" ? "এগুলো দেখুন" : "You might like these"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {relatedProducts.map((p, i) => (
                      <ProductCard
                        key={p.id.toString()}
                        product={p}
                        index={i}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

            {/* Pagination */}
            {!isLoading && products && products.length > 0 && !isSearchMode && (
              <div
                className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-border"
                data-ocid="shop.pagination"
              >
                <Button
                  type="button"
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => {
                    const np = Math.max(1, page - 1);
                    setPage(np);
                    pushFiltersToURL(filters, np);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  data-ocid="shop.pagination_prev"
                  className="h-9 px-3 rounded-lg text-xs flex items-center gap-1.5 border-border hover:border-accent hover:text-accent disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft size={14} />
                  {lang === "bn" ? "আগে" : "Prev"}
                </Button>

                <div className="flex items-center gap-1">
                  {page > 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        setPage(1);
                        pushFiltersToURL(filters, 1);
                      }}
                      className="w-9 h-9 text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-all"
                    >
                      1
                    </button>
                  )}
                  {page > 3 && (
                    <span className="text-xs text-muted-foreground px-1">
                      …
                    </span>
                  )}
                  {page > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setPage(page - 1);
                        pushFiltersToURL(filters, page - 1);
                      }}
                      className="w-9 h-9 text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-all"
                    >
                      {page - 1}
                    </button>
                  )}
                  <button
                    type="button"
                    className="w-9 h-9 text-xs rounded-full font-bold border-2 border-accent bg-accent text-accent-foreground shadow-sm"
                    aria-current="page"
                  >
                    {page}
                  </button>
                  {products.length === Number(PAGE_SIZE) && (
                    <button
                      type="button"
                      onClick={() => {
                        setPage(page + 1);
                        pushFiltersToURL(filters, page + 1);
                      }}
                      className="w-9 h-9 text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-all"
                    >
                      {page + 1}
                    </button>
                  )}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  disabled={products.length < Number(PAGE_SIZE)}
                  onClick={() => {
                    const np = page + 1;
                    setPage(np);
                    pushFiltersToURL(filters, np);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  data-ocid="shop.pagination_next"
                  className="h-9 px-3 rounded-lg text-xs flex items-center gap-1.5 border-border hover:border-accent hover:text-accent disabled:opacity-40 transition-colors"
                >
                  {lang === "bn" ? "পরে" : "Next"}
                  <ChevronRight size={14} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-full bg-card border-r border-border shadow-deep lg:hidden flex flex-col"
              data-ocid="shop.mobile_sidebar"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
                    <SlidersHorizontal size={13} className="text-accent" />
                  </div>
                  <span className="font-bold text-foreground">
                    {lang === "bn" ? "ফিল্টার" : "Filters"}
                  </span>
                  {activeChips.length > 0 && (
                    <Badge className="bg-accent text-accent-foreground text-[10px] h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {activeChips.length}
                    </Badge>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  aria-label="Close filters"
                  data-ocid="shop.mobile_sidebar_close"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Drawer body */}
              <div className="flex-1 overflow-y-auto px-5 py-2">
                <SidebarContent />
              </div>

              {/* Drawer footer */}
              <div className="px-5 py-4 border-t border-border bg-card">
                <Button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="w-full cta-primary h-10 rounded-lg text-sm font-semibold"
                  data-ocid="shop.apply_filters_button"
                >
                  {lang === "bn"
                    ? `${products?.length ?? 0} টি ফলাফল দেখুন`
                    : `View ${products?.length ?? 0} results`}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
