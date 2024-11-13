import { Button } from "../../components/Button"
import { AboutContainer, AboutContent } from "./styles"

import Logo from "../../assets/image.png"

export function About() {
  return (
    <AboutContainer>
      <img src={Logo} alt='' />
      <h1
        data-aos='fade-right'
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
      >
        Studio
      </h1>
      <h2>Karen Frazão</h2>

      <AboutContent>
        <div className='text'>
          <h3
            data-aos='fade-right'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
          >
            Conheça a mulher fabulosa que existe em você
          </h3>
          <Button href='#products' size='small' backgroundColor='transparent'>
            Saiba mais
          </Button>
        </div>
      </AboutContent>
    </AboutContainer>
  )
}
