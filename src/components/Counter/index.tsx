import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface CounterProps {
  from: number // Valor inicial do contador
  to: number // Valor final do contador
  duration?: number // Duração opcional para a animação
}

export function Counter({ from, to, duration = 3 }: CounterProps) {
  const count = useMotionValue(from) // Inicializa o contador com o valor "from"
  const rounded = useTransform(count, Math.round) // Transforma o valor para um número arredondado
  const [inView, setInView] = useState(false) // Estado para controlar se a seção está visível
  const sectionRef = useRef<HTMLDivElement | null>(null) // Ref para a seção que será observada

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true) // Quando a seção estiver visível, ativa a animação
        }
      },
      { threshold: 0.5 } // Inicia a animação quando 50% da seção estiver visível
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current) // Observa a seção
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current) // Desassocia o observer ao desmontar
      }
    }
  }, [])

  useEffect(() => {
    if (inView) {
      // Anima o valor do contador de "from" até "to" quando a seção estiver visível
      const animation = animate(count, to, { duration })

      // Limpa a animação quando o contador atingir o valor final
      return animation.stop
    }
  }, [inView, count, to, duration])

  return (
    <div ref={sectionRef}>
      <motion.h1>{rounded}</motion.h1>
    </div>
  )
}
