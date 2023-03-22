import { memo, useContext } from 'react'
import { Button } from '../../../../components/Button'
import { CheckoutContext } from '../../../../contexts/CheckoutContext'
import { useCurrencyConvert } from '../../../../hooks/useCurrencyConvert'
import { ChosenProduct } from './components/ChosenProduct'
import {
  DescriptionText,
  DetailsContainer,
  OrderDetailsContainer,
  PriceDescription,
  ProductsList,
  TotalPriceDescription,
} from './styles'

function BaseOrderDetails() {
  const { convertToBRLCurrency } = useCurrencyConvert()

  const { products, updateProductAmount, removeProduct } =
    useContext(CheckoutContext)

  const productsPrice = products.reduce(function (acc, product) {
    return acc + product.price * product.amount
  }, 0)

  const deliveryTax = productsPrice * 0.1

  const finalPrice = productsPrice + deliveryTax

  return (
    <OrderDetailsContainer>
      <h2>Cafés selecionados</h2>
      <DetailsContainer>
        <ProductsList>
          {products.map((product: ProductWithAmount) => (
            <ChosenProduct
              key={product.id}
              product={product}
              updateProductAmount={updateProductAmount}
              removeProduct={removeProduct}
            />
          ))}
        </ProductsList>
        <PriceDescription>
          <DescriptionText alignTo="left">Total de itens</DescriptionText>
          <DescriptionText alignTo="right">
            {convertToBRLCurrency(productsPrice)}
          </DescriptionText>
          <DescriptionText alignTo="left">Entrega</DescriptionText>
          <DescriptionText alignTo="right">
            {convertToBRLCurrency(deliveryTax)}
          </DescriptionText>
          <TotalPriceDescription alignTo="left">Total</TotalPriceDescription>
          <TotalPriceDescription alignTo="right">
            {convertToBRLCurrency(finalPrice)}
          </TotalPriceDescription>
        </PriceDescription>
        <Button
          type="submit"
          style={{ textTransform: 'uppercase' }}
          disabled={!products?.length}
        >
          confirmar pedido
        </Button>
      </DetailsContainer>
    </OrderDetailsContainer>
  )
}

export const OrderDetails = memo(BaseOrderDetails)
