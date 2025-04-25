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
    .map(({ product, quantity }) => {
      const subtotal = (product.oldPrice * quantity)
        .toFixed(2)
        .replace('.', ',')

      return (
        `*${product.title}*\n` +
        `Quantidade: ${quantity}\n` +
        `Preço Unitário: R$ ${product.oldPrice
          .toFixed(2)
          .replace('.', ',')}\n` +
        `Subtotal: R$ ${subtotal}\n`
      )
    })
    .join('\n')

  const total = cart.reduce((acc, item) => acc + item.oldPrice, 0)

  const totalMessage = `*Valor Total:* R$ ${total.toFixed(2).replace('.', ',')}`

  return `${message}\n${totalMessage}`
}
