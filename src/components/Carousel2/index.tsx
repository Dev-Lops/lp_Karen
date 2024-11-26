import React, { useEffect } from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import Fade from "embla-carousel-fade"
import * as S from "./styles"
import { Product } from "./data"

type PropType = {
  slides: Product[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: true }, // Loop habilitado para melhor experiência
    [Fade()] // Adiciona a transição de fade
  )

  // Função para formatar preços em BRL
  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext() // Avança para o próximo slide automaticamente
      }, 5000) // Intervalo de 5 segundos

      return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
    }
  }, [emblaApi])

  return (
    <S.Embla>
      <S.EmblaViewport ref={emblaRef}>
        <S.EmblaContainer>
          {slides.map((product) => (
            <S.EmblaSlide key={product.id}>
              <S.EmblaSlideImgWrapper>
                {product.inStock && (
                  <S.DiscountTag>{`-${product.discount}%`}</S.DiscountTag>
                )}
                <S.EmblaSlideImg src={product.image} alt={product.title} />
              </S.EmblaSlideImgWrapper>
              <S.EmblaSlideInfo>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                {product.inStock ? (
                  <>
                    <S.ProductDescription>
                      <strong className='old-price'>{`De ${formatPrice(
                        product.oldPrice
                      )}`}</strong>
                      <br />
                      <span className='current-price'>{` Por ${formatPrice(
                        product.currentPrice
                      )}`}</span>
                    </S.ProductDescription>
                    <p>{product.description}</p>
                    <S.inStock>Em estoque</S.inStock>
                  </>
                ) : (
                  <S.inStock>Produto Indisponível</S.inStock>
                )}
              </S.EmblaSlideInfo>
            </S.EmblaSlide>
          ))}
        </S.EmblaContainer>
      </S.EmblaViewport>
    </S.Embla>
  )
}

export default EmblaCarousel
