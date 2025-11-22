import { isBlackFridayActive } from '@/config/blackfriday'
import { Product } from './data'

// Removido parcelamento direto; apenas informamos que cartão tem acréscimos
export function generateWhatsAppMessage(cart: Product[]) {
  const isBFActive = isBlackFridayActive()

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

  // Cabeçalho atraente
  let message = isBFActive
    ? '🔥 *PEDIDO BLACK FRIDAY* 🔥\n━━━━━━━━━━━━━━━━━━━━\n\n'
    : '✨ *MEU PEDIDO FABULOS HAIR* ✨\n━━━━━━━━━━━━━━━━━━━━\n\n'

  // Lista de produtos
  message += Object.values(groupedProducts)
    .map(({ product, quantity }, index) => {
      const unitPrice = isBFActive ? product.promoPrice : product.currentPrice
      const subtotal = (unitPrice * quantity).toFixed(2).replace('.', ',')

      let productItem = `📦 *ITEM ${index + 1}*\n`
      productItem += `*${product.title}*\n`
      productItem += `┣ Quantidade: ${quantity}x\n`

      if (isBFActive) {
        productItem += `┣ Preço Normal: ~R$ ${product.currentPrice
          .toFixed(2)
          .replace('.', ',')}~\n`
        productItem += `┣ Preço Promocional: *R$ ${unitPrice
          .toFixed(2)
          .replace('.', ',')}*\n`
        productItem += `┣ Desconto: *${product.discount}% OFF* 🎉\n`
      } else {
        productItem += `┣ Preço Unitário: R$ ${unitPrice
          .toFixed(2)
          .replace('.', ',')}\n`
      }

      productItem += `┗ Subtotal: *R$ ${subtotal}*\n`

      return productItem
    })
    .join('\n')

  // Separador
  message += '\n━━━━━━━━━━━━━━━━━━━━\n'

  // Totais
  const baseTotal = cart.reduce((acc, item) => {
    const price = isBFActive ? item.promoPrice : item.currentPrice
    return acc + price
  }, 0)

  const total = baseTotal // sem acréscimo, parcelamento será tratado no atendimento

  const totalItems = cart.length

  message += `\n📊 *RESUMO DO PEDIDO*\n`
  message += `┣ Total de Itens: ${totalItems}\n`

  if (isBFActive) {
    const totalNormal = cart.reduce((acc, item) => acc + item.currentPrice, 0)
    const economia = totalNormal - total
    const percentualEconomia = ((economia / totalNormal) * 100).toFixed(0)

    message += `┣ Valor Original: R$ ${totalNormal
      .toFixed(2)
      .replace('.', ',')}\n`
    message += `┣ Economia Total: *R$ ${economia
      .toFixed(2)
      .replace('.', ',')}* (${percentualEconomia}%) 🎉\n`
    message += `┗ *VALOR FINAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`
    message += `\n🔥 *Aproveite! Oferta por tempo limitado!* 🔥`
  } else {
    message += `┗ *VALOR TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*`
  }

  return message
}
