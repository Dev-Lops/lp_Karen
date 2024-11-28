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

// Função para calcular a contagem de tempo até a data específica
const calculateTimeLeft = () => {
  const now = new Date()

  // Definir a data final como 30 de novembro de 2024 às 17:00 (horário de Manaus, UTC-4)
  const targetDate = new Date("2024-11-30T17:00:00-04:00")

  // Calcular a diferença em milissegundos
  const difference = targetDate.getTime() - now.getTime()

  // Se a data já passou, retornar zeros
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  // Calcular dias, horas, minutos e segundos
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
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
        <CountdownTitle data-aos="fade-up" data-aos-duration="3000">
          Ofertas por tempo limitado
        </CountdownTitle>
        <Description data-aos="fade-left">
          Todos os nossos produtos com descontos incríveis nessa Black Friday.
        </Description>
        <Timer>
          <TimeUnit
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <span>{timeLeft.days}</span>
            <TimeLabel>DIAS</TimeLabel>
          </TimeUnit>
          <TimeUnit
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <span>{timeLeft.hours}</span>
            <TimeLabel>HORAS</TimeLabel>
          </TimeUnit>
          <TimeUnit
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <span>{timeLeft.minutes}</span>
            <TimeLabel>MINUTOS</TimeLabel>
          </TimeUnit>
          <TimeUnit
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <span>{timeLeft.seconds}</span>
            <TimeLabel>SEGUNDOS</TimeLabel>
          </TimeUnit>
        </Timer>
        <Button
          backgroundColor=""
          href="https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20mais%20informações!%20"
          target="_blank"
        >
          Entre em contato
        </Button>
      </CountdownSection>
    </>
  )
}
