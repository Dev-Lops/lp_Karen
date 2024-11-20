import { Button } from "../Button/index.tsx"
import LazyImage from '../LazyImg/index.tsx'
import { CTAContainer, CTATitle, CTADescription, CTAButtons } from "./styles.ts"



export function CTASection() {
  return (
    <CTAContainer>
      <CTATitle>Conheça nosso espaço</CTATitle>
      <CTADescription>
        <LazyImage src='https://dtsel6fm8qr8n.cloudfront.net/espaco.avif' alt='Imagem ilustrativa do espaço' loading='lazy'/>
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
