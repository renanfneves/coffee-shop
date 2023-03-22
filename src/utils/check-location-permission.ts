export const checkGeolocationPermission =
  async (): Promise<PermissionState> => {
    const { state } = await navigator.permissions.query({ name: 'geolocation' })

    return state
  }
