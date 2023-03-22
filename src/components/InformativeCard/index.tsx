import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useMemo } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { IconContainer, InformativeCardContainer } from './styles'

interface InformativeCardProps {
  children: React.ReactNode
  icon: React.ReactElement
  iconBackgroundColor: string
}

export function InformativeCard({
  icon,
  iconBackgroundColor,
  children,
}: InformativeCardProps) {
  const theme = useTheme()

  return (
    <InformativeCardContainer>
      <IconContainer style={{ backgroundColor: iconBackgroundColor }}>
        {icon}
      </IconContainer>
      <>{children}</>
    </InformativeCardContainer>
  )
}
