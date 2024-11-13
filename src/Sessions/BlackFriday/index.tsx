import { ParallaxSection } from "../../components/faixa/index"
import { BlackfridaySection } from "./styles"
export function BlackFriday() {
  return (
    <BlackfridaySection>
      <ParallaxSection baseVelocity={-5}>
        Black friday
      </ParallaxSection>
    </BlackfridaySection>
  )
}
