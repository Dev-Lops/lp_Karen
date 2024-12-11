import {
  CTAContainer,
  CTATitle,
  CTADescription,
  CTAButtons,
  ImageContainer,
  CTAContent,
} from "./styles.ts"
import { Button } from "../Button/index.tsx"
import LazyImage from "../LazyImg/index.tsx"

export function CTASection() {
  return (
    <CTAContainer>
      <CTATitle data-aos='fade-up' data-aos-duration='3000'>
        Sobre nós
      </CTATitle>
      <CTAContent>
        <ImageContainer>
          <LazyImage
            src='https://dtsel6fm8qr8n.cloudfront.net/ImageToStl.com_img_8808.avif'
            alt='Espaço Acolhedor do Studio Karen Frazão'
            loading='lazy'
            aria-placeholder='Espaço acolhedor do Studio Karen Frazão'
          />
        </ImageContainer>

        <CTADescription>
          <p
            data-aos='fade-right'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
          >
            Com mais de <strong>6 anos de experiência</strong>, nos
            especializamos em trazer soluções naturais e inovadoras para nossos
            clientes, sempre com responsabilidade e conhecimento.
          </p>

          <p>
            <strong
              data-aos-anchor-placement='center-bottom'
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-easing='ease-in-sine'
            >
              Nossas Especialidades:
            </strong>
          </p>
          <ul>
            <li
              data-aos-anchor-placement='center-bottom'
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-easing='ease-in-sine'
            >
              Alisamento Natural
            </li>
            <li
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-anchor-placement='center-bottom'
              data-aos-easing='ease-in-sine'
            >
              Tricologia e Terapia Integrativa
            </li>
            <li
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-anchor-placement='center-bottom'
              data-aos-easing='ease-in-sine'
            >
              Tratamento para Caspa, Calvície e outras Afecções Capilares
            </li>
          </ul>

          <p
            data-aos-anchor-placement='center-bottom'
            data-aos='fade-right'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
          >
            Trabalhamos com técnicas e produtos de alta qualidade que respeitam
            sua saúde capilar, proporcionando resultados incríveis e duradouros.
          </p>
        </CTADescription>

        <CTAButtons>
          <Button
            backgroundColor=''
            href={`https://wa.me/5592993787566?text=${encodeURIComponent(
              "Olá, gostaria de saber mais sobre o horário de agendamento."
            )}`}
            aria-label='Saiba mais sobre horário de agendamento'
          >
            Agende um horário
          </Button>
        </CTAButtons>
      </CTAContent>
    </CTAContainer>
  )
}
