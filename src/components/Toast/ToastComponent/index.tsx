import { MinusCircle } from 'phosphor-react'
import { useCallback, useEffect, useMemo } from 'react'
import { useTheme } from 'styled-components'
import useToast from '../../../hooks/useToast'
import { ToastContainer } from './styles'

interface ToastComponentProps {
  variant?: ToastVariant
  message: ToastProperties
  style: any
}

export function ToastComponent({
  message,
  variant = 'success',
  style,
}: ToastComponentProps) {
  const { removeToast } = useToast()
  const theme = useTheme()

  const backgroundColor = useMemo(() => {
    const colors = {
      success: theme.purple,
      warning: theme.yellow,
      error: theme.red,
    } as const

    return colors[variant as keyof typeof colors]
  }, [theme, variant])

  const handleRemoveToast = useCallback(
    (id: string) => {
      removeToast(id)
    },
    [removeToast],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [removeToast, message.id])

  return (
    <ToastContainer background={backgroundColor} style={style}>
      <span color={theme.white}>{message.text}</span>

      <button type="button" onClick={() => handleRemoveToast(message.id)}>
        <MinusCircle size={20} />
      </button>
    </ToastContainer>
  )
}

export default ToastComponent
