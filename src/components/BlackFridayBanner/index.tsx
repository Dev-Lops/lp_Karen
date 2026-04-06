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
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function BirthdayCampaignBanner() {
  const [status, setStatus] = useState<CampaignStatus>(getCampaignStatus())
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    getCampaignStatus() === 'before' ? getTimeUntilStart() : getTimeUntilEnd()
  )
  const [showBanner, setShowBanner] = useState(true)
  const [isLastDay, setIsLastDay] = useState(isLastCampaignDay())

  const confettiPlayedRef = useRef(false)

  useEffect(() => {
    const updateCampaign = () => {
      const currentStatus = getCampaignStatus()
      setStatus(currentStatus)
      setIsLastDay(isLastCampaignDay())

      if (currentStatus === 'before') {
        setTimeLeft(getTimeUntilStart())
      } else if (currentStatus === 'live') {
        setTimeLeft(getTimeUntilEnd())

        if (!confettiPlayedRef.current) {
          setTimeout(() => {
            confetti({
              particleCount: 80,
              spread: 65,
              origin: { y: 0.55 },
              colors: ['#032F31', '#D8BE93', '#F5F1E8', '#FFFFFF'],
            })
          }, 400)

          confettiPlayedRef.current = true
        }
      }
    }

    updateCampaign()
    const timer = window.setInterval(updateCampaign, 1000)

    return () => window.clearInterval(timer)
  }, [])

  if (!showBanner || status === 'ended') return null

  const { theme, event, messages } = BIRTHDAY_CAMPAIGN_CONFIG

  const overline =
    status === 'before'
      ? messages.pretitle
      : status === 'live'
        ? isLastDay
          ? 'Últimas horas'
          : 'Evento em andamento'
        : 'Encerramento do evento'

  const heading =
    status === 'post' ? event.postEventText : event.name

  const supportText =
    status === 'before'
      ? `${event.subtitle} com descontos de ${event.discountRangeText}`
      : status === 'live'
        ? isLastDay
          ? `${event.finalDayText} com descontos de ${event.discountRangeText}`
          : `${event.liveText} com descontos de ${event.discountRangeText}`
        : event.postEventSupportText

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -28 }}
        className="relative w-full overflow-hidden border-b"
        style={{
          background: `linear-gradient(180deg, ${theme.primaryColorDark} 0%, ${theme.primaryColor} 100%)`,
          borderColor: 'rgba(216, 190, 147, 0.22)',
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 20%, rgba(245, 241, 232, 0.05), transparent 58%)',
            }}
          />
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8BE93]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8BE93]/40 to-transparent" />

        <div className="relative z-10 w-full px-4 py-5 md:px-8 md:py-6 lg:px-12">
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-4 z-20 text-[#F5F1E8]/55 transition-colors hover:text-[#F5F1E8]"
            aria-label="Fechar banner"
          >
            ✕
          </button>

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
            <div className="text-center md:max-w-[720px] md:text-left">
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
                {heading}
              </h2>

              <p
                className="mt-2 text-sm md:text-base"
                style={{ color: 'rgba(245, 241, 232, 0.84)' }}
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
                    <CountdownBox value={timeLeft.days} label="DIAS" />
                    <CountdownBox value={timeLeft.hours} label="HORAS" />
                    <CountdownBox value={timeLeft.minutes} label="MIN" />
                    <CountdownBox value={timeLeft.seconds} label="SEG" />
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
                    <CountdownBox value={timeLeft.days} label="DIAS" />
                    <CountdownBox value={timeLeft.hours} label="HORAS" />
                    <CountdownBox value={timeLeft.minutes} label="MIN" />
                    <CountdownBox value={timeLeft.seconds} label="SEG" />
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
                  Evento encerrado nas últimas 24 horas
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="min-w-[70px] rounded-2xl px-3 py-3 text-center md:min-w-[76px]"
      style={{
        backgroundColor: 'rgba(245, 241, 232, 0.05)',
        border: '1px solid rgba(216, 190, 147, 0.18)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="text-3xl font-semibold leading-none text-[#F5F1E8]"
        style={{
          fontFamily: '"Melodrama", serif',
        }}
      >
        {String(value).padStart(2, '0')}
      </div>

      <div
        className="mt-2 text-[10px] font-semibold tracking-[0.18em] text-[#D8BE93]"
      >
        {label}
      </div>
    </div>
  )
}