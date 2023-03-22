import styled from 'styled-components'

export const OptionLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  text-transform: uppercase;

  font-size: 0.75rem;
  line-height: 160%;

  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  flex-grow: 1;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
