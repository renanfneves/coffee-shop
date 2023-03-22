export interface GeoCoordinates {
  latitude: number
  longitude: number
}

export const getCurrentGeoLocation = async (): Promise<GeoCoordinates> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const {
          coords: { latitude, longitude },
        } = position

        resolve({ latitude, longitude })
      },
      () => {
        reject(new Error('Localização indisponível'))
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    )
  })
}
