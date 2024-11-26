// src/components/ProductsGrid/ProductsGrid.tsx

import LazyImage from "../LazyImg"
import { products } from "./data"
import { Section, Container, CardWrapper, CardContent } from "./styles"
import { Send, X } from "lucide-react"

export function ProductsGrid() {
  return (
    <Section>
      <h2 data-aos='fade-up' data-aos-duration='3000'>
        Nossos Produtos
      </h2>
      <Container>
        {products.map((product) => (
          <CardWrapper
            key={product.id}
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <div className={`box ${product.isOutOfStock ? "disabled" : ""}`}>
              <div
                className={`imgBox ${product.isOutOfStock ? "outOfStock" : ""}`}
              >
                <LazyImage
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
                      <X />
                    </span> //
                  ) : (
                    <span className='material-symbols-outlined'>
                      <Send />
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
