import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 1rem;

  font-size: 0.8rem;

  > nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  @media (min-width: ${(props) => props.theme['min-tablet-size']}) {
    font-size: 1rem;

    > div {
      width: 100%;
    }
  }
`
