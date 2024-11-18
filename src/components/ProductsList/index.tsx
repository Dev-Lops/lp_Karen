// src/components/ProductsGrid/ProductsGrid.tsx

import { Section, Container, CardWrapper, CardContent } from "./styles"
import { CircleArrowOutUpRight, CircleSlash2 } from "lucide-react"

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
  id: number
  image: string
  name: string
  link: string
  isOutOfStock?: boolean
}

const products: Product[] = [
  {
    id: 1,
    image: img1,
    name: "Ampola de Reestruturação do Cortex",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Ampola%20de%20Reestruturação%20do%20Cortex",
    isOutOfStock: false,
  },
  {
    id: 2,
    image: img2,
    name: "Serum Revitalizante",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Serum%20Revitalizante",
    isOutOfStock: false,
  },
  {
    id: 3,
    image: img3,
    name: "Kit Alisamento Natural",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Kit%20Alisamento%20Natural",
    isOutOfStock: false,
  },
  {
    id: 4,
    image: img4,
    name: "Mascara Equilíbrio THERAPY",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Mascara%20Equilíbrio%20THERAPY",
    isOutOfStock: false,
  },
  {
    id: 5,
    image: img5,
    name: "Escova de Cabelo",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Escova%20de%20Cabelo",
    isOutOfStock: false,
  },
  {
    id: 6,
    image: img6,
    name: "Perfume Capilar",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Perfume%20Capilar",
    isOutOfStock: false,
  },
  {
    id: 7,
    image: img7,
    name: "Reestruturador bifásico Equilíbrio THERAPY",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Reestruturador%20bifásico%20Equilíbrio%20THERAPY",
    isOutOfStock: true,
  },
  {
    id: 8,
    image: img8,
    name: "Restaurador do CMC Capilar",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Restaurador%20do%20CMC%20Capilar",
    isOutOfStock: false,
  },
  {
    id: 9,
    image: img9,
    name: "Shampoo Equilíbrio THERAPY",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Shampoo%20Equilíbrio%20THERAPY",
    isOutOfStock: false,
  },
]

export function ProductsGrid() {
  return (
    <Section>
      <h2>Nossos Produtos</h2>
      <Container>
        {products.map((product) => (
          <CardWrapper key={product.id}>
            <div className={`box ${product.isOutOfStock ? "disabled" : ""}`}>
              <div
                className={`imgBox ${product.isOutOfStock ? "outOfStock" : ""}`}
              >
                <img
                  src={product.image}
                  alt={`Imagem do ${product.name}`}
                  loading='lazy'
                  className='lazy-image'
                />
                <div className='loading-placeholder'>Carregando...</div>{" "}
                {/* Placeholder */}
                {product.isOutOfStock && (
                  <div className='outOfStockText'>Produto Esgotado</div>
                )}
              </div>
              <div
                className={`icon ${product.isOutOfStock ? "outOfStock" : ""}`}
              >
                {/* Link com o botão "X" para produtos esgotados */}
                <a
                  href={product.isOutOfStock ? "#" : product.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`iconBox ${
                    product.isOutOfStock ? "disabled" : ""
                  }`}
                >
                  {product.isOutOfStock ? (
                    <span className='material-symbols-outlined'>
                      <CircleSlash2 strokeWidth={3} />
                    </span> //
                  ) : (
                    <span className='material-symbols-outlined'>
                      <CircleArrowOutUpRight strokeWidth={3} />
                    </span> //
                  )}
                </a>
              </div>
            </div>
            <CardContent>
              <h3>{product.name}</h3>
              <p>{product.isOutOfStock ? "Produto Esgotado" : "Disponível"}</p>
            </CardContent>
          </CardWrapper>
        ))}
      </Container>
    </Section>
  )
}
