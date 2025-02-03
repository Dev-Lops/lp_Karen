import React, { useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import * as S from "./styles";
import { Product } from "./data";
import { Divider } from "../Divider";

interface CarouselProps {
  slides: Product[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<CarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: true },
    [Fade()]
  );

  // Formata preços em BRL
  const formatPrice = useCallback((price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }, []);

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
                    <S.ProductDescription>
                      <strong className="old-price">{`De ${formatPrice(
                        product.oldPrice
                      )}`}</strong>
                    </S.ProductDescription>
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
      <Divider />
    </S.Embla>
  );
};

export default EmblaCarousel;
