import { ShoppingCart } from 'phosphor-react'
import { HTMLAttributes, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { CheckoutButtonContainer, ProductsCount } from './styles'

interface CheckoutButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  count: number
  size: number
}

export function CheckoutButton({
  variant = 'primary',
  count = 0,
  size = 24,
  ...rest
}: Partial<CheckoutButtonProps>) {
  const theme = useTheme()

  const iconColor = useMemo(() => {
    const colors = {
      primary: theme['yellow-dark'],
      secondary: theme.white,
    } as const

    return colors[variant!]
  }, [theme, variant])

  return (
    <CheckoutButtonContainer variant={variant} {...rest}>
      <ShoppingCart color={iconColor} weight="fill" size={size} />
      {!!count && <ProductsCount>{count}</ProductsCount>}
    </CheckoutButtonContainer>
  )
}
