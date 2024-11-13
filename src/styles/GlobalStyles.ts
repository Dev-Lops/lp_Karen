import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "animate.css"

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scroll-behavior: smooth;
  }

body {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;


  background-color: ${({ theme }) => theme.colors.brunswickGreen};
  color: ${({ theme }) => theme.colors.brunswickGreen};

  h1,h2,h3{
   font-family: "Montserrat", sans-serif;
  }
}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 375px) {
    /* Smartphone */
    max-width: 100%;
  }

  @media (min-width: 376px) and (max-width: 765px) {
    /* Tablet */
    max-width: 765px;
  }

  @media (min-width: 766px) and (max-width: 1280px) {
    /* Notebook */
    max-width: 100%;
  }

  @media (min-width: 1281px) {
    /* Desktop */
    max-width: 100%;
  }
`
