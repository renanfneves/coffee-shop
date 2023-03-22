import { animated } from 'react-spring'
import styled from 'styled-components'

interface ToastProps {
  background?: string
}

export const ToastContainer = styled(animated.div)<ToastProps>`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    margin-top: 1rem;
  }

  background: ${(props) => props.background};

  > span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.white};
    font-weight: 700;
  }

  > button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme.white};
    display: flex;
  }
`
