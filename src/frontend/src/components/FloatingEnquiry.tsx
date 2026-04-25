import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { AppError } from "../backend.d.ts";
import { useLanguage } from "../hooks/use-language";
import { useSubmitEnquiry } from "../hooks/useQueries";
import { getErrorMessage } from "../lib/utils";

interface EnquiryFormFields {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY_FORM: EnquiryFormFields = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

// ── Illustrated Thank-You Card ──────────────────────────────────────────────
export function ThankYouImage() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden mt-2 relative"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0d1e38 60%, #0a1628 100%)",
        border: "1px solid oklch(0.28 0.09 255)",
        boxShadow:
          "0 0 32px oklch(0.72 0.25 40 / 0.12), 0 4px 24px rgba(0,0,0,0.35)",
      }}
    >
      {/* Top rainbow accent bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.72 0.25 40), oklch(0.85 0.2 60), oklch(0.72 0.25 40), oklch(0.85 0.2 60))",
        }}
      />

      {/* Decorative sparkle dots */}
      <div
        className="absolute top-8 left-5 w-1.5 h-1.5 rounded-full opacity-60"
        style={{ background: "oklch(0.85 0.2 60)" }}
      />
      <div
        className="absolute top-12 left-10 w-1 h-1 rounded-full opacity-40"
        style={{ background: "oklch(0.72 0.25 40)" }}
      />
      <div
        className="absolute top-6 right-8 w-1 h-1 rounded-full opacity-50"
        style={{ background: "oklch(0.85 0.2 60)" }}
      />
      <div
        className="absolute top-14 right-5 w-1.5 h-1.5 rounded-full opacity-40"
        style={{ background: "oklch(0.72 0.25 40)" }}
      />

      <div className="px-6 py-6 flex flex-col items-center gap-3 text-center relative z-10">
        {/* Open book SVG icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.25 40 / 0.18), oklch(0.72 0.25 40 / 0.08))",
            border: "1px solid oklch(0.72 0.25 40 / 0.3)",
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
              stroke="oklch(0.85 0.2 60)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="oklch(0.72 0.25 40 / 0.15)"
            />
            <path
              d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
              stroke="oklch(0.72 0.25 40)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="oklch(0.72 0.25 40 / 0.1)"
            />
            <path
              d="M12 7v14"
              stroke="oklch(0.85 0.2 60 / 0.5)"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </svg>
        </div>

        {/* Stars row */}
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="oklch(0.85 0.2 60)"
              aria-hidden="true"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          ))}
        </div>

        {/* Large bilingual title with gradient */}
        <div>
          <p
            className="font-display font-bold text-2xl leading-tight"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.85 0.2 60), oklch(0.72 0.25 40), oklch(0.9 0.18 65))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ধন্যবাদ / Thank You
          </p>
        </div>

        {/* Subtitle */}
        <p
          className="text-xs leading-relaxed max-w-xs"
          style={{ color: "oklch(0.72 0.08 255)" }}
        >
          আপনার অনুসন্ধানের জন্য আমরা কৃতজ্ঞ
          <span className="mx-1.5 opacity-50">•</span>
          We are grateful for your enquiry
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-2 w-full max-w-xs">
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.25 40 / 0.4))",
            }}
          />
          <span className="text-sm">📚</span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.72 0.25 40 / 0.4), transparent)",
            }}
          />
        </div>
      </div>

      {/* Bottom strip — orange gradient with store name */}
      <div
        className="px-5 py-2.5 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.58 0.27 38 / 0.9), oklch(0.68 0.25 42 / 0.9), oklch(0.58 0.27 38 / 0.9))",
        }}
      >
        <p className="text-xs font-semibold text-white tracking-wide text-center">
          Vidyamandir — Balgona, GT Road, Purba Bardhaman
        </p>
      </div>
    </div>
  );
}

