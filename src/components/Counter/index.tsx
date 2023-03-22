import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { CounterContainer } from './styles'

interface CounterProps {
  amount: number
  setAmount: (addValue: number) => void
  style?: React.CSSProperties
}

export function Counter({ amount = 1, setAmount, style }: CounterProps) {
  const theme = useTheme()

  function handleAmount(addValue: number) {
    setAmount(addValue)
  }

  return (
    <CounterContainer style={style}>
      <button
        type="button"
        disabled={amount === 1}
        onClick={() => handleAmount(-1)}
      >
        <Minus size={16} color={theme.purple} />
      </button>
      <span>{amount}</span>
      <button type="button" onClick={() => handleAmount(1)}>
        <Plus size={16} color={theme.purple} />
      </button>
    </CounterContainer>
  )
}
