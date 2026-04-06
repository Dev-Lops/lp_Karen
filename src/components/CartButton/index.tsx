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
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-[70] rounded-full p-4 shadow-2xl flex items-center justify-center transition-all duration-300"
      style={{
        background: 'linear-gradient(180deg, #032F31 0%, #022C2E 100%)',
        color: '#F5F1E8',
        border: '1px solid rgba(216, 190, 147, 0.45)',
      }}
      aria-label="Abrir carrinho"
    >
      <ShoppingCart size={24} />

      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -top-2 -right-2 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        style={{
          backgroundColor: '#D8BE93',
          color: '#032F31',
          border: '2px solid #F5F1E8',
        }}
      >
        {itemCount}
      </motion.span>
    </motion.button>
  );
}