import styled from 'styled-components'

export const PaymentTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 0.75rem;

  > input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  > input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
