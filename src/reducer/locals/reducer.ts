import produce from 'immer'
import { locationsStateType } from '../../pages/Home'

export function LocalsReducer(state: locationsStateType, action: any) {
  if (action.type === 'GET_LOCAL_BY_INPUT') {
    return produce(state, (draft) => {
      draft.infoLocations.push(action.payload.data)
    })
  }
  return state
}
