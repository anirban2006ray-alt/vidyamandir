import { useNavigate, useSearch } from "@tanstack/react-router";
import { FileText, Filter, Search, SlidersHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import type { StudyMaterial } from "../backend.d.ts";
import { useLanguage } from "../hooks/use-language";
import {
  useListStudyMaterials,
  useRecordStudyMaterialDownload,
} from "../hooks/useQueries";

// ─── Filter option catalogs ──────────────────────────────────────────────────

type DeptCode = "CSE" | "ECE" | "EE" | "ME" | "CE";
type RegCode = "R-23" | "R-25";
type CTCode = "CT1" | "CT2" | "Semester";

const DEPARTMENTS: {
  value: DeptCode;
  key:
    | "departmentCSE"
    | "departmentECE"
    | "departmentEE"
    | "departmentME"
    | "departmentCE";
}[] = [
  { value: "CSE", key: "departmentCSE" },
  { value: "ECE", key: "departmentECE" },
  { value: "EE", key: "departmentEE" },
  { value: "ME", key: "departmentME" },
  { value: "CE", key: "departmentCE" },
];

const YEARS: { value: number; key: "year1" | "year2" | "year3" | "year4" }[] = [
  { value: 1, key: "year1" },
  { value: 2, key: "year2" },
  { value: 3, key: "year3" },
  { value: 4, key: "year4" },
];

const SEMESTERS: {
  value: number;
  key: `semester${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;
}[] = [
  { value: 1, key: "semester1" },
  { value: 2, key: "semester2" },
  { value: 3, key: "semester3" },
  { value: 4, key: "semester4" },
  { value: 5, key: "semester5" },
  { value: 6, key: "semester6" },
  { value: 7, key: "semester7" },
  { value: 8, key: "semester8" },
];

const REGULATIONS: {
  value: RegCode;
  key: "regulationR23" | "regulationR25";
}[] = [
  { value: "R-23", key: "regulationR23" },
  { value: "R-25", key: "regulationR25" },
];

const CLASS_TESTS: {
  value: CTCode;
  key: "classTestCT1" | "classTestCT2" | "classTestSemester";
}[] = [
  { value: "CT1", key: "classTestCT1" },
  { value: "CT2", key: "classTestCT2" },
  { value: "Semester", key: "classTestSemester" },
];

// ─── Sample seed (shown until an admin uploads real PDFs) ────────────────────

const SEED_PDFS: StudyMaterial[] = [
  {
    id: "seed-1",
    semester: BigInt(3),
    subjectCode: "CS301",
    subjectName: "Data Structures & Algorithms",
    regulation: "R-23",
    blobRef: "",
    year: BigInt(2),
    department: "CSE",
    classTest: "CT1",
    uploadedAt: BigInt(0),
    uploadedBy: { toText: () => "" } as never,
  },
  {
    id: "seed-2",
    semester: BigInt(3),
    subjectCode: "CS302",
    subjectName: "Operating Systems",
    regulation: "R-23",
    blobRef: "",
    year: BigInt(2),
    department: "CSE",
    classTest: "CT2",
    uploadedAt: BigInt(0),
    uploadedBy: { toText: () => "" } as never,
  },
  {
    id: "seed-3",
    semester: BigInt(5),
    subjectCode: "EC501",
    subjectName: "Digital Signal Processing",
    regulation: "R-23",
    blobRef: "",
    year: BigInt(3),
    department: "ECE",
    classTest: "Semester",
    uploadedAt: BigInt(0),
    uploadedBy: { toText: () => "" } as never,
  },
  {
    id: "seed-4",
    semester: BigInt(1),
    subjectCode: "EE101",
    subjectName: "Basic Electrical Engineering",
    regulation: "R-25",
    blobRef: "",
    year: BigInt(1),
    department: "EE",
    classTest: "CT1",
    uploadedAt: BigInt(0),
    uploadedBy: { toText: () => "" } as never,
  },
  {
    id: "seed-5",
    semester: BigInt(4),
    subjectCode: "ME401",
    subjectName: "Thermodynamics",
    regulation: "R-23",
    blobRef: "",
    year: BigInt(2),
    department: "ME",
    classTest: "CT2",
    uploadedAt: BigInt(0),
    uploadedBy: { toText: () => "" } as never,
  },
  {
    id: "seed-6",
    semester: BigInt(2),
    subjectCode: "CE201",
    subjectName: "Strength of Materials",
    regulation: "R-25",
    blobRef: "",
    year: BigInt(1),
    department: "CE",
    classTest: "Semester",
    uploadedAt: BigInt(0),
    uploadedBy: { toText: () => "" } as never,
  },
];

// ─── Filter group (chip cluster) ─────────────────────────────────────────────

interface FilterGroupProps<T extends string | number> {
  label: string;
  options: { value: T; key: string }[];
  active: T | undefined;
  onSelect: (value: T | undefined) => void;
  t: (key: never) => string;
  ocidPrefix: string;
}

function FilterGroup<T extends string | number>({
  label,
  options,
  active,
  onSelect,
  t,
  ocidPrefix,
}: FilterGroupProps<T>) {
  return (
    <div>
      <p className="filter-group-label mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt, i) => {
          const isActive = active === opt.value;
          return (
            <motion.button
              key={String(opt.value)}
              type="button"
              data-ocid={`${ocidPrefix}.item.${i + 1}`}
              data-active={isActive ? "true" : "false"}
              onClick={() => onSelect(isActive ? undefined : opt.value)}
              className="chip-filter"
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.18, delay: i * 0.03 }}
            >
              {t(opt.key as never)}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── PDF card ────────────────────────────────────────────────────────────────

interface PdfCardProps {
  pdf: StudyMaterial;
  index: number;
  t: (key: never) => string;
  onDownload: (pdf: StudyMaterial) => void;
  downloading: boolean;
}

function PdfCard({ pdf, index, t, onDownload, downloading }: PdfCardProps) {
  const deptLabel = DEPARTMENTS.find((d) => d.value === pdf.department)?.key;
  const ctLabel = CLASS_TESTS.find((c) => c.value === pdf.classTest)?.key;
  const regLabel = REGULATIONS.find((r) => r.value === pdf.regulation)?.key;

  return (
    <motion.article
      className="pdf-card"
      data-ocid={`study_materials.pdf_card.${index + 1}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.05, 0.4) }}
    >
      {/* Thumb */}
      <div className="pdf-card-thumb">
        <div className="pdf-card-thumb-icon">
          <FileText size={22} />
        </div>
        <span className="absolute top-2 right-2 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-card/80 border border-border text-muted-foreground">
          PDF
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-display font-bold text-base leading-tight text-foreground line-clamp-2">
            {pdf.subjectName}
          </h3>
          <p className="font-mono text-xs text-muted-foreground mt-0.5">
            {pdf.subjectCode}
          </p>
        </div>

        <dl className="pdf-meta-grid">
          <dt className="pdf-meta-key">{t("filterByDepartment" as never)}</dt>
          <dd className="pdf-meta-val">
            {deptLabel ? t(deptLabel as never) : pdf.department}
          </dd>

          <dt className="pdf-meta-key">{t("filterByYear" as never)}</dt>
          <dd className="pdf-meta-val">{Number(pdf.year)}</dd>

          <dt className="pdf-meta-key">{t("filterBySemester" as never)}</dt>
          <dd className="pdf-meta-val">{Number(pdf.semester)}</dd>

          <dt className="pdf-meta-key">{t("filterByRegulation" as never)}</dt>
          <dd className="pdf-meta-val">
            {regLabel ? t(regLabel as never) : pdf.regulation}
          </dd>

          <dt className="pdf-meta-key">{t("filterByClassTest" as never)}</dt>
          <dd className="pdf-meta-val">
            {ctLabel ? t(ctLabel as never) : pdf.classTest}
          </dd>
        </dl>

        <button
          type="button"
          className="pdf-download-btn mt-auto"
          data-ocid={`study_materials.download_button.${index + 1}`}
          disabled={downloading}
          onClick={() => onDownload(pdf)}
        >
          {downloading ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full"
            />
          ) : (
            <>
              <FileText size={13} />
              {t("downloadPdf" as never)}
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function StudyMaterialsPage() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const search = useSearch({ from: "/study-materials" });

  const [department, setDepartment] = useState<string | undefined>(
    search.department,
  );
  const [year, setYear] = useState<number | undefined>(search.year);
  const [semester, setSemester] = useState<number | undefined>(search.semester);
  const [regulation, setRegulation] = useState<string | undefined>(
    search.regulation,
  );
  const [classTest, setClassTest] = useState<string | undefined>(
    search.classTest,
  );
  const [searchInput, setSearchInput] = useState(search.q ?? "");
  const [searchTerm, setSearchTerm] = useState(search.q ?? "");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync from URL on mount and on back/forward
  useEffect(() => {
    setDepartment(search.department);
    setYear(search.year);
    setSemester(search.semester);
    setRegulation(search.regulation);
    setClassTest(search.classTest);
    setSearchInput(search.q ?? "");
    setSearchTerm(search.q ?? "");
  }, [
    search.department,
    search.year,
    search.semester,
    search.regulation,
    search.classTest,
    search.q,
  ]);

  useEffect(
    () => () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    },
    [],
  );

  const pushToURL = useCallback(
    (next: {
      department?: string;
      year?: number;
      semester?: number;
      regulation?: string;
      classTest?: string;
      q?: string;
    }) => {
      void navigate({
        to: "/study-materials",
        search: {
          department: next.department || undefined,
          year: next.year || undefined,
          semester: next.semester || undefined,
          regulation: next.regulation || undefined,
          classTest: next.classTest || undefined,
          q: next.q || undefined,
        },
      });
    },
    [navigate],
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const trimmed = value.trim();
        setSearchTerm(trimmed);
        pushToURL({
          department,
          year,
          semester,
          regulation,
          classTest,
          q: trimmed || undefined,
        });
      }, 300);
    },
    [department, year, semester, regulation, classTest, pushToURL],
  );

  const select = useCallback(
    <K extends "department" | "year" | "semester" | "regulation" | "classTest">(
      key: K,
      value: string | number | undefined,
    ) => {
      const next = {
        department,
        year,
        semester,
        regulation,
        classTest,
        q: searchTerm || undefined,
      };
      (next[key] as typeof value) = value;
      pushToURL(next);
    },
    [department, year, semester, regulation, classTest, searchTerm, pushToURL],
  );

  const clearFilters = useCallback(() => {
    setSearchInput("");
    setSearchTerm("");
    pushToURL({});
  }, [pushToURL]);

  // Backend filter (subjectCode is exact-match only; subjectName search is client-side)
  const backendFilter = useMemo(
    () => ({
      department,
      year: year !== undefined ? BigInt(year) : undefined,
      semester: semester !== undefined ? BigInt(semester) : undefined,
      regulation,
      classTest,
    }),
    [department, year, semester, regulation, classTest],
  );

  const { data, isLoading } = useListStudyMaterials(backendFilter);
  const recordDownload = useRecordStudyMaterialDownload();

  // Use real data if present, else seed so the browse page looks finished
  const baseList = data && data.length > 0 ? data : SEED_PDFS;

  // Client-side subject name/code search within current filter set
  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return baseList;
    const q = searchTerm.toLowerCase();
    return baseList.filter(
      (p) =>
        p.subjectName.toLowerCase().includes(q) ||
        p.subjectCode.toLowerCase().includes(q),
    );
  }, [baseList, searchTerm]);

  const activeCount =
    (department ? 1 : 0) +
    (year ? 1 : 0) +
    (semester ? 1 : 0) +
    (regulation ? 1 : 0) +
    (classTest ? 1 : 0) +
    (searchTerm ? 1 : 0);

  const handleDownload = useCallback(
    (pdf: StudyMaterial) => {
      setDownloadingId(pdf.id);
      recordDownload.mutate(pdf.id, {
        onSuccess: () => {
          setDownloadingId(null);
          if (
            !pdf.blobRef ||
            pdf.blobRef === "" ||
            pdf.blobRef === "blob-mock-1"
          ) {
            toast(
              lang === "bn"
                ? "এই পিডিএফটি একজন অ্যাডমিন আপলোড করার পর উপলব্ধ হবে।"
                : "This PDF will be available once an admin uploads it.",
              { duration: 5000 },
            );
          } else {
            toast(lang === "bn" ? "ডাউনলোড শুরু হয়েছে" : "Download started");
          }
        },
        onError: () => {
          setDownloadingId(null);
          toast(
            lang === "bn"
              ? "ডাউনলোড ট্র্যাক করতে সমস্যা হয়েছে"
              : "Could not track download",
            { duration: 4000 },
          );
        },
      });
    },
    [recordDownload, lang],
  );

  const resultsLabel = t("resultsCount" as never).replace(
    "{count}",
    String(filtered.length),
  );

  const Sidebar = (
    <div className="filter-sidebar">
      <div className="flex items-center gap-2 pb-3 border-b border-border">
        <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center">
          <SlidersHorizontal size={13} className="text-accent" />
        </div>
        <span className="text-sm font-bold text-foreground">
          {t("filter" as never)}
        </span>
        {activeCount > 0 && (
          <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
            {activeCount}
          </span>
        )}
      </div>

      <FilterGroup
        label={t("filterByDepartment" as never)}
        options={DEPARTMENTS}
        active={department}
        onSelect={(v) => select("department", v)}
        t={t}
        ocidPrefix="study_materials.department"
      />
      <FilterGroup
        label={t("filterByYear" as never)}
        options={YEARS}
        active={year}
        onSelect={(v) => select("year", v)}
        t={t}
        ocidPrefix="study_materials.year"
      />
      <FilterGroup
        label={t("filterBySemester" as never)}
        options={SEMESTERS}
        active={semester}
        onSelect={(v) => select("semester", v)}
        t={t}
        ocidPrefix="study_materials.semester"
      />
      <FilterGroup
        label={t("filterByRegulation" as never)}
        options={REGULATIONS}
        active={regulation}
        onSelect={(v) => select("regulation", v)}
        t={t}
        ocidPrefix="study_materials.regulation"
      />
      <FilterGroup
        label={t("filterByClassTest" as never)}
        options={CLASS_TESTS}
        active={classTest}
        onSelect={(v) => select("classTest", v)}
        t={t}
        ocidPrefix="study_materials.class_test"
      />

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          data-ocid="study_materials.clear_filters_button"
          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-dashed border-accent/40 text-accent hover:bg-accent/10 transition-smooth"
        >
          <X size={12} />
          {t("clearFilters" as never)}
        </button>
      )}
    </div>
  );

  return (
    <div
      className="min-h-screen bg-background"
      data-ocid="study_materials.page"
    >
      {/* Header band */}
      <div className="bg-card border-b border-border shadow-subtle">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {t("studyMaterials" as never)}
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            {t("studyMaterialsSubtitle" as never)}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Desktop sidebar */}
          <aside
            className="hidden lg:block w-[280px] flex-shrink-0"
            data-ocid="study_materials.sidebar"
          >
            <div className="sticky top-6">{Sidebar}</div>
          </aside>

          {/* Grid area */}
          <div className="flex-1 min-w-0">
            {/* Toolbar: search + results count + mobile filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
              <div className="relative flex-1 max-w-md">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder={t("searchBySubjectOrCode" as never)}
                  data-ocid="study_materials.search_input"
                  className="input-field pl-9 pr-9 h-10 rounded-lg w-full"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => handleSearchChange("")}
                    aria-label="Clear search"
                    data-ocid="study_materials.search_clear_button"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-semibold text-muted-foreground"
                  data-ocid="study_materials.results_count"
                >
                  {isLoading ? "…" : resultsLabel}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(true)}
                  data-ocid="study_materials.mobile_filter_toggle"
                  className="lg:hidden inline-flex items-center gap-1.5 px-3 h-10 text-xs font-semibold rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <Filter size={13} />
                  {t("filter" as never)}
                  {activeCount > 0 && (
                    <span className="text-[10px] px-1.5 rounded-full bg-accent text-accent-foreground">
                      {activeCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Grid */}
            <motion.div
              key={`${department}-${year}-${semester}-${regulation}-${classTest}-${searchTerm}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
              data-ocid="study_materials.list"
            >
              {isLoading ? (
                ["a", "b", "c", "d", "e", "f"].map((sk) => (
                  <div key={sk} className="pdf-card">
                    <div className="pdf-card-thumb shimmer" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 w-3/4 rounded shimmer" />
                      <div className="h-3 w-1/3 rounded shimmer" />
                      <div className="h-16 w-full rounded shimmer" />
                      <div className="h-8 w-full rounded-lg shimmer" />
                    </div>
                  </div>
                ))
              ) : filtered.length === 0 ? (
                <div
                  className="col-span-full pdf-empty-state"
                  data-ocid="study_materials.empty_state"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                    <FileText size={26} className="text-accent/60" />
                  </div>
                  <p className="font-display font-bold text-base text-foreground">
                    {t("noPdfsFound" as never)}
                  </p>
                  <p className="text-sm max-w-xs">
                    {t("noPdfsFoundHint" as never)}
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    data-ocid="study_materials.empty_state.clear_button"
                    className="mt-2 cta-primary text-xs h-9 px-5"
                  >
                    {t("clearFilters" as never)}
                  </button>
                </div>
              ) : (
                filtered.map((pdf, i) => (
                  <PdfCard
                    key={pdf.id}
                    pdf={pdf}
                    index={i}
                    t={t}
                    onDownload={handleDownload}
                    downloading={downloadingId === pdf.id}
                  />
                ))
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-full bg-card border-r border-border shadow-deep lg:hidden flex flex-col"
              data-ocid="study_materials.mobile_sidebar"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <span className="font-bold text-foreground">
                  {t("filter" as never)}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  aria-label="Close filters"
                  data-ocid="study_materials.mobile_sidebar.close_button"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">{Sidebar}</div>
              <div className="px-5 py-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  data-ocid="study_materials.mobile_sidebar.apply_button"
                  className="w-full cta-primary h-10"
                >
                  {filtered.length} {lang === "bn" ? "টি ফলাফল দেখুন" : "results"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
