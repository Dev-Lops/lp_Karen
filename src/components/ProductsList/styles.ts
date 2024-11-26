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

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
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
      background-color: ${({ theme }) => theme.colors.gray};
      border-radius: 1.25rem;
      border-bottom-right-radius: 0;
    }

    .imgBox {
      position: absolute;
      inset: 0;
      overflow: hidden;

      /* Aplica o esmaecimento quando o produto estiver esgotado */
      &.outOfStock {
        ::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        img {
          opacity: 0.2; /* Opacidade da imagem reduzida */
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
          z-index: 2; /* Garante que o texto fique sobre a imagem */
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

        span {
          color: #fff;
          font-size: 2rem;
        }
      }
    }

    /* Botão de "Indisponível" */
    .outOfStockButton {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      color: red;
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      text-align: center;
      font-size: 1rem;
      z-index: 3; /* Fica sobre a imagem */
      display: flex;
      justify-content: center;
      align-items: center;
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
    margin: 0.625rem 0 1.25rem;
    color: #565656;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.625rem;

    li {
      background: var(--clr-tag, #ccc);
      color: ${({ theme }) => theme.colors.green};
      font-weight: 700;
      font-size: 0.8rem;
      padding: 0.375rem 0.625rem;
      border-radius: 0.188rem;
    }
  }
`
