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
    width: 1200px;
    height: 100vh;

    & h1 {
      position: absolute;
      text-align: start;
      top: 150px;
      left: 90px;
      font-size: 5rem;
      color: #01ab9e;
      letter-spacing: 3px;
    }
  }
  @media (width >=87.5rem) {
    width: 1200px;

    h1 {
      font-size: 6rem;
      left: 250px;
      letter-spacing: 4px;
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

  .photo {
    display: flex;

    justify-content: center;
    align-items: center;
    border-radius: 900px;

    img {
      width: 300px;
      height: 450px;
      border-radius: 900px;
      background-color: #fff;
      padding: 5px;

      margin-top: 30px;
    }
  }

  @media (width >=80rem) {
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .photo {
      display: flex;

      justify-content: center;
      align-items: center;
      border-radius: 900px;

      img {
        width: 400px;
        height: 550px;
        border-radius: 900px;
        background-color: #fff;
      }
    }

    .text {
      display: flex;
      width: 68.75rem;
      justify-content: center;
      align-items: center;

      gap: 3.5rem;
    }

    h3 {
      font-size: 3rem;
      margin-bottom: 20px;
      text-align: start;
    }

    p {
      font-size: 1.25rem;
      font-weight: 100;
    }
    img {
      width: 400px;
      height: 600px;
      margin-bottom: 20px;
    }
  }

  @media (width >=87.5rem) {
    .photo {
      display: flex;

      justify-content: center;
      align-items: center;
      border-radius: 900px;

      img {
        width: 450px;
        height: 650px;
        border-radius: 900px;
        background-color: #fff;

        margin-top: 30px;
      }
    }
    .text {
      display: flex;
      width: 1400px;

      align-items: center;
      justify-content: space-between;
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
  }
`
