import { useState } from "react"
import LazyImage from "../LazyImg"
import {
  Section,
  Container,
  CardWrapper,
  CardContent,
  CheckoutButton,
  ClearCartButton, // Novo botão
} from "./styles"
import { X, ShoppingCart } from "lucide-react"
import { products } from "./data"

export interface Product {
  id: number
  oldPrice: number
  currentPrice: number
  image: string
  title: string
  description: string
  inStock: boolean
  discount: number
}

export function ProductsGrid() {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    if (product.inStock) {
      setCart((prevCart) => [...prevCart, product])
    }
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.currentPrice, 0)
  }

  const redirectToWhatsApp = () => {
    const message = cart
      .map(
        (item) =>
          `*${item.title}* - Preço: R$ ${item.currentPrice
            .toFixed(2)
            .replace(".", ",")}`
      )
      .join("%0A")

    const total = calculateTotal()
    const totalMessage = `%0A%0A*Valor Total:* R$ ${total
      .toFixed(2)
      .replace(".", ",")}`

    const phoneNumber = "5592993787566"
    const url = `https://wa.me/${phoneNumber}?text=${message}${totalMessage}`
    window.open(url, "_blank")
  }

  // Função para limpar o carrinho
  const clearCart = () => {
    setCart([]) // Limpa todos os itens do carrinho
  }

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
            <div className={`box ${!product.inStock ? "disabled" : ""}`}>
              <div className={`imgBox ${!product.inStock ? "outOfStock" : ""}`}>
                <LazyImage
                  src={product.image}
                  alt={`Imagem do ${product.title}`}
                  loading='lazy'
                  className='lazy-image'
                />
                <div className='loading-placeholder'>Carregando...</div>
                {!product.inStock && (
                  <div className='outOfStockText'>Produto Esgotado</div>
                )}
              </div>
              <div className={`icon ${!product.inStock ? "outOfStock" : ""}`}>
                {!product.inStock ? (
                  <span className='material-symbols-outlined'>
                    <X />
                  </span>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className='iconBox'
                    aria-label='carrinho'
                  >
                    <ShoppingCart />
                  </button>
                )}
              </div>
            </div>
            <CardContent>
              <h3>{product.title}</h3>
              <p>
                De:{" "}
                <span style={{ textDecoration: "line-through" }}>
                  R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                </span>
              </p>
              <p>
                Por:{" "}
                <span style={{ color: "green", fontWeight: "bold" }}>
                  R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                </span>
              </p>
              <p>
                {product.discount > 0
                  ? `Desconto: ${product.discount}%`
                  : "Sem desconto"}
              </p>
            </CardContent>
          </CardWrapper>
        ))}
      </Container>

      {cart.length > 0 && (
        <>
          <ClearCartButton onClick={clearCart}>x</ClearCartButton>
          <CheckoutButton onClick={redirectToWhatsApp}>
            Finalizar Compra no WhatsApp
            <span className='cart-count'>{cart.length}</span>
          </CheckoutButton>

          {/* Novo botão para limpar o carrinho */}
        </>
      )}
    </Section>
  )
}
