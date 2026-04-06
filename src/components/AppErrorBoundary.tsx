import { MaintenancePage } from '@/pages/MaintenancePage'
import { Component, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('Erro crítico capturado pelo ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <MaintenancePage />
    }

    return this.props.children
  }
}