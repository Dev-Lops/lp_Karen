import { getCampaignStatus } from '@/config/birthday-campaign'
import { Product } from './data'

type CartItem = Product & {
  unitPrice?: number
  appliedDiscount?: number
}

function getSafeUnitPrice(item: CartItem, isCampaignActive: boolean) {
  if (isCampaignActive && typeof item.unitPrice === 'number')
    return item.unitPrice
  if (isCampaignActive && typeof item.promoPrice === 'number')
    return item.promoPrice
  return item.currentPrice
}

function getSafeDiscount(item: CartItem) {
  if (typeof item.appliedDiscount === 'number') return item.appliedDiscount
  if (typeof item.discount === 'number') return item.discount
  return 0
}

function formatBRL(value: number) {
  return value.toFixed(2).replace('.', ',')
}

export function generateWhatsAppMessage(cart: CartItem[]) {
  const isCampaignActive = getCampaignStatus() === 'live'

  const groupedProducts = cart.reduce<
    Record<number, { product: CartItem; quantity: number }>
  >((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1
    } else {
      acc[item.id] = { product: item, quantity: 1 }
    }
    return acc
  }, {})

  let message = isCampaignActive
    ? '*SOLICITAÇÃO DE COMPRA - CAMPANHA DE ANIVERSÁRIO*\n'
    : '*SOLICITAÇÃO DE COMPRA*\n'

  message += 'Studio Karen Frazão\n'
  message += '--------------------------------\n\n'
  message += 'Gostaria de finalizar o pedido abaixo:\n\n'

  message += Object.values(groupedProducts)
    .map(({ product, quantity }, index) => {
      const unitPrice = getSafeUnitPrice(product, isCampaignActive)
      const subtotal = unitPrice * quantity
      const safeDiscount = getSafeDiscount(product)

      let productItem = `*Item ${index + 1}*\n`
      productItem += `${product.title}\n`
      productItem += `Quantidade: ${quantity} unidade(s)\n`

      if (isCampaignActive && safeDiscount > 0) {
        productItem += `Valor original: R$ ${formatBRL(product.currentPrice)}\n`
        productItem += `Valor especial: R$ ${formatBRL(unitPrice)}\n`
        productItem += `Desconto aplicado: ${safeDiscount}% OFF\n`
      } else {
        productItem += `Valor unitário: R$ ${formatBRL(unitPrice)}\n`
      }

      productItem += `Subtotal: R$ ${formatBRL(subtotal)}\n`

      return productItem
    })
    .join('\n')

  message += '\n--------------------------------\n\n'

  const total = cart.reduce((acc, item) => {
    return acc + getSafeUnitPrice(item, isCampaignActive)
  }, 0)

  const totalItems = cart.length

  message += '*Resumo do pedido*\n'
  message += `Quantidade total de itens: ${totalItems}\n`

  if (isCampaignActive) {
    const totalNormal = cart.reduce(
      (acc, item) => acc + (item.currentPrice ?? 0),
      0,
    )
    const economia = totalNormal - total
    const percentualEconomia =
      totalNormal > 0 ? ((economia / totalNormal) * 100).toFixed(0) : '0'

    message += `Valor de referência: R$ ${formatBRL(totalNormal)}\n`
    message += `Economia obtida: R$ ${formatBRL(economia)} (${percentualEconomia}%)\n`
    message += `*Valor final do pedido: R$ ${formatBRL(total)}*\n\n`
    message +=
      'Tenho interesse em concluir a compra com a condição especial vigente.\n'
  } else {
    message += `*Valor total do pedido: R$ ${formatBRL(total)}*\n\n`
    message += 'Gostaria de seguir com a finalização deste pedido.\n'
  }

  message += '\nFico no aguardo do atendimento.'

  return message
}
