import { InternetIdentityProvider } from "@caffeineai/core-infrastructure";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Component, type ErrorInfo, type ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

// ─── Error Boundary ───────────────────────────────────────────────────────────
// Catches errors from InternetIdentityProvider initialization so the whole
// page doesn't go blank when II fails to load (e.g. during deployment warm-up).

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class AppErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error?.message ?? "Unknown error" };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to console so developers can see what went wrong
    console.error("[Vidyamandir] App error boundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            padding: "2rem",
            background: "oklch(0.10 0.04 255)",
            color: "oklch(0.92 0.02 255)",
            fontFamily: "system-ui, sans-serif",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "oklch(0.65 0.22 38 / 0.15)",
              border: "1px solid oklch(0.65 0.22 38 / 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            📚
          </div>
          <div>
            <h1
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
                color: "oklch(0.65 0.22 38)",
              }}
            >
              VIDYAMANDIR — বিদ্যামন্দির
            </h1>
            <p style={{ fontSize: "0.875rem", opacity: 0.7, maxWidth: 320 }}>
              Something went wrong loading the app. Please refresh the page to
              try again.
              <br />
              <span style={{ fontStyle: "italic", opacity: 0.6 }}>
                পেজটি রিফ্রেশ করে আবার চেষ্টা করুন।
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: "0.6rem 1.5rem",
              borderRadius: 8,
              background:
                "linear-gradient(135deg, oklch(0.72 0.25 40), oklch(0.58 0.27 38))",
              color: "oklch(0.08 0.04 255)",
              fontWeight: 700,
              fontSize: "0.875rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Refresh Page / পেজ রিফ্রেশ করুন
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── React Query client ───────────────────────────────────────────────────────
// Conservative retry/timeout settings for production reliability

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Don't retry queries that fail due to auth — they'll self-heal
      retry: 1,
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10_000),
      // 60s stale time prevents hammering backend on every re-render
      staleTime: 60_000,
      // If a query is still pending after 30s, treat it as failed
      gcTime: 5 * 60_000,
    },
    mutations: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <App />
      </InternetIdentityProvider>
    </QueryClientProvider>
  </AppErrorBoundary>,
);
