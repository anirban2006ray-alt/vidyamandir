import { useCallback, useEffect, useRef, useState } from "react";

// --- TypeScript global declarations for Web Speech API ---
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start(): void;
    stop(): void;
    abort(): void;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
    onend: (() => void) | null;
    onnomatch: (() => void) | null;
  }
  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }
  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }
  interface SpeechRecognitionResult {
    readonly length: number;
    readonly isFinal: boolean;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }
  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }
  interface SpeechRecognitionErrorEvent extends Event {
    error: string;
    message: string;
  }
}

const CORRECT_PASSPHRASE = "jai mata swarasati";
const SESSION_KEY = "vm-passphrase-unlocked";

const ACCEPTED_PHRASES = [
  "jai mata swarasati",
  "jai mata saraswati",
  "jai mata saraswathi",
  "jai mata sarasoti",
  "jai mata sarawati",
  "jai maa swarasati",
  "jai maa saraswati",
];

function matchesPassphrase(transcript: string): boolean {
  const normalized = transcript.trim().toLowerCase().replace(/\s+/g, " ");
  return ACCEPTED_PHRASES.some((p) => normalized.includes(p));
}

type Mode = "speak" | "type";

interface PassphraseGateProps {
  onUnlock: () => void;
}

// Floating particle for decorative background
function Particle({
  x,
  y,
  size,
  opacity,
  delay,
}: { x: number; y: number; size: number; opacity: number; delay: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `oklch(0.72 0.25 40 / ${opacity})`,
        animation: `particleFloat ${3 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        boxShadow: `0 0 ${size * 2}px oklch(0.72 0.25 40 / ${opacity * 0.6})`,
      }}
    />
  );
}

const PARTICLES = [
  { x: 8, y: 15, size: 4, opacity: 0.3, delay: 0 },
  { x: 85, y: 20, size: 6, opacity: 0.2, delay: 0.8 },
  { x: 20, y: 75, size: 3, opacity: 0.25, delay: 1.4 },
  { x: 90, y: 65, size: 5, opacity: 0.18, delay: 0.3 },
  { x: 50, y: 5, size: 3, opacity: 0.2, delay: 2.1 },
  { x: 70, y: 88, size: 4, opacity: 0.22, delay: 1.0 },
  { x: 5, y: 50, size: 5, opacity: 0.15, delay: 1.7 },
  { x: 95, y: 40, size: 3, opacity: 0.28, delay: 0.5 },
  { x: 35, y: 92, size: 4, opacity: 0.18, delay: 2.5 },
  { x: 62, y: 10, size: 6, opacity: 0.12, delay: 1.2 },
];

export function PassphraseGate({ onUnlock }: PassphraseGateProps) {
  // Detect browser Speech API support
  const speechSupported =
    typeof window !== "undefined" &&
    !!(window.SpeechRecognition || window.webkitSpeechRecognition);

  const [mode, setMode] = useState<Mode>(speechSupported ? "speak" : "type");
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (mode === "type") {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  // Cleanup recognition on unmount
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  const triggerError = useCallback((msg: string) => {
    setIsError(true);
    setErrorMsg(msg);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 520);
  }, []);

  const triggerUnlock = useCallback(() => {
    setIsError(false);
    setIsFading(true);
    setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      onUnlock();
    }, 600);
  }, [onUnlock]);

  // --- Type mode ---
  function handleSubmit() {
    const trimmed = input.trim().toLowerCase().replace(/\s+/g, " ");
    if (trimmed === CORRECT_PASSPHRASE) {
      triggerUnlock();
    } else {
      triggerError("Incorrect passphrase. Please try again. / ভুল পাসফ্রেজ।");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSubmit();
  }

  // --- Voice mode ---
  const startListening = useCallback(() => {
    if (!speechSupported) return;
    const SpeechRecognitionCtor =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognitionRef.current = recognition;
    setIsError(false);
    setErrorMsg("");
    setLiveTranscript("");
    setIsListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";
      let finalText = "";
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalText += result[0].transcript;
        } else {
          interim += result[0].transcript;
        }
      }
      setLiveTranscript(finalText || interim);
      if (finalText && matchesPassphrase(finalText)) {
        recognition.abort();
        setIsListening(false);
        triggerUnlock();
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsListening(false);
      if (event.error === "not-allowed") {
        triggerError(
          "Microphone access denied. Please type instead. / মাইক্রোফোন অ্যাক্সেস দেওয়া হয়নি।",
        );
        setMode("type");
      } else if (event.error === "no-speech") {
        triggerError("No speech detected. Try again. / কোনো কথা শোনা যায়নি।");
      } else if (event.error === "network") {
        triggerError("Network error. Please type. / নেটওয়ার্ক সমস্যা।");
        setMode("type");
      } else {
        triggerError("Please try again / আবার চেষ্টা করুন");
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      setLiveTranscript((prev) => {
        if (prev && !matchesPassphrase(prev)) {
          triggerError("Please try again / আবার চেষ্টা করুন");
        }
        return prev;
      });
    };

    recognition.onnomatch = () => {
      setIsListening(false);
      triggerError("Please try again / আবার চেষ্টা করুন");
    };

    try {
      recognition.start();
    } catch {
      setIsListening(false);
      triggerError(
        "Could not start microphone. Please type instead. / মাইক্রোফোন চালু হয়নি।",
      );
      setMode("type");
    }
  }, [speechSupported, triggerError, triggerUnlock]);

  function stopListening() {
    recognitionRef.current?.stop();
    setIsListening(false);
  }

  function switchMode(next: Mode) {
    if (isListening) stopListening();
    setIsError(false);
    setErrorMsg("");
    setLiveTranscript("");
    setMode(next);
  }

  return (
    <div
      data-ocid="passphrase_gate"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "oklch(0.08 0.07 258)",
        opacity: isFading ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, oklch(0.20 0.12 255 / 0.55) 0%, transparent 70%), " +
            "radial-gradient(ellipse 40% 40% at 30% 70%, oklch(0.64 0.23 38 / 0.08) 0%, transparent 60%), " +
            "radial-gradient(ellipse 35% 35% at 75% 25%, oklch(0.64 0.23 38 / 0.06) 0%, transparent 60%)",
          animation: "gradientPulse 6s ease-in-out infinite",
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <Particle key={`${p.x}-${p.y}`} {...p} />
      ))}

      {/* Grid overlay for texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.64 0.23 38 / 0.03) 1px, transparent 1px), " +
            "linear-gradient(90deg, oklch(0.64 0.23 38 / 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main card */}
      <div
        data-ocid="passphrase_gate.dialog"
        className="relative z-10 flex flex-col items-center gap-5 px-8 py-10 mx-4 w-full max-w-md animate-slide-up"
        style={{
          background: "oklch(0.12 0.08 255 / 0.85)",
          backdropFilter: "blur(24px) saturate(1.5)",
          WebkitBackdropFilter: "blur(24px) saturate(1.5)",
          border: "1px solid oklch(0.64 0.23 38 / 0.25)",
          borderRadius: 24,
          boxShadow:
            "0 0 0 1px oklch(0.20 0.10 255 / 0.5), " +
            "0 24px 64px -12px rgba(0,0,0,0.65), " +
            "0 0 40px oklch(0.64 0.23 38 / 0.08)",
        }}
      >
        {/* Decorative top glow */}
        <div
          className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-2/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.25 40 / 0.7), transparent)",
          }}
        />

        {/* Icon */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: "oklch(0.64 0.23 38 / 0.12)",
            border: "1px solid oklch(0.64 0.23 38 / 0.35)",
            boxShadow:
              "0 0 24px oklch(0.64 0.23 38 / 0.2), inset 0 1px 0 oklch(0.72 0.25 40 / 0.15)",
            animation: "iconGlow 3s ease-in-out infinite",
          }}
        >
          <span
            style={{
              fontSize: 36,
              color: "oklch(0.72 0.25 40)",
              fontFamily: "var(--font-display)",
              lineHeight: 1,
              textShadow: "0 0 20px oklch(0.72 0.25 40 / 0.7)",
            }}
          >
            ॐ
          </span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
              fontWeight: 700,
              color: "oklch(0.72 0.25 40)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              textShadow: "0 0 32px oklch(0.72 0.25 40 / 0.4)",
            }}
          >
            Vidyamandir
          </h1>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: "oklch(0.72 0.25 40 / 0.7)",
              letterSpacing: "0.05em",
            }}
          >
            বিদ্যামন্দির
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.64 0.23 38 / 0.3), transparent)",
          }}
        />

        {/* Mode toggle — only shown when SpeechRecognition is supported */}
        {speechSupported && (
          <div
            className="flex items-center rounded-full p-[3px] gap-0.5"
            style={{
              background: "oklch(0.10 0.07 255 / 0.6)",
              border: "1px solid oklch(0.30 0.10 255 / 0.5)",
            }}
          >
            <button
              type="button"
              data-ocid="passphrase_gate.speak_tab"
              onClick={() => switchMode("speak")}
              style={{
                padding: "0.375rem 1rem",
                borderRadius: 999,
                fontSize: "0.8125rem",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
                background:
                  mode === "speak"
                    ? "linear-gradient(135deg, oklch(0.72 0.25 40), oklch(0.58 0.27 38))"
                    : "transparent",
                color:
                  mode === "speak"
                    ? "oklch(0.10 0.06 255)"
                    : "oklch(0.65 0.05 255)",
                boxShadow:
                  mode === "speak"
                    ? "0 2px 8px oklch(0.64 0.23 38 / 0.4)"
                    : "none",
              }}
            >
              🎤 Speak
            </button>
            <button
              type="button"
              data-ocid="passphrase_gate.type_tab"
              onClick={() => switchMode("type")}
              style={{
                padding: "0.375rem 1rem",
                borderRadius: 999,
                fontSize: "0.8125rem",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
                background:
                  mode === "type"
                    ? "linear-gradient(135deg, oklch(0.72 0.25 40), oklch(0.58 0.27 38))"
                    : "transparent",
                color:
                  mode === "type"
                    ? "oklch(0.10 0.06 255)"
                    : "oklch(0.65 0.05 255)",
                boxShadow:
                  mode === "type"
                    ? "0 2px 8px oklch(0.64 0.23 38 / 0.4)"
                    : "none",
              }}
            >
              ⌨️ Type
            </button>
          </div>
        )}

        {/* Prompt text */}
        <div className="text-center space-y-1">
          {mode === "speak" ? (
            <>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "oklch(0.88 0.03 255)",
                  fontWeight: 500,
                }}
              >
                Speak the passphrase to continue
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "oklch(0.65 0.05 255)",
                }}
              >
                পাসফ্রেজ বলুন এবং প্রবেশ করুন
              </p>
            </>
          ) : (
            <>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "oklch(0.88 0.03 255)",
                  fontWeight: 500,
                }}
              >
                Enter the passphrase to continue
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "oklch(0.65 0.05 255)",
                }}
              >
                প্রবেশ করতে পাসফ্রেজ টাইপ করুন
              </p>
            </>
          )}
        </div>

        {/* Input area — speak or type */}
        <div className="w-full space-y-3">
          {mode === "speak" ? (
            <div className="flex flex-col items-center gap-4">
              {/* Mic button with pulse ring */}
              <div
                className="relative flex items-center justify-center"
                style={{ width: 100, height: 100 }}
              >
                {isListening && (
                  <span
                    className="absolute inset-0 rounded-full animate-mic-pulse"
                    style={{ background: "oklch(0.72 0.25 40 / 0.3)" }}
                  />
                )}
                <button
                  type="button"
                  data-ocid="passphrase_gate.mic_button"
                  aria-label={
                    isListening ? "Stop listening" : "Start voice recognition"
                  }
                  onClick={isListening ? stopListening : startListening}
                  className={isShaking ? "animate-shake" : ""}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    border: isListening
                      ? "2px solid oklch(0.72 0.25 40 / 0.8)"
                      : "2px solid oklch(0.30 0.10 255)",
                    background: isListening
                      ? "linear-gradient(135deg, oklch(0.72 0.25 40), oklch(0.58 0.27 38))"
                      : "oklch(0.12 0.08 255)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isListening
                      ? "0 0 32px oklch(0.64 0.23 38 / 0.55)"
                      : "0 4px 16px rgba(0,0,0,0.3)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  🎤
                </button>
              </div>

              {/* Listening status */}
              {isListening ? (
                <p
                  className="animate-fade-in text-center text-sm"
                  style={{
                    color: "oklch(0.72 0.25 40)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                  }}
                >
                  Listening... / শুনছি...
                </p>
              ) : (
                <p
                  className="text-center text-sm"
                  style={{
                    color: "oklch(0.55 0.07 255)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Tap the mic and speak / মাইক্রোফোনে ট্যাপ করুন
                </p>
              )}

              {/* Live transcript */}
              {liveTranscript !== "" && (
                <p
                  className="animate-fade-in text-center text-sm px-4"
                  style={{
                    color: "oklch(0.68 0.05 255)",
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    minHeight: "1.5em",
                  }}
                >
                  &ldquo;{liveTranscript}&rdquo;
                </p>
              )}

              {/* Say hint */}
              <div
                className="w-full text-center px-4 py-2.5 rounded-xl"
                style={{
                  background: "oklch(0.10 0.07 255 / 0.5)",
                  border: "1px solid oklch(0.25 0.08 255 / 0.5)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "oklch(0.72 0.25 40)",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                  }}
                >
                  Say: jai mata swarasati
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "oklch(0.65 0.05 255)",
                    marginTop: 2,
                  }}
                >
                  বলুন: জয় মাতা সরস্বতী
                </p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <input
                ref={inputRef}
                data-ocid="passphrase_gate.input"
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  if (isError) {
                    setIsError(false);
                    setErrorMsg("");
                  }
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type the passphrase..."
                autoComplete="off"
                spellCheck={false}
                className={isShaking ? "animate-shake" : ""}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  borderRadius: 12,
                  background: "oklch(0.10 0.07 255 / 0.7)",
                  border: `1.5px solid ${isError ? "oklch(0.65 0.21 25 / 0.8)" : "oklch(0.30 0.10 255)"}`,
                  color: "oklch(0.96 0 0)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  outline: "none",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: isError
                    ? "0 0 0 3px oklch(0.65 0.21 25 / 0.15)"
                    : "0 0 0 0px transparent",
                  letterSpacing: "0.02em",
                }}
                onFocus={(e) => {
                  if (!isError) {
                    e.target.style.borderColor = "oklch(0.72 0.25 40 / 0.8)";
                    e.target.style.boxShadow =
                      "0 0 0 3px oklch(0.64 0.23 38 / 0.2)";
                  }
                }}
                onBlur={(e) => {
                  if (!isError) {
                    e.target.style.borderColor = "oklch(0.30 0.10 255)";
                    e.target.style.boxShadow = "0 0 0 0px transparent";
                  }
                }}
              />
            </div>
          )}

          {/* Error message — shared between modes */}
          {isError && errorMsg && (
            <p
              className="animate-fade-in text-center text-sm"
              style={{
                color: "oklch(0.72 0.21 25)",
                fontFamily: "var(--font-body)",
              }}
            >
              {errorMsg}
            </p>
          )}

          {/* Submit button — type mode only */}
          {mode === "type" && (
            <button
              type="button"
              data-ocid="passphrase_gate.submit_button"
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "0.875rem 1rem",
                borderRadius: 12,
                background:
                  "linear-gradient(135deg, oklch(0.72 0.25 40), oklch(0.58 0.27 38))",
                color: "oklch(0.10 0.06 255)",
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
                boxShadow:
                  "0 4px 16px oklch(0.64 0.23 38 / 0.45), inset 0 1px 0 oklch(0.80 0.20 42 / 0.3)",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 6px 24px oklch(0.64 0.23 38 / 0.65), inset 0 1px 0 oklch(0.80 0.20 42 / 0.3)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 16px oklch(0.64 0.23 38 / 0.45), inset 0 1px 0 oklch(0.80 0.20 42 / 0.3)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0) scale(0.99)";
              }}
            >
              Enter — প্রবেশ করুন
            </button>
          )}
        </div>

        {/* Hint text */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "oklch(0.45 0.06 255)",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          🔐 This portal is protected.{" "}
          <span style={{ opacity: 0.7 }}>এই পোর্টাল সুরক্ষিত।</span>
        </p>
      </div>
    </div>
  );
}
