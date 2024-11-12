import { useState, useEffect } from "react"
import {
  CountdownSection,
  CountdownTitle,
  Timer,
  TimeUnit,
  TimeLabel,
  Description,
} from "./styles"

// Componente de contagem regressiva
export const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date()
    // Black Friday é a última sexta-feira de novembro (considerando que o evento sempre acontece em novembro)
    const year = now.getFullYear()
    const blackFridayDate = new Date(
      year,
      10, // Mês de novembro (0-indexado)
      1 // Primeiro dia de novembro
    )

    // Encontrando a última sexta-feira de novembro
    const dayOfWeek = blackFridayDate.getDay()
    const daysToFriday = (5 - dayOfWeek + 7) % 7
    blackFridayDate.setDate(1 + daysToFriday + 30) // Última sexta-feira de novembro

    // Garantindo que a diferença seja de tipo 'number'
    const difference = blackFridayDate.getTime() - now.getTime() // Usar getTime() para garantir que os valores sejam numéricos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer) // Limpeza do timer quando o componente é desmontado
  }, [])

  return (
    <CountdownSection>
      <CountdownTitle>Aproveite nossas ofertas antes que acabem</CountdownTitle>
      <Description>
        Todos os nossos produtos com descontos incriveis
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
