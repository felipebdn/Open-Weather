import {
  airPollutionTypes,
  currentWeatherTypes,
  infoLocationsTypes,
} from './reducer'

export enum ActionTypes {
  GET_LOCAL_BY_INPUT = 'GET_LOCAL_BY_INPUT',
  GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER',
}
export function ShearchLocationAction(data: infoLocationsTypes) {
  return {
    type: ActionTypes.GET_LOCAL_BY_INPUT,
    payload: {
      data,
    },
  }
}
export function GetCurrentWeather(data: airPollutionTypes) {
  return {
    type: ActionTypes.GET_CURRENT_WEATHER,
    payload: {
      data,
    },
  }
}
