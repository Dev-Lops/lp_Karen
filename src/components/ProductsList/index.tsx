import { generateWhatsAppMessage } from '@/utils/whatsapp';
import { motion } from 'framer-motion';
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Product, products } from "../../utils/data";
import { CartDialog } from "../CartSidebar";
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

// Data final da promoção: 09/04/2025 às 18:00, horário do Amazonas (UTC-4)
const PROMO_END = new Date('2025-04-09T18:00:00-04:00');

export function ProductsGrid() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);

  // Estado que controla se a promoção está ativa (true enquanto a data/hora atual for menor que PROMO_END)
  const [isPromoActive, setIsPromoActive] = useState(new Date() < PROMO_END);

  useEffect(() => {
    const now = new Date();
    if (now < PROMO_END) {
      const timeout = PROMO_END.getTime() - now.getTime();
      const timer = setTimeout(() => {
        setIsPromoActive(false);
      }, timeout);
      return () => clearTimeout(timer);
    } else {
      setIsPromoActive(false);
    }
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

  const redirectToWhatsApp = () => {
    setIsLoadingCheckout(true);
    setToasterMessage("Obrigado pela sua compra! Estamos te redirecionando para o WhatsApp...");
    setShowToaster(true);

    const phoneNumber = "5592993787566";
    const message = generateWhatsAppMessage(cart);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá Fabulosa!\n\nEu gostaria de finalizar a compra desses itens:\n${message}\n\n`
    )}`;

    const opened = window.open(url, "_blank");

    if (!opened) {
      // fallback se for bloqueado
      window.location.href = url;
    }

    setCart([]);
    setIsDialogOpen(false);
    setIsLoadingCheckout(false);
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
          <CardWrapper key={product.id}>
            <Box className={!product.inStock ? "disabled" : ""}>
              <div className={`imgBox ${!product.inStock ? "outOfStock" : ""}`}>
                {product.discount > 0 && product.inStock && (
                  <span className="discount-tag">{product.discount}% OFF</span>
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
                    <button
                      onClick={() => addToCart(product)}
                      className="iconBox"
                      aria-label="carrinho"
                    >
                      Comprar <ShoppingCart />
                    </button>
                  )}
                </div>
              </div>
            </Box>
            <Title>{product.title}</Title>
            <CardContent className="end">
              {product.inStock ? (
                <>
                  {isPromoActive ? (
                    <>
                      <p>
                        De:{" "}
                        <span style={{ textDecoration: "line-through", color: "#888" }}>
                          R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                        </span>
                      </p>
                      <p>
                        Por:{" "}
                        <span style={{ fontWeight: "bold", color: "" }}>
                          R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                        </span>
                      </p>
                    </>
                  ) : (
                    // Depois de 09/04/2025 18h, mostra somente o preço sem promoção
                    <p style={{ fontWeight: "bold" }}>
                      R$ {product.oldPrice.toFixed(2).replace(".", ",")}
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

      {cart.length > 0 && !isDialogOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="fixed bottom-6 inset-x-0 mx-auto bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center gap-2 z-50 w-fit"
          onClick={() => setIsDialogOpen(true)}
        >
          Ir para o carrinho
          <span className="cart-count">{cart.length}</span>
        </motion.button>
      )}

      <CartDialog
        items={cart}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        isLoadingCheckout={isLoadingCheckout}
        onConfirm={redirectToWhatsApp}
        onRemove={(id) => setCart((prev) => prev.filter((item) => item.id !== id))}
        onIncrement={(id) => setCart((prev) => [...prev, prev.find(item => item.id === id)!])}
        onDecrement={(id) => {
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
