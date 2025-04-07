import { EmblaOptionsType } from "embla-carousel";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import { Product } from "../../utils/data";
import * as S from "./styles";

interface CarouselProps {
  slides: Product[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<CarouselProps> = ({ slides, options }) => {
  // Ativando loop e o plugin de fade
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: true },
    [Fade()]
  );

  // Rola automaticamente a cada 5s
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <S.Embla>
      <S.EmblaViewport ref={emblaRef}>
        <S.EmblaContainer>
          {slides.map((product) => (
            <S.EmblaSlide key={product.id}>
              <S.EmblaSlideImgWrapper>
                <S.EmblaSlideImg
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />
              </S.EmblaSlideImgWrapper>

              <S.EmblaSlideInfo>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                {product.inStock ? (
                  <>
                    <p>{product.description}</p>
                    <S.InStock>Produto Disponível</S.InStock>
                  </>
                ) : (
                  <S.InStock>Produto Indisponível</S.InStock>
                )}
              </S.EmblaSlideInfo>
            </S.EmblaSlide>
          ))}
        </S.EmblaContainer>
      </S.EmblaViewport>

    </S.Embla>
  );
};

export default EmblaCarousel;
