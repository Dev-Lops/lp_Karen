// src/components/ProductsGrid/ProductsGrid.tsx

import { Section, Container, CardWrapper, CardContent } from "./styles"
import { CircleArrowOutUpRight, CircleSlash2 } from "lucide-react"

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
    image: "https://dtsel6fm8qr8n.cloudfront.net/IMG_8098.avif",
    name: "Ampola de Reestruturação do Cortex",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Ampola%20de%20Reestruturação%20do%20Cortex",
    isOutOfStock: false,
  },
  {
    id: 2,
    image: "https://dtsel6fm8qr8n.cloudfront.net/serun.avif",
    name: "Serum Revitalizante",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Serum%20Revitalizante",
    isOutOfStock: false,
  },
  {
    id: 3,
    image:
      "https://dtsel6fm8qr8n.cloudfront.net/gloss_natual_e_clean_detox.avif",
    name: "Kit Alisamento Natural",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Kit%20Alisamento%20Natural",
    isOutOfStock: false,
  },
  {
    id: 4,
    image: "https://dtsel6fm8qr8n.cloudfront.net/mascara.avif",
    name: "Mascara Equilíbrio THERAPY",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Mascara%20Equilíbrio%20THERAPY",
    isOutOfStock: false,
  },
  {
    id: 5,
    image: "https://dtsel6fm8qr8n.cloudfront.net/escova.webp",
    name: "Escova de Cabelo",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Escova%20de%20Cabelo",
    isOutOfStock: false,
  },
  {
    id: 6,
    image: "https://dtsel6fm8qr8n.cloudfront.net/perfume capilar.avif",
    name: "Perfume Capilar",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Perfume%20Capilar",
    isOutOfStock: false,
  },
  {
    id: 7,
    image: "https://dtsel6fm8qr8n.cloudfront.net/reestruturador_bifasico.avif",
    name: "Reestruturador bifásico Equilíbrio THERAPY",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Reestruturador%20bifásico%20Equilíbrio%20THERAPY",
    isOutOfStock: true,
  },
  {
    id: 8,
    image: "https://dtsel6fm8qr8n.cloudfront.net/restaurador cmc.avif",
    name: "Restaurador do CMC Capilar",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20Restaurador%20do%20CMC%20Capilar",
    isOutOfStock: false,
  },
  {
    id: 9,
    image: "https://dtsel6fm8qr8n.cloudfront.net/shampoo.avif",
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
          <CardWrapper key={product.id} data-aos='zoom-in'>
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
