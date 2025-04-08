import { Product } from './data'

export function generateWhatsAppMessage(cart: Product[]) {
  const groupedProducts = cart.reduce<
    Record<number, { product: Product; quantity: number }>
  >((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1
    } else {
      acc[item.id] = { product: item, quantity: 1 }
    }
    return acc
  }, {})

  const message = Object.values(groupedProducts)
    .map(
      ({ product, quantity }) =>
        `*${
          product.title
        }* - Quantidade: ${quantity} - Preço Unitário: R$ ${product.currentPrice
          .toFixed(2)
          .replace('.', ',')} - Subtotal: R$ ${(product.currentPrice * quantity)
          .toFixed(2)
          .replace('.', ',')}`
    )
    .join('')

  const total = cart.reduce((acc, item) => acc + item.currentPrice, 0)

  const totalMessage = `*Valor Total:* R$ ${total.toFixed(2).replace('.', ',')}`

  return `${message}${totalMessage}`
}
