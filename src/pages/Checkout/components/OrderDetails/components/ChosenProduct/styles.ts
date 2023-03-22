import styled from 'styled-components'

export const ChosenProductContainer = styled.li`
  display: flex;
  flex-direction: row;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > img {
    width: 4rem;
    height: 4rem;
  }

  > span {
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-inline: 1.25rem 3.125rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const RemoveProductButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: none;
  font-size: 0.75rem;

  > span {
    text-transform: uppercase;
  }
`
