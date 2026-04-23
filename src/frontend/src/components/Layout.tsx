import { Toaster } from "@/components/ui/sonner";
import { WifiOff } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { FloatingChatbox } from "./FloatingChatbox";
import { FloatingEnquiry } from "./FloatingEnquiry";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

function OfflineBanner() {
  return (
    <div
      className="sticky top-0 z-50 w-full glass-card rounded-none px-4 py-2.5 flex items-center justify-center gap-2.5 text-sm font-medium border-0 border-b border-destructive/30"
      style={{
        background: "oklch(var(--destructive) / 0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      role="alert"
      aria-live="assertive"
      data-ocid="app.offline_banner"
    >
      <WifiOff size={14} className="shrink-0 text-destructive-foreground" />
      <span className="text-destructive-foreground/90">
        You are offline — some features may not be available
      </span>
    </div>
  );
}

export function Layout({ children }: LayoutProps) {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-background text-foreground"
      data-ocid="app.layout"
    >
      {isOffline && <OfflineBanner />}
      <Header />
      <main
        className={`flex-1 bg-background transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        data-ocid="app.main"
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <Footer />
      <FloatingChatbox />
      <FloatingEnquiry />
      <Toaster
        position="bottom-right"
        richColors
        toastOptions={{
          style: {
            borderRadius: "12px",
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}
