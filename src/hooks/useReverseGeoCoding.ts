import axios from 'axios'
import { useEffect, useReducer, useState } from 'react'
import {
  setAddress,
  setLoadingAddress,
} from '../reducers/reverseGeocoding/actions'
import { reverseGeocodingReducer } from '../reducers/reverseGeocoding/reducer'

import { GeoCoordinates } from '../utils/get-current-geo-location'

interface useReverseGeoCodingProps {
  geoCoordinates: GeoCoordinates | null
  loadingCoordinates: boolean
}

export function useReverseGeoCoding({
  geoCoordinates,
  loadingCoordinates,
}: useReverseGeoCodingProps) {
  const [addressState, dispatch] = useReducer(
    reverseGeocodingReducer,
    {
      address: '',
      loading: false,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-shop:location-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return {
          address: JSON.parse(storedStateAsJSON),
          loading: false,
        }
      }

      return initialState
    },
  )

  useEffect(() => {
    if (loadingCoordinates || !geoCoordinates) {
      return
    }

    dispatch(setLoadingAddress())

    const { latitude, longitude } = geoCoordinates

    axios(
      `${
        import.meta.env.VITE_ARCGIS_API
      }?f=pjson&featureTypes=&location=${longitude},${latitude}`,
    )
      .then((response) => {
        const {
          address: { City, Region },
        } = response.data

        dispatch(setAddress(`${City}, ${Region}`))
      })
      .catch(() => {
        dispatch(setAddress(''))
      })
  }, [geoCoordinates, loadingCoordinates])

  useEffect(() => {
    if (addressState.address) {
      const stateJSON = JSON.stringify(addressState.address)

      localStorage.setItem('@coffee-shop:location-state-1.0.0', stateJSON)
    }
  }, [addressState.address])

  return {
    address: addressState.address,
    loading: loadingCoordinates || addressState.loading,
  }
}
