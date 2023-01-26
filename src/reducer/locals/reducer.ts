import produce from 'immer'
import { ActionTypes } from './actions'

export interface infoLocationsProps {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}
export interface airPollutionTypes {
  coord: {
    lat: number
    lon: number
  }
  list: {
    dt: number
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
  }[]
}
export interface currentWeatherTypes {
  coord: {
    lat: number
    lon: number
  }
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
  clouds: {
    all: number
  }
  dt: number
  sys: {
    // type: number
    // id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}
export interface locationsStateType {
  infoLocations: infoLocationsProps[]
  isCoordinates: boolean
  airPollution: airPollutionTypes
  currentWeather: currentWeatherTypes
}
export const defaultValuesReducer = {
  infoLocations: [],
  isCoordinates: false,
  airPollution: {
    coord: {
      lon: 0,
      lat: 0,
    },
    list: [],
  },
  currentWeather: {
    coord: {
      lat: 0,
      lon: 0,
    },
    weather: [],
    base: '',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      // type: 0,
      // id: 0,
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
  },
}

export function localsReducer(state: locationsStateType, action: any) {
  switch (action.type) {
    case ActionTypes.GET_LOCAL_BY_INPUT:
      return produce(state, (draft) => {
        draft.isCoordinates = false
        draft.infoLocations.push(action.payload.data)
      })
    case ActionTypes.GET_CURRENT_WEATHER:
      return produce(state, (draft) => {
        draft.isCoordinates = true
        draft.currentWeather = action.payload.resWeather
        draft.airPollution = action.payload.resWeather
      })

    default:
      return state
  }
}
