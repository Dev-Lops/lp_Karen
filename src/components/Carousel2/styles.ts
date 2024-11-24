import styled from "styled-components"

export const Embla = styled.div`
  max-width: 100vw;

  --slide-height: 80vh;
  /* --slide-spacing: 1rem; */
  --slide-size: 100%;
  user-select: none;

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

  @media (min-width: 80rem) {
    width: 100%;
  }
`

export const EmblaSlideImg = styled.img`
  display: block;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
  user-select: none;
  border-radius: 8px;

  @media (min-width: 80rem) {
    object-fit: cover;
    /* height: 100%; */
    /* height: 70%; */
  }

  /* @media (min-width: 87.5rem) {
    object-fit: cover;
    height: 70%; /* Ajusta a altura em telas maiores */
`

export const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: red; /* Cor de destaque para a tarja */
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 8px;
  z-index: 1;
  font-size: 0.9rem;
  font-size: 1.5rem; /* Ajuste para telas maiores */

  @media (min-width: 768px) {
    font-size: 2rem; /* Ajuste para telas maiores */
  }
`

export const EmblaSlideInfo = styled.div`
  font-family: "Jura", serif;
  font-weight: 400;
  background: rgb(85, 118, 85, 0.8);
  padding: 1rem;
  border-radius: 8px;
  flex: 1; /* O conteúdo ocupa o restante do espaço */
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 80rem) {
    width: 100%;
    /* height: 70%; */

    padding: 2rem; /* Maior espaçamento */
  }
  @media (min-width: 87.5rem) {
    /* height: 70%; */

    padding: 2rem; /* Maior espaçamento */
  }

  .old-price {
    text-decoration: line-through;
    margin-right: 0.5rem;
    color: #e74143;
    font-weight: 100;
  }

  .current-price {
    font-weight: bold;
    color: #fff;
  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    padding: 0.6rem;
  }
`

export const ProductTitle = styled.h3`
  font-size: 1.125rem;

  @media (min-width: 80rem) {
    font-size: 2rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 2.5rem;
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
  font-size: 1.5rem;

  @media (min-width: 80rem) {
    font-size: 2rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 2.5;
  }
`
