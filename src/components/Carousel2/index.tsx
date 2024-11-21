import React, { useEffect } from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import Fade from "embla-carousel-fade"
import * as S from "./styles"
import { Product } from "./data" // Certifique-se de importar o tipo ou a lista de produtos

type PropType = {
  slides: Product[] // Alterado para usar Product[] em vez de number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext() // Muda para o próximo slide
      }, 5000) // Intervalo de 5 segundos para mudar o slide

      return () => clearInterval(interval) // Limpar intervalo quando o componente for desmontado
    }
  }, [emblaApi])

  return (
    <S.Embla>
      <S.EmblaViewport ref={emblaRef}>
        <S.EmblaContainer>
          {slides.map((product) => (
            <S.EmblaSlide key={product.id}>
              <S.EmblaSlideImgWrapper>
                <S.EmblaSlideImg src={product.image} alt={product.title} />
                <S.EmblaSlideInfo>
                  <h3>{product.title}</h3>

                  <p>
                    <strong className='old-price'>{`De R$ ${product.oldPrice}`}</strong>
                    <span className='current-price'>{` Por R$ ${product.currentPrice}`}</span>
                  </p>
                  {product.inStock ? (
                    <span>Em estoque</span>
                  ) : (
                    <span>Produto Indisponível</span>
                  )}
                </S.EmblaSlideInfo>
              </S.EmblaSlideImgWrapper>
            </S.EmblaSlide>
          ))}
        </S.EmblaContainer>
      </S.EmblaViewport>
    </S.Embla>
  )
}

export default EmblaCarousel
