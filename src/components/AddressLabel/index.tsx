import { useGeolocation } from '../../hooks/useGeoLocation'
import { useReverseGeoCoding } from '../../hooks/useReverseGeoCoding'
import { MapPin } from 'phosphor-react'
import { AddressLabelContainer } from './styles'
import { useTheme } from 'styled-components'
import ReactLoading from 'react-loading'

export function AddressLabel() {
  const theme = useTheme()

  const {
    geoCoordinates,
    loading: loadingCoordinates,
    grantedPermission,
  } = useGeolocation()

  const { address } = useReverseGeoCoding({
    geoCoordinates,
    loadingCoordinates,
  })

  if (
    (!address && grantedPermission === 'prompt') ||
    (grantedPermission === 'granted' && !address)
  ) {
    return (
      <AddressLabelContainer>
        <ReactLoading
          type="cylon"
          color={theme['purple-dark']}
          height={24}
          width={24}
        />
        <span>carregando endereço</span>
      </AddressLabelContainer>
    )
  }

  return (
    <AddressLabelContainer>
      <MapPin size={24} weight="fill" color={theme['purple-dark']} />
      <span>
        {grantedPermission === 'denied'
          ? 'Para uma melhor experiência nos permita acessar a sua geo localização'
          : address}
      </span>
    </AddressLabelContainer>
  )
}
