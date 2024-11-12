import { CarrouselContainer } from "./styles"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import StyledButton from "../Button"

interface Product {
  image: string
  title: string
  description: string
  inStock: boolean
}

const products: Product[] = [
  {
    image: "src/assets/IMG_8098.jpg",
    title: "Clean Detox",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    image: "src/assets/serun.jpg",
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: false,
  },
  // Adicione outros produtos conforme necessário
]

export function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
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
        {products.map((product, index) => (
          <div key={index} className='keen-slider__slide number-slide1'>
            <div className='photo'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='text'>
              <h1>{product.title}</h1>
              <img src='src/assets/5stars.svg' alt='Avaliação' />
              <p>{product.description}</p>
              {product.inStock ? (
                <StyledButton href='https://wa.me/5592993787566?text=Ol%C3%A1%2C%20gostaria%20de%20aproveitar%20as%20ofertas%20da%20Black%20Friday!%0A'>Comprar agora</StyledButton>
              ) : (
                <p className='out-of-stock'>Produto Esgotado</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </CarrouselContainer>
  )
}
