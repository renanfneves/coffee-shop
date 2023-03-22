export enum ActionsTypes {
  ADD_PRODUCT_TO_LIST = 'ADD_PRODUCT_TO_LIST',
  REMOVE_PRODUCT_FROM_LIST = 'REMOVE_PRODUCT_FROM_LIST',
  UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT',
  RESET_PRODUCTS = 'RESET_PRODUCTS',
}

export function addProductToCheckout(product: Product) {
  return {
    type: ActionsTypes.ADD_PRODUCT_TO_LIST,
    payload: {
      product,
    },
  }
}

export function removeProductFromCheckout(productId: string) {
  return {
    type: ActionsTypes.REMOVE_PRODUCT_FROM_LIST,
    payload: {
      productId,
    },
  }
}

export function updateProductAmountInList(productId: string, amount: number) {
  return {
    type: ActionsTypes.UPDATE_PRODUCT_AMOUNT,
    payload: {
      productId,
      amount,
    },
  }
}

export function resetProductsList() {
  return {
    type: ActionsTypes.RESET_PRODUCTS,
  }
}
