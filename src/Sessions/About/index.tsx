import { Button } from "../../components/Button"
import { AboutContainer, AboutContent } from "./styles"
import Logo from "../../assets/image.png"
import LazyImage from "../../components/LazyImg"

export function About() {
  return (
    <AboutContainer >
      <LazyImage
        src={Logo}
        alt='Logo de Karen Frazão'
        className='puff-in-center'
        loading='lazy'
      />
      <AboutContent>
        <div className='text'>
          <h1 className='tracking-in-expand-fwd'>Karen Frazão</h1>
          <h3 className='tracking-in-expand-fwd'>Fabulous Hair</h3>
          <p className='tracking-in-expand-fwd'>Saúde e Beleza</p>
        </div>
        <Button
          width='md'
          href='#cta'
          size='small'
          backgroundColor='transparent'
        >
          Saiba mais
        </Button>
      </AboutContent>
    </AboutContainer>
  )
}
