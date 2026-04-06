import { MaintenancePage } from '@/pages/MaintenancePage'
import { runCriticalHealthChecks } from '@/utils/system-health'
import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
}

export function AppGuard({ children }: Props) {
  const [isBroken, setIsBroken] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    let mounted = true

    function handleOffline() {
      setIsBroken(true)
    }

    function handleWindowError() {
      setIsBroken(true)
    }

    function handlePromiseRejection() {
      setIsBroken(true)
    }

    async function check() {
      try {
        await runCriticalHealthChecks()

        window.addEventListener('offline', handleOffline)
        window.addEventListener('error', handleWindowError)
        window.addEventListener('unhandledrejection', handlePromiseRejection)
      } catch (error) {
        console.error('Falha crítica detectada:', error)
        if (mounted) setIsBroken(true)
      } finally {
        if (mounted) setIsChecking(false)
      }
    }

    check()

    return () => {
      mounted = false
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('error', handleWindowError)
      window.removeEventListener('unhandledrejection', handlePromiseRejection)
    }
  }, [])

  if (isChecking) return null
  if (isBroken) return <MaintenancePage />

  return <>{children}</>
}