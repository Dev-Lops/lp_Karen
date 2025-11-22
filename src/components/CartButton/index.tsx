import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface CartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export function CartButton({ itemCount, onClick }: CartButtonProps) {
  if (itemCount === 0) return null;

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-[70] bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-all duration-300"
      aria-label="Abrir carrinho"
    >
      <ShoppingCart size={24} />
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white"
      >
        {itemCount}
      </motion.span>
    </motion.button>
  );
}
