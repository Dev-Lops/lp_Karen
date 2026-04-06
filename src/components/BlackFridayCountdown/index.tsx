import {
  BIRTHDAY_CAMPAIGN_CONFIG,
  getCampaignStatus,
  getTimeUntilEnd,
  getTimeUntilStart,
  isLastCampaignDay,
  type CampaignStatus,
  type TimeLeft,
} from '@/config/birthday-campaign'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function StudioBirthdayCountdown() {
  const [status, setStatus] = useState<CampaignStatus>(getCampaignStatus())
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    getCampaignStatus() === 'before' ? getTimeUntilStart() : getTimeUntilEnd()
  )
  const [isLastDay, setIsLastDay] = useState<boolean>(isLastCampaignDay())

  const confettiFiredRef = useRef(false)

  useEffect(() => {
    const updateCampaign = () => {
      const currentStatus = getCampaignStatus()
      setStatus(currentStatus)
      setIsLastDay(isLastCampaignDay())

      if (currentStatus === 'before') {
        setTimeLeft(getTimeUntilStart())
      } else if (currentStatus === 'live') {
        setTimeLeft(getTimeUntilEnd())

        if (!confettiFiredRef.current) {
          fireConfetti()
          confettiFiredRef.current = true
        }
      }
    }

    updateCampaign()
    const timer = window.setInterval(updateCampaign, 1000)

    return () => window.clearInterval(timer)
  }, [])

  function fireConfetti() {
    const duration = 2200
    const animationEnd = Date.now() + duration

    const defaults = {
      startVelocity: 22,
      spread: 300,
      ticks: 48,
      zIndex: 60,
    }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval = window.setInterval(() => {
      const remaining = animationEnd - Date.now()

      if (remaining <= 0) {
        window.clearInterval(interval)
        return
      }

      const particleCount = 24 * (remaining / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.14, 0.28), y: Math.random() - 0.2 },
        colors: ['#032F31', '#D8BE93', '#F5F1E8', '#FFFFFF'],
      })

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.72, 0.86), y: Math.random() - 0.2 },
        colors: ['#032F31', '#D8BE93', '#F5F1E8', '#FFFFFF'],
      })
    }, 250)
  }

  if (status === 'ended') {
    return null
  }

  const { theme, event, messages } = BIRTHDAY_CAMPAIGN_CONFIG

  const overline =
    status === 'before'
      ? messages.pretitle
      : status === 'live'
        ? isLastDay
          ? 'Ultimas horas'
          : 'Campanha em andamento'
        : 'Encerramento do evento'

  const supportText =
    status === 'before'
      ? `${event.subtitle} com descontos de ${event.discountRangeText}`
      : status === 'live'
        ? isLastDay
          ? `${event.finalDayText} com descontos de ${event.discountRangeText}`
          : `${event.liveText} com descontos de ${event.discountRangeText}`
        : event.postEventSupportText

  return (
    <motion.section
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full overflow-hidden border-b"
      style={{
        background: `linear-gradient(180deg, ${theme.primaryColorDark} 0%, ${theme.primaryColor} 100%)`,
        borderColor: 'rgba(216, 190, 147, 0.18)',
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 18%, rgba(245, 241, 232, 0.05), transparent 58%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 py-5 md:px-8 md:py-6 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-center md:max-w-[700px] md:text-left">
            <p
              className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: 'rgba(216, 190, 147, 0.9)' }}
            >
              {overline}
            </p>

            <h2
              className="text-2xl font-semibold tracking-[0.02em] md:text-4xl"
              style={{
                color: theme.accentColor,
                fontFamily: '"Melodrama", serif',
              }}
            >
              {status === 'post' ? event.postEventText : event.name}
            </h2>

            <p
              className="mt-2 text-sm md:text-base"
              style={{ color: 'rgba(245, 241, 232, 0.82)' }}
            >
              {supportText}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            {status === 'before' && (
              <>
                <p
                  className="text-[11px] uppercase tracking-[0.24em]"
                  style={{ color: 'rgba(216, 190, 147, 0.88)' }}
                >
                  {messages.countdownLabel} para começar
                </p>

                <div className="flex gap-2 md:gap-3">
                  <TimeUnit value={timeLeft.days} label="dias" />
                  <TimeUnit value={timeLeft.hours} label="horas" />
                  <TimeUnit value={timeLeft.minutes} label="min" />
                  <TimeUnit value={timeLeft.seconds} label="seg" />
                </div>
              </>
            )}

            {status === 'live' && (
              <>
                <p
                  className="text-[11px] uppercase tracking-[0.24em]"
                  style={{ color: 'rgba(216, 190, 147, 0.88)' }}
                >
                  Faltam para encerrar
                </p>

                <div className="flex gap-2 md:gap-3">
                  <TimeUnit value={timeLeft.days} label="dias" />
                  <TimeUnit value={timeLeft.hours} label="horas" />
                  <TimeUnit value={timeLeft.minutes} label="min" />
                  <TimeUnit value={timeLeft.seconds} label="seg" />
                </div>

                <motion.a
                  href="#products"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-1 rounded-full px-5 py-2 text-sm font-medium transition"
                  style={{
                    color: theme.accentColor,
                    border: '1px solid rgba(216, 190, 147, 0.36)',
                    background: 'rgba(245, 241, 232, 0.04)',
                  }}
                >
                  {messages.cta}
                </motion.a>
              </>
            )}

            {status === 'post' && (
              <div
                className="rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                style={{
                  color: theme.accentColor,
                  border: '1px solid rgba(216, 190, 147, 0.26)',
                  background: 'rgba(245, 241, 232, 0.04)',
                }}
              >
                Evento encerrado nas ultimas 24 horas
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="min-w-[68px] rounded-2xl px-3 py-2.5 text-center md:min-w-[76px]"
      style={{
        background: 'rgba(245, 241, 232, 0.05)',
        border: '1px solid rgba(216, 190, 147, 0.18)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="text-2xl font-semibold leading-none md:text-[30px]"
        style={{
          color: '#F5F1E8',
          fontFamily: '"Melodrama", serif',
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div
        className="mt-1 text-[10px] uppercase tracking-[0.18em]"
        style={{ color: 'rgba(216, 190, 147, 0.88)' }}
      >
        {label}
      </div>
    </div>
  )
}