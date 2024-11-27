import styled from "styled-components"

export const Embla = styled.div`
  max-width: 100vw;
  font-family: "Montserat", sans-serif;

  --slide-height: 80vh;
  /* --slide-spacing: 1rem; */
  --slide-size: 100%;
  user-select: none;
  padding: 20px 0;

  @media (max-width: 80rem) {
    --slide-height: 80vh;
    --slide-size: 100%;
  }

  @media (max-width: 87.5rem) {
    --slide-height: 80vh;
    --slide-size: 100%;
  }
`

export const EmblaViewport = styled.div`
  overflow: hidden;
`

export const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
  transition: transform 0.5s ease-in-out; /* Adicionando transição suave */
  gap: var(--slide-spacing); /* Espaçamento entre slides */
  transition: opacity 0.8s ease, transform 0.8s ease; /* Transição suave para o fade */
`

export const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);

  display: flex;
  flex-direction: column; /* Por padrão, coluna */

  @media (min-width: 768px) {
    flex-direction: row; /* Alinha lado a lado em telas maiores */
  }
`

export const EmblaSlideImgWrapper = styled.div`
  position: relative;
  width: 100%; /* Ajusta o tamanho da imagem em telas maiores */
  max-width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (min-width: 80rem) {
    width: 90%;
  }
`

export const EmblaSlideImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
  user-select: none;

  padding: 5px;
  border-radius: 50px;

  @media (min-width: 80rem) {
  }

  @media (min-width: 87.5rem) {
  }
`

export const DiscountTag = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background: red; /* Cor de destaque para a tarja */
  color: white;
  font-weight: bold;
  padding: 1rem;
  border-radius: 100%;
  z-index: 1;
  font-size: 0.9rem;
  font-size: 1.5rem; /* Ajuste para telas maiores */

  @media (min-width: 768px) {
    font-size: 2rem; /* Ajuste para telas maiores */
  }
`

export const EmblaSlideInfo = styled.div`
  font-weight: 400;
  flex: 1; /* O conteúdo ocupa o restante do espaço */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px;

  p {
    width: 100%;
    text-align: start;

    @media (min-width: 80rem) {
      font-size: 1.25rem;
    }
    @media (min-width: 87.5rem) {
      font-size: 1.5rem;
    }
  }
  > span {
    font-weight: 600;
    margin-bottom: 0.5rem;
    background-color: #133525;
    max-width: 200px;
    text-align: center;
    border-radius: 20px;
    padding: 15px 20px;
  }

  @media (min-width: 80rem) {
    width: 80%;
    align-items: start;
    margin-left: 30px;
    text-align: start;

    padding: 2rem;
  }
  @media (min-width: 87.5rem) {
    padding: 2rem;
  }

  .old-price {
    text-decoration: line-through;
    margin-right: 0.5rem;
    color: pink;
    font-weight: 100;
    font-size: clamp(1.2rem, 5vw, 1.5rem);

    letter-spacing: 3px;
    font-weight: bold;
  }

  .current-price {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    margin-bottom: 20px;
    letter-spacing: 3px;
    font-weight: bold;
    color: #fff;
  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
    padding: 0.6rem;
  }
`

export const ProductTitle = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2rem);
  width: 100%;

  letter-spacing: 3px;

  font-weight: 500;

  @media (min-width: 87.5rem) {
    font-size: 3rem;
  }
`

export const ProductDescription = styled.p`
  font-size: 1.275rem;
  margin: 0.5rem 0;

  @media (min-width: 80rem) {
    font-size: 1.75rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 2rem;
  }
`

export const inStock = styled.span`
  font-size: 1.125rem;

  @media (min-width: 80rem) {
    font-size: 1.25rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 1.5rem;
  }
`
