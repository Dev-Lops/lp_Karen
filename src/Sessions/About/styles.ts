import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.brunswickGreen};

  & img {
    width: 60px;
    margin-bottom: 20px;

    -webkit-animation: puff-in-center 2s cubic-bezier(0.47, 0, 0.745, 0.715);
    animation: puff-in-center 2s cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  & h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-family: "Jura", sans-serif;
    line-height: 0.8;
    margin-bottom: 5px;
    text-transform: uppercase;

    -webkit-animation: tracking-in-expand-fwd 2s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand-fwd 2s cubic-bezier(0.215, 0.61, 0.355, 1)
      both;
  }

  & h1 {
    font-size: 2.875rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Baskervville", serif;
    font-weight: 400;
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;

    -webkit-animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  /* Animação - puff-in-center */
  @-webkit-keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  /* Animação - Text Focus In */
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @-webkit-keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }

  @media (min-width: 1280px) {
    & h2 {
      font-size: 2.5rem;
      text-align: center;
    }

    & h1 {
      font-size: 6rem;
      letter-spacing: 5px;
    }
  }

  @media (min-width: 1400px) {
    & h2 {
      font-size: 3rem;
    }

    & h1 {
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
    font-family: "Italianno", cursive;
    font-size: 1.75rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.gold};

    -webkit-animation: tracking-in-expand 0.7s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
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
