import { createContext, ReactNode, useReducer } from 'react'
import {
  coordinates,
  defaultValuesReducer,
  infoLocationsProps,
  localsReducer,
} from '../reducer/locals/reducer'
import { env } from '../environment'
import { api } from '../lib/axios'
import { ShearchLocationAction } from '../reducer/locals/actions'

interface localsContextType {
  infoLocations: infoLocationsProps[]
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
  const { infoLocations } = locationsState

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
    console.log(lat)
    console.log(lon)
  }

  return (
    <localsContext.Provider
      value={{ infoLocations, ShearchLocation, GetWeatherInformation }}
    >
      {children}
    </localsContext.Provider>
  )
}
