import React, { Component, type ReactNode } from "react";
import Model3DFallback from "./Model3DFallback";

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
      return <Model3DFallback type={this.props.fallbackType} className={this.props.className} />;
    }

    return this.props.children;
  }
}

export default CanvasErrorBoundary;
