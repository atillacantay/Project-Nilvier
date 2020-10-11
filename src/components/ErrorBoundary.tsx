import React, { ErrorInfo, Component } from 'react'
import NotFound from './NotFound'

class ErrorBoundary extends Component {
  public state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />
    }

    return this.props.children
  }
}
export default ErrorBoundary
