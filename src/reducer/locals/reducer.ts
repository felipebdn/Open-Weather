import produce from 'immer'
import { ActionTypes } from './actions'

export interface infoLocationsProps {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}
type listType = {
  main: {
    aqi: number
  }
  components: {
    co: number
    no: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    nh3: number
  }
  dt: number
}

export interface coordinates {
  lat: number
  lon: number
}

interface airPollutionTypes {
  coord: coordinates
  list: listType[]
}

interface currentWeatherTypes {
  coord: coordinates
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  rain: {
    1h: number
  }
}

export interface locationsStateType {
  infoLocations: infoLocationsProps[]
  isCoordinates: coordinates | null
  airPollution: airPollutionTypes
  currentWeather: currentWeatherTypes
}
export const defaultValuesReducer = {
  infoLocations: [],
  isCoordinates: null,
  airPollution: {
    coord: {
      lon: 0,
      lat: 0,
    },
    list: [],
  },
}

export function localsReducer(state: locationsStateType, action: any) {
  switch (action.type) {
    case ActionTypes.GET_LOCAL_BY_INPUT:
      return produce(state, (draft) => {
        draft.isCoordinates = null
        draft.infoLocations.push(action.payload.data)
      })
    default:
      return state
  }
}
