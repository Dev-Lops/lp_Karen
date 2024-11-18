import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  FooterSocials,
  SocialIcon,
  FooterText,
} from "./styles"

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href='#about' aria-label='Sobre'>
          Sobre
        </FooterLink>
        <FooterLink href='#' aria-label='Política de Privacidade'>
          Política de Privacidade
        </FooterLink>
        <FooterLink href='#' aria-label='Termos de Serviço'>
          Termos de Serviço
        </FooterLink>
        <FooterLink href='sac@studiokarenfrazao.com' aria-label='Contato'>
          Contato
        </FooterLink>
      </FooterLinks>

      <FooterSocials>
        <SocialIcon
          href='sac@studiokarenfrazao.com'
          target='_blank'
          aria-label='Email'
        >
          <i className='fab fa-email'></i>
        </SocialIcon>
        <SocialIcon
          href='https://www.instagram.com/studiokarenfrazao/'
          target='_blank'
          aria-label='Instagram'
        >
          <i className='fab fa-instagram'></i>
        </SocialIcon>
      </FooterSocials>

      <FooterText>
        &copy; {new Date().getFullYear()} Studio Karen Frazão. Todos os direitos
        reservados.
      </FooterText>
    </FooterContainer>
  )
}
