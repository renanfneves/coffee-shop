import { createContext, useEffect, useReducer } from 'react'
import {
  addProductToCheckout,
  removeProductFromCheckout,
  resetProductsList,
  updateProductAmountInList,
} from '../reducers/checkout/actions'
import { checkoutReducer } from '../reducers/checkout/reducer'

interface CheckoutContextType {
  products: ProductWithAmount[]
  totalProducts: number
  addProduct(product: ProductWithAmount): void
  removeProduct(productId: string): void
  updateProductAmount(productId: string, amount: number): void
  resetProducts(): void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: React.ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkout, dispatch] = useReducer(
    checkoutReducer,
    {
      products: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-shop:checkout-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  function addProduct(product: Product) {
    dispatch(addProductToCheckout(product))
  }

  function removeProduct(productId: string) {
    dispatch(removeProductFromCheckout(productId))
  }

  function updateProductAmount(productId: string, amount: number) {
    dispatch(updateProductAmountInList(productId, amount))
  }

  function resetProducts() {
    dispatch(resetProductsList())
  }

  const totalProducts = checkout.products.length

  useEffect(() => {
    const stateJSON = JSON.stringify(checkout)

    localStorage.setItem('@ignite-coffee-shop:checkout-state-1.0.0', stateJSON)
  }, [checkout])

  return (
    <CheckoutContext.Provider
      value={{
        products: checkout.products,
        totalProducts,
        addProduct,
        removeProduct,
        updateProductAmount,
        resetProducts,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
