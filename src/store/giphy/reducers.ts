import { GiphyState, GiphyActionTypes, FETCH_GIPHY_REQUEST, FETCH_GIPHY_SUCCESS, FETCH_GIPHY_FAILURE } from './types'

export const initialState: GiphyState = {
  gifs: [],
  isFetching: false,
  error: undefined,
}

export function giphyReducer(state = initialState, action: GiphyActionTypes): GiphyState {
  switch (action.type) {
    case FETCH_GIPHY_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_GIPHY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        gifs: action.payload.gifs,
      }
    case FETCH_GIPHY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error occured',
      }
    default:
      return state
  }
}
