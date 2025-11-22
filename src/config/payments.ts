// Payment configuration: installment surcharge percentages
// Card installments apply an additional percentage over base total
// Adjust these values if your processor uses different fees.
export const CARD_INSTALLMENT_FEES: Record<number, number> = {
  1: 0, // à vista no cartão (sugerir PIX para zerar taxas)
  2: 4,
  3: 6,
  4: 8,
  5: 10,
  6: 12,
  7: 14,
  8: 16,
  9: 18,
  10: 20,
  11: 22,
  12: 24,
}

export function getInstallmentFee(parcelas: number): number {
  return CARD_INSTALLMENT_FEES[parcelas] ?? 0
}
