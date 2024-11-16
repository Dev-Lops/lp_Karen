import { Button } from "../../components/Button"
import { AboutContainer, AboutContent } from "./styles"
import Logo from "../../assets/image.png"

export function About() {
  return (
    <AboutContainer id='about'>
      <img src={Logo} alt='Logo de Karen Frazão' className='puff-in-center' />
      <h2 className='text-focus-in'>studio</h2>
      <h1 className='tracking-in-expand-fwd'>Karen Frazão</h1>
      <AboutContent>
        <div className='text'>
          <h3 className='tracking-in-expand-fwd'>
            Conheça a mulher fabulosa que existe em você!
          </h3>
          <Button href='#kit' size='small' backgroundColor='transparent'>
            Descubra
          </Button>
        </div>
      </AboutContent>
    </AboutContainer>
  )
}
