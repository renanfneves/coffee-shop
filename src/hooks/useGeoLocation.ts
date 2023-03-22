import {
  GeoCoordinates,
  getCurrentGeoLocation,
} from '../utils/get-current-geo-location'

import { useCallback, useEffect, useReducer } from 'react'

import { checkGeolocationPermission } from '../utils/check-location-permission'
import {
  setCoordinates,
  setCoordinatesError,
  setLoadingCoordinates,
} from '../reducers/geoLocation/actions'

import { geoLocationReducer } from '../reducers/geoLocation/reducer'

export function useGeolocation() {
  const [geolocationState, dispatch] = useReducer(geoLocationReducer, {
    geoCoordinates: null,
    loading: false,
    error: null,
    grantedPermission: 'prompt',
  })

  const getCurrentPosition = useCallback(async () => {
    const grantedPermission = await checkGeolocationPermission()

    if (grantedPermission !== 'denied') {
      dispatch(setLoadingCoordinates())

      try {
        const position = await getCurrentGeoLocation()

        dispatch(setCoordinates(position))
      } catch (err: any) {
        dispatch(setCoordinatesError({ error: err.message, grantedPermission }))
      }
    } else {
      dispatch(
        setCoordinatesError({
          error: 'Permissão negada',
          grantedPermission,
        }),
      )
    }
  }, [])

  useEffect(() => {
    getCurrentPosition()
  }, [getCurrentPosition])

  return geolocationState
}
