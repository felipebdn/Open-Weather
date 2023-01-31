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
export const CurrentData = styled(baseDivDash)`
  grid-area: headerC;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;

  main {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    div:last-child {
      border: none;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 2px solid #303030;

      padding: 0.5rem;

      align-items: center;

      p {
        font-size: 1.5rem;
      }

      aside {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`
export const AirPollution = styled(baseDivDash)`
  grid-area: headerA;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;

  main {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    div:last-child {
      border: none;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 2px solid #303030;

      padding: 0.5rem;

      align-items: center;

      p {
        font-size: 1.3rem;
      }

      aside {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
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
