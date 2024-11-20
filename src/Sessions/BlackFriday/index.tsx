import { BadgePercent } from "lucide-react"
import { ParallaxSection } from "../../components/faixa/index"
import { BlackfridaySection } from "./styles"

// Componente BlackFriday com efeito Parallax
export function BlackFriday() {
  return (
    <BlackfridaySection>
      <ParallaxSection baseVelocity={-5}>
        <div className='icon'>
          <BadgePercent size={36} />
        </div>
        <div>Black Friday</div>
      </ParallaxSection>
    </BlackfridaySection>
  )
}
