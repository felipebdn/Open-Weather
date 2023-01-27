import styled from 'styled-components'
import { device } from '../../../../Global/GlobalStyle'

export const WeatherInformationContainer = styled.div`
  width: 90rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 1rem;

  @media (${device.xl}) {
    padding: 0 1rem;
    width: 100%;
  }
`
export const Sides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const TempNow = styled.div`
  background: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-radius: 15px;

  img {
    width: 6.25rem;
  }

  h1 {
    font-size: 4rem;
  }
  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
      font-size: 1.2rem;
    }
  }
`
