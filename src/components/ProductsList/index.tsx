import ButtonWithEffect from '@/components/ButtonStyled/ButtonStyled';
import { CartButton } from '@/components/CartButton';
import { CheckoutDialog } from '@/components/CheckoutDialog';
import { BLACK_FRIDAY_CONFIG, isBlackFridayActive } from '@/config/blackfriday';
import { useEffect, useState } from "react";
import { Product, products } from "../../utils/data";
import LazyImage from "../LazyImg";
import { Toaster } from "../Toaster";
import {
  Box,
  CardContent,
  CardWrapper,
  Container,
  Section,
  Title
} from "./styles";

export function ProductsGrid() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Estado que controla se a Black Friday está ativa
  const [isBFActive, setIsBFActive] = useState(isBlackFridayActive());

  useEffect(() => {
    // Atualiza o estado a cada minuto para verificar se a BF iniciou/terminou
    const interval = setInterval(() => {
      setIsBFActive(isBlackFridayActive());
    }, 60000); // 1 minuto

    return () => clearInterval(interval);
  }, []);

  const addToCart = (product: Product) => {
    if (product.inStock) {
      setCart((prevCart) => [...prevCart, product]);
      setToasterMessage(`"${product.title}" foi adicionado ao carrinho!`);
      setShowToaster(true);
    }
  };

  const handleToasterClose = () => {
    setShowToaster(false);
  };



  useEffect(() => {
    if (cart.length === 0) {
      setIsDialogOpen(false);
    }
  }, [cart]);

  return (
    <Section id='products'>
      <h2>Nossos Produtos</h2>
      <Container>
        {products.map((product) => (
          <CardWrapper key={product.id} $bfActive={isBFActive}>
            <Box className={!product.inStock ? "disabled" : ""} $bfActive={isBFActive}>
              <div className={`imgBox ${!product.inStock ? "outOfStock" : ""}`}>
                {/* Badge de desconto Black Friday */}
                {isBFActive && product.inStock && (
                  <span className="discount-tag bg-black text-yellow-400 border-2 border-yellow-400 font-black uppercase tracking-wider">
                    🔥 {BLACK_FRIDAY_CONFIG.productDiscounts[product.id as keyof typeof BLACK_FRIDAY_CONFIG.productDiscounts]}% OFF
                  </span>
                )}
                <LazyImage
                  src={product.image}
                  alt={`Imagem do ${product.title}`}
                  loading="lazy"
                  className="lazy-image"
                />
                {!product.inStock && <div className="outOfStockText" />}
                <div className={`icon ${!product.inStock ? "outOfStock" : ""}`}>
                  {product.inStock && (
                    <ButtonWithEffect onClick={() => addToCart(product)} />
                  )}
                </div>
              </div>
            </Box>
            <Title $bfActive={isBFActive}>{product.title}</Title>
            <CardContent className="end" $bfActive={isBFActive}>
              {product.inStock ? (
                <>
                  {isBFActive ? (
                    // Preços da Black Friday
                    <>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="bg-gradient-to-r from-black to-gray-900 text-yellow-400 text-sm font-black px-3 py-1.5 rounded-full border-2 border-yellow-400 shadow-lg animate-pulse">
                          ⚡ BLACK FRIDAY
                        </span>
                      </div>
                      <p className="text-sm mb-1">
                        De:{" "}
                        <span style={{ textDecoration: "line-through", color: "#999", fontSize: '1rem' }}>
                          R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                        </span>
                      </p>
                      <p className="text-lg">
                        Por:{" "}
                        <span style={{ fontWeight: "900", color: "#FFD700", fontSize: '1.75rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                          R$ {product.promoPrice.toFixed(2).replace(".", ",")}
                        </span>
                      </p>
                    </>
                  ) : (
                    // Preço normal quando não está na Black Friday
                    <p style={{ fontWeight: "bold", fontSize: '1.75rem', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                      R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                    </p>
                  )}
                </>
              ) : (
                <p style={{ color: "red" }}>Produto Indisponível</p>
              )}
            </CardContent>
          </CardWrapper>
        ))}
      </Container>

      {/* Floating Cart Button */}
      {!isDialogOpen && (
        <CartButton
          itemCount={cart.length}
          onClick={() => setIsDialogOpen(true)}
        />
      )}

      {/* Enhanced Checkout Dialog */}
      <CheckoutDialog
        items={cart}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onRemove={(id: number) => setCart((prev) => prev.filter((item) => item.id !== id))}
        onIncrement={(id: number) => setCart((prev) => [...prev, prev.find(item => item.id === id)!])}
        onDecrement={(id: number) => {
          setCart((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (index !== -1) {
              const newCart = [...prev];
              newCart.splice(index, 1);
              return newCart;
            }
            return prev;
          });
        }}
      />

      <Toaster
        message={toasterMessage}
        show={showToaster}
        onClose={handleToasterClose}
      />
    </Section>
  );
}
