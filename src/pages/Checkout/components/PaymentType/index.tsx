import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useRef } from 'react'
import { useTheme } from 'styled-components'
import { CardTitle } from '../../../../components/CardTitle'
import { PaymentOption } from './components/PaymentOption'
import { CardsContainer, PaymentTypeContainer } from './styles'

export enum PaymentTypeOptions {
  Credit = 'credit',
  Debit = 'debit',
  Cash = 'cash',
}

export function PaymentType() {
  const theme = useTheme()

  return (
    <PaymentTypeContainer>
      <CardTitle
        icon={<CurrencyDollar size={20} color={theme.purple} />}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <CardsContainer>
        <PaymentOption
          value={PaymentTypeOptions.Credit}
          icon={<CreditCard size={20} color={theme.purple} />}
          text="cartão de crédito"
        />
        <PaymentOption
          value={PaymentTypeOptions.Debit}
          icon={<Bank size={20} color={theme.purple} />}
          text="cartão de débito"
        />
        <PaymentOption
          value={PaymentTypeOptions.Cash}
          icon={<Money size={20} color={theme.purple} />}
          text="dinheiro"
        />
      </CardsContainer>
    </PaymentTypeContainer>
  )
}
