import { GiphyState, GiphyActionTypes, FETCH_GIPHY_REQUEST, FETCH_GIPHY_SUCCESS, FETCH_GIPHY_FAILURE } from './types'

export const initialState: GiphyState = {
  result: {
    data: [],
    meta: {
      status: 0,
      msg: '',
      response_id: '',
    },
    pagination: {
      count: 0,
      offset: 0,
      total_count: 0,
    },
  },
  term: '',
  page: undefined,
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
        result: action.payload.result,
        term: action.payload.term,
        page: action.payload.page,
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
