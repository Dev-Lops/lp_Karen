// CartDialog.tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { generateWhatsAppMessage } from "@/utils/whatsapp";
import { MessageCircleMore, Minus, Plus } from "lucide-react";
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
  trigger,
  onOpenChange,
  isLoadingCheckout,
  isOpen,
}: Props) {
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

  const total = items.reduce((total, item) => total + item.currentPrice, 0);

  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle>Resumo da Compra</DialogTitle>
        </DialogHeader>

        <ul className="space-y-4 mt-4">
          {Object.values(grouped).map(({ product, quantity }) => (
            <li key={product.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-sm text-muted-foreground">
                  {quantity}x — {(product.currentPrice).toFixed(2).replace(".", ",")} = R$ {(product.currentPrice * quantity).toFixed(2).replace(".", ",")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDecrement(product.id)}
                  className="p-1 border rounded-full text-sm hover:bg-red-100"
                  title="Diminuir"
                >
                  <Minus size={16} />
                </button>
                <span className="font-medium">{quantity}</span>
                <button
                  onClick={() => onIncrement(product.id)}
                  className="p-1 border rounded-full text-sm hover:bg-green-100"
                  title="Aumentar"
                >
                  <Plus size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <p className="font-semibold">Total:</p>
          <p className="font-bold text-lg">R$ {total.toFixed(2).replace(".", ",")}</p>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost">Fechar</Button>
          </DialogClose>
          <a
            href={`https://wa.me/5592993787566?text=${encodeURIComponent(
              `Olá Fabulosa!\n\nEu gostaria de finalizar a compra desses itens:\n${generateWhatsAppMessage(items)}\n\n`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (onOpenChange) onOpenChange(false);
            }}
            className={`bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-300 ${isLoadingCheckout ? "opacity-50 cursor-not-allowed" : ""
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
            {!isLoadingCheckout && <MessageCircleMore size={18} />}
            {isLoadingCheckout ? "Redirecionando..." : "Finalizar no WhatsApp"}
          </a>

        </div>
      </DialogContent>
    </Dialog>
  );
}
