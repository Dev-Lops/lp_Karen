import { CarrouselContainer } from "./styles"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "../Button"
import img1 from "../../assets/IMG_8098.jpg"
import img2 from "../../assets/serun.jpg"
import img3 from "../../assets/gloss_natual_e_clean_detox.jpg"
import img4 from "../../assets/mascara.jpg"
import img5 from "../../assets/escova.jpg"
import img6 from "../../assets/perfume capilar.jpg"
import img7 from "../../assets/reestruturador_bifasico.jpg"
import img8 from "../../assets/restaurador cmc.jpg"
import img9 from "../../assets/shampoo.jpg"

interface Product {
  image: string
  title: string
  description: string
  inStock: boolean
}

const products: Product[] = [
  {
    image: img1,
    title: "Ampola de Reestruturação do Cortex",
    description:
      "Ampola de alta performance, age reestruturando fibras instáveis, elásticas, quebradiças e opacas. Em apenas 5 minutos no conforto da sua casa.",
    inStock: true,
  },
  {
    image: img2,
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    image: img3,
    title: "Kit Alisamento Natural",
    description: "Conheça o Poder do Alisamento natural!",
    inStock: true,
  },
  {
    image: img4,
    title: "Mascara Equilíbrio THERAPY",
    description:
      "Efeito teia (resultado de salão), reposição hídrica, mineral, proteica e massa. Devolve aos fios força, maciez, promove resistência e vitalidade.",
    inStock: true,
  },
  {
    image: img5,
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    image: img6,
    title: "Perfume Capilar",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    image: img7,
    title: "Reestruturador bifásico Equilíbrio THERAPY",
    description:
      "Protege a fibra contra agressões externas, equilibra o PH e mantém a estrutura do córtex com vitalidade.",
    inStock: false,
  },
  {
    image: img8,
    title: "Restaurador do CMC Capilar",
    description:
      "O kit 18 Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico à fibra.",
    inStock: true,
  },
  {
    image: img9,
    title: "Shampoo Equilíbrio THERAPY",
    description:
      "Age no couro cabeludo com ação antimicrobiana, antifúngica, antisséptica e cicatrizante. Combate radicais livres, fungos, oleosidade, caspa, promovendo oxigenação e crescimento.",
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
          <div
            key={index}
            className={`keen-slider__slide number-slide ${
              !product.inStock ? "out-of-stock" : ""
            }`}
          >
            <div className='photo'>
              {/* Adicionando o atributo loading="lazy" para carregar a imagem somente quando necessário */}
              <img src={product.image} alt={product.title} loading='lazy' />
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
        ))}
      </div>
    </CarrouselContainer>
  )
}
