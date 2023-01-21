import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LocalsContainer = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 0.5rem 0 1rem;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  align-items: c;

  main {
    flex: 1;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  span {
    width: 20%;
    height: inherit;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
`
