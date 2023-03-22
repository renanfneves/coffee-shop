import styled from 'styled-components'
import heroImage from '../../assets/hero-image.svg'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20rem 0 0;

  &::after {
    background: url(${heroImage}) center no-repeat;
    content: '';
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 20rem;
  }

  > h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media (min-width: ${(props) => props.theme['min-tablet-size']}) {
    padding: 5.875rem 50% 5.875rem 0;

    &::after {
      top: 5.875rem;
      width: 30rem;
      height: 22.5rem;
    }
  }
`

export const OurServicesContainer = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.625rem) calc(50% - 0.625rem);
  row-gap: 1.25rem;
  padding: 4.125rem 0;
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem 2.5rem;
  list-style-type: none;
`
