import styled from "styled-components";

export const Embla = styled.div`
  max-width: 100vw;
  font-family: "Montserat", sans-serif;

  --slide-height: 100vh;
  --slide-size: 100%;
  user-select: none;

  @media (max-width: 80rem) {
    --slide-height: 100%;
    --slide-size: 100%;
  }

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
  margin-left: calc(var(--slide-spacing) * -1);
  gap: var(--slide-spacing);
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

export const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EmblaSlideImgWrapper = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 80rem) {
    width: 50%;
  }
`;

export const EmblaSlideImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  padding: 5px;
  border-radius: 10px;
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: red;
  color: white;
  font-weight: bold;
  padding: 1rem 1rem;
  border-radius: 10px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const EmblaSlideInfo = styled.div`
  font-weight: 400;
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px;

  p {
    text-align: center;

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
    
    margin-left: 30px;
   

    padding: 2rem;
  }

  .old-price {
    /* margin-right: 0.5rem; */
    font-weight: 100;
    font-size: clamp(1.5rem, 5vw, 2rem);
    letter-spacing: 3px;
    font-weight: bold;
    text-align: center;
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
    margin: 1rem;
  }
`;

export const ProductTitle = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2rem);
  width: 100%;
  letter-spacing: 3px;
  font-weight: 500;

  @media (min-width: 87.5rem) {
    font-size: 3rem;
  }
`;

export const ProductDescription = styled.p`
  display: flex;
  font-size: 1.275rem;
  margin: 0.5rem 0;
  text-align: justify;

  @media (min-width: 80rem) {
    font-size: 1.75rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 2rem;
  }
`;

export const inStock = styled.span`
  font-size: 1.125rem;

  @media (min-width: 80rem) {
    font-size: 1.25rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 1.5rem;
  }
`;
