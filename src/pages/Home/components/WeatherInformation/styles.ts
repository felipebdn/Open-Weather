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

  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;

      border-bottom: 2px solid #303030;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;

      aside {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
    div:last-child {
      border: 0;
      margin: 0;
      padding: 0;
    }
  }
`
export const WeatherForecast = styled(baseDivDash)`
  grid-area: main;

  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    main {
      border-right: 2px solid #303030;
      padding-right: 0.5rem;
    }
    main:last-child {
      border: 0;
    }
  }
`
export const HourWeather = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;

  &:last-child {
    margin: 0;
  }

  img {
    height: 5rem; //terminar de estilizar
    width: 5rem; //terminar de estilizar
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
      text-transform: capitalize;
    }

    main {
      display: flex;
      border: none;
      width: 100%;
      justify-content: space-between;
      gap: 0.7rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
    }
  }
`

export const WeatherInformationContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 1rem;
  grid-template-areas:
    'temp main'
    'aside main';

  grid-template-columns: 2fr 4fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  /* 
  @media (${device.xl}) {
    padding: 0 1rem;
    width: 100%;
  } */
`
