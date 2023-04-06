import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage:string
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false ,errorMessage:''};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true,errorMessage:error.message });
  }

  render() {
    if (this.state.hasError) {
      console.log(this.state.errorMessage)
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
