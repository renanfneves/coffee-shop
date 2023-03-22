import { produce } from 'immer'

import { ActionsTypes } from './actions'

interface CheckoutState {
  products: ProductWithAmount[]
}

export function checkoutReducer(state: CheckoutState, action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_PRODUCT_TO_LIST: {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.product.id,
      )

      if (productIndex >= 0) {
        return produce(state, (draft) => {
          draft.products[productIndex].amount += action.payload.product.amount
        })
      }

      return produce(state, (draft) => {
        draft.products.push(action.payload.product)
      })
    }

    case ActionsTypes.REMOVE_PRODUCT_FROM_LIST: {
      return produce(state, (draft) => {
        draft.products = state.products.filter(
          (product) => product.id !== action.payload.productId,
        )
      })
    }

    case ActionsTypes.UPDATE_PRODUCT_AMOUNT: {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId,
      )

      return produce(state, (draft) => {
        draft.products[productIndex].amount += action.payload.amount
      })
    }

    case ActionsTypes.RESET_PRODUCTS: {
      return produce(state, (draft) => {
        draft.products = []
      })
    }

    default:
      return state
  }
}
