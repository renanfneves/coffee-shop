import styled from 'styled-components'

export const InputContainer = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  &:focus::placeholder {
    color: transparent;
  }
`
