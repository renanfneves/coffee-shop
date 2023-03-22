import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { DeliveryAddress } from './components/DeliveryAddress'
import { OrderDetails } from './components/OrderDetails'
import { PaymentType, PaymentTypeOptions } from './components/PaymentType'

import { CheckoutContainer, LeftPanel } from './styles'
import { useContext, useState } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { DeliveryTracking } from './components/DeliveryTracking'
import { requestCoffee } from '../../api'

const checkoutFormSchema = zod.object({
  cep: zod.string().min(7, 'CEP deve conter pelo menos 7 dígitos'),
  street: zod.string().min(1, 'Obrigatório informar a rua'),
  number: zod.string().min(1, 'Obrigatório informar o número'),
  addOnAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Obrigatório informar o bairro'),
  city: zod.string().min(1, 'Obrigatório informar a cidade'),
  state: zod.string().min(1, 'Obrigatório informar o estado'),
  paymentType: zod.nativeEnum(PaymentTypeOptions, {
    invalid_type_error: 'Escolha uma forma de pagamento válida',
    required_error: 'Obrigatório selecionar uma forma de pagamento',
  }),
})

type CheckoutFormData = zod.infer<typeof checkoutFormSchema>

export function Checkout() {
  const [formStep, setFormStep] = useState<'request' | 'tracking'>('request')

  const { resetProducts } = useContext(CheckoutContext)

  const newCheckoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      addOnAddress: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentType: undefined,
    },
  })

  const { handleSubmit, reset } = newCheckoutForm

  async function handleSubmitOrder(data: CheckoutFormData) {
    requestCoffee(data).then(() => {
      reset()
      resetProducts()

      setFormStep('tracking')
    })
  }

  if (formStep === 'tracking') {
    return <DeliveryTracking />
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitOrder)}>
      <CheckoutContainer>
        <FormProvider {...newCheckoutForm}>
          <LeftPanel>
            <h2>Complete seu pedido</h2>
            <DeliveryAddress />
            <PaymentType />
          </LeftPanel>
        </FormProvider>
        <OrderDetails />
      </CheckoutContainer>
    </form>
  )
}
