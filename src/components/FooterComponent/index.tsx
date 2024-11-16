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
        <FooterLink href="#about" aria-label="Sobre">
          Sobre
        </FooterLink>
        <FooterLink href="#" aria-label="Política de Privacidade">
          Política de Privacidade
        </FooterLink>
        <FooterLink href="#" aria-label="Termos de Serviço">
          Termos de Serviço
        </FooterLink>
        <FooterLink href="https://wa.me/c/559293787566" aria-label="Contato">
          Contato
        </FooterLink>
      </FooterLinks>

      <FooterSocials>
        <SocialIcon
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </SocialIcon>
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </SocialIcon>
      </FooterSocials>

      <FooterText>
        &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos
        reservados.
      </FooterText>
    </FooterContainer>
  )
}
