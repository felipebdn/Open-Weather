import styled from 'styled-components'
import mapPin from '../../assets/images/city-pin.png'

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
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Locals = styled.div`
  background: ${({ theme }) => theme['base-post']};

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  main {
    flex: 1;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  span {
    background-image: url(${mapPin});
    padding: 2rem;
    line-height: 0;
    color: ${({ theme }) => theme.red};
  }
`
