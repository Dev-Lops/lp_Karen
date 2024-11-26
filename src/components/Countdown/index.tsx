import { useState, useEffect } from "react"
import {
  CountdownSection,
  CountdownTitle,
  Timer,
  TimeUnit,
  TimeLabel,
  Description,
} from "./styles"
import { Button } from "../Button"

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
    <>
      <CountdownSection>
        <CountdownTitle data-aos='fade-up' data-aos-duration='3000'>
          Aproveite nossas ofertas antes que acabem
        </CountdownTitle>
        <Description data-aos='fade-left'>
          Todos os nossos produtos com descontos incríveis nessa Black Friday.
        </Description>
        <Timer>
          <TimeUnit
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <span>{timeLeft.days}</span>
            <TimeLabel>DIAS</TimeLabel>
          </TimeUnit>
          <TimeUnit
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <span>{timeLeft.hours}</span>
            <TimeLabel>HORAS</TimeLabel>
          </TimeUnit>
          <TimeUnit
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <span>{timeLeft.minutes}</span>
            <TimeLabel>MINUTOS</TimeLabel>
          </TimeUnit>
          <TimeUnit
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <span>{timeLeft.seconds}</span>
            <TimeLabel>SEGUNDOS</TimeLabel>
          </TimeUnit>
        </Timer>
        <Button
          backgroundColor=''
          href='https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20mais%20informações!%20'
          target='_blank'
        >
          Entre em contato
        </Button>
      </CountdownSection>
    </>
  )
}
