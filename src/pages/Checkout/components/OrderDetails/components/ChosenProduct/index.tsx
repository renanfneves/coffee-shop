import { Trash } from 'phosphor-react'
import { useContext, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { Counter } from '../../../../../../components/Counter'
import { CheckoutContext } from '../../../../../../contexts/CheckoutContext'
import { useCurrencyConvert } from '../../../../../../hooks/useCurrencyConvert'
import {
  ActionsContainer,
  ChosenProductContainer,
  RemoveProductButton,
} from './styles'

interface ChosenProductProps {
  product: ProductWithAmount
  updateProductAmount: (productId: string, amount: number) => void
  removeProduct: (productId: string) => void
}

export function ChosenProduct({
  product,
  updateProductAmount,
  removeProduct,
}: ChosenProductProps) {
  const theme = useTheme()
  const { convertToBRLCurrency } = useCurrencyConvert()

  function handleSetAmount(addValue: number) {
    updateProductAmount(product.id, addValue)
  }

  return (
    <ChosenProductContainer>
      <img src={product.imageSrc} alt={`imagem de ${product.name}`} />
      <ActionsContainer>
        <span>{product.name}</span>
        <div>
          <Counter amount={product.amount} setAmount={handleSetAmount} />
          <RemoveProductButton onClick={() => removeProduct(product.id)}>
            <Trash size={20} color={theme.purple} />
            <span>remover</span>
          </RemoveProductButton>
        </div>
      </ActionsContainer>
      <span>{convertToBRLCurrency(product.price)}</span>
    </ChosenProductContainer>
  )
}
