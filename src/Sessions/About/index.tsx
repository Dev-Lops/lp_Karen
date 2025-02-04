import { Button } from "../../components/Button"
import LazyImage from "../../components/LazyImg"
import { AboutContainer, AboutContent } from "./styles"

export function About() {
  return (
    <AboutContainer>
      <LazyImage
        src='https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/image.avif?alt=media&token=3474c80c-4b5e-4611-837b-615bb2aa1b22'
        alt='Logo de Karen Frazão'
        className='puff-in-center'
        loading='lazy'
        aria-placeholder='Logo de Karen Frazão'
      />
      <AboutContent>
        <div className='text'>
          <h1 className='tracking-in-expand-fwd'>Karen Frazão</h1>
          <h3 className='tracking-in-expand-fwd'>Fabulos Hair</h3>
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
