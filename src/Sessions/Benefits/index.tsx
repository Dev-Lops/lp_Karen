import { memo } from "react";
import { Counter } from "../../components/Counter";
import {
  BenefitCard,
  BenefitsContainer,
  CardTitle,
  CounterContainer,
} from "./styles";

// Props do componente BenefitCardComponent
interface BenefitCardProps {
  countFrom: number;
  countTo: number;
  label: string;
  suffix: string;
}

// Componente memoizado pra evitar renderizações desnecessárias
const BenefitCardComponent = memo(
  ({ countFrom, countTo, label, suffix }: BenefitCardProps) => (
    <BenefitCard>
      <CounterContainer>
        <Counter from={countFrom} to={countTo} duration={4} />
        <span>{suffix}</span>
      </CounterContainer>
      <CardTitle>{label}</CardTitle>
    </BenefitCard>
  )
);

export function Benefits() {
  return (
    <BenefitsContainer>
      <BenefitCardComponent
        countFrom={0}
        countTo={10000}
        label="Clientes Satisfeitos"
        suffix="+"
      />
      <BenefitCardComponent
        countFrom={0}
        countTo={10000}
        label="Feedbacks Positivos"
        suffix="+"
      />
      <BenefitCardComponent
        countFrom={0}
        countTo={100}
        label="Taxa de Satisfação"
        suffix="%"
      />
    </BenefitsContainer>
  );
}
