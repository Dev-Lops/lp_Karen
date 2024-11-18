import { CountdownTimer } from "../../components/Countdown"
import { SectionCountDown } from "./styles"

export function CountdownBlack() {
  return (
    <SectionCountDown data-aos='fade-right'>
      <CountdownTimer />
    </SectionCountDown>
  )
}
