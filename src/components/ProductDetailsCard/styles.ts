import styled from 'styled-components'

export const ProductDetailsCardContainer = styled.div`
  position: relative;

  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7rem 1.25rem 1.25rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};

  > h2 {
    margin-top: 1rem;
  }

  > span {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
    margin-top: 0.5rem;
  }
`

export const ProductImage = styled.img`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translate(-50%);
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const Tag = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-size: 0.625rem;
`

export const AddToCheckoutContainer = styled.div`
  margin-top: 2.063rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Price = styled.span`
  display: flex;
  font-size: 0.875rem;
  gap: 0.1rem;
  align-items: baseline;

  > span:last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`
