import styled from 'styled-components'

export const DeliveryAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem 0.75rem;
`
