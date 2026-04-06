import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getCampaignStatus } from "@/config/birthday-campaign";
import { generateWhatsAppMessage } from "@/utils/whatsapp";
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import { Product } from "../../utils/data";

type CartItem = Product & {
  unitPrice?: number;
  appliedDiscount?: number;
};

interface CheckoutDialogProps {
  items: CartItem[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onRemove: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

type CheckoutStep = 'cart' | 'review' | 'sending';

function getSafeUnitPrice(item: CartItem, isCampaignActive: boolean) {
  if (isCampaignActive && typeof item.unitPrice === 'number') return item.unitPrice;
  if (isCampaignActive && typeof item.promoPrice === 'number') return item.promoPrice;
  return item.currentPrice;
}

function formatBRL(value: number) {
  return value.toFixed(2).replace(".", ",");
}

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
  const [waFallback, setWaFallback] = useState<string | null>(null);

  const isCampaignActive = getCampaignStatus() === 'live';

  const grouped = useMemo(
    () =>
      items.reduce<Record<number, { product: CartItem; quantity: number }>>((acc, item) => {
        if (acc[item.id]) {
          acc[item.id].quantity++;
        } else {
          acc[item.id] = { product: item, quantity: 1 };
        }
        return acc;
      }, {}),
    [items]
  );

  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + getSafeUnitPrice(item, isCampaignActive), 0);
  }, [items, isCampaignActive]);

  const totalNormal = useMemo(() => {
    return items.reduce((sum, item) => sum + (item.currentPrice ?? 0), 0);
  }, [items]);

  const economia = isCampaignActive ? totalNormal - total : 0;

  const handleFinishOrder = () => {
    const phoneNumber = "5592993787566";
    const greeting = customerName
      ? `Olá Fabulosa !!\n\nme chamo ${customerName}\n\n`
      : 'Olá Fabulosa !!\n\n';

    const message = `${greeting}Eu gostaria de finalizar a compra desses itens:\n${generateWhatsAppMessage(items)}\n\nAguardo retorno!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

    setStep('sending');
    setWaFallback(waUrl);

    const newWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = waUrl;
    }

    setTimeout(() => {
      onOpenChange(false);
      setStep('cart');
      setCustomerName('');
      setWaFallback(null);
    }, 2000);
  };

  const handleClose = () => {
    onOpenChange(false);
    setStep('cart');
    setCustomerName('');
    setWaFallback(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-[96vw] sm:w-full max-h-[92vh] sm:max-h-[95vh] overflow-hidden flex flex-col p-0">
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

            {isCampaignActive && (
              <span className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap bg-[#032F31] text-[#D8BE93] border border-[#D8BE93]/40">
                ✨ campanha ativa
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            <div className={`flex-1 h-1 sm:h-1.5 rounded-full ${step === 'cart' ? 'bg-green-600' : 'bg-gray-200'}`} />
            <div className={`flex-1 h-1 sm:h-1.5 rounded-full ${step === 'review' ? 'bg-green-600' : 'bg-gray-200'}`} />
            <div className={`flex-1 h-1 sm:h-1.5 rounded-full ${step === 'sending' ? 'bg-green-600' : 'bg-gray-200'}`} />
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-3 sm:py-4">
          {step === 'cart' && (
            <div className="space-y-2 sm:space-y-3">
              {Object.values(grouped).map(({ product, quantity }) => {
                const unitPrice = getSafeUnitPrice(product, isCampaignActive);
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
                      <h3 className="font-bold text-xs sm:text-sm mb-1 line-clamp-2">
                        {product.title}
                      </h3>

                      {isCampaignActive ? (
                        <div className="space-y-0.5">
                          <p className="text-[10px] sm:text-xs text-gray-400 line-through">
                            R$ {formatBRL(product.currentPrice)}
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-[#9f7d44]">
                            R$ {formatBRL(unitPrice)} cada
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs sm:text-sm text-gray-600">
                          R$ {formatBRL(unitPrice)} cada
                        </p>
                      )}

                      <p className="text-sm sm:text-base font-bold text-green-600 mt-0.5 sm:mt-1">
                        <span className="hidden sm:inline">Subtotal: </span>
                        R$ {formatBRL(subtotal)}
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

                        <span className="font-bold text-sm sm:text-base min-w-[20px] sm:min-w-[24px] text-center">
                          {quantity}
                        </span>

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
                    const unitPrice = getSafeUnitPrice(product, isCampaignActive);

                    return (
                      <div key={product.id} className="flex justify-between text-xs sm:text-sm gap-2">
                        <span className="truncate">{quantity}x {product.title}</span>
                        <span className="font-semibold whitespace-nowrap">
                          R$ {formatBRL(unitPrice * quantity)}
                        </span>
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

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 space-y-2">
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Formas de pagamento aceitas:
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600">
                  <span className="font-semibold text-green-600">PIX:</span> sem acréscimos.
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600">
                  <span className="font-semibold text-yellow-600">Cartão de crédito:</span> com acréscimos, verificar na finalização do pedido com o nosso time.
                </p>
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

        {step !== 'sending' && (
          <div className="px-2 sm:px-6 py-2.5 sm:py-4 border-t bg-gray-50">
            <div className="mb-2.5 sm:mb-4 space-y-1 sm:space-y-2">
              {isCampaignActive && economia > 0 && (
                <div className="flex justify-between items-center text-green-600">
                  <span className="text-xs sm:text-sm font-semibold">🎉 Economizando:</span>
                  <span className="font-bold text-sm sm:text-lg">
                    R$ {formatBRL(economia)}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-lg font-bold">Total:</span>
                <div className="flex flex-col items-end">
                  <span className="text-2xl sm:text-3xl font-bold text-green-600">
                    R$ {formatBRL(total)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-1.5 sm:gap-3">
              {step === 'cart' && (
                <>
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1 text-[10px] sm:text-sm py-2 sm:py-3 px-2 sm:px-4"
                  >
                    <X size={14} className="mr-0.5 sm:mr-2" />
                    <span className="hidden xs:inline sm:hidden">Voltar</span>
                    <span className="hidden sm:inline">Continuar Comprando</span>
                  </Button>

                  <Button
                    onClick={() => setStep('review')}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-[10px] sm:text-sm py-2 sm:py-3 px-2 sm:px-4"
                  >
                    <span className="hidden xs:inline sm:hidden">Revisar</span>
                    <span className="hidden sm:inline">Revisar Pedido</span>
                    <ArrowRight size={14} className="ml-0.5 sm:ml-2" />
                  </Button>
                </>
              )}

              {step === 'review' && (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setStep('cart')}
                    className="flex-1 text-[10px] sm:text-sm py-2 sm:py-3 px-2 sm:px-4"
                  >
                    Voltar
                  </Button>

                  <Button
                    onClick={handleFinishOrder}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold text-[10px] sm:text-base py-2.5 sm:py-6 px-2 sm:px-4"
                  >
                    <MessageCircle size={14} className="mr-0.5 sm:mr-2 sm:w-5 sm:h-5" />
                    <span>Finalizar</span>
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