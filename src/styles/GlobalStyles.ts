import { createGlobalStyle } from "styled-components"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    width: 100% ;
  }

body {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;

  margin: 0 auto ;

  width: 23.4375rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  h1,h2,h3{
   font-family: "Montserrat", sans-serif;
  }

  @media (width >=80rem){
    width: 80rem;

  }
  @media (width >=120rem){
    width: 120rem;
  }
}
`
