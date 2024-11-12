import {
  CTAContainer,
  CTATitle,
  CTADescription,
  CTAButtons,
  CTAButton,
} from "./styles.ts"

export function CTASection() {
  return (
    <CTAContainer>
      <CTATitle>Pronto para transformar sua experiência?</CTATitle>
      <CTADescription>
        Não perca mais tempo! Compre agora e aproveite todos os benefícios
        exclusivos.
      </CTADescription>
      <CTAButtons>
        <CTAButton primary>Comprar Agora</CTAButton>
      </CTAButtons>
    </CTAContainer>
  )
}
