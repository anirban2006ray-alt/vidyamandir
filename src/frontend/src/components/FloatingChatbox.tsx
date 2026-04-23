import { Bot, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitChatEnquiry } from "../hooks/useQueries";
import { getErrorMessage } from "../lib/utils";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

interface SessionState {
  userName: string;
  userEmail: string;
  userPhone: string;
  messages: Message[];
  isSessionStarted: boolean;
  isLoading: boolean;
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  question: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  question?: string;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "bot",
  text: "Hello! I can help you with questions about our books, prices, orders, and returns. আপনি বাংলায়ও প্রশ্ন করতে পারেন। Please share your details to get a reply on your phone and email.",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

function TypingIndicator() {
  return (
    <div className="message message-bot" aria-label="AI is typing">
      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
        <Bot size={14} className="text-primary-foreground" />
      </div>
      <div
        className="message-bubble flex items-center gap-1 py-3"
        style={{ minWidth: 52 }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
            style={{
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  return (
    <div
      className={`message ${msg.role === "bot" ? "message-bot" : "message-user"}`}
    >
      {msg.role === "bot" && (
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
          <Bot size={14} className="text-primary-foreground" />
        </div>
      )}
      <div className="message-bubble whitespace-pre-wrap">{msg.text}</div>
    </div>
  );
}

export function FloatingChatbox() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState<SessionState>({
    userName: "",
    userEmail: "",
    userPhone: "",
    messages: [WELCOME_MESSAGE],
    isSessionStarted: false,
    isLoading: false,
  });
  const [formFields, setFormFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    question: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [followUp, setFollowUp] = useState("");

  const messagesRef = useRef<HTMLDivElement>(null);
  const followUpRef = useRef<HTMLTextAreaElement>(null);

  const { mutate: submitChatEnquiry } = useSubmitChatEnquiry();

  // Scroll to bottom when messages update — useRef avoids re-renders
  const prevCountRef = useRef(0);
  useEffect(() => {
    if (
      messagesRef.current &&
      session.messages.length !== prevCountRef.current
    ) {
      prevCountRef.current = session.messages.length;
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  });

  // Keyboard: Escape closes chatbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formFields.name.trim()) {
      errors.name = "Name is required";
    }
    if (!EMAIL_REGEX.test(formFields.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!PHONE_REGEX.test(formFields.phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }
    if (formFields.question.trim().length < 5) {
      errors.question = "Question must be at least 5 characters";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: formFields.question.trim(),
    };
    setSession((s) => ({
      ...s,
      userName: formFields.name.trim(),
      userEmail: formFields.email.trim(),
      userPhone: formFields.phone.trim(),
      messages: [...s.messages, userMsg],
      isSessionStarted: true,
      isLoading: true,
    }));

    submitChatEnquiry(
      {
        name: formFields.name.trim(),
        email: formFields.email.trim(),
        phone: formFields.phone.trim(),
        question: formFields.question.trim(),
      },
      {
        onSuccess: (aiReply) => {
          const ts = Date.now();
          setSession((s) => ({
            ...s,
            isLoading: false,
            messages: [
              ...s.messages,
              { id: `bot-${ts}`, role: "bot", text: aiReply },
              {
                id: `bot-copy-${ts}`,
                role: "bot",
                text: "✓ A copy has been sent to your email and phone.",
              },
            ],
          }));
        },
        onError: (err) => {
          const msg =
            err instanceof Error
              ? err.message
              : "Failed to get a response. Please try again.";
          setSession((s) => ({
            ...s,
            isLoading: false,
            messages: [
              ...s.messages,
              {
                id: `bot-err-${Date.now()}`,
                role: "bot",
                text: "Sorry, I could not process your request. Please try again in a moment.",
              },
            ],
          }));
          toast.error(msg);
        },
      },
    );
  };

  const handleFollowUpSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = followUp.trim();
    if (!text || session.isLoading) return;
    if (text.length < 5) {
      toast.error("Message must be at least 5 characters.");
      return;
    }

    const userMsg: Message = { id: `user-${Date.now()}`, role: "user", text };
    setSession((s) => ({
      ...s,
      messages: [...s.messages, userMsg],
      isLoading: true,
    }));
    setFollowUp("");

    submitChatEnquiry(
      {
        name: session.userName,
        email: session.userEmail,
        phone: session.userPhone,
        question: text,
      },
      {
        onSuccess: (aiReply) => {
          setSession((s) => ({
            ...s,
            isLoading: false,
            messages: [
              ...s.messages,
              { id: `bot-${Date.now()}`, role: "bot", text: aiReply },
            ],
          }));
        },
        onError: (err) => {
          const msg =
            err instanceof Error
              ? err.message
              : "Failed to get a response. Please try again.";
          setSession((s) => ({
            ...s,
            isLoading: false,
            messages: [
              ...s.messages,
              {
                id: `bot-err-${Date.now()}`,
                role: "bot",
                text: "Sorry, I could not process your request. Please try again in a moment.",
              },
            ],
          }));
          toast.error(msg);
        },
      },
    );
  };

  const handleFollowUpKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleFollowUpSubmit();
    }
  };

  const handleQuestionKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // Trigger form submit
      const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
      handleFormSubmit(fakeEvent);
    }
  };

  return (
    <>
      {/* Floating trigger button — z-40, right-24 (leaves room for FloatingEnquiry at right-6) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-ocid="chatbox.open_modal_button"
        aria-label="Open AI Chatbox"
        aria-expanded={open}
        className="chatbox-trigger chatbox-pulse"
        style={{ right: "5.5rem" }}
      >
        <Bot className="chatbox-trigger-icon" />
      </button>

      {/* Chat dialog */}
      {open && (
        <section
          className="chatbox-dialog"
          style={{ right: "5.5rem" }}
          aria-label="Vidyamandir AI Assistant"
          data-ocid="chatbox.dialog"
        >
          {/* Header */}
          <div className="chatbox-header">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot size={16} className="text-primary-foreground" />
              </div>
              <div>
                <p className="chatbox-title">Vidyamandir AI Assistant</p>
                <p className="text-xs text-muted-foreground">
                  Online · AI-powered
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="chatbox-close"
              data-ocid="chatbox.close_button"
              aria-label="Close chatbox"
            >
              <X size={15} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="chatbox-messages"
            ref={messagesRef}
            data-ocid="chatbox.panel"
          >
            {session.messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}
            {session.isLoading && <TypingIndicator />}
          </div>

          {/* Initial form (before session starts) */}
          {!session.isSessionStarted && (
            <form
              onSubmit={handleFormSubmit}
              className="p-4 border-t border-border space-y-3"
              data-ocid="chatbox.form"
              noValidate
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    value={formFields.name}
                    onChange={(e) => {
                      setFormFields((f) => ({ ...f, name: e.target.value }));
                      if (formErrors.name)
                        setFormErrors((fe) => ({ ...fe, name: undefined }));
                    }}
                    placeholder="Your name *"
                    className="chatbox-input w-full text-xs"
                    data-ocid="chatbox.input"
                    aria-label="Your name"
                    autoComplete="name"
                  />
                  {formErrors.name && (
                    <p
                      className="text-destructive text-[10px] mt-0.5"
                      data-ocid="chatbox.name.field_error"
                    >
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    value={formFields.phone}
                    onChange={(e) => {
                      setFormFields((f) => ({ ...f, phone: e.target.value }));
                      if (formErrors.phone)
                        setFormErrors((fe) => ({ ...fe, phone: undefined }));
                    }}
                    placeholder="10-digit phone *"
                    className="chatbox-input w-full text-xs"
                    data-ocid="chatbox.phone_input"
                    aria-label="Phone number"
                    autoComplete="tel"
                    maxLength={10}
                  />
                  {formErrors.phone && (
                    <p
                      className="text-destructive text-[10px] mt-0.5"
                      data-ocid="chatbox.phone.field_error"
                    >
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  value={formFields.email}
                  onChange={(e) => {
                    setFormFields((f) => ({ ...f, email: e.target.value }));
                    if (formErrors.email)
                      setFormErrors((fe) => ({ ...fe, email: undefined }));
                  }}
                  placeholder="Email address *"
                  className="chatbox-input w-full text-xs"
                  data-ocid="chatbox.email_input"
                  aria-label="Email address"
                  autoComplete="email"
                />
                {formErrors.email && (
                  <p
                    className="text-destructive text-[10px] mt-0.5"
                    data-ocid="chatbox.email.field_error"
                  >
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  value={formFields.question}
                  onChange={(e) => {
                    setFormFields((f) => ({
                      ...f,
                      question: e.target.value.slice(0, 2000),
                    }));
                    if (formErrors.question)
                      setFormErrors((fe) => ({ ...fe, question: undefined }));
                  }}
                  onKeyDown={handleQuestionKeyDown}
                  placeholder="Your question... (Enter to send, Shift+Enter for newline)"
                  className="chatbox-input w-full text-xs resize-none"
                  data-ocid="chatbox.textarea"
                  aria-label="Your question"
                  rows={3}
                  maxLength={2000}
                />
                {formErrors.question && (
                  <p
                    className="text-destructive text-[10px] mt-0.5"
                    data-ocid="chatbox.question.field_error"
                  >
                    {formErrors.question}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={session.isLoading}
                className="cta-primary w-full flex items-center justify-center gap-2 text-xs py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-ocid="chatbox.submit_button"
              >
                {session.isLoading ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-current border-t-transparent animate-spin" />
                    Thinking...
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    Ask AI
                  </>
                )}
              </button>
            </form>
          )}

          {/* Follow-up input (after session started) */}
          {session.isSessionStarted && (
            <form
              onSubmit={handleFollowUpSubmit}
              className="chatbox-form"
              data-ocid="chatbox.followup_form"
            >
              <textarea
                ref={followUpRef}
                value={followUp}
                onChange={(e) => setFollowUp(e.target.value.slice(0, 2000))}
                onKeyDown={handleFollowUpKeyDown}
                placeholder="Ask a follow-up... (Enter to send)"
                className="chatbox-input text-xs resize-none leading-tight"
                rows={1}
                disabled={session.isLoading}
                data-ocid="chatbox.followup_input"
                aria-label="Follow-up question"
              />
              <button
                type="submit"
                disabled={session.isLoading || followUp.trim().length < 1}
                className="chatbox-submit shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                data-ocid="chatbox.followup_submit_button"
                aria-label="Send follow-up"
              >
                {session.isLoading ? (
                  <span className="w-3 h-3 rounded-full border-2 border-current border-t-transparent animate-spin" />
                ) : (
                  <Send size={14} />
                )}
              </button>
            </form>
          )}
        </section>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        @media (max-width: 640px) {
          [data-ocid="chatbox.dialog"] {
            right: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 16px 16px 0 0 !important;
            max-height: 80vh !important;
          }
          [data-ocid="chatbox.open_modal_button"] {
            right: 5rem !important;
          }
        }
      `}</style>
    </>
  );
}
