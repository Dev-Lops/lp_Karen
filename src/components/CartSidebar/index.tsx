import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { isBlackFridayActive } from "@/config/blackfriday";
import { generateWhatsAppMessage } from "@/utils/whatsapp";
import { MessageCircleMore, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Product } from "../../utils/data";

interface Props {
  items: Product[];
  onRemove: (id: number) => void;
  onConfirm: () => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  isLoadingCheckout: boolean
}

export function CartDialog({
  items,
  onIncrement,
  onDecrement,
  onRemove,
  trigger,
  onOpenChange,
  isLoadingCheckout,
  isOpen,
}: Props) {
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

  // Calcula total com preços corretos (Black Friday ou normal)
  const total = items.reduce((total, item) => {
    const price = isBFActive
      ? item.promoPrice
      : item.currentPrice;
    return total + price;
  }, 0);

  // Calcula economia se Black Friday ativa
  const totalNormal = items.reduce((total, item) => total + item.currentPrice, 0);
  const economia = isBFActive ? totalNormal - total : 0;

  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <ShoppingCart size={24} />
            Seu Carrinho
            {isBFActive && (
              <span className="bg-black text-yellow-400 text-xs font-bold px-2 py-1 rounded ml-2">
                🔥 BLACK FRIDAY
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {Object.values(grouped).map(({ product, quantity }) => {
            const unitPrice = isBFActive
              ? product.promoPrice
              : product.currentPrice;
            const subtotal = unitPrice * quantity;

            return (
              <div key={product.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg border">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{product.title}</p>

                  {isBFActive ? (
                    <div className="text-xs mt-1">
                      <p className="text-gray-400 line-through">
                        R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                      </p>
                      <p className="text-yellow-600 font-bold">
                        R$ {unitPrice.toFixed(2).replace(".", ",")} cada
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-1">
                      R$ {unitPrice.toFixed(2).replace(".", ",")} cada
                    </p>
                  )}

                  <p className="text-sm font-bold mt-1">
                    Subtotal: R$ {subtotal.toFixed(2).replace(".", ",")}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => onRemove(product.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Remover item"
                  >
                    <Trash2 size={16} />
                  </button>

                  <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border">
                    <button
                      onClick={() => onDecrement(product.id)}
                      className="text-gray-600 hover:text-red-500"
                      title="Diminuir"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-medium text-sm min-w-[20px] text-center">{quantity}</span>
                    <button
                      onClick={() => onIncrement(product.id)}
                      className="text-gray-600 hover:text-green-500"
                      title="Aumentar"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 border-t pt-4 space-y-2">
          {isBFActive && economia > 0 && (
            <div className="flex justify-between items-center text-green-600">
              <p className="font-semibold">🎉 Você está economizando:</p>
              <p className="font-bold">R$ {economia.toFixed(2).replace(".", ",")}</p>
            </div>
          )}

          <div className="flex justify-between items-center text-lg">
            <p className="font-bold">Total a pagar:</p>
            <p className="font-bold text-2xl text-green-600">
              R$ {total.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <DialogClose asChild>
            <Button variant="outline" className="flex-1">Continuar Comprando</Button>
          </DialogClose>
          <a
            href={`https://wa.me/5592993787566?text=${encodeURIComponent(
              `Olá Fabulosa !!\n\nEu gostaria de finalizar a compra desses itens:\n${generateWhatsAppMessage(items)}\n\n`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (onOpenChange) onOpenChange(false);
            }}
            className={`flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${isLoadingCheckout ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {isLoadingCheckout && (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {!isLoadingCheckout && <MessageCircleMore size={20} />}
            {isLoadingCheckout ? "Redirecionando..." : "Finalizar pelo WhatsApp"}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
