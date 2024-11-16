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
      <CTATitle>Conheça nosso espaço</CTATitle>
      <CTADescription>
        <img src='image-url.jpg' alt='Imagem ilustrativa do espaço' />
      </CTADescription>
      <CTAButtons>
        <CTAButton primary>Saiba mais</CTAButton>
        <CTAButton>Visite-nos</CTAButton>
      </CTAButtons>
    </CTAContainer>
  )
}
