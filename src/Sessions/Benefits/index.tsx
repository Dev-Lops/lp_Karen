// Benefits/index.tsx
import { Counter } from "../../components/Counter"
import {
  BenefitsContainer,
  BenefitCard,
  CounterContainer,
  CardTitle,
} from "./styles"

export function Benefits() {
  return (
    <BenefitsContainer data-aos='fade-up' data-aos-duration='3000'>
      <BenefitCard>
        <CounterContainer>
          <Counter from={0} to={1000} duration={4} />
          <span>+</span>
        </CounterContainer>
        <CardTitle>Clientes Satisfeitos</CardTitle>
      </BenefitCard>

      <BenefitCard>
        <CounterContainer>
          <Counter from={0} to={500} duration={4} />
          <span>+</span>
        </CounterContainer>
        <CardTitle>Feedbacks positivos</CardTitle>
      </BenefitCard>

      <BenefitCard>
        <CounterContainer>
          <Counter from={0} to={100} duration={4} />
          <span>%</span>
        </CounterContainer>
        <CardTitle>Taxa de satisfação</CardTitle>
      </BenefitCard>
    </BenefitsContainer>
  )
}
