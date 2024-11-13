// styles.js
import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

// Container do componente About com responsividade
export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: cnmter;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.brunswickGreen};

  & img {
    width: 60px;
    margin-bottom: 70px;
  }

  & h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;

    font-family: "Jura", sans-serif;
    line-height: 0.8;

    margin-bottom: 5px;

    text-transform: uppercase;
  }
  & h2 {
    font-size: 2.875rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Baskervville", serif;
    font-weight: 400;
    text-align: center;

    margin-bottom: 15px;
    text-transform: uppercase;
  }

  @media (min-width: 1280px) {
    & h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    & h2 {
      font-size: 6rem;
      letter-spacing: 5px;
    }
  }

  @media (min-width: 1400px) {
    & h1 {
      font-size: 3rem;
    }

    & h2 {
      font-size: 6.5rem;
    }
  }
`

// Estilos do conteúdo do About com ajustes para diferentes tamanhos de tela
export const AboutContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  & h3 {
    font-family: "Tangerine", cursive;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.gold};
  }

  @media (min-width: 1280px) {
    text-align: justify;

    .text {
      width: 56.25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.5rem;
    }

    & h3 {
      font-size: 3rem;
      margin-bottom: 20px;
      text-align: center;
      width: 900px;
    }

    & p {
      font-size: 1.25rem;
      font-weight: 100;
    }
  }

  @media (min-width: 1400px) {
    .text {
      width: 1400px;
      justify-content: space-between;
    }

    & h3 {
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 50px;
    }

    & p {
      font-size: 1.5rem;
      font-weight: 100;
      margin: 0;
    }
  }
`
