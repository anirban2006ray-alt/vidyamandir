import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
import { FileText, Loader2, Lock, Pencil, Trash2, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import type {
  CreateStudyMaterialInput,
  StudyMaterial,
  UpdateStudyMaterialMetadataInput,
} from "../backend.d.ts";
import { useIsAdmin } from "../hooks/use-auth";
import { useLanguage } from "../hooks/use-language";
import {
  useCreateStudyMaterial,
  useDeleteStudyMaterial,
  useListAllStudyMaterials,
  useUpdateStudyMaterialMetadata,
} from "../hooks/useQueries";
import type { TranslationKey } from "../lib/i18n";

// ─── Option catalogs (mirror StudyMaterialsPage) ─────────────────────────────

type DeptCode = "CSE" | "ECE" | "EE" | "ME" | "CE";
type RegCode = "R-23" | "R-25";
type CTCode = "CT1" | "CT2" | "Semester";

const DEPARTMENTS: { value: DeptCode; key: TranslationKey }[] = [
  { value: "CSE", key: "departmentCSE" },
  { value: "ECE", key: "departmentECE" },
  { value: "EE", key: "departmentEE" },
  { value: "ME", key: "departmentME" },
  { value: "CE", key: "departmentCE" },
];

const YEARS: { value: number; key: TranslationKey }[] = [
  { value: 1, key: "year1" },
  { value: 2, key: "year2" },
  { value: 3, key: "year3" },
  { value: 4, key: "year4" },
];

const SEMESTERS: { value: number; key: TranslationKey }[] = [
  { value: 1, key: "semester1" },
  { value: 2, key: "semester2" },
  { value: 3, key: "semester3" },
  { value: 4, key: "semester4" },
  { value: 5, key: "semester5" },
  { value: 6, key: "semester6" },
  { value: 7, key: "semester7" },
  { value: 8, key: "semester8" },
];

const REGULATIONS: { value: RegCode; key: TranslationKey }[] = [
  { value: "R-23", key: "regulationR23" },
  { value: "R-25", key: "regulationR25" },
];

const CLASS_TESTS: { value: CTCode; key: TranslationKey }[] = [
  { value: "CT1", key: "classTestCT1" },
  { value: "CT2", key: "classTestCT2" },
  { value: "Semester", key: "classTestSemester" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface FormState {
  department: DeptCode;
  year: number;
  semester: number;
  subjectName: string;
  subjectCode: string;
  regulation: RegCode;
  classTest: CTCode;
}

const EMPTY_FORM: FormState = {
  department: "CSE",
  year: 1,
  semester: 1,
  subjectName: "",
  subjectCode: "",
  regulation: "R-23",
  classTest: "CT1",
};

function fromStudyMaterial(sm: StudyMaterial): FormState {
  return {
    department: sm.department as DeptCode,
    year: Number(sm.year),
    semester: Number(sm.semester),
    subjectName: sm.subjectName,
    subjectCode: sm.subjectCode,
    regulation: sm.regulation as RegCode,
    classTest: sm.classTest as CTCode,
  };
}

// ─── Admin gate ──────────────────────────────────────────────────────────────

function AdminGate({ t }: { t: (key: TranslationKey) => string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-20 text-center"
      data-ocid="study_materials.admin_gate"
    >
      <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center">
        <Lock size={22} className="text-accent" />
      </div>
      <p className="font-display font-semibold text-foreground">
        {t("adminOnly")}
      </p>
      <p className="text-xs text-muted-foreground max-w-sm">
        {t("adminOnly")} — Vidyamandir / বিদ্যামন্দির
      </p>
    </div>
  );
}

// ─── Upload form ─────────────────────────────────────────────────────────────

interface UploadFormProps {
  t: (key: TranslationKey) => string;
}

function UploadForm({ t }: UploadFormProps) {
  const createMutation = useCreateStudyMaterial();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleFile = (f: File | null) => {
    if (f && f.type === "application/pdf") {
      setFile(f);
    } else if (f) {
      toast.error(t("uploadFailed"));
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0] ?? null);
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setFile(null);
    setProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !form.subjectName.trim() || !form.subjectCode.trim()) return;

    // Simulated progress while the create call is in flight.
    setProgress(8);
    const tick = setInterval(() => {
      setProgress((p) => (p < 88 ? p + Math.random() * 12 : p));
    }, 180);

    // Placeholder blobRef — object-storage wiring is refined later.
    const blobRef = `pdf-${Date.now()}-${file.name}`;
    const input: CreateStudyMaterialInput = {
      department: form.department,
      year: BigInt(form.year),
      semester: BigInt(form.semester),
      subjectName: form.subjectName.trim(),
      subjectCode: form.subjectCode.trim(),
      regulation: form.regulation,
      classTest: form.classTest,
      blobRef,
    };

    try {
      // Read the file so the arrayBuffer is consumed (matches the spec flow).
      await file.arrayBuffer();
      await createMutation.mutateAsync(input);
      setProgress(100);
      toast.success(t("uploadSuccess"));
      reset();
    } catch {
      toast.error(t("uploadFailed"));
      setProgress(0);
    } finally {
      clearInterval(tick);
    }
  };

  const isUploading = createMutation.isPending;
  const canSubmit =
    !!file && form.subjectName.trim() !== "" && form.subjectCode.trim() !== "";

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card border border-border rounded-xl p-5 sm:p-6 space-y-5 shadow-card"
      data-ocid="study_materials.upload_form"
    >
      <div className="flex items-center gap-2.5 pb-1">
        <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
          <Upload size={16} className="text-accent" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground text-base">
            {t("uploadNewPdf")}
          </h3>
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-widest">
            {t("uploadPdf")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Department */}
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {t("selectDepartment")}
          </Label>
          <Select
            value={form.department}
            onValueChange={(v) => set("department", v as DeptCode)}
          >
            <SelectTrigger
              className="input-field"
              data-ocid="study_materials.department.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DEPARTMENTS.map((d) => (
                <SelectItem key={d.value} value={d.value}>
                  {t(d.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year */}
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {t("selectYear")}
          </Label>
          <Select
            value={String(form.year)}
            onValueChange={(v) => set("year", Number(v))}
          >
            <SelectTrigger
              className="input-field"
              data-ocid="study_materials.year.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((y) => (
                <SelectItem key={y.value} value={String(y.value)}>
                  {t(y.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Semester */}
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {t("selectSemester")}
          </Label>
          <Select
            value={String(form.semester)}
            onValueChange={(v) => set("semester", Number(v))}
          >
            <SelectTrigger
              className="input-field"
              data-ocid="study_materials.semester.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SEMESTERS.map((s) => (
                <SelectItem key={s.value} value={String(s.value)}>
                  {t(s.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Subject Name */}
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {t("subjectName")}
          </Label>
          <Input
            value={form.subjectName}
            onChange={(e) => set("subjectName", e.target.value)}
            placeholder={t("enterSubjectName")}
            className="input-field"
            data-ocid="study_materials.subject_name.input"
          />
        </div>

        {/* Subject Code */}
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {t("subjectCode")}
          </Label>
          <Input
            value={form.subjectCode}
            onChange={(e) => set("subjectCode", e.target.value)}
            placeholder={t("enterSubjectCode")}
            className="input-field"
            data-ocid="study_materials.subject_code.input"
          />
        </div>

        {/* Regulation */}
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {t("selectRegulation")}
          </Label>
          <Select
            value={form.regulation}
            onValueChange={(v) => set("regulation", v as RegCode)}
          >
            <SelectTrigger
              className="input-field"
              data-ocid="study_materials.regulation.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {REGULATIONS.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {t(r.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Class Test */}
        <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
          <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {t("selectClassTest")}
          </Label>
          <Select
            value={form.classTest}
            onValueChange={(v) => set("classTest", v as CTCode)}
          >
            <SelectTrigger
              className="input-field"
              data-ocid="study_materials.class_test.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CLASS_TESTS.map((c) => (
                <SelectItem key={c.value} value={c.value}>
                  {t(c.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Dropzone */}
      <button
        type="button"
        className="upload-dropzone"
        data-dragging={dragging ? "true" : "false"}
        data-ocid="study_materials.dropzone"
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          data-ocid="study_materials.file_input"
        />
        <div className="upload-dropzone-icon">
          <FileText size={22} />
        </div>
        {file ? (
          <div className="space-y-1">
            <p className="font-semibold text-foreground text-sm break-all">
              {file.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>
        ) : (
          <div className="space-y-1">
            <p className="font-semibold text-foreground text-sm">
              {t("choosePdfFile")}
            </p>
            <p className="text-xs text-muted-foreground">
              PDF · drag &amp; drop
            </p>
          </div>
        )}
      </button>

      {/* Progress */}
      {progress > 0 && (
        <div className="space-y-1.5" data-ocid="study_materials.loading_state">
          <div className="upload-progress-track">
            <div
              className="upload-progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-widest">
            {t("uploading")} {Math.min(Math.round(progress), 100)}%
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="flex items-center gap-3 pt-1">
        <Button
          type="submit"
          disabled={!canSubmit || isUploading}
          className="cta-primary disabled:opacity-50 disabled:cursor-not-allowed"
          data-ocid="study_materials.submit_button"
        >
          {isUploading ? (
            <>
              <Loader2 size={14} className="mr-1.5 animate-spin" />
              {t("uploading")}
            </>
          ) : (
            <>
              <Upload size={14} className="mr-1.5" />
              {t("uploadPdf")}
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={reset}
          disabled={isUploading}
          className="btn-secondary"
          data-ocid="study_materials.reset_button"
        >
          {t("noResultsFound") === "No results found" ? "Reset" : "রিসেট"}
        </Button>
      </div>
    </form>
  );
}

// ─── Inline edit row ─────────────────────────────────────────────────────────

interface EditRowProps {
  sm: StudyMaterial;
  t: (key: TranslationKey) => string;
  onCancel: () => void;
}

function EditRow({ sm, t, onCancel }: EditRowProps) {
  const updateMutation = useUpdateStudyMaterialMetadata();
  const [form, setForm] = useState<FormState>(() => fromStudyMaterial(sm));

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSave = async () => {
    const input: UpdateStudyMaterialMetadataInput = {
      department: form.department,
      year: BigInt(form.year),
      semester: BigInt(form.semester),
      subjectName: form.subjectName.trim(),
      subjectCode: form.subjectCode.trim(),
      regulation: form.regulation,
      classTest: form.classTest,
    };
    try {
      await updateMutation.mutateAsync({ id: sm.id, input });
      toast.success(t("uploadSuccess"));
      onCancel();
    } catch {
      toast.error(t("uploadFailed"));
    }
  };

  return (
    <div
      className="bg-muted/30 border border-accent/40 rounded-lg p-4 space-y-3 animate-fade-in"
      data-ocid="study_materials.edit_dialog"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Select
          value={form.department}
          onValueChange={(v) => set("department", v as DeptCode)}
        >
          <SelectTrigger
            className="input-field h-9 text-xs"
            data-ocid="study_materials.edit.department.select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {DEPARTMENTS.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {t(d.key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={String(form.year)}
          onValueChange={(v) => set("year", Number(v))}
        >
          <SelectTrigger
            className="input-field h-9 text-xs"
            data-ocid="study_materials.edit.year.select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {YEARS.map((y) => (
              <SelectItem key={y.value} value={String(y.value)}>
                {t(y.key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={String(form.semester)}
          onValueChange={(v) => set("semester", Number(v))}
        >
          <SelectTrigger
            className="input-field h-9 text-xs"
            data-ocid="study_materials.edit.semester.select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SEMESTERS.map((s) => (
              <SelectItem key={s.value} value={String(s.value)}>
                {t(s.key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={form.regulation}
          onValueChange={(v) => set("regulation", v as RegCode)}
        >
          <SelectTrigger
            className="input-field h-9 text-xs"
            data-ocid="study_materials.edit.regulation.select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {REGULATIONS.map((r) => (
              <SelectItem key={r.value} value={r.value}>
                {t(r.key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          value={form.subjectName}
          onChange={(e) => set("subjectName", e.target.value)}
          placeholder={t("enterSubjectName")}
          className="input-field h-9 text-xs"
          data-ocid="study_materials.edit.subject_name.input"
        />
        <Input
          value={form.subjectCode}
          onChange={(e) => set("subjectCode", e.target.value)}
          placeholder={t("enterSubjectCode")}
          className="input-field h-9 text-xs"
          data-ocid="study_materials.edit.subject_code.input"
        />
        <Select
          value={form.classTest}
          onValueChange={(v) => set("classTest", v as CTCode)}
        >
          <SelectTrigger
            className="input-field h-9 text-xs"
            data-ocid="study_materials.edit.class_test.select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CLASS_TESTS.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {t(c.key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          onClick={onSave}
          disabled={updateMutation.isPending}
          className="cta-primary text-xs h-8"
          data-ocid="study_materials.edit.save_button"
        >
          {updateMutation.isPending ? (
            <Loader2 size={12} className="mr-1 animate-spin" />
          ) : null}
          {t("editMetadata")}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          className="btn-secondary text-xs h-8"
          data-ocid="study_materials.edit.cancel_button"
        >
          {t("noResultsFound") === "No results found" ? "Cancel" : "বাতল"}
        </Button>
      </div>
    </div>
  );
}

// ─── Management list ─────────────────────────────────────────────────────────

function ManageList({ t }: { t: (key: TranslationKey) => string }) {
  const { data, isLoading } = useListAllStudyMaterials();
  const deleteMutation = useDeleteStudyMaterial();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const items = data ?? [];
  const deleteTarget = items.find((sm) => sm.id === deleteId) ?? null;

  const confirmDelete = async () => {
    if (!deleteId) return;
    const id = deleteId;
    setDeleteId(null);
    try {
      await deleteMutation.mutateAsync(id);
      toast.success(t("pdfDeleted"));
    } catch {
      toast.error(t("uploadFailed"));
    }
  };

  return (
    <div
      className="bg-card border border-border rounded-xl p-5 sm:p-6 space-y-4 shadow-card"
      data-ocid="study_materials.manage_panel"
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
            <FileText size={16} className="text-accent" />
          </div>
          <h3 className="font-display font-semibold text-foreground text-base">
            {t("managePdfs")}
          </h3>
        </div>
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/40 border border-border"
          data-ocid="study_materials.total_pdfs"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            {t("totalPdfs")}
          </span>
          <span className="text-sm font-bold text-accent">{items.length}</span>
        </div>
      </div>

      {isLoading ? (
        <div
          className="flex items-center justify-center gap-2 py-12 text-muted-foreground"
          data-ocid="study_materials.loading_state"
        >
          <Loader2 size={16} className="animate-spin" />
          <span className="text-sm">{t("loading")}</span>
        </div>
      ) : items.length === 0 ? (
        <div
          className="pdf-empty-state"
          data-ocid="study_materials.empty_state"
        >
          <FileText size={28} className="opacity-50" />
          <p className="text-sm font-medium">{t("noResultsFound")}</p>
        </div>
      ) : (
        <div className="space-y-2" data-ocid="study_materials.list">
          {items.map((sm, i) =>
            editingId === sm.id ? (
              <EditRow
                key={sm.id}
                sm={sm}
                t={t}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div
                key={sm.id}
                className="pdf-admin-row flex-wrap"
                data-ocid={`study_materials.item.${i + 1}`}
              >
                <div className="w-9 h-9 rounded-lg bg-muted/40 border border-border flex items-center justify-center shrink-0">
                  <FileText size={14} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">
                    {sm.subjectName}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {sm.subjectCode}
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono uppercase tracking-wide">
                  <span className="px-2 py-0.5 rounded bg-muted/40 border border-border">
                    {sm.department}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-muted/40 border border-border">
                    Y{Number(sm.year)}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-muted/40 border border-border">
                    S{Number(sm.semester)}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-muted/40 border border-border">
                    {sm.regulation}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent">
                    {sm.classTest}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingId(sm.id)}
                    className="h-8 px-2.5 text-xs btn-secondary"
                    data-ocid={`study_materials.edit_button.${i + 1}`}
                  >
                    <Pencil size={12} className="mr-1" />
                    {t("editMetadata")}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeleteId(sm.id)}
                    className="h-8 px-2.5 text-xs text-destructive hover:bg-destructive/10 border border-destructive/30"
                    data-ocid={`study_materials.delete_button.${i + 1}`}
                  >
                    <Trash2 size={12} className="mr-1" />
                    {t("deletePdf")}
                  </Button>
                </div>
              </div>
            ),
          )}
        </div>
      )}

      {/* Delete confirmation */}
      <AlertDialog
        open={deleteId !== null}
        onOpenChange={(o) => !o && setDeleteId(null)}
      >
        <AlertDialogContent data-ocid="study_materials.delete_dialog">
          <AlertDialogHeader>
            <AlertDialogTitle>{t("deletePdf")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("confirmDelete")}
              {deleteTarget ? (
                <span className="block mt-1 font-mono text-xs">
                  {deleteTarget.subjectName} · {deleteTarget.subjectCode}
                </span>
              ) : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              data-ocid="study_materials.delete.cancel_button"
              className="btn-secondary"
            >
              {t("noResultsFound") === "No results found" ? "Cancel" : "বাতল"}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              disabled={deleteMutation.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              data-ocid="study_materials.delete.confirm_button"
            >
              {deleteMutation.isPending ? (
                <Loader2 size={14} className="mr-1 animate-spin" />
              ) : null}
              {t("deletePdf")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ─── Main tab ────────────────────────────────────────────────────────────────

export function StudyMaterialsTab() {
  const { t } = useLanguage();
  const adminQuery = useIsAdmin();

  if (adminQuery.isLoading) {
    return (
      <div
        className="flex items-center justify-center gap-2 py-20 text-muted-foreground"
        data-ocid="study_materials.loading_state"
      >
        <Loader2 size={18} className="animate-spin" />
        <span className="text-sm">{t("loading")}</span>
      </div>
    );
  }

  if (!adminQuery.data) {
    return <AdminGate t={t} />;
  }

  return (
    <div className="space-y-6" data-ocid="study_materials.page">
      <UploadForm t={t} />
      <ManageList t={t} />
    </div>
  );
}
