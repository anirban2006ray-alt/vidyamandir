import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex flex-col items-center justify-center min-h-[50vh] gap-4 p-8"
          data-ocid="app.error_state"
        >
          <AlertCircle size={48} className="text-destructive" />
          <h2 className="text-xl font-display font-bold text-foreground">
            Something went wrong
          </h2>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            {this.state.error?.message ?? "An unexpected error occurred."}
          </p>
          <Button
            onClick={() => this.setState({ hasError: false })}
            className="cta-primary px-6 py-2"
          >
            Try Again
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
