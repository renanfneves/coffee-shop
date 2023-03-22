import { HTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { OptionLabel } from './styles'

interface PaymentOptionProps extends HTMLAttributes<HTMLInputElement> {
  value: string
  text: string
  icon: React.ReactElement
}

export function PaymentOption({ icon, text, value }: PaymentOptionProps) {
  const { register } = useFormContext()

  return (
    <>
      <input
        type="radio"
        value={value}
        id={value}
        {...register('paymentType')}
      />
      <OptionLabel htmlFor={value}>
        {icon}
        <span>{text}</span>
      </OptionLabel>
    </>
  )
}
