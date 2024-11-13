// src/components/ProductsGrid/ProductsGrid.tsx
import { ProductsListContainer, ProductCard, ProductsSection } from "./styles"

interface Product {
  id: number
  image: string
  name: string
  link: string
}

const products: Product[] = [
  {
    id: 1,
    image: "src/assets/IMG_8098.jpg",
    name: "Ampola de Reestruturação do Cortex",
    link: "https://exemplo.com/produto1",
  },
  {
    id: 2,
    image: "src/assets/serun.jpg",
    name: "Serum Revitalizante",
    link: "https://exemplo.com/produto2",
  },
  {
    id: 3,
    image: "src/assets/gloss_natual_e_clean_detox.jpg",
    name: "Kit Alisamento Natural",
    link: "https://exemplo.com/produto2",
  },
  {
    id: 4,
    image: "src/assets/mascara.jpg",
    name: "Mascara Equilíbrio THERAPY",
    link: "https://exemplo.com/produto2",
  },
  {
    id: 5,
    image: "src/assets/escova.jpg",
    name: "Escova de Cabelo",
    link: "https://exemplo.com/produto1",
  },
  {
    id: 6,
    image: "src/assets/perfume capilar.jpg",
    name: "Perfume Capilar",
    link: "https://exemplo.com/produto2",
  },
  {
    id: 7,
    image: "src/assets/reestruturador_bifasico.jpg",
    name: "Reestruturador bifásico Equilíbrio THERAPY",
    link: "https://exemplo.com/produto2",
  },
  {
    id: 8,
    image: "src/assets/restaurador cmc.jpg",
    name: "Restaurador do CMC Capilar",
    link: "https://exemplo.com/produto2",
  },
  {
    id: 9,
    image: "src/assets/shampoo.jpg",
    name: "Shampoo Equilíbrio THERAPY",
    link: "https://exemplo.com/produto2",
  },

  // Adicione mais produtos conforme necessário
]

export function ProductsGrid() {
  return (
    <ProductsSection aria-labelledby='products-heading'>
      <h1 id='products-heading'>Nossos Produtos</h1>
      <ProductsListContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <div className='product-image'>
              <img src={product.image} alt={`Imagem do ${product.name}`} />
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
            </div>
          </ProductCard>
        ))}
      </ProductsListContainer>
    </ProductsSection>
  )
}
