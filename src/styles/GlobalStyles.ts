import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'animate.css'
import styled, { createGlobalStyle } from 'styled-components'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

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

@font-face {
  font-family: 'LeagueGothic';
  src: url('/fonts/LeagueGothic/LeagueGothic-Regular.woff2') format('woff2'),
       url('/fonts/LeagueGothic/LeagueGothic-Regular.woff') format('woff'),
       url('/fonts/LeagueGothic/LeagueGothic-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Finesse';
  src: url('/fonts/Finesse/Finesse-Flair.woff2') format('woff2'), /* Formato WOFF2 */
       url('/fonts/Finesse/Finesse-Flair.woff') format('woff'),   /* Formato WOFF */
       url('/fonts/Finesse/Finesse-Flair.ttf') format('truetype'); /* Formato TTF */
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'NewTitle';
  src: url('/fonts/NewTitle/NewTitle-Regular.woff2') format('woff2'), /* Formato WOFF2 */
       url('/fonts/NewTitle/NewTitle-Regular.woff') format('woff'),   /* Formato WOFF */
       url('/fonts/NewTitle/NewTitle-Regular.ttf') format('truetype'); /* Formato TTF */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Melodrama';
  src: url('/fonts/Melodrama/Melodrama-Regular.woff2') format('woff2'), /* Formato WOFF2 */
       url('/fonts/Melodrama/Melodrama-Regular.woff') format('woff'),   /* Formato WOFF */
       url('/fonts/Melodrama/Melodrama-Regular.ttf') format('truetype'); /* Formato TTF */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Stardom';
  src: url('/fonts/Stardom/Stardom-Regular.woff2') format('woff2'), /* Formato WOFF2 */
       url('/fonts/Stardom/Stardom-Regular.woff') format('woff'),   /* Formato WOFF */
       url('/fonts/Stardom/Stardom-Regular.ttf') format('truetype'); /* Formato TTF */
  font-weight: normal;
  font-style: normal;
}


  *,
  *::before,
  *::after  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;



    scroll-behavior: smooth;
  }
  body,html{
    overflow-x: hidden;
  };

  body {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


  color: ${({ theme }) => theme.colors.brunswickGreen};

  h1,h2,h3{
   font-family: "Montserrat", sans-serif;
  }
  img {
  max-width: 100%;
  height: 70%; /* Garante que imagens sejam redimensionadas */
  display: block; /* Remove espaço extra em imagens inline */
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0; /* Controle de margens externas */
  line-height: 1.5; /* Ajuste a altura das linhas para textos */
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
    max-width: 100vw;
  }

  @media (min-width: 376px) and (max-width: 765px) {
    /* Tablet */
    max-width: 100vw;
  }

  @media (min-width: 766px) and (max-width: 1280px) {
    /* Notebook */
    max-width: 100vw;
  }

  @media (min-width: 1281px) {
    /* Desktop */
    max-width: 100vw;
  }
`
