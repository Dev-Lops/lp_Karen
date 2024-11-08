import StyledButton from "../../components/Button"
import { Faixa } from "../../components/faixa"
import { AboutContainer, AboutContent } from "./styles"

export function About() {
  return (
    <AboutContainer>
      <h1
        data-aos='fade-right'
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
      >
        BLACK FRIDAY
      </h1>
      <AboutContent>
        <div className='text'>
          <div>
            <h3
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-easing='ease-in-sine'
            >
              Transforme seu cabelo com produtos de <span>alta qualidade</span>
            </h3>
            <p
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-easing='ease-in-sine'
            >
              Nossos produtos combinam tecnologia avançada e ingredientes
              naturais para garantir cabelos mais saudáveis e cheios de vida.
              Experimente a diferença que o cuidado profissional pode fazer!
            </p>
            <StyledButton href='#' size='small' backgroundColor='#01ab9e'>
              Compre agora
            </StyledButton>
          </div>
          <img
            src='src\assets\Design sem nome (1).png'
            alt='teste'
            data-aos='fade-up'
            data-aos-anchor-placement='center-bottom'
          />
        </div>
      </AboutContent>
      <Faixa />
    </AboutContainer>
  )
}
