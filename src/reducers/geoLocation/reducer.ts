import { produce } from 'immer'
import { GeoCoordinates } from '../../utils/get-current-geo-location'

import { ActionsTypes } from './actions'

interface LocationState {
  geoCoordinates: GeoCoordinates | null
  grantedPermission: PermissionState
  loading: boolean
  error: string | null
}

export function geoLocationReducer(state: LocationState, action: any) {
  switch (action.type) {
    case ActionsTypes.SET_LOADING_COORDINATES:
      return produce(state, (draft) => {
        draft.geoCoordinates = null
        draft.loading = true
        draft.error = null
      })

    case ActionsTypes.SET_COORDINATES: {
      return produce(state, (draft) => {
        draft.geoCoordinates = action.payload.geoCoordinates
        draft.loading = false
        draft.error = null
        draft.grantedPermission = 'granted'
      })
    }

    case ActionsTypes.SET_COORDINATES_ERROR: {
      return produce(state, (draft) => {
        draft.geoCoordinates = null
        draft.loading = false
        draft.error = action.payload.error
        draft.grantedPermission = action.payload.grantedPermission
      })
    }

    default:
      return state
  }
}
