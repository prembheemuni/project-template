import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: { componentStack: any }) {
    console.error(error, info.componentStack);
  }

  render() {
    console.log(this.state.hasError, "err");
    if (this.state.hasError) return <h1>Something Went Wrong</h1>;
    return (this.props as { children: ReactNode }).children;
  }
}
