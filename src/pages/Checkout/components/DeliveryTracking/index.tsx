import { useNavigate } from 'react-router-dom'
import {
  DeliveryTrackingContainer,
  DetailsTextsContainer,
  OrderDetails,
} from './styles'
import Deliveryman from '../../../../assets/deliveryman.svg'
import { useMemo } from 'react'
import { InformativeCard } from '../../../../components/InformativeCard'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function DeliveryTracking() {
  const navigate = useNavigate()
  const theme = useTheme()

  const storedStateAsJSON = localStorage.getItem(
    '@ignite-coffee-shop:order-details-1.0.0',
  )

  const orderData: CoffeeOrder =
    storedStateAsJSON && JSON.parse(storedStateAsJSON)

  if (!orderData) {
    navigate('/')
  }

  const { deliveryAddress, addressSecondLine, paymentType } = useMemo(() => {
    if (!orderData) {
      return {}
    }

    const { street, number, neighborhood, city, state, paymentType } = orderData

    return {
      deliveryAddress: `${street}, ${number}`,
      addressSecondLine: `${neighborhood} - ${city}, ${state}`,
      paymentType,
    }
  }, [orderData])

  return (
    <DeliveryTrackingContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <OrderDetails>
          <InformativeCard
            icon={<MapPin size={20} color={theme.white} weight="fill" />}
            iconBackgroundColor={theme.purple}
          >
            <DetailsTextsContainer>
              <span>
                Entrega em <strong>{deliveryAddress}</strong>
              </span>
              <span>{addressSecondLine}</span>
            </DetailsTextsContainer>
          </InformativeCard>
          <InformativeCard
            icon={<Timer size={20} color={theme.white} weight="fill" />}
            iconBackgroundColor={theme.yellow}
          >
            <DetailsTextsContainer>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </DetailsTextsContainer>
          </InformativeCard>
          <InformativeCard
            icon={<CurrencyDollar size={20} color={theme.white} />}
            iconBackgroundColor={theme['yellow-dark']}
          >
            <DetailsTextsContainer>
              <span>Forma de pagamento</span>
              <strong>{paymentType}</strong>
            </DetailsTextsContainer>
          </InformativeCard>
        </OrderDetails>
      </div>
      <img src={Deliveryman} alt="o seu pedido está a caminho" />
    </DeliveryTrackingContainer>
  )
}
