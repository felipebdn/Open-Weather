import styled from 'styled-components'

export const LocalsContainer = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Locals = styled.div`
  background: ${({ theme }) => theme['base-post']};

  width: 100%;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-border']};
  }

  main {
    height: inherit;
    cursor: pointer;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  span {
    line-height: 0;
    color: ${({ theme }) => theme.red};
  }
`
export const ButtonMapContainer = styled.button`
  img {
    width: 5rem;
    height: 100%;
  }
`
