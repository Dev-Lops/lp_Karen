import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

// Estilos do AboutContainer
export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brunswickGreen};

  & img {
    width: 4.375rem;

    -webkit-animation: puff-in-center 2s cubic-bezier(0.47, 0, 0.745, 0.715);
    animation: puff-in-center 2s cubic-bezier(0.47, 0, 0.745, 0.715);
    /* Melhor controle da imagem */

    @media (min-width: 80rem) {
      width: 6.25rem;
    }
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
`

// Estilos do conteúdo do About com ajustes para diferentes tamanhos de tela
export const AboutContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  .text {
    & h1 {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.white};

      font-family: "AlexanderLettering", sans-serif;
      display: flex;
      align-items: center;
      font-weight: 400;
      text-align: center;
      height: 70px;
      letter-spacing: 5px;

      -webkit-animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        both;
      animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    & h3 {
      font-family: "Baskervville", serif;
      font-size: 1rem;
      letter-spacing: 5px;

      color: ${({ theme }) => theme.colors.gold};
      -webkit-animation: tracking-in-expand 0.7s
        cubic-bezier(0.215, 0.61, 0.355, 1) both;
      animation: tracking-in-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }
    p {
      margin-top: 60px;
      font-size: 1.125rem;
      color: #fff;
      -webkit-animation: tracking-in-expand 0.7s
        cubic-bezier(0.215, 0.61, 0.355, 1) both;
      animation: tracking-in-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
      margin-bottom: 30px;
    }
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
    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & h1 {
        font-size: 8rem;
        color: ${({ theme }) => theme.colors.white};

        display: flex;
        align-items: center;
        font-weight: 400;
        text-align: center;
        height: 70px;
        letter-spacing: 15px;

        -webkit-animation: text-focus-in 2s
          cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
        animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
      }

      & h3 {
        font-size: 1.5rem;
        text-align: center;
        letter-spacing: 10px;
      }

      & p {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1400px) {
    .text {
      width: 1400px;
    }

    & h3 {
      font-size: 4rem;
      font-weight: bold;
    }

    & p {
      font-size: 1.5rem;

      margin: 0;
    }
  }
`
