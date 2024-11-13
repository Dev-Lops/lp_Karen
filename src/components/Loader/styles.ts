import styled, { keyframes } from "styled-components"

// Animação de expansão do texto
const trackingInExpand = keyframes`
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }


  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }

`

// Animação de rotação do spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

// Container principal do Loader
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brunswickGreen};
  color: ${({ theme }) => theme.colors.primaryfooter};
  font-size: 0.75rem;
  font-family: "Syncopate", sans-serif;
  text-align: center;

  @media (min-width: 80rem) {
  }

  @media (min-width: 87.5rem) {
    font-size: 3rem;
  }
`

// Estilos do Spinner com animação de rotação
export const Spinner = styled.div`
  border: 6px solid ${({ theme }) => theme.colors.gold};
  border-top: 6px solid ${({ theme }) => theme.colors.brunswickGreen};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1.25rem;

  @media (min-width: 80rem) {
    width: 70px;
    height: 70px;
  }
`

// Estilos do texto com animação de tracking-in-expand
export const TrackingText = styled.div`
  animation: ${trackingInExpand} 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.gold};
  width: 100%;

  @media (min-width: 80rem) {
    font-size: 2rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 3rem;
  }
`
