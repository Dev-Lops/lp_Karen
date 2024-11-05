import React, { useEffect, useState } from "react"

import "aos/dist/aos.css"


const EventCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [eventStarted, setEventStarted] = useState(false)

  useEffect(() => {

    const eventDate = new Date("Nov 28, 2024 19:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        setEventStarted(true)
        clearInterval(timer)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {eventStarted ? (
        <>
          <p id='evento-iniciado'>Desculpe, o evento já iniciou.</p>
          <p id='modify'>Indisponível</p>
        </>
      ) : (
        <div id='contador'>
          {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </div>
      )}
    </div>
  )
}

export default EventCountdown
