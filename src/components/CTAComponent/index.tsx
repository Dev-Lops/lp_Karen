import { Button } from "../Button/index.tsx"
import { CTAContainer, CTATitle, CTADescription, CTAButtons } from "./styles.ts"

import img1 from "../../assets/espaco.png"

export function CTASection() {
  return (
    <CTAContainer>
      <CTATitle>Conheça nosso espaço</CTATitle>
      <CTADescription>
        <img src={img1} alt='Imagem ilustrativa do espaço' />
      </CTADescription>
      <CTAButtons>
        <Button
          href={`https://wa.me/5592993787566?text=${encodeURIComponent(
            `Olá, gostaria de saber mais sobre o horário de agendamento. `
          )}`}
          aria-label={`Saiba mais sobre horário de agendamento `}
        >
          Agende um horário
        </Button>
      </CTAButtons>
    </CTAContainer>
  )
}
