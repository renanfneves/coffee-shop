import styled from 'styled-components'

export const DeliveryTrackingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;

  > div {
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['base-button']};
  gap: 2rem;
  margin-top: 2.5rem;
  min-width: 32rem;
`

export const DetailsTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
