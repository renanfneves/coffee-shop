import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

export const Input = forwardRef(function BaseInput(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: any,
) {
  return <InputContainer {...props} ref={ref} />
})
