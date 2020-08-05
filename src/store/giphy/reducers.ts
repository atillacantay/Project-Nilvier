import {
  GiphyState,
  GiphyActionTypes,
  FETCH_GIFS_REQUEST,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_FAILURE,
  FETCH_MORE_GIFS_REQUEST,
  FETCH_MORE_GIFS_SUCCESS,
  FETCH_MORE_GIFS_FAILURE,
} from './types'

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
  isFetching: false,
  isFetchingMore: false,
  error: undefined,
}

export function giphyReducer(state = initialState, action: GiphyActionTypes): GiphyState {
  switch (action.type) {
    case FETCH_GIFS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_GIFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.payload.result,
        term: action.payload.term,
      }
    case FETCH_GIFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error occured',
      }

    case FETCH_MORE_GIFS_REQUEST:
      return {
        ...state,
        isFetchingMore: true,
        error: undefined,
      }
    case FETCH_MORE_GIFS_SUCCESS:
      return {
        ...state,
        isFetchingMore: false,
        result: {
          ...state.result,
          data: [...state.result.data.concat(action.payload.data)],
          meta: action.payload.meta,
          pagination: action.payload.pagination,
        },
      }
    case FETCH_MORE_GIFS_FAILURE:
      return {
        ...state,
        isFetchingMore: false,
        error: 'Error occured',
      }
    default:
      return state
  }
}
