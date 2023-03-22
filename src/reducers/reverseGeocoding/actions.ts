export enum ActionsTypes {
  SET_LOADING_ADDRESS = 'SET_LOADING_ADDRESS',
  SET_ADDRESS = 'SET_ADDRESS',
}

export function setAddress(address: string) {
  return {
    type: ActionsTypes.SET_ADDRESS,
    payload: {
      address,
    },
  }
}

export function setLoadingAddress() {
  return {
    type: ActionsTypes.SET_LOADING_ADDRESS,
  }
}
