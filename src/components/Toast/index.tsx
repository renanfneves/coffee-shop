import { useTransition, animated } from '@react-spring/web'

import ToastComponent from './ToastComponent'

import { ToastContainer } from './styles'

interface ToastProps {
  messages: ToastProperties[]
}

export function Toast({ messages }: ToastProps) {
  const transitions = useTransition(messages, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  })

  return (
    <ToastContainer>
      {transitions((style, item) => (
        <ToastComponent message={item} style={style} />
      ))}
    </ToastContainer>
  )
}
