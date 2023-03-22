import styled from 'styled-components'

export const CardTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 1.875rem;
  gap: 0.125rem;

  > span:last-child {
    font-size: 0.875rem;
  }

  > div {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
