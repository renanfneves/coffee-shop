import styled from 'styled-components'

export const AddressLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`
