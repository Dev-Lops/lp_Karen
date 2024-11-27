import styled from "styled-components"

export const Section = styled.section`
  padding-block: min(20vh, 2rem);
  width: calc(min(76.5rem, 90%));
  margin-inline: auto;

  h2 {
    text-transform: uppercase;
    font-size: clamp(2rem, 5vw, 2.5rem);
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.green};
    font-family: "Stardom", serif;
    letter-spacing: 3px;
    font-weight: bold;
    text-align: center;
  }

  .lazy-image {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .lazy-image[loading="lazy"] {
    opacity: 1;
  }

  .loading-placeholder {
    background: #f0f0f0;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const CardWrapper = styled.div`
  .box {
    position: relative;
    width: 100%;
    height: 18.75rem;
    border-radius: 1.25rem;
    border-bottom-right-radius: 0;
    overflow: hidden;

    &.disabled {
      pointer-events: none;
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 1.25rem;
      border-bottom-right-radius: 0;
    }

    .imgBox {
      position: absolute;
      inset: 0;
      overflow: hidden;

      &.outOfStock {
        ::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        img {
          opacity: 0.2;
        }

        .outOfStockText {
          position: absolute;
          width: 100%;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: red;
          font-weight: bold;
          font-size: 1.5rem;
          z-index: 2;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s;
      }
    }

    .icon {
      position: absolute;
      bottom: -0.375rem;
      right: -0.375rem;
      width: 5rem;
      height: 5rem;
      background: ${({ theme }) => theme.colors.green};
      border-top-left-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5rem;
      transition: background-color 0.3s;

      &.disabled {
        background-color: red;
      }

      &:hover .iconBox {
        transform: scale(1.1);
        cursor: pointer;
      }

      .iconBox {
        position: absolute;
        inset: 0.625rem;
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        background: none;
        border: none;

        span {
          color: #000;
          font-size: 2rem;
        }
      }
    }
  }
`

export const CardContent = styled.div`
  padding: 0.875rem 0.625rem;

  h3 {
    font-size: clamp(1rem, 5vw, 1.6rem);
    color: ${({ theme }) => theme.colors.green};
    font-family: "Melodrama", serif;
    letter-spacing: 3px;
    font-weight: 600;
  }

  p {
    font-size: clamp(0.8rem, 5vw, 1.4rem);
    margin: 0.625rem 0 1.25rem;
    color: #000;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;

    li {
      margin-right: 0.5rem;
    }
  }
`

export const CheckoutButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  font-weight: regular;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17rem;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 99;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenLight};
  }

  .cart-count {
    background-color: red;
    width: 2rem;
    height: 2rem;
    border-radius: 30px;
    color: white;
    text-align: center;
    line-height: 2rem;
    font-weight: bold;
    margin-left: 1rem;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 60%;
  }
`

export const ClearCartButton = styled.button`
  position: fixed;
  text-align: center;
  justify-content: center;
  bottom: 2rem;
  left: 63%;
  transform: translateX(-50%);
  background-color: red;
  color: white;
  font-weight: regular;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 3.125rem;
  display: flex;
  align-items: center;
  width: 1rem;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 99;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 600px) {
    left: 85%;
    transform: translateX(-50%);
  }
  @media (min-width: 87.5rem) {
    left: 59%;
    transform: translateX(-50%);
  }
`
