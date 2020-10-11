import {
  TwitchState,
  TwitchActionTypes,
  FETCH_STREAM_REQUEST,
  FETCH_STREAM_SUCCESS,
  FETCH_STREAM_FAILURE,
  FETCH_TOP_GAMES_REQUEST,
  FETCH_TOP_GAMES_SUCCESS,
  FETCH_TOP_GAMES_FAILURE,
  FETCH_STREAMS_REQUEST,
  FETCH_STREAMS_SUCCESS,
  FETCH_STREAMS_FAILURE,
  FETCH_MORE_GAMES_REQUEST,
  FETCH_MORE_GAMES_SUCCESS,
  FETCH_MORE_GAMES_FAILURE,
  FETCH_MORE_STREAMS_REQUEST,
  FETCH_MORE_STREAMS_SUCCESS,
  FETCH_MORE_STREAMS_FAILURE,
  SEARCH_CHANNELS_REQUEST,
  SEARCH_CHANNELS_SUCCESS,
  SEARCH_CHANNELS_FAILURE,
} from './types'

var streamObj = {
  _id: '',
  status: '',
  broadcaster_language: '',
  name: '',
  display_name: '',
  game: '',
  created_at: '',
  updated_at: '',
  partner: false,
  logo: '',
  url: '',
  views: 0,
  followers: 0,
  description: '',
  stream_type: '',
}

export const initialState: TwitchState = {
  stream: streamObj,
  streams: [],
  topGames: {
    _total: 0,
    top: [],
  },
  searchResult: {
    _total: 0,
    channels: [],
  },
  isSearching: false,
  isFetchingMore: false,
  isFetching: false,
  error: undefined,
}

export function twitchReducer(state = initialState, action: TwitchActionTypes): TwitchState {
  switch (action.type) {
    //FETCH STREAM
    case FETCH_STREAM_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_STREAM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stream: action.payload,
      }
    case FETCH_STREAM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error occured',
      }

    //FETCH STREAMS
    case FETCH_STREAMS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_STREAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        streams: action.payload,
      }
    case FETCH_STREAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error occured',
      }

    //FETCH MORE STREAMS
    case FETCH_MORE_STREAMS_REQUEST:
      return {
        ...state,
        isFetchingMore: true,
        error: undefined,
      }
    case FETCH_MORE_STREAMS_SUCCESS:
      return {
        ...state,
        isFetchingMore: false,
        streams: [...state.streams.concat(action.payload)],
      }
    case FETCH_MORE_STREAMS_FAILURE:
      return {
        ...state,
        isFetchingMore: false,
        error: 'Error occured',
      }

    //FETCH TOP GAMES
    case FETCH_TOP_GAMES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_TOP_GAMES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topGames: action.payload,
      }
    case FETCH_TOP_GAMES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error occured',
      }

    //FETCH MORE TOP GAMES
    case FETCH_MORE_GAMES_REQUEST:
      return {
        ...state,
        isFetchingMore: true,
        error: undefined,
      }
    case FETCH_MORE_GAMES_SUCCESS:
      return {
        ...state,
        isFetchingMore: false,
        topGames: {
          ...state.topGames,
          _total: action.payload._total,
          top: [...state.topGames.top.concat(action.payload.top)],
        },
      }
    case FETCH_MORE_GAMES_FAILURE:
      return {
        ...state,
        isFetchingMore: false,
        error: 'Error occured',
      }

    //SEARCH CHANNELS
    case SEARCH_CHANNELS_REQUEST:
      return {
        ...state,
        isSearching: true,
      }
    case SEARCH_CHANNELS_SUCCESS:
      return {
        ...state,
        isSearching: false,
        searchResult: action.payload,
      }
    case SEARCH_CHANNELS_FAILURE:
      return {
        ...state,
        isSearching: false,
      }
    default:
      return state
  }
}
