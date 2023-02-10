import styled from 'styled-components'
import { device } from '../../../../Global/GlobalStyle'

const baseDivDash = styled.div`
  background: ${({ theme }) => theme.mauve};
  padding: 1rem;
  border-radius: 10px;
`
export const TemperatureStatus = styled(baseDivDash)`
  grid-area: temp;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (${device['mobal-g']}) {
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

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

      border-bottom: 2px solid ${({ theme }) => theme['base-background']};
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
  gap: 1rem;

  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (${device['mobal-g']}) {
      grid-template-columns: 1fr;
    }

    main {
      justify-content: space-evenly;
      border-right: 2px solid ${({ theme }) => theme['base-background']};
      padding-right: 0.5rem;
    }
    main:last-child {
      border: 0;
    }
  }
`
export const HourWeather = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  @media screen and (${device['mobal-g']}) {
  }

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
  grid-template-areas:
    'temp'
    'aside'
    'main';
  grid-row-gap: 1rem;

  @media screen and (${device['mobal-g']}) {
    width: 100%;
    grid-template-areas:
      'temp aside'
      'main main';
    grid-column-gap: 1rem;
    grid-template-columns: 2fr 4fr;
  }
  /* @media screen and (min-width: 1440px) {
      max-width: 80%;
      grid-template-columns: 2fr 5fr;
    } */
`
export const Semana = styled.div``
