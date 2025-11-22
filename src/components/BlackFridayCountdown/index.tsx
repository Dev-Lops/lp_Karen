import { getTimeUntilStart } from '@/config/blackfriday'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BlackFridayCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilStart())
  const [confettiFired, setConfettiFired] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const time = getTimeUntilStart()
      setTimeLeft(time)

      // Quando o countdown chegar a zero, dispara confetes
      if (time.total === 0 && !confettiFired) {
        fireConfetti()
        setConfettiFired(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [confettiFired])

  const fireConfetti = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#000000', '#FF6B00', '#FFD700']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#000000', '#FF6B00', '#FFD700']
      })
    }, 250)
  }

  // Se já passou da hora de início, não mostra o countdown
  if (timeLeft.total === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-3 px-4 border-y-2 border-yellow-500 relative overflow-hidden"
    >
      {/* Efeitos de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.15),transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header + Countdown + CTA em linha horizontal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
          {/* Texto lateral */}
          <div className="text-center md:text-left flex-shrink-0">
            <h2 className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              🔥 BLACK FRIDAY
            </h2>
            <p className="text-xs md:text-sm text-yellow-300 font-bold text-end">
              FALTAM APENAS
            </p>
          </div>

          {/* Countdown inline */}
          <div className="flex gap-1.5 md:gap-2">
            <TimeCard value={timeLeft.days} label="Dias" />
            <TimeCard value={timeLeft.hours} label="Horas" />
            <TimeCard value={timeLeft.minutes} label="Min" />
            <TimeCard value={timeLeft.seconds} label="Seg" />
          </div>

          {/* CTA compacto */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex-shrink-0"
          >
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-[2px] rounded-xl">
              <div className="bg-black rounded-xl px-4 py-2 md:px-6 md:py-3 text-center">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">⚡</span>
                  <p className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                    ATÉ 50% OFF
                  </p>
                </div>
                <p className="text-[10px] md:text-xs text-yellow-300 font-bold">
                  Estoque Limitado
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-2 md:p-3 border border-yellow-400/50">
        <div className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 text-center leading-none">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-[8px] md:text-[10px] text-yellow-200 text-center font-bold mt-0.5 uppercase">
          {label}
        </div>
      </div>
    </div>
  )
}
