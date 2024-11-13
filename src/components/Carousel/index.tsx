// BenefitsCarousel/index.tsx
import { CarrouselContainer } from "./styles"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "../Button"

interface Product {
  image: string
  title: string
  description: string
  inStock: boolean
}

const products: Product[] = [
  {
    image: "src/assets/IMG_8098.jpg",
    title: "Ampola de Reestruturação do Cortex",
    description:
      "Ampola de alta performance, age reestruturando fibras instáveis, elásticas, quebradiças e opacas. Em apenas 5 minutos no conforto da sua casa.",
    inStock: true,
  },
  {
    image: "src/assets/serun.jpg",
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    image: "src/assets/gloss_natual_e_clean_detox.jpg",
    title: "Kit Alisamento Natural",
    description: "Conheça o Poder do Alisamento natural!",
    inStock: true,
  },
  {
    image: "src/assets/mascara.jpg",
    title: "Mascara Equilíbrio THERAPY",
    description:
      "Efeito teia(resultado de salão), reposição hídrica, mineral, proteica, massa. Devolve aos fios força, maciez, promove resistência e vitalidade.",
    inStock: true,
  },
  {
    image: "src/assets/escova.jpg",
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    image: "src/assets/perfume capilar.jpg",
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    image: "src/assets/reestruturador_bifasico.jpg",
    title: "Reestruturador bifásico Equilíbrio THERAPY",
    description:
      "Proteje a fibra contra agressões externas, equilibra o PH e mantém a estrutura do cortéx com vitalidade.",
    inStock: false,
  },
  {
    image: "src/assets/restaurador cmc.jpg",
    title: "Restaurador do CMC Capilar",
    description:
      "O kit 18 Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico a fibra.",
    inStock: true,
  },
  {
    image: "src/assets/shampoo.jpg",
    title: "Shampoo Equilíbrio THERAPY",
    description:
      "Age no couro cabeludo  com ação antimicrobiana, antifúngica, antisséptica e cicatrizantes. Combate radicais livres, fungos, oleosidade,descamação pós progressiva, caspas, dermatites,promovendo oxigenação  e crescimento.",
    inStock: true,
  },
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
          }, 10000)
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
          <div key={index} className='keen-slider__slide number-slide'>
            <div className='photo'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='text'>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              {product.inStock ? (
                <Button href='https://wa.me/c/559293787566'>Saiba mais</Button>
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
