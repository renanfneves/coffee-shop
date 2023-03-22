import { MapPin } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { CardTitle } from '../../../../components/CardTitle'
import { Input } from '../../../../components/Input'

import { DeliveryAddressContainer, InputsContainer } from './styles'

export function DeliveryAddress() {
  const theme = useTheme()
  const { register } = useFormContext()

  return (
    <DeliveryAddressContainer>
      <CardTitle
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={<MapPin size={20} color={theme['yellow-dark']} />}
      />
      <InputsContainer>
        <Input
          {...register('cep')}
          placeholder="CEP"
          style={{ width: '40%' }}
        />
        <Input
          {...register('street')}
          placeholder="Rua"
          style={{ width: '100%' }}
        />
        <Input
          {...register('number')}
          placeholder="Número"
          style={{ width: '40%' }}
        />
        <Input
          {...register('addOnAddress')}
          placeholder="Complemento"
          style={{ width: 'calc(60% - 0.75rem)' }}
        />
        <Input
          {...register('neighborhood')}
          placeholder="Bairro"
          style={{ width: '40%' }}
        />
        <Input
          {...register('city')}
          placeholder="Cidade"
          style={{ width: 'calc(50% - 1.5rem)' }}
        />
        <Input
          {...register('state')}
          placeholder="UF"
          style={{ width: '10%' }}
        />
      </InputsContainer>
    </DeliveryAddressContainer>
  )
}
