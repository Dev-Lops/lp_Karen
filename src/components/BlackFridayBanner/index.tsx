import { BLACK_FRIDAY_CONFIG, getTimeUntilEnd } from '@/config/blackfriday'
import confetti from 'canvas-confetti'
import { AnimatePresence, motion } from 'framer-motion'
import { Clock, Tag, TrendingDown, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BlackFridayBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilEnd())
  const [showBanner, setShowBanner] = useState(true)
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false)

  useEffect(() => {
    // Dispara confetes apenas uma vez quando o componente monta
    if (!hasPlayedAnimation) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#000000', '#FF6B00', '#FFD700']
        })
        setHasPlayedAnimation(true)
      }, 500)
    }

    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilEnd())
    }, 1000)

    return () => clearInterval(timer)
  }, [hasPlayedAnimation])

  if (!showBanner) return null

  const isLastDay = timeLeft.days === 0
  const isLastHours = timeLeft.hours < 6

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative w-full text-white overflow-hidden bg-gradient-to-b from-black via-[#0b0b0b] to-black"
      >
        {/* Camadas de fundo: gradiente dourado sutil + vinheta */}
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(1200px_300px_at_50%_-100px,rgba(212,175,55,0.35),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(600px_200px_at_20%_120%,rgba(212,175,55,0.25),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(600px_200px_at_80%_120%,rgba(212,175,55,0.25),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_30%,_rgba(0,0,0,0.85)_100%)]" />

        {/* Bordas decorativas */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8a6e2f] via-[#d4af37] to-[#8a6e2f]" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8a6e2f] via-[#d4af37] to-[#8a6e2f]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-5">
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors z-20"
            aria-label="Fechar banner"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-3 gap-4 items-center">
            {/* Esquerda - Título */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Zap className="w-7 h-7 text-[#d4af37]" />
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                  <span className="bg-gradient-to-r from-[#cfa93b] via-[#f6e27a] to-[#cfa93b] bg-clip-text text-transparent">
                    BLACK FRIDAY
                  </span>
                </h3>
                <Zap className="w-7 h-7 text-[#d4af37]" />
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Tag className="w-5 h-5 text-[#f1d36a]" />
                <p className="text-xl md:text-2xl font-bold text-[#f1d36a] drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
                  ATÉ 50% OFF
                </p>
              </div>
            </motion.div>

            {/* Centro - Countdown */}
            <div className="text-center">
              {isLastHours && (
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-[#ff6b6b] font-black text-lg mb-2 flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5" />
                  ÚLTIMAS HORAS!
                </motion.p>
              )}

              <div className="flex items-center justify-center gap-3">
                <CountdownBox value={timeLeft.days} label="D" />
                <span className="text-2xl font-bold text-yellow-400">:</span>
                <CountdownBox value={timeLeft.hours} label="H" />
                <span className="text-2xl font-bold text-yellow-400">:</span>
                <CountdownBox value={timeLeft.minutes} label="M" />
                <span className="text-2xl font-bold text-yellow-400">:</span>
                <CountdownBox value={timeLeft.seconds} label="S" />
              </div>

              <p className="text-sm text-gray-400 mt-2">
                {isLastDay ? 'ÚLTIMO DIA!' : 'Termina em:'}
              </p>
            </div>

            {/* Direita - CTA */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center md:text-right"
            >
              <a
                href="#products"
                className="relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-black font-extrabold text-lg bg-gradient-to-r from-[#f8e17a] via-[#f1d36a] to-[#d4af37] shadow-[0_10px_30px_rgba(212,175,55,0.35)] ring-1 ring-[#f1d36a]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <TrendingDown className="w-6 h-6" />
                VER OFERTAS
                {/* efeito de "breathing glow" no botão, substitui o reflexo */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-1 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(212,175,55,0.25)',
                      '0 0 0 10px rgba(212,175,55,0.0)'
                    ]
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Válido até {new Date(BLACK_FRIDAY_CONFIG.endDate).toLocaleDateString('pt-BR')}
              </p>
            </motion.div>
          </div>

          {/* Barra de produtos em destaque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 pt-4 border-t border-[#2a2a2a]"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="text-gray-400">Destaques:</span>
              <Chip text="Reestruturador 50% OFF" />
              <Chip text="Kit Alisamento 40% OFF" />
              <Chip text="Sérum Premium 20% OFF" />
            </div>
          </motion.div>
        </div>

        {/* Partículas douradas muito leves (ocultas no mobile) */}
        <div className="pointer-events-none hidden sm:block absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#f6e27a] opacity-30"
              initial={{ y: 40 + i * 10, x: 20 + i * 80, opacity: 0.2 }}
              animate={{ y: [40 + i * 10, -20], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Linha inferior dourada */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8a6e2f] via-[#d4af37] to-[#8a6e2f]" />
      </motion.div>
    </AnimatePresence>
  )
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative rounded-xl p-[2px] min-w-[58px] shadow-[0_6px_18px_rgba(212,175,55,0.25)] bg-gradient-to-b from-[#f1d36a] via-[#d4af37] to-[#a47c1b]">
      <div className="relative rounded-[10px] px-3 py-2 bg-black/80 backdrop-blur-sm border border-[#d4af37]/30">
        {/* brilho superior sutil */}
        <span className="pointer-events-none absolute top-0 left-0 right-0 h-1 rounded-t-[10px] bg-gradient-to-b from-white/20 to-transparent" />
        <div className="text-2xl md:text-3xl font-extrabold text-[#f6e27a] text-center leading-none tracking-tight drop-shadow-[0_1px_0_rgba(0,0,0,0.7)]">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-[10px] text-[#e8d27a] text-center font-semibold mt-1 tracking-wide">
          {label}
        </div>
      </div>
    </div>
  )
}

function Chip({ text }: { text: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="px-3 py-1 rounded-full border text-xs font-semibold border-[#d4af37]/60 text-[#f1d36a] bg-[#d4af37]/10 backdrop-blur-sm"
    >
      {text}
    </motion.span>
  )
}
