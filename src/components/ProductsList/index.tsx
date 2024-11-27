import { useState } from "react"
import LazyImage from "../LazyImg"
import {
  Section,
  Container,
  CardWrapper,
  CardContent,
  CheckoutButton,
  Title,
} from "./styles"
import { ShoppingCart } from "lucide-react"
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
    // Agrupa os produtos por ID e calcula a quantidade de cada um
    const groupedProducts = cart.reduce<
      Record<number, { product: Product; quantity: number }>
    >((acc, item) => {
      if (acc[item.id]) {
        acc[item.id].quantity += 1
      } else {
        acc[item.id] = { product: item, quantity: 1 }
      }
      return acc
    }, {})

    // Cria a mensagem do WhatsApp com destaque para a quantidade de cada produto
    const message = Object.values(groupedProducts)
      .map(
        ({ product, quantity }) =>
          ` *${
            product.title
          }* - Quantidade: ${quantity} - Preço Unitário: R$ ${product.currentPrice
            .toFixed(2)
            .replace(".", ",")} - Subtotal: R$ ${(
            product.currentPrice * quantity
          )
            .toFixed(2)
            .replace(".", ",")}`
      )
      .join("%0A")

    // Calcula o total final do carrinho
    const total = calculateTotal()
    const totalMessage = `%0A%0A *Valor Total:* R$ ${total
      .toFixed(2)
      .replace(".", ",")}`

    const phoneNumber = "5592993787566"
    const url = `https://wa.me/${phoneNumber}?text=Olá!%0A%0AEu gostaria de finalizar a compra desses itens:%0A${message}${totalMessage}%0A%0AObrigado!`
    window.open(url, "_blank")
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
                {/* Tag de desconto sobre a imagem */}
                {product.discount > 0 && product.inStock && (
                  <span className='discount-tag'>{product.discount}% OFF</span>
                )}
                <LazyImage
                  src={product.image}
                  alt={`Imagem do ${product.title}`}
                  loading='lazy'
                  className='lazy-image'
                />
                {!product.inStock && <div className='outOfStockText'></div>}
                <div className={`icon ${!product.inStock ? "outOfStock" : ""}`}>
                  {product.inStock && (
                    <button
                      onClick={() => addToCart(product)}
                      className='iconBox'
                      aria-label='carrinho'
                    >
                      Comprar
                      <ShoppingCart />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <Title>{product.title}</Title>
            <CardContent className='end'>
              {/* Exibe preço apenas se o produto estiver em estoque */}
              {product.inStock ? (
                <>
                  <p>
                    De:{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "white",
                      }}
                    >
                      R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                    </span>
                  </p>
                  <p>
                    Por:{" "}
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                    </span>
                  </p>
                </>
              ) : (
                <p style={{ color: "red" }}>Produto Indisponível</p>
              )}
            </CardContent>
          </CardWrapper>
        ))}
      </Container>

      {cart.length > 0 && (
        <CheckoutButton onClick={redirectToWhatsApp}>
          Finalizar Compra
          <span className='cart-count'>{cart.length}</span>
        </CheckoutButton>
      )}
    </Section>
  )
}
