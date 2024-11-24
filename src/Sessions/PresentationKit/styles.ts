import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

export const ContainerKit = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.green};
  width: 100vw;
  height: 100vh;

  & > img {
    width: 250px;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  @media (width >= 80rem) {
    flex-direction: row;
    gap: 30px;

    & > img {
      width: 450px;
      height: 600px;
    }
  }

  @media (width >= 87.5rem) {
    width: 100%;

    & > img {
      width: 550px;
      height: 650px;
    }
  }
`

export const ContentKit = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    margin: 10px 0 20px;
  }

  width: 100%;

  & h1 {
    font-size: 2rem;
    font-weight: 400;
    font-family: "Jura", sans-serif;
    line-height: 0.8;
    text-transform: uppercase;
  }

  & p {
    width: 300px;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-family: "Montserrat", serif;
    text-align: center;
  }

  @media (min-width: 80rem) {
    width: 40%;

    & h1 {
      font-size: 3rem;
      text-align: center;
    }

    & p {
      font-size: 1.25rem;
      font-weight: 400;
      width: 100%;
      text-transform: uppercase;
    }
  }

  @media (min-width: 87.5rem) {
  }
`
