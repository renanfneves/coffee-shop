import styled from 'styled-components'

interface CheckoutButtonContainerProps {
  variant: 'primary' | 'secondary'
}

const CheckoutButtonColors = {
  primary: 'yellow-light',
  secondary: 'purple-dark',
} as const

export const CheckoutButtonContainer = styled.button<CheckoutButtonContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[CheckoutButtonColors[props.variant]]};
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
`

export const ProductsCount = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -0.5rem;
  top: -0.5rem;
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;
`
