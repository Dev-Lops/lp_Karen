import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "animate.css"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'CustomFont';
  src: url('customfont.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'AlexanderLettering';
  src: url('/fonts/AlexanderLettering.woff2') format('woff2'),
       url('/fonts/AlexanderLettering.woff') format('woff'),
       url('/fonts/AlexanderLettering.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

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
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-display: swap;


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
