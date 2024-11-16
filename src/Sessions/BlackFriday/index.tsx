import { ParallaxSection } from "../../components/faixa/index"
import { BlackfridaySection } from "./styles"

// Componente BlackFriday com efeito Parallax
export function BlackFriday() {
  return (
    <BlackfridaySection>
      <ParallaxSection baseVelocity={-5}>Black Friday</ParallaxSection>
    </BlackfridaySection>
  )
}
