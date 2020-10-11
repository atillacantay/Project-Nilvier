import { GlobalActionTypes, GlobalState, TOGGLE_THEME } from './types'

export const initialState: GlobalState = {
  theme: '',
}

export function globalReducer(state = initialState, action: GlobalActionTypes): GlobalState {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      }

    default:
      return state
  }
}
