import styled from "styled-components"

export const Section = styled.section`
  padding-block: min(20vh, 2rem);
  width: calc(
    min(76.5rem, 80%)
  ); /* Garantindo que a largura respeite o limite da tela */
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

  @media (min-width: 87.5rem) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`

export const CardWrapper = styled.div`
  .box {
    position: relative;
    width: 100%;
    height: 18.75rem;
    border-radius: 1.25rem;

    overflow-x: hidden;

    @media (min-width: 375px) {
      height: 30rem;
    }

    &.disabled {
      pointer-events: none;
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 1.25rem;
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
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2rem;
      background: ${({ theme }) => theme.colors.green};

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
  width: 12.5rem;
  max-width: 80%; /* Garante que não ultrapasse a tela */
  overflow: hidden; /* Evita transbordo interno */
  z-index: 99;
  border: 0;

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

  @media (max-width: 1280px) {
    width: 70%;
  }

  @media (min-width: 375px) {
    width: 15.625rem;
    left: 50%; /* Alinha centralmente */
  }
`


