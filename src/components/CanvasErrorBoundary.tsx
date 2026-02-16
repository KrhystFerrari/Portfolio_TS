import React, { Component, type ReactNode } from "react";
import HeroFallback from "./HeroFallback";
import TechFallback from "./TechFallback";
import EarthFallback from "./EarthFallback";
import StarsFallback from "./StarsFallback";

interface Props {
  children: ReactNode;
  fallbackType: "hero" | "tech" | "earth" | "stars";
  className?: string;
}

interface State {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderizar o fallback apropriado baseado no tipo
      switch (this.props.fallbackType) {
        case "hero":
          return <HeroFallback />;
        case "tech":
          return <TechFallback />;
        case "earth":
          return (
            <div className={this.props.className}>
              <EarthFallback />
            </div>
          );
        case "stars":
          return <StarsFallback />;
        default:
          return <HeroFallback />;
      }
    }

    return this.props.children;
  }
}

export default CanvasErrorBoundary;
