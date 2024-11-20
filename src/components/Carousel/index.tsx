import { CarrouselContainer } from "./styles"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "../Button"
import LazyImage from "../LazyImg"
import { products, type Product } from "./data"

export function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        const clearNextTimeout = () => clearTimeout(timeout)
        const nextTimeout = () => {
          if (mouseOver) return
          timeout = setTimeout(() => slider.next(), 10000)
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })

        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <CarrouselContainer>
      <div ref={sliderRef} className='keen-slider'>
        {products.map((product) => (
          <CarouselSlide key={product.id} product={product} />
        ))}
      </div>
    </CarrouselContainer>
  )
}

interface CarouselSlideProps {
  product: Product
}

function CarouselSlide({ product }: CarouselSlideProps) {
  return (
    <div
      className={`keen-slider__slide number-slide ${
        !product.inStock ? "out-of-stock" : ""
      }`}
    >
      <div className='photo'>
        <LazyImage src={product.image} alt={product.title} loading='lazy' />
      </div>
      <div className='text'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        {product.inStock ? (
          <Button
            href={`https://wa.me/5592993787566?text=${encodeURIComponent(
              `Olá, gostaria de saber mais sobre ${product.title}!`
            )}`}
            aria-label={`Saiba mais sobre ${product.title}`}
          >
            Saiba mais
          </Button>
        ) : (
          <p className='out-of-stock'>Produto Esgotado</p>
        )}
      </div>
    </div>
  )
}
