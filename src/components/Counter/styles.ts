import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  > button {
    display: flex;
    border: none;
    background: transparent;
  }
`
