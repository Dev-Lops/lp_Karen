import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { isBlackFridayActive } from "@/config/blackfriday";
import { generateWhatsAppMessage } from "@/utils/whatsapp";
import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Product } from "../../utils/data";

interface CheckoutDialogProps {
  items: Product[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onRemove: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

type CheckoutStep = 'cart' | 'review' | 'sending';

export function CheckoutDialog({
  items,
  isOpen,
  onOpenChange,
  onRemove,
  onIncrement,
  onDecrement,
}: CheckoutDialogProps) {
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'money'>('pix');
  const [waFallback, setWaFallback] = useState<string | null>(null);
  const isBFActive = isBlackFridayActive();

  const grouped = items.reduce<Record<number, { product: Product; quantity: number }>>(
    (acc, item) => {
      if (acc[item.id]) {
        acc[item.id].quantity++;
      } else {
        acc[item.id] = { product: item, quantity: 1 };
      }
      return acc;
    },
    {}
  );

  const total = items.reduce((total, item) => {
    const price = isBFActive
      ? item.promoPrice
      : item.currentPrice;
    return total + price;
  }, 0);

  const totalNormal = items.reduce((sum, item) => sum + item.currentPrice, 0);
  const economia = isBFActive ? totalNormal - total : 0;

  const handleFinishOrder = () => {
    const phoneNumber = "5592993787566";
    const greeting = customerName
      ? `Olá Fabulosa !!\n\nme chamo ${customerName}\n\n`
      : 'Olá Fabulosa !!\n\n';
    const message = `${greeting}Eu gostaria de finalizar a compra desses itens:\n${generateWhatsAppMessage(items, paymentMethod)}\n\nAguardo retorno!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

    // Mostra etapa de envio
    setStep('sending');
    setWaFallback(waUrl);

    // Abre WhatsApp em nova aba (mais confiável)
    const newWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Fallback se bloqueado
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup foi bloqueado, tenta redirect direto
      window.location.href = waUrl;
    }

    // Fecha o dialog após um delay
    setTimeout(() => {
      onOpenChange(false);
      setStep('cart');
      setCustomerName('');
      setPaymentMethod('pix');
      setWaFallback(null);
    }, 2000);
  };

  const handleClose = () => {
    onOpenChange(false);
    setStep('cart');
    setCustomerName('');
    setPaymentMethod('pix');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full max-h-[90vh] sm:max-h-[95vh] overflow-hidden flex flex-col p-0">
        {/* Header */}
        <DialogHeader className="px-3 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg sm:text-2xl font-bold flex items-center gap-2 sm:gap-3">
              <ShoppingBag className="text-green-600" size={24} />
              <span className="hidden sm:inline">
                {step === 'cart' && 'Seu Carrinho'}
                {step === 'review' && 'Revisar Pedido'}
                {step === 'sending' && 'Finalizando...'}
              </span>
              <span className="sm:hidden">
                {step === 'cart' && 'Carrinho'}
                {step === 'review' && 'Revisar'}
                {step === 'sending' && 'Enviando...'}
              </span>
            </DialogTitle>
            {isBFActive && (
              <span className="bg-black text-yellow-400 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                🔥 BF
              </span>
            )}
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            <div className={`flex-1 h-1 sm:h-1.5 rounded-full ${step === 'cart' ? 'bg-green-600' : 'bg-gray-200'}`} />
            <div className={`flex-1 h-1 sm:h-1.5 rounded-full ${step === 'review' ? 'bg-green-600' : 'bg-gray-200'}`} />
            <div className={`flex-1 h-1 sm:h-1.5 rounded-full ${step === 'sending' ? 'bg-green-600' : 'bg-gray-200'}`} />
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-3 sm:py-4">
          {step === 'cart' && (
            <div className="space-y-2 sm:space-y-3">
              {Object.values(grouped).map(({ product, quantity }) => {
                const unitPrice = isBFActive
                  ? product.promoPrice
                  : product.currentPrice;
                const subtotal = unitPrice * quantity;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-2 sm:gap-4 p-2 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border-2 border-gray-100 hover:border-green-200 transition-all"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xs sm:text-sm mb-1 line-clamp-2">{product.title}</h3>

                      {isBFActive ? (
                        <div className="space-y-0.5">
                          <p className="text-[10px] sm:text-xs text-gray-400 line-through">
                            R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-yellow-600">
                            R$ {unitPrice.toFixed(2).replace(".", ",")} cada
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs sm:text-sm text-gray-600">
                          R$ {unitPrice.toFixed(2).replace(".", ",")} cada
                        </p>
                      )}

                      <p className="text-sm sm:text-base font-bold text-green-600 mt-0.5 sm:mt-1">
                        <span className="hidden sm:inline">Subtotal: </span>R$ {subtotal.toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 sm:gap-3">
                      <button
                        onClick={() => onRemove(product.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 sm:p-2 rounded-full transition"
                        title="Remover item"
                      >
                        <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </button>

                      <div className="flex items-center gap-1 sm:gap-2 bg-white rounded-full px-2 sm:px-3 py-1 sm:py-2 border-2 border-gray-200">
                        <button
                          title="diminuir"
                          onClick={() => onDecrement(product.id)}
                          className="text-gray-600 hover:text-red-500 transition"
                        >
                          <Minus size={14} className="sm:w-4 sm:h-4" />
                        </button>
                        <span className="font-bold text-sm sm:text-base min-w-[20px] sm:min-w-[24px] text-center">{quantity}</span>
                        <button
                          title="aumentar"
                          onClick={() => onIncrement(product.id)}
                          className="text-gray-600 hover:text-green-500 transition"
                        >
                          <Plus size={14} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {step === 'review' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="bg-green-50 border-2 border-green-200 rounded-lg sm:rounded-xl p-3 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                  <Check className="text-green-600" size={20} />
                  Resumo do Pedido
                </h3>

                <div className="space-y-1.5 sm:space-y-2">
                  {Object.values(grouped).map(({ product, quantity }) => {
                    const unitPrice = isBFActive
                      ? product.promoPrice
                      : product.currentPrice;
                    return (
                      <div key={product.id} className="flex justify-between text-xs sm:text-sm gap-2">
                        <span className="truncate">{quantity}x {product.title}</span>
                        <span className="font-semibold whitespace-nowrap">R$ {(unitPrice * quantity).toFixed(2).replace(".", ",")}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Seu nome (opcional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Isso nos ajuda a oferecer um atendimento mais personalizado
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  💳 Forma de Pagamento
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-2 sm:p-4 rounded-lg border-2 transition-all ${paymentMethod === 'pix'
                      ? 'border-green-500 bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-green-300'
                      }`}
                  >
                    <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">💰</div>
                    <div className="text-xs sm:text-sm font-semibold">PIX</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2 sm:p-4 rounded-lg border-2 transition-all ${paymentMethod === 'card'
                      ? 'border-green-500 bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-green-300'
                      }`}
                  >
                    <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">💳</div>
                    <div className="text-xs sm:text-sm font-semibold">Cartão</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('money')}
                    className={`p-2 sm:p-4 rounded-lg border-2 transition-all ${paymentMethod === 'money'
                      ? 'border-green-500 bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-green-300'
                      }`}
                  >
                    <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">💵</div>
                    <div className="text-xs sm:text-sm font-semibold">Dinheiro</div>
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <MessageCircle size={18} className="text-green-600" />
                  Você será redirecionado para o WhatsApp para finalizar o pedido
                </p>
              </div>
            </motion.div>
          )}

          {step === 'sending' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Redirecionando para o WhatsApp...</h3>
              <p className="text-gray-600 text-center">
                Aguarde um momento enquanto preparamos seu pedido
              </p>
              {waFallback && (
                <a
                  href={waFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Se não abrir automaticamente, toque aqui
                </a>
              )}
            </motion.div>
          )}
        </div>

        {/* Footer */}
        {step !== 'sending' && (
          <div className="px-3 sm:px-6 py-3 sm:py-4 border-t bg-gray-50">
            {/* Total */}
            <div className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
              {isBFActive && economia > 0 && (
                <div className="flex justify-between items-center text-green-600">
                  <span className="text-xs sm:text-sm font-semibold">🎉 Economizando:</span>
                  <span className="font-bold text-sm sm:text-lg">R$ {economia.toFixed(2).replace(".", ",")}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-lg font-bold">Total:</span>
                <span className="text-2xl sm:text-3xl font-bold text-green-600">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 sm:gap-3">
              {step === 'cart' && (
                <>
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1 text-xs sm:text-sm py-2 sm:py-3"
                  >
                    <X size={16} className="mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Continuar Comprando</span>
                    <span className="sm:hidden">Voltar</span>
                  </Button>
                  <Button
                    onClick={() => setStep('review')}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm py-2 sm:py-3"
                  >
                    <span className="hidden sm:inline">Revisar Pedido</span>
                    <span className="sm:hidden">Revisar</span>
                    <ArrowRight size={16} className="ml-1 sm:ml-2" />
                  </Button>
                </>
              )}

              {step === 'review' && (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setStep('cart')}
                    className="flex-1 text-xs sm:text-sm py-2 sm:py-3"
                  >
                    Voltar
                  </Button>
                  <Button
                    onClick={handleFinishOrder}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-lg py-3 sm:py-6"
                  >
                    <MessageCircle size={16} className="mr-1 sm:mr-2 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Finalizar pelo WhatsApp</span>
                    <span className="sm:hidden">Finalizar</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
