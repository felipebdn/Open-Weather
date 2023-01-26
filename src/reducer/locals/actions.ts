import {
  airPollutionTypes,
  currentWeatherTypes,
  infoLocationsProps,
} from './reducer'

export enum ActionTypes {
  GET_LOCAL_BY_INPUT = 'GET_LOCAL_BY_INPUT',
  GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER',
}

export function ShearchLocationAction(data: infoLocationsProps) {
  return {
    type: ActionTypes.GET_LOCAL_BY_INPUT,
    payload: {
      data,
    },
  }
}

export function GetCurrentWeather(
  resWeather: currentWeatherTypes,
  resAirPollution: airPollutionTypes,
) {
  return {
    type: ActionTypes.GET_CURRENT_WEATHER,
    payload: {
      resWeather,
      resAirPollution,
    },
  }
}
