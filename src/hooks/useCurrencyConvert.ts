import { useCallback } from 'react'

export function useCurrencyConvert() {
  const convertToBRLCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
      minimumFractionDigits: 2,
    }).format(value)
  }, [])

  return {
    convertToBRLCurrency,
  }
}
