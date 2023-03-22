import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CheckoutContextProvider } from './contexts/CheckoutContext'
import ToastProvider from './contexts/ToastContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ToastProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </ToastProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
