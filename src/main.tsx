import '@/styles/Global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { theme } from './styles/theme.ts'

import { AppErrorBoundary } from '@/components/AppErrorBoundary'
import { AppGuard } from '@/components/AppGuard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppErrorBoundary>
        <AppGuard>
          <App />
        </AppGuard>
      </AppErrorBoundary>
    </ThemeProvider>
  </StrictMode>
)