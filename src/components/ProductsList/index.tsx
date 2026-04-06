import ButtonWithEffect from '@/components/ButtonStyled/ButtonStyled'
import { CartButton } from '@/components/CartButton'
import { CheckoutDialog } from '@/components/CheckoutDialog'
import { BIRTHDAY_CAMPAIGN_CONFIG, getCampaignStatus } from '@/config/birthday-campaign'
import { useEffect, useMemo, useState } from 'react'
import { Product, products } from '../../utils/data'
import LazyImage from '../LazyImg'
import { Toaster } from '../Toaster'
import {
  Box,
  CardContent,
  CardWrapper,
  Container,
  Section,
  Title,
} from './styles'

type CartItem = Product & {
  unitPrice?: number
  appliedDiscount?: number
}

function getDiscountByProductId(productId: number) {
  return (
    BIRTHDAY_CAMPAIGN_CONFIG.productDiscounts[
    productId as keyof typeof BIRTHDAY_CAMPAIGN_CONFIG.productDiscounts
    ] ?? 0
  )
}

function getDiscountedPrice(price: number, discount: number) {
  const discounted = price - price * (discount / 100)
  return Number(discounted.toFixed(2))
}

function formatBRL(value: number) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

export function ProductsGrid() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [showToaster, setShowToaster] = useState(false)
  const [toasterMessage, setToasterMessage] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [isCampaignActive, setIsCampaignActive] = useState(
    getCampaignStatus() === 'live'
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCampaignActive(getCampaignStatus() === 'live')
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const enhancedProducts = useMemo(() => {
    return products.map((product) => {
      const discount = getDiscountByProductId(product.id)
      const promoPrice = getDiscountedPrice(product.currentPrice, discount)

      return {
        ...product,
        discount,
        calculatedPromoPrice: promoPrice,
      }
    })
  }, [])

  const addToCart = (
    product: Product & { discount?: number; calculatedPromoPrice?: number }
  ) => {
    if (!product.inStock) return

    const appliedDiscount = isCampaignActive ? product.discount ?? 0 : 0
    const unitPrice =
      isCampaignActive && product.calculatedPromoPrice
        ? product.calculatedPromoPrice
        : product.currentPrice

    const cartItem: CartItem = {
      ...product,
      unitPrice,
      appliedDiscount,
    }

    setCart((prevCart) => [...prevCart, cartItem])
    setToasterMessage(`"${product.title}" foi adicionado ao carrinho!`)
    setShowToaster(true)
  }

  const handleToasterClose = () => {
    setShowToaster(false)
  }

  useEffect(() => {
    if (cart.length === 0) {
      setIsDialogOpen(false)
    }
  }, [cart])

  return (
    <Section id="products">
      <h2>Nossos Produtos</h2>

      <Container>
        {enhancedProducts.map((product) => (
          <CardWrapper key={product.id} $bfActive={isCampaignActive}>
            <Box
              className={!product.inStock ? 'disabled' : ''}
              $bfActive={isCampaignActive}
            >
              <div className={`imgBox ${!product.inStock ? 'outOfStock' : ''}`}>
                {isCampaignActive && product.inStock && product.discount > 0 && (
                  <span className="discount-tag">
                    {product.discount}% off
                  </span>
                )}

                <LazyImage
                  src={product.image}
                  alt={`Imagem do ${product.title}`}
                  loading="lazy"
                  className="lazy-image"
                />

                {!product.inStock && <div className="outOfStockText" />}

                <div className={`icon ${!product.inStock ? 'outOfStock' : ''}`}>
                  {product.inStock && (
                    <ButtonWithEffect onClick={() => addToCart(product)} />
                  )}
                </div>
              </div>
            </Box>

            <Title $bfActive={isCampaignActive}>{product.title}</Title>

            <CardContent className="end" $bfActive={isCampaignActive}>
              {product.inStock ? (
                <>
                  {isCampaignActive && product.discount > 0 ? (
                    <>
                      <div className="campaign-pill">
                        edição especial
                      </div>

                      <p className="price-from">
                        de <span>{formatBRL(product.currentPrice)}</span>
                      </p>

                      <p className="price-now">
                        {formatBRL(product.calculatedPromoPrice)}
                      </p>

                      <p className="price-save">
                        economia de{' '}
                        {formatBRL(product.currentPrice - product.calculatedPromoPrice)}
                      </p>
                    </>
                  ) : (
                    <p className="price-default">
                      {formatBRL(product.currentPrice)}
                    </p>
                  )}
                </>
              ) : (
                <p className="unavailable">Produto indisponível</p>
              )}
            </CardContent>
          </CardWrapper>
        ))}
      </Container>

      {!isDialogOpen && (
        <CartButton
          itemCount={cart.length}
          onClick={() => setIsDialogOpen(true)}
        />
      )}

      <CheckoutDialog
        items={cart}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onRemove={(id: number) =>
          setCart((prev) => prev.filter((item) => item.id !== id))
        }
        onIncrement={(id: number) => {
          setCart((prev) => {
            const found = prev.find((item) => item.id === id)
            return found ? [...prev, found] : prev
          })
        }}
        onDecrement={(id: number) => {
          setCart((prev) => {
            const index = prev.findIndex((item) => item.id === id)
            if (index !== -1) {
              const newCart = [...prev]
              newCart.splice(index, 1)
              return newCart
            }
            return prev
          })
        }}
      />

      <Toaster
        message={toasterMessage}
        show={showToaster}
        onClose={handleToasterClose}
      />
    </Section>
  )
}