import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const ButtonWithEffect = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      className="iconBox w-full flex items-center justify-center gap-2 rounded-md bg-brandGreen text-white font-semibold uppercase tracking-wide py-2 transition-colors duration-200 hover:bg-brandGreen/90"
      onClick={onClick}
      aria-label="carrinho"
    >
      Comprar <ShoppingCart />
    </motion.button>
  )
}

export default ButtonWithEffect