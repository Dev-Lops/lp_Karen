import styled from "styled-components"

export const AboutContainer = styled.section`
  display: flex;
  width: 320px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 50px;

  text-align: start;

  color: #fff;

  @media (width >=80rem) {
    width: 1000px;
    height: 100%;
  }
  @media (width >=87.5rem) {
    width: 1400px;
  }
`
export const AboutContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  margin-top: 50px;

  & h1 {
    font-size: 2.5rem;
    color: #01ab9e;
    font-weight: 400;
    font-family: "Syncopate", sans-serif;
    letter-spacing: 0.125rem;
    margin-bottom: 10px;
  }
  & h3 {
    font-size: 1.8rem;
    text-align: start;

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
    width: 300px;
    height: 320px;
    margin-top: 1.875rem;
    margin-left: 30px;
  }

  @media (width >=80rem) {
    align-items: start;

    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text {
      display: flex;
      width: 68.75rem;

      align-items: center;
      justify-content: space-between;

      > div {
        width: 46.25rem;
        flex-direction: row;
        margin-right: 40px;
      }
    }

    & h1 {
      position: absolute;
      text-align: start;
      top: 120px;
      right: 210px;
      font-size: 100px;
      color: #01ab9e;
    }

    h3 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 40px;
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
      margin: 100px 0;

      align-items: center;
      justify-content: space-between;

      > div {
        width: 740px;
        flex-direction: row;
        margin-right: 40px;
      }
    }
    h1 {
      font-size: 10rem;
      right: 190px;
    }

    h3 {
      font-size: 5rem;
      font-weight: bold;
      margin-bottom: 50px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 100;
      margin: 0;
    }

    img {
      width: 600px;
      height: 600px;
      margin-bottom: 20px;
    }
  }
`
