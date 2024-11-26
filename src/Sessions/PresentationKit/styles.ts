import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

export const ContainerKit = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  width: 100vw;
  height: 100vh;
  padding: 0 10px;

  & > img {
    width: 250px;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: transparent;
  }

  @media (min-width: 80rem) {
    flex-direction: row;
    gap: 30px;

    & > img {
      width: 450px;
      height: 600px;
    }
  }

  @media (min-width: 87.5rem) {
    width: 100%;

    & > img {
      width: 550px;
      height: 650px;
    }
  }
`

export const ContentKit = styled.article`
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
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: ${({ theme }) => theme.colors.green};
    font-family: "Melodrama", serif;
    letter-spacing: 3px;
    font-weight: bold;
  }

  & p {
    width: 90%;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 15px;
    font-family: "Montserrat", serif;
    text-align: center;
  }

  @media (min-width: 80rem) {
    width: 50%;

    & h1 {
      font-size: 3rem;
      text-align: center;
    }

    & p {
      font-size: 1.25rem;
      font-weight: 400;
      width: 80%;
    }
  }
`
