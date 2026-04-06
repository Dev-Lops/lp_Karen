import { SYSTEM_CONFIG } from '@/config/system-config'

export async function runCriticalHealthChecks() {
  if (SYSTEM_CONFIG.MAINTENANCE_MODE) {
    throw new Error('Modo de manutenção ativado manualmente')
  }

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw new Error('Usuário offline')
  }

  if (typeof window === 'undefined') {
    throw new Error('Window indisponível')
  }

  return true
}
