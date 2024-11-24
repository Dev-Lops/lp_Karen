import { useState, useEffect } from "react"
import {
  CountdownSection,
  CountdownTitle,
  Timer,
  TimeUnit,
  TimeLabel,
  Description,
} from "./styles"

// Função para calcular a contagem de tempo até a Black Friday
const calculateTimeLeft = () => {
  const now = new Date()
  const year = now.getFullYear()
  const blackFridayDate = new Date(year, 10, 1) // Primeiro dia de novembro

  // Encontrar a última sexta-feira de novembro
  const dayOfWeek = blackFridayDate.getDay()
  const daysToFriday = (5 - dayOfWeek + 7) % 7
  blackFridayDate.setDate(1 + daysToFriday + 30) // Última sexta-feira de novembro

  // Calcular a diferença
  const difference = blackFridayDate.getTime() - now.getTime()
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  // Atualizar a contagem a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer) // Limpeza do intervalo
  }, [])

  return (
    <CountdownSection>
      <CountdownTitle>Aproveite nossas ofertas antes que acabem</CountdownTitle>
      <Description>
        Todos os nossos produtos com descontos incríveis nessa Black Friday.
      </Description>
      <Timer>
        <TimeUnit>
          <span>{timeLeft.days}</span>
          <TimeLabel>DIAS</TimeLabel>
        </TimeUnit>
        <TimeUnit>
          <span>{timeLeft.hours}</span>
          <TimeLabel>HORAS</TimeLabel>
        </TimeUnit>
        <TimeUnit>
          <span>{timeLeft.minutes}</span>
          <TimeLabel>MINUTOS</TimeLabel>
        </TimeUnit>
        <TimeUnit>
          <span>{timeLeft.seconds}</span>
          <TimeLabel>SEGUNDOS</TimeLabel>
        </TimeUnit>
      </Timer>
    </CountdownSection>
  )
}
