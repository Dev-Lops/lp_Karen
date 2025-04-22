import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const ButtonWithEffect = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }} // Reduz ligeiramente o tamanho ao clicar
      whileHover={{ scale: 1.05 }} // Aumenta ligeiramente ao passar o mouse
      className="iconBox w-full flex items-center justify-center hover:bg-green-300 cursor-pointer"
      onClick={onClick}
      aria-label="carrinho"
    >
      Comprar <ShoppingCart />
    </motion.button>
  )
}

export default ButtonWithEffect