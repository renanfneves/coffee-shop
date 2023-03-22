import React, { createContext, FC, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Toast } from '../components/Toast'

type IToastData = {
  addToast: (message: Omit<ToastProperties, 'id'>) => void
  removeToast: (id: string) => void
}

export const ToastContext = createContext<IToastData>({} as IToastData)

type ToastProviderProps = {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [messages, setMessages] = useState<ToastProperties[]>([])

  const addToast = useCallback(
    ({ variant, text }: Omit<ToastProperties, 'id'>) => {
      const id = uuidv4()

      const newMessage = {
        id,
        variant,
        text,
      }
      setMessages((state) => [...state, newMessage])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((msg) => msg.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  )
}

export default ToastProvider
