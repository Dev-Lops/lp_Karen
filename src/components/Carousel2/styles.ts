import styled from "styled-components";

export const Embla = styled.div`
  max-width: 100vw;
  font-family: "Montserrat", sans-serif;
  user-select: none;
  --slide-height: 100vh;
  --slide-size: 100%;

  @media (max-width: 87.5rem) {
    --slide-height: 100%;
    --slide-size: 100%;
  }
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
`;

export const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  gap: var(--slide-spacing);
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 var(--slide-size);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EmblaSlideImgWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 80rem) {
    width: 50%;
  }
`;

export const EmblaSlideImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: red;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const EmblaSlideInfo = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem;

  p {
    text-align: center;
    font-size: 1rem;

    @media (min-width: 80rem) {
      font-size: 1.25rem;
    }
  }

  .old-price {
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
  }

  .current-price {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    font-weight: bold;
    color: #fff;
  }
`;

export const ProductTitle = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2rem);
  width: 100%;
  font-weight: 500;

  @media (min-width: 87.5rem) {
    font-size: 3rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  text-align: justify;
  margin: 0.5rem 0;

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`;

export const InStock = styled.span`
  font-size: 1rem;

  @media (min-width: 80rem) {
    font-size: 1.25rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 1.5rem;
  }
`;
