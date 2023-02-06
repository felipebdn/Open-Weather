import styled from 'styled-components'
import { device } from '../../../../Global/GlobalStyle'

const baseDivDash = styled.div`
  background: ${({ theme }) => theme['base-post']};
  padding: 1rem;
  border-radius: 10px;
`
export const TemperatureStatus = styled(baseDivDash)`
  grid-area: temp;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
  }

  h1 {
    font-size: 3rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      text-transform: uppercase;
    }

    p:nth-child(1) {
      color: ${({ theme }) => theme.red};
    }
    p:nth-child(2) {
      color: ${({ theme }) => theme.blue};
    }
  }
`
export const WeatherLayers = styled(baseDivDash)`
  grid-area: aside;

`
export const WeatherForecast = styled(baseDivDash)`
  grid-area: main;
`

export const WeatherInformationContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 1rem;
  grid-template-areas:
    'temp main'
    'aside main';

  grid-template-columns: 3fr 4fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  /* 
  @media (${device.xl}) {
    padding: 0 1rem;
    width: 100%;
  } */
`
