import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, X } from "lucide-react";
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

export function FloatingEnquiry() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<EnquiryFormFields>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitEnquiry, isPending } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEnquiry(form, {
      onSuccess: (result) => {
        if (result.__kind__ === "ok") {
          setSubmitted(true);
          setForm(EMPTY_FORM);
          setTimeout(() => {
            setOpen(false);
            setSubmitted(false);
          }, 2500);
        } else {
          // result.__kind__ === "err" — show specific backend error message
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
      setTimeout(() => setSubmitted(false), 300);
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
          className="rounded-2xl max-w-md"
          data-ocid="enquiry.dialog"
        >
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="font-display text-lg">
                {t("enquiryTitle")}
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
            <p className="text-xs text-muted-foreground mt-1">
              {t("enquirySubtitle")}
            </p>
          </DialogHeader>

          {submitted ? (
            <div
              className="flex flex-col items-center gap-4 py-8"
              data-ocid="enquiry.success_state"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(0.65 0.18 150 / 0.15)" }}
              >
                <Send size={26} style={{ color: "oklch(0.65 0.18 150)" }} />
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-base">
                  {t("enquirySuccess")}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("enquirySuccessMsg")}
                </p>
              </div>
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
