import { createContext, ReactNode, useReducer } from 'react'
import {
  airPollutionTypes,
  currentWeatherTypes,
  defaultValuesReducer,
  forecastWeatherTypes,
  infoLocationsTypes,
  localsReducer,
} from '../reducer/locals/reducer'
import { env } from '../environment'
import { api } from '../lib/axios'
import {
  GetCurrentWeather,
  ShearchLocationAction,
} from '../reducer/locals/actions'

interface localsContextType {
  infoLocations: infoLocationsTypes[]
  airPollution: airPollutionTypes
  currentWeather: currentWeatherTypes
  isCoordinates: boolean
  forecastWeather: forecastWeatherTypes
  ShearchLocation: (dataInput: string) => void
  GetWeatherInformation: (lat: number, lon: number) => void
}

interface localsContextProviderProps {
  children: ReactNode
}

export const localsContext = createContext({} as localsContextType)

export function LocalsContextProvider({
  children,
}: localsContextProviderProps) {
  const [locationsState, dispatch] = useReducer(
    localsReducer,
    defaultValuesReducer,
  )
  const {
    infoLocations,
    airPollution,
    currentWeather,
    isCoordinates,
    forecastWeather,
  } = locationsState

  async function ShearchLocation(dataInput: string) {
    const res = await api.get('geo/1.0/direct?', {
      params: {
        q: dataInput,
        limit: 5,
        appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
      },
    })
    dispatch(ShearchLocationAction(res.data))
  }
  async function GetWeatherInformation(lat: number, lon: number) {
    const resWeather = await api.get('data/2.5/weather?', {
      params: {
        lat,
        lon,
        appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
        units: 'metric',
        lang: 'pt_br',
      },
    })
    const resAirPollution = await api.get('data/2.5/air_pollution?', {
      params: {
        lat,
        lon,
        appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
      },
    })
    const resForecastWeather = await api.get('data/2.5/forecast?', {
      params: {
        lat,
        lon,
        appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
        units: 'metric',
        lang: 'pt_br',
      },
    })
    dispatch(
      GetCurrentWeather(
        resWeather.data,
        resAirPollution.data,
        resForecastWeather.data,
      ),
    )
  }

  return (
    <localsContext.Provider
      value={{
        forecastWeather,
        infoLocations,
        ShearchLocation,
        GetWeatherInformation,
        airPollution,
        currentWeather,
        isCoordinates,
      }}
    >
      {children}
    </localsContext.Provider>
  )
}
