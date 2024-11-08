import styled from "styled-components"

export const AboutContainer = styled.section`
  display: flex;
  width: 320px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  & h1 {
    font-size: 3.5rem;
    color: #01ab9e;
    font-weight: 400;
    font-family: "Syncopate", sans-serif;
    letter-spacing: 0.125rem;
    margin-top: 40px;
    text-align: center;
  }

  @media (width >=80rem) {
    width: 1000px;

    & h1 {
      position: absolute;
      text-align: start;
      top: 50px;
      left: 100px;
      font-size: 4rem;
      color: #01ab9e;
    }
  }
  @media (width >=87.5rem) {
    width: 1400px;

    h1 {
      font-size: 6rem;
      left: 300px;
    }
  }
`
export const AboutContent = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  & h3 {
    font-size: 1.8rem;
    width: 100%;
  }
  p {
    font-size: 1.2rem;
    margin: 0.625rem 0;
  }
  span {
    color: #01ab9e;
  }

  img {
    width: 400px;
    height: 420px;
    margin-top: 1.875rem;
  }

  @media (width >=80rem) {
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text {
      display: flex;
      width: 68.75rem;
      margin: 5px 0;

      align-items: center;

      > div {
        width: 46.25rem;
        flex-direction: row;
        margin-right: 40px;
      }
    }

    h3 {
      font-size: 3rem;
      margin-bottom: 40px;
      text-align: start;
    }

    p {
      font-size: 1.25rem;
      font-weight: 100;
      margin: 0;
    }
    img {
      width: 500px;
      height: 500px;
      margin-bottom: 20px;
      margin-left: 0;
    }
  }

  @media (width >=87.5rem) {
    .text {
      display: flex;
      width: 100%;
      margin: 0;

      align-items: center;
      justify-content: space-between;

      > div {
        width: 740px;
        flex-direction: row;
        margin-right: 40px;
      }
    }

    h3 {
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 50px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 100;
      margin: 0;
    }

    img {
      width: 550px;
      height: 750px;
    }
  }
`
