import { infoLocationsProps } from '../../pages/Home'

export enum ActionTypes {
  GET_LOCAL_BY_INPUT = 'GET_LOCAL_BY_INPUT',
}

export function ShearchLocationAction(data: infoLocationsProps) {
  return {
    type: 'GET_LOCAL_BY_INPUT',
    payload: {
      data,
    },
  }
}
