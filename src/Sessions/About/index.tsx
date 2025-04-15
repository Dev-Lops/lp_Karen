import { Button } from "../../components/Button";
import LazyImage from "../../components/LazyImg";
import { AboutContainer, AboutContent } from "./styles";

export function About() {
  // useEffect(() => {
  //   confetti({
  //     particleCount: 600,
  //     spread: 800,
  //     origin: { y: 0.5 },
  //   });
  // }, []);
  return (
    <AboutContainer>
      <LazyImage
        src='https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltYWdlLnBuZyIsImlhdCI6MTc0NDY3Njk3NSwiZXhwIjo0ODY2NzQwOTc1fQ.__NiTccuTCUsmFtuXqx6n0AJ1yIEbXmtBfM3OZ7QKe4'
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
