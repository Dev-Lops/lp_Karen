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
    // Contabilizar a quantidade de cada produto
    const productQuantities = cart.reduce(
      (acc: { [key: string]: number }, item) => {
        acc[item.title] = (acc[item.title] || 0) + 1
        return acc
      },
      {}
    )

    // Criar a mensagem com a lista de produtos e seus preços
    const message = Object.entries(productQuantities)
      .map(([title, quantity]) => {
        const product = products.find((prod) => prod.title === title)
        return `${quantity}x ${title}: de R$ ${product?.currentPrice
          .toFixed(2)
          .replace(".", ",")}`
      })
      .join("%0A")

    // Calcular o total
    const total = calculateTotal()
    const totalMessage = `%0A%0A*Total:* R$ ${total
      .toFixed(2)
      .replace(".", ",")}`

    const phoneNumber = "5592993787566"
    const url = `https://wa.me/${phoneNumber}?text=Olá%20gostaria%20de%20comprar%20os%20seguintes%20produtos:%0A${message}${totalMessage}`
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
                <LazyImage
                  src={product.image}
                  alt={`Imagem do ${product.title}`}
                  loading='lazy'
                  className='lazy-image'
                />
                <p>{product.discount}</p>
                <div className='loading-placeholder'>Carregando...</div>
                {!product.inStock && (
                  <div className='outOfStockText'>Produto Esgotado</div>
                )}
              </div>
              <div className={`icon ${!product.inStock ? "outOfStock" : ""}`}>
                {product.inStock && (
                  <button
                    onClick={() => addToCart(product)}
                    className={`iconBox ${!product.inStock ? "disabled" : ""}`}
                    aria-label='comprar'
                  >
                    Comprar
                    <ShoppingCart />
                  </button>
                )}
              </div>
            </div>
            <Title>{product.title}</Title>
            {product.inStock && (
              <CardContent className='end'>
                <p>
                  De:{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "white",
                      fontWeight: "100",
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
              </CardContent>
            )}
          </CardWrapper>
        ))}
      </Container>

      {cart.length > 0 && (
        <>
          <CheckoutButton onClick={redirectToWhatsApp}>
            Finalizar Compra
            <span className='cart-count'>{cart.length}</span>
          </CheckoutButton>
        </>
      )}
    </Section>
  )
}
