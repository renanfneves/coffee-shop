import { GeoCoordinates } from '../../utils/get-current-geo-location'

export enum ActionsTypes {
  SET_LOADING_COORDINATES = 'SET_LOADING_COORDINATES',
  SET_COORDINATES = 'SET_COORDINATES',
  SET_COORDINATES_ERROR = 'SET_COORDINATES_ERROR',
}

export function setCoordinates(geoCoordinates: GeoCoordinates) {
  return {
    type: ActionsTypes.SET_COORDINATES,
    payload: {
      geoCoordinates,
    },
  }
}

export function setLoadingCoordinates() {
  return {
    type: ActionsTypes.SET_LOADING_COORDINATES,
  }
}

interface SetCoordinatesErrorProps {
  error: string
  grantedPermission: PermissionState
}

export function setCoordinatesError({
  error,
  grantedPermission,
}: SetCoordinatesErrorProps) {
  return {
    type: ActionsTypes.SET_COORDINATES_ERROR,
    payload: {
      error,
      grantedPermission,
    },
  }
}
