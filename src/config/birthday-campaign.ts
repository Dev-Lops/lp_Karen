export type BannerTestMode = 'off' | 'before' | 'live' | 'post'

export const BIRTHDAY_CAMPAIGN_CONFIG = {
  productDiscounts: {
    1: 10,
    2: 29,
    3: 10,
    4: 10,
    5: 30,
    6: 40,
    7: 20,
    8: 5,
    9: 5,
    10: 5,
    11: 30,
    12: 25,
  },

  // MODO DE TESTE DO BANNER
  // off    = usa as datas reais da campanha
  // before = força o banner de pré-evento
  // live   = força o banner de evento ativo
  // post   = força o banner de pós-evento
  TEST_MODE: 'off' as BannerTestMode,

  startDate: new Date('2026-04-07T10:00:00-03:00'),
  endDate: new Date('2026-04-09T18:00:00-03:00'),

  event: {
    name: 'Aniversário do Studio Karen Frazão',
    subtitle: '3 dias de promoções especiais',
    discountRangeText: '5% a 40% OFF',
    liveText: 'Condições especiais ativas por tempo limitado',
    finalDayText: 'Último dia de condições especiais',
    postEventText: 'A campanha de aniversário foi encerrada',
    postEventSupportText:
      'Acompanhe as próximas novidades e experiências exclusivas do Studio Karen Frazão.',
  },

  theme: {
    primaryColor: '#032F31',
    primaryColorDark: '#022C2E',
    secondaryColor: '#D8BE93',
    secondaryColorStrong: '#C9A86A',
    accentColor: '#F5F1E8',
    textColor: '#FFFFFF',
  },

  messages: {
    pretitle: 'Evento especial',
    countdownLabel: 'Faltam',
    beforeText: 'para começar o evento',
    ended:
      'O evento de aniversário foi encerrado. Agradecemos pela participação de todas as Fabulosas.',
    cta: 'Saiba mais',
  },
} as const

export type CampaignStatus = 'before' | 'live' | 'post' | 'ended'

export type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

const POST_EVENT_DURATION_MS = 24 * 60 * 60 * 1000
const LIVE_EVENT_DURATION_MS = 3 * 24 * 60 * 60 * 1000

function getSimulatedDates(mode: BannerTestMode) {
  const now = Date.now()

  if (mode === 'before') {
    // Evento começa em 2h e dura 3 dias exatos
    const start = new Date(now + 2 * 60 * 60 * 1000)
    const end = new Date(start.getTime() + LIVE_EVENT_DURATION_MS)
    return { start, end }
  }

  if (mode === 'live') {
    // Evento começou há 12h e termina em 2d 12h
    const start = new Date(now - 12 * 60 * 60 * 1000)
    const end = new Date(start.getTime() + LIVE_EVENT_DURATION_MS)
    return { start, end }
  }

  if (mode === 'post') {
    // Evento terminou há 6h e ainda está dentro das 24h pós-evento
    const end = new Date(now - 6 * 60 * 60 * 1000)
    const start = new Date(end.getTime() - LIVE_EVENT_DURATION_MS)
    return { start, end }
  }

  return {
    start: BIRTHDAY_CAMPAIGN_CONFIG.startDate,
    end: BIRTHDAY_CAMPAIGN_CONFIG.endDate,
  }
}

function getEffectiveDates() {
  if (BIRTHDAY_CAMPAIGN_CONFIG.TEST_MODE === 'off') {
    return {
      start: BIRTHDAY_CAMPAIGN_CONFIG.startDate,
      end: BIRTHDAY_CAMPAIGN_CONFIG.endDate,
    }
  }

  return getSimulatedDates(BIRTHDAY_CAMPAIGN_CONFIG.TEST_MODE)
}

export function getCampaignStatus(): CampaignStatus {
  if (BIRTHDAY_CAMPAIGN_CONFIG.TEST_MODE === 'before') return 'before'
  if (BIRTHDAY_CAMPAIGN_CONFIG.TEST_MODE === 'live') return 'live'
  if (BIRTHDAY_CAMPAIGN_CONFIG.TEST_MODE === 'post') return 'post'

  const now = new Date().getTime()
  const { start, end } = getEffectiveDates()
  const startMs = start.getTime()
  const endMs = end.getTime()
  const postEnd = endMs + POST_EVENT_DURATION_MS

  if (now < startMs) return 'before'
  if (now >= startMs && now <= endMs) return 'live'
  if (now > endMs && now <= postEnd) return 'post'
  return 'ended'
}

export function isCampaignActive(): boolean {
  return getCampaignStatus() === 'live'
}

export function shouldShowCountdown(): boolean {
  return getCampaignStatus() === 'before'
}

function getTimeUntil(targetDate: Date): TimeLeft {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff,
  }
}

export function getTimeUntilStart(): TimeLeft {
  const { start } = getEffectiveDates()
  return getTimeUntil(start)
}

export function getTimeUntilEnd(): TimeLeft {
  const { end } = getEffectiveDates()
  return getTimeUntil(end)
}

export function isLastCampaignDay(): boolean {
  if (getCampaignStatus() !== 'live') return false

  const now = new Date().getTime()
  const { end } = getEffectiveDates()
  const diff = end.getTime() - now

  return diff <= 24 * 60 * 60 * 1000
}

export function shouldShowPostEventBanner(): boolean {
  return getCampaignStatus() === 'post'
}
