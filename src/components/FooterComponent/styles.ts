import styled from "styled-components"

// Contêiner principal do footer
export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100vw;
  color: white;
  text-align: center;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
`

// Links do footer
export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Ajuste o espaçamento para telas menores
  margin-bottom: 20px;
  flex-wrap: wrap; // Garante que os links não saiam da tela em dispositivos pequenos
`

// Link individual
export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryfooter};
  }

  @media (min-width: 80rem) {
    font-size: 1.5rem; // Ajuste para telas maiores
  }
`

// Contêiner de ícones sociais
export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; // Ajuste o espaçamento para telas menores
  margin-bottom: 20px;
`

// Ícone social individual
export const SocialIcon = styled.a`
  color: white;
  font-size: 1.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryfooter};
  }

  @media (min-width: 80rem) {
    font-size: 2.5rem; // Ajuste para ícones maiores em telas grandes
  }
`

// Texto de copyright
export const FooterText = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondaryLightfooter};

  @media (min-width: 80rem) {
    font-size: 1.2rem; // Aumenta a fonte em telas maiores
  }
`
