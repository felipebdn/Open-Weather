import { createContext, ReactNode, useReducer } from 'react'
import {
  airPollutionTypes,
  currentWeatherTypes,
  defaultValuesReducer,
  infoLocationsProps,
  localsReducer,
} from '../reducer/locals/reducer'
import { env } from '../environment'
import { api } from '../lib/axios'
import {
  GetCurrentWeather,
  ShearchLocationAction,
} from '../reducer/locals/actions'

interface localsContextType {
  infoLocations: infoLocationsProps[]
  airPollution: airPollutionTypes
  currentWeather: currentWeatherTypes
  isCoordinates: boolean
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
  const { infoLocations, airPollution, currentWeather, isCoordinates } =
    locationsState

  async function ShearchLocation(dataInput: string) {
    const res = await api.get('geo/1.0/direct?', {
      params: {
        q: dataInput,
        limit: 5,
        appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
      },
    })

    res.data.map((local: any) => {
      const data: infoLocationsProps = {
        name: !local.local_names ? local.name : local.local_names.pt,
        lat: local.lat,
        lon: local.lon,
        country: local.country,
        state: local.state,
      }
      dispatch(ShearchLocationAction(data))
      return null
    })
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
    GetCurrentWeather(resWeather.data, resAirPollution.data)
  }

  return (
    <localsContext.Provider
      value={{
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
