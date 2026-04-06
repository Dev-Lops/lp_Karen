import confetti from 'canvas-confetti'
import { useEffect, useRef, useState } from 'react'

export function BirthdayPromo() {
  const [now, setNow] = useState(new Date())
  const [show, setShow] = useState(true)
  const confettiFiredRef = useRef(false)

  const TEST_MODE = false

  const start = new Date('2026-04-07T10:00:00-03:00')
  const end = new Date('2026-04-09T18:00:00-03:00')

  const isPromoActive = TEST_MODE || (now >= start && now <= end)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if ((isPromoActive || import.meta.env.DEV) && show && !confettiFiredRef.current) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#032F31', '#D8BE93', '#F5F1E8', '#FFFFFF'],
      })

      confettiFiredRef.current = true
    }
  }, [isPromoActive, show])

  const getTimeLeft = () => {
    if (TEST_MODE) {
      return '2d 15h 30m 45s'
    }

    const diff = end.getTime() - now.getTime()
    if (diff <= 0) return 'Campanha encerrada'

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  if (!(isPromoActive || import.meta.env.DEV) || !show) return null

  return (
    <div
      className="fixed bottom-20 right-2 z-[45] w-[260px] rounded-md border shadow-2xl sm:bottom-4 sm:right-4 sm:w-[280px] sm:max-w-xs sm:rounded-lg"
      style={{
        background: 'linear-gradient(180deg, #032F31 0%, #022C2E 100%)',
        borderColor: 'rgba(216, 190, 147, 0.55)',
        color: '#F5F1E8',
      }}
    >
      <button
        onClick={() => setShow(false)}
        className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold shadow-lg transition sm:h-6 sm:w-6"
        style={{
          backgroundColor: '#D8BE93',
          color: '#032F31',
        }}
        aria-label="Fechar banner"
      >
        ✕
      </button>

      <div className="p-2 text-center sm:p-3">
        <div
          className="mb-1 text-base font-bold sm:text-lg"
          style={{ color: '#D8BE93' }}
        >
          Aniversário Karen Frazão
        </div>

        <p
          className="mb-2 text-[0.72rem] sm:text-xs"
          style={{ color: '#F5F1E8' }}
        >
          <strong style={{ color: '#D8BE93' }}>10% a 40% OFF</strong> em promoções especiais
        </p>

        <div
          className="rounded px-2 py-1 text-[0.68rem] font-bold sm:text-xs"
          style={{
            backgroundColor: 'rgba(216, 190, 147, 0.12)',
            border: '1px solid rgba(216, 190, 147, 0.35)',
            color: '#F5F1E8',
          }}
        >
          {getTimeLeft()}
        </div>
      </div>
    </div>
  )
}