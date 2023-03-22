import { CardTitleContainer } from './styles'

interface CardTitleProps {
  title: string
  subtitle: string
  icon: React.ReactElement
}

export function CardTitle({ title, subtitle, icon }: CardTitleProps) {
  return (
    <CardTitleContainer>
      <div>{icon}</div>
      <span>{title}</span>
      <span>{subtitle}</span>
    </CardTitleContainer>
  )
}
