import { g as createLucideIcon, u as useLanguage, d as useNavigate, o as useSearch, r as reactExports, bi as useListStudyMaterials, bj as useRecordStudyMaterialDownload, O as ue, j as jsxRuntimeExports, X, q as Search } from "./index-BsrN2Mb5.js";
import { m as motion } from "./react-BEVctEJm.js";
import { S as SlidersHorizontal } from "./sliders-horizontal-BskWP38P.js";
import { F as FileText } from "./file-text-CFiefYca.js";
import { A as AnimatePresence } from "./index-CdvYNaet.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
const DEPARTMENTS = [
  { value: "CSE", key: "departmentCSE" },
  { value: "ECE", key: "departmentECE" },
  { value: "EE", key: "departmentEE" },
  { value: "ME", key: "departmentME" },
  { value: "CE", key: "departmentCE" }
];
const YEARS = [
  { value: 1, key: "year1" },
  { value: 2, key: "year2" },
  { value: 3, key: "year3" },
  { value: 4, key: "year4" }
];
const SEMESTERS = [
  { value: 1, key: "semester1" },
  { value: 2, key: "semester2" },
  { value: 3, key: "semester3" },
  { value: 4, key: "semester4" },
  { value: 5, key: "semester5" },
  { value: 6, key: "semester6" },
  { value: 7, key: "semester7" },
  { value: 8, key: "semester8" }
];
const REGULATIONS = [
  { value: "R-23", key: "regulationR23" },
  { value: "R-25", key: "regulationR25" }
];
const CLASS_TESTS = [
  { value: "CT1", key: "classTestCT1" },
  { value: "CT2", key: "classTestCT2" },
  { value: "Semester", key: "classTestSemester" }
];
const SEED_PDFS = [
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
    uploadedBy: { toText: () => "" }
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
    uploadedBy: { toText: () => "" }
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
    uploadedBy: { toText: () => "" }
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
    uploadedBy: { toText: () => "" }
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
    uploadedBy: { toText: () => "" }
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
    uploadedBy: { toText: () => "" }
  }
];
function FilterGroup({
  label,
  options,
  active,
  onSelect,
  t,
  ocidPrefix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "filter-group-label mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: options.map((opt, i) => {
      const isActive = active === opt.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          type: "button",
          "data-ocid": `${ocidPrefix}.item.${i + 1}`,
          "data-active": isActive ? "true" : "false",
          onClick: () => onSelect(isActive ? void 0 : opt.value),
          className: "chip-filter",
          initial: { opacity: 0, y: 6, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.18, delay: i * 0.03 },
          children: t(opt.key)
        },
        String(opt.value)
      );
    }) })
  ] });
}
function PdfCard({ pdf, index, t, onDownload, downloading }) {
  var _a, _b, _c;
  const deptLabel = (_a = DEPARTMENTS.find((d) => d.value === pdf.department)) == null ? void 0 : _a.key;
  const ctLabel = (_b = CLASS_TESTS.find((c) => c.value === pdf.classTest)) == null ? void 0 : _b.key;
  const regLabel = (_c = REGULATIONS.find((r) => r.value === pdf.regulation)) == null ? void 0 : _c.key;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      className: "pdf-card",
      "data-ocid": `study_materials.pdf_card.${index + 1}`,
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.25, delay: Math.min(index * 0.05, 0.4) },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pdf-card-thumb", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pdf-card-thumb-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-card/80 border border-border text-muted-foreground", children: "PDF" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col gap-3 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base leading-tight text-foreground line-clamp-2", children: pdf.subjectName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground mt-0.5", children: pdf.subjectCode })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "pdf-meta-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "pdf-meta-key", children: t("filterByDepartment") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "pdf-meta-val", children: deptLabel ? t(deptLabel) : pdf.department }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "pdf-meta-key", children: t("filterByYear") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "pdf-meta-val", children: Number(pdf.year) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "pdf-meta-key", children: t("filterBySemester") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "pdf-meta-val", children: Number(pdf.semester) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "pdf-meta-key", children: t("filterByRegulation") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "pdf-meta-val", children: regLabel ? t(regLabel) : pdf.regulation }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "pdf-meta-key", children: t("filterByClassTest") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "pdf-meta-val", children: ctLabel ? t(ctLabel) : pdf.classTest })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "pdf-download-btn mt-auto",
              "data-ocid": `study_materials.download_button.${index + 1}`,
              disabled: downloading,
              onClick: () => onDownload(pdf),
              children: downloading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { rotate: 360 },
                  transition: {
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                  },
                  className: "inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 13 }),
                t("downloadPdf")
              ] })
            }
          )
        ] })
      ]
    }
  );
}
function StudyMaterialsPage() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const search = useSearch({ from: "/study-materials" });
  const [department, setDepartment] = reactExports.useState(
    search.department
  );
  const [year, setYear] = reactExports.useState(search.year);
  const [semester, setSemester] = reactExports.useState(search.semester);
  const [regulation, setRegulation] = reactExports.useState(
    search.regulation
  );
  const [classTest, setClassTest] = reactExports.useState(
    search.classTest
  );
  const [searchInput, setSearchInput] = reactExports.useState(search.q ?? "");
  const [searchTerm, setSearchTerm] = reactExports.useState(search.q ?? "");
  const [mobileSidebarOpen, setMobileSidebarOpen] = reactExports.useState(false);
  const [downloadingId, setDownloadingId] = reactExports.useState(null);
  const debounceRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
    search.q
  ]);
  reactExports.useEffect(
    () => () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    },
    []
  );
  const pushToURL = reactExports.useCallback(
    (next) => {
      void navigate({
        to: "/study-materials",
        search: {
          department: next.department || void 0,
          year: next.year || void 0,
          semester: next.semester || void 0,
          regulation: next.regulation || void 0,
          classTest: next.classTest || void 0,
          q: next.q || void 0
        }
      });
    },
    [navigate]
  );
  const handleSearchChange = reactExports.useCallback(
    (value) => {
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
          q: trimmed || void 0
        });
      }, 300);
    },
    [department, year, semester, regulation, classTest, pushToURL]
  );
  const select = reactExports.useCallback(
    (key, value) => {
      const next = {
        department,
        year,
        semester,
        regulation,
        classTest,
        q: searchTerm || void 0
      };
      next[key] = value;
      pushToURL(next);
    },
    [department, year, semester, regulation, classTest, searchTerm, pushToURL]
  );
  const clearFilters = reactExports.useCallback(() => {
    setSearchInput("");
    setSearchTerm("");
    pushToURL({});
  }, [pushToURL]);
  const backendFilter = reactExports.useMemo(
    () => ({
      department,
      year: year !== void 0 ? BigInt(year) : void 0,
      semester: semester !== void 0 ? BigInt(semester) : void 0,
      regulation,
      classTest
    }),
    [department, year, semester, regulation, classTest]
  );
  const { data, isLoading } = useListStudyMaterials(backendFilter);
  const recordDownload = useRecordStudyMaterialDownload();
  const baseList = data && data.length > 0 ? data : SEED_PDFS;
  const filtered = reactExports.useMemo(() => {
    if (!searchTerm.trim()) return baseList;
    const q = searchTerm.toLowerCase();
    return baseList.filter(
      (p) => p.subjectName.toLowerCase().includes(q) || p.subjectCode.toLowerCase().includes(q)
    );
  }, [baseList, searchTerm]);
  const activeCount = (department ? 1 : 0) + (year ? 1 : 0) + (semester ? 1 : 0) + (regulation ? 1 : 0) + (classTest ? 1 : 0) + (searchTerm ? 1 : 0);
  const handleDownload = reactExports.useCallback(
    (pdf) => {
      setDownloadingId(pdf.id);
      recordDownload.mutate(pdf.id, {
        onSuccess: () => {
          setDownloadingId(null);
          if (!pdf.blobRef || pdf.blobRef === "" || pdf.blobRef === "blob-mock-1") {
            ue(
              lang === "bn" ? "এই পিডিএফটি একজন অ্যাডমিন আপলোড করার পর উপলব্ধ হবে।" : "This PDF will be available once an admin uploads it.",
              { duration: 5e3 }
            );
          } else {
            ue(lang === "bn" ? "ডাউনলোড শুরু হয়েছে" : "Download started");
          }
        },
        onError: () => {
          setDownloadingId(null);
          ue(
            lang === "bn" ? "ডাউনলোড ট্র্যাক করতে সমস্যা হয়েছে" : "Could not track download",
            { duration: 4e3 }
          );
        }
      });
    },
    [recordDownload, lang]
  );
  const resultsLabel = t("resultsCount").replace(
    "{count}",
    String(filtered.length)
  );
  const Sidebar = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-sidebar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 13, className: "text-accent" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: t("filter") }),
      activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent text-accent-foreground", children: activeCount })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterGroup,
      {
        label: t("filterByDepartment"),
        options: DEPARTMENTS,
        active: department,
        onSelect: (v) => select("department", v),
        t,
        ocidPrefix: "study_materials.department"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterGroup,
      {
        label: t("filterByYear"),
        options: YEARS,
        active: year,
        onSelect: (v) => select("year", v),
        t,
        ocidPrefix: "study_materials.year"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterGroup,
      {
        label: t("filterBySemester"),
        options: SEMESTERS,
        active: semester,
        onSelect: (v) => select("semester", v),
        t,
        ocidPrefix: "study_materials.semester"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterGroup,
      {
        label: t("filterByRegulation"),
        options: REGULATIONS,
        active: regulation,
        onSelect: (v) => select("regulation", v),
        t,
        ocidPrefix: "study_materials.regulation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterGroup,
      {
        label: t("filterByClassTest"),
        options: CLASS_TESTS,
        active: classTest,
        onSelect: (v) => select("classTest", v),
        t,
        ocidPrefix: "study_materials.class_test"
      }
    ),
    activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: clearFilters,
        "data-ocid": "study_materials.clear_filters_button",
        className: "w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-dashed border-accent/40 text-accent hover:bg-accent/10 transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
          t("clearFilters")
        ]
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      "data-ocid": "study_materials.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-foreground", children: t("studyMaterials") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-2xl", children: t("studyMaterialsSubtitle") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "aside",
            {
              className: "hidden lg:block w-[280px] flex-shrink-0",
              "data-ocid": "study_materials.sidebar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-6", children: Sidebar })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Search,
                  {
                    size: 15,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: searchInput,
                    onChange: (e) => handleSearchChange(e.target.value),
                    placeholder: t("searchBySubjectOrCode"),
                    "data-ocid": "study_materials.search_input",
                    className: "input-field pl-9 pr-9 h-10 rounded-lg w-full"
                  }
                ),
                searchInput && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSearchChange(""),
                    "aria-label": "Clear search",
                    "data-ocid": "study_materials.search_clear_button",
                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-semibold text-muted-foreground",
                    "data-ocid": "study_materials.results_count",
                    children: isLoading ? "…" : resultsLabel
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setMobileSidebarOpen(true),
                    "data-ocid": "study_materials.mobile_filter_toggle",
                    className: "lg:hidden inline-flex items-center gap-1.5 px-3 h-10 text-xs font-semibold rounded-lg border border-border hover:border-accent transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 13 }),
                      t("filter"),
                      activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 rounded-full bg-accent text-accent-foreground", children: activeCount })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.25 },
                className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4",
                "data-ocid": "study_materials.list",
                children: isLoading ? ["a", "b", "c", "d", "e", "f"].map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pdf-card", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pdf-card-thumb shimmer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-3/4 rounded shimmer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-1/3 rounded shimmer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-full rounded shimmer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-full rounded-lg shimmer" })
                  ] })
                ] }, sk)) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "col-span-full pdf-empty-state",
                    "data-ocid": "study_materials.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 26, className: "text-accent/60" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base text-foreground", children: t("noPdfsFound") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm max-w-xs", children: t("noPdfsFoundHint") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: clearFilters,
                          "data-ocid": "study_materials.empty_state.clear_button",
                          className: "mt-2 cta-primary text-xs h-9 px-5",
                          children: t("clearFilters")
                        }
                      )
                    ]
                  }
                ) : filtered.map((pdf, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PdfCard,
                  {
                    pdf,
                    index: i,
                    t,
                    onDownload: handleDownload,
                    downloading: downloadingId === pdf.id
                  },
                  pdf.id
                ))
              },
              `${department}-${year}-${semester}-${regulation}-${classTest}-${searchTerm}`
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileSidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.2 },
              className: "fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden",
              onClick: () => setMobileSidebarOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { x: "-100%" },
              animate: { x: 0 },
              exit: { x: "-100%" },
              transition: { type: "spring", damping: 28, stiffness: 280 },
              className: "fixed inset-y-0 left-0 z-50 w-80 max-w-full bg-card border-r border-border shadow-deep lg:hidden flex flex-col",
              "data-ocid": "study_materials.mobile_sidebar",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: t("filter") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMobileSidebarOpen(false),
                      "aria-label": "Close filters",
                      "data-ocid": "study_materials.mobile_sidebar.close_button",
                      className: "w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: Sidebar }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setMobileSidebarOpen(false),
                    "data-ocid": "study_materials.mobile_sidebar.apply_button",
                    className: "w-full cta-primary h-10",
                    children: [
                      filtered.length,
                      " ",
                      lang === "bn" ? "টি ফলাফল দেখুন" : "results"
                    ]
                  }
                ) })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  StudyMaterialsPage as default
};
