import { ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
