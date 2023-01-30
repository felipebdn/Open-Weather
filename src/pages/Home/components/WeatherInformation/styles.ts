import styled from 'styled-components'
import { device } from '../../../../Global/GlobalStyle'

const baseDivDash = styled.div`
  background: ${({ theme }) => theme['base-post']};
  padding: 1rem;
`
export const TemperatureStatus = styled(baseDivDash)`
  grid-area: temp;
`
export const CurrentData = styled(baseDivDash)`
  grid-area: headerC;
`
export const AirPollution = styled(baseDivDash)`
  grid-area: headerA;
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
    'temp headerC headerA'
    'aside headerC headerA'
    'aside main main';

  grid-template-columns: 3fr 4fr 2fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  /* 
  @media (${device.xl}) {
    padding: 0 1rem;
    width: 100%;
  } */
`