export function FloatingEnquiry() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<EnquiryFormFields>(EMPTY_FORM);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    aiReply: string;
  } | null>(null);
  const { mutate: submitEnquiry, isPending } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitterName = form.name;
    submitEnquiry(form, {
      onSuccess: (result) => {
        if (result.__kind__ === "ok") {
          setSubmittedData({
            name: submitterName,
            aiReply:
              result.aiReply ||
              "Thank you for contacting Vidyamandir! We have received your enquiry and will get back to you within 24 hours. A response has been sent to your email and phone number.",
          });
          setForm(EMPTY_FORM);
        } else {
          toast.error(getErrorMessage(result.err));
        }
      },
      onError: (err) => {
        const msg =
          err && typeof err === "object" && "__kind__" in err
            ? getErrorMessage(err as unknown as AppError)
            : "Failed to send enquiry. Please try again.";
        toast.error(msg);
      },
    });
  };

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => setSubmittedData(null), 300);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-ocid="enquiry.open_modal_button"
        aria-label={t("enquiry")}
        title={t("enquiryTitle")}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
          boxShadow: "0 4px 20px oklch(var(--accent) / 0.45)",
        }}
      >
        <MessageCircle
          size={22}
          style={{ color: "oklch(var(--accent-foreground))" }}
        />
      </button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent
          className="rounded-2xl max-w-md max-h-[90vh] overflow-y-auto"
          data-ocid="enquiry.dialog"
        >
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="font-display text-lg">
                {submittedData ? "Enquiry Submitted" : t("enquiryTitle")}
              </DialogTitle>
              <button
                type="button"
                onClick={() => handleClose(false)}
                data-ocid="enquiry.close_button"
                aria-label="Close"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              >
                <X size={15} />
              </button>
            </div>
            {!submittedData && (
              <p className="text-xs text-muted-foreground mt-1">
                {t("enquirySubtitle")}
              </p>
            )}
          </DialogHeader>

          {submittedData ? (
            /* ── Success / Confirmation Panel ── */
            <div
              className="flex flex-col gap-5 pb-2 animate-slide-up"
              data-ocid="enquiry.success_state"
            >
              {/* Big orange checkmark */}
              <div className="flex flex-col items-center gap-3 pt-2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-elevated"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--accent) / 0.18), oklch(var(--accent) / 0.08))",
                    border: "2px solid oklch(var(--accent) / 0.4)",
                  }}
                >
                  <CheckCircle
                    size={40}
                    style={{ color: "oklch(var(--accent))" }}
                  />
                </div>

                {/* Headline */}
                <h2
                  className="font-display font-bold text-2xl text-center"
                  style={{ color: "oklch(var(--accent))" }}
                >
                  Thank You!
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-xs">
                  Your enquiry has been received. We have sent a response to
                  your <strong className="text-foreground">email</strong> and{" "}
                  <strong className="text-foreground">phone number</strong>.
                </p>
              </div>

              {/* AI Reply Card */}
              <div
                className="rounded-xl p-4 text-sm leading-relaxed"
                style={{
                  background: "oklch(var(--card))",
                  border: "1px solid oklch(var(--border))",
                  borderLeft: "4px solid oklch(var(--accent))",
                }}
              >
                <p
                  className="text-[11px] font-bold uppercase tracking-widest mb-2"
                  style={{ color: "oklch(var(--accent))" }}
                >
                  Our Response:
                </p>
                <p className="text-foreground">{submittedData.aiReply}</p>
              </div>

              {/* Illustrated Thank-You card at the bottom */}
              <ThankYouImage />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground font-semibold">
                    {t("enquiryName")} *
                  </Label>
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="input-field h-9 rounded-lg"
                    data-ocid="enquiry.input"
                    placeholder="Anirban Ray"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground font-semibold">
                    {t("enquiryPhone")} *
                  </Label>
                  <Input
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="input-field h-9 rounded-lg"
                    data-ocid="enquiry.phone_input"
                    placeholder="+91 94757 27810"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  {t("enquiryEmail")} *
                </Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="input-field h-9 rounded-lg"
                  data-ocid="enquiry.email_input"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground font-semibold">
                  {t("enquiryMessage")} *
                </Label>
                <Textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="rounded-lg text-xs resize-none"
                  data-ocid="enquiry.textarea"
                  rows={4}
                  placeholder="Your question or feedback..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                data-ocid="enquiry.submit_button"
                className="cta-primary w-full flex items-center justify-center gap-2 py-2.5 disabled:opacity-60"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={14} />
                    {t("enquirySubmit")}
                  </>
                )}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
