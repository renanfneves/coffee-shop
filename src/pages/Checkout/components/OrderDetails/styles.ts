import styled from 'styled-components'

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const DetailsContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  padding: 2.75rem;
  gap: 1.5rem;
`

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const PriceDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.75rem;

  font-size: 0.875rem;
`

interface DescriptionTextProps {
  alignTo: 'left' | 'right'
}

export const DescriptionText = styled.span<DescriptionTextProps>`
  text-align: ${(props) => props.alignTo};
`

export const TotalPriceDescription = styled(DescriptionText)`
  font-weight: 700;
  font-size: 1.25rem;
`
