import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

interface CounterProps {
  from: number // Valor inicial do contador
  to: number // Valor final do contador
  duration?: number // Duração opcional para a animação
}

export function Counter({ from, to, duration = 3 }: CounterProps) {
  const count = useMotionValue(from) // Inicializa o contador com o valor "from"
  const rounded = useTransform(count, Math.round) // Transforma o valor para um número arredondado

  useEffect(() => {
    // Anima o valor do contador de "from" até "to"
    const animation = animate(count, to, { duration })

    // Limpa a animação quando o componente é desmontado
    return animation.stop
  }, [count, to, duration])

  return <motion.h1>{rounded}</motion.h1>
}
