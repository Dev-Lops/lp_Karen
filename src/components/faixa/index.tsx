import React, { useRef } from "react"
import { useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion"
import { wrap } from "@motionone/utils"
import { ParallaxContainer, Scroller, SectionWrapper } from "./style"

interface ParallaxTextProps {
  children: React.ReactNode
  baseVelocity?: number
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 600,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <ParallaxContainer>
      <Scroller style={{ x }}>
        {Array.from({ length: 30 }).map((_, idx) => (
          <span key={idx}>{children}</span>
        ))}
      </Scroller>
    </ParallaxContainer>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  baseVelocity?: number
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, baseVelocity = 100 }) => {
  return (
    <SectionWrapper>
      <ParallaxText baseVelocity={baseVelocity}>{children}</ParallaxText>
    </SectionWrapper>
  )
}
