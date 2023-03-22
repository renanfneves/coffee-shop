import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 0.5rem;

  @media (min-width: ${(props) => props.theme['min-tablet-size']}) {
    padding: 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    max-width: 74rem;
    width: 100%;

    height: calc(100vh -10rem);
  }
`
