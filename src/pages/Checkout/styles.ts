import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding-top: 2.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: calc(60% - 1rem) calc(40% - 1rem);
`

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > h2 {
    margin-bottom: 0.25rem;
  }
`
