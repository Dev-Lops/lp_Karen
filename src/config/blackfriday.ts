// Configuração da Black Friday 2025
export const BLACK_FRIDAY_CONFIG = {
  // 🔧 MODO TESTE: Mude para true para simular Black Friday ativa
  TEST_MODE: false,

  // Data de início: 27 de novembro de 2025 às 09:00 (horário de Brasília UTC-3)
  startDate: new Date('2025-11-27T09:00:00-03:00'),

  // Data de término: 29 de novembro de 2025 às 18:00
  endDate: new Date('2025-11-29T18:00:00-03:00'),

  // Descontos por categoria (em porcentagem)
  discounts: {
    premium: 50, // 50% OFF - Produtos premium
    standard: 40, // 40% OFF - Produtos padrão
    basic: 30, // 30% OFF - Produtos básicos
  },

  // Descontos específicos por produto ID
  productDiscounts: {
    1: 10, // Ampola - 40% OFF
    2: 29, // Sérum - 45% OFF
    3: 40, // Kit Alisamento - 50% OFF (destaque)
    4: 10, // Máscara - 35% OFF
    5: 30, // Escova - 40% OFF
    6: 30, // Perfume - 40% OFF
    7: 50, // Reestruturador - 35% OFF
    8: 10, // Shampoo - 10% OFF
    9: 10, //  Booster - 10% OFF
    10: 10, // Shampoo THERAPY - 10% OFF
    11: 20, // Máscara CMC - 20% OFF
  },

  // Configurações visuais
  theme: {
    primaryColor: '#000000', // Preto
    secondaryColor: '#D4AF37', // Dourado
    accentColor: '#FFD700', // Dourado claro
    textColor: '#FFFFFF', // Branco
  },

  // Textos e mensagens
  messages: {
    countdown: 'começa em:',
    active: '🔥 BLACK FRIDAY ATIVA! 🔥',
    ended: 'Black Friday encerrada! Aguarde próximas promoções.',
    banner: 'ATÉ 50% OFF EM TODOS OS PRODUTOS',
    urgency: 'ÚLTIMAS HORAS! Aproveite antes que acabe!',
  },
}

// Função para verificar se a Black Friday está ativa
export function isBlackFridayActive(): boolean {
  // Se TEST_MODE estiver ativo, simula que a BF está ativa
  if (BLACK_FRIDAY_CONFIG.TEST_MODE) {
    return true
  }

  const now = new Date()
  return (
    now >= BLACK_FRIDAY_CONFIG.startDate && now <= BLACK_FRIDAY_CONFIG.endDate
  )
}

// Função para verificar se deve mostrar countdown
export function shouldShowCountdown(): boolean {
  const now = new Date()
  return now < BLACK_FRIDAY_CONFIG.startDate
}

// Função para calcular tempo restante até o início
export function getTimeUntilStart(): {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
} {
  const now = new Date()
  const diff = BLACK_FRIDAY_CONFIG.startDate.getTime() - now.getTime()

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

// Função para calcular tempo restante até o fim
export function getTimeUntilEnd(): {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
} {
  const now = new Date()
  const diff = BLACK_FRIDAY_CONFIG.endDate.getTime() - now.getTime()

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
