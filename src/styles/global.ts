import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  h1, h2 {
    line-height: 130%;
  }
  
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};

    @media (min-width: ${(props) => props.theme['min-tablet-size']}) {
      font-size: 3rem;
    }
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};

    @media (min-width: ${(props) => props.theme['min-tablet-size']}) {
      font-size: 1.125rem;
    }
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  ul {
    list-style-type: none;
  }
`
