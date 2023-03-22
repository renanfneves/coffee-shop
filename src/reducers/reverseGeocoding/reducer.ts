import { produce } from 'immer'

import { ActionsTypes } from './actions'

interface GeocodingState {
  address: string | null
  loading: boolean
}

export function reverseGeocodingReducer(state: GeocodingState, action: any) {
  switch (action.type) {
    case ActionsTypes.SET_LOADING_ADDRESS:
      return produce(state, (draft) => {
        draft.address = null
        draft.loading = true
      })

    case ActionsTypes.SET_ADDRESS: {
      return produce(state, (draft) => {
        draft.address = action.payload.address
        draft.loading = false
      })
    }

    default:
      return state
  }
}
