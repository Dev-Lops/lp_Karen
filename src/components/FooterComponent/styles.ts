// src/components/Footer/styles.ts

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
  gap: 40px;
  margin-bottom: 20px;
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
`

// Contêiner de ícones sociais
export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
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
`

// Texto de copyright
export const FooterText = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondaryLightfooter};
`
