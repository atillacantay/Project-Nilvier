export const FETCH_STREAM_REQUEST = 'FETCH_STREAM_REQUEST'
export const FETCH_STREAM_SUCCESS = 'FETCH_STREAM_SUCCESS'
export const FETCH_STREAM_FAILURE = 'FETCH_STREAM_FAILURE'

export const FETCH_STREAMS_REQUEST = 'FETCH_STREAMS_REQUEST'
export const FETCH_STREAMS_SUCCESS = 'FETCH_STREAMS_SUCCESS'
export const FETCH_STREAMS_FAILURE = 'FETCH_STREAMS_FAILURE'

export const FETCH_MORE_STREAMS_REQUEST = 'FETCH_MORE_STREAMS_REQUEST'
export const FETCH_MORE_STREAMS_SUCCESS = 'FETCH_MORE_STREAMS_SUCCESS'
export const FETCH_MORE_STREAMS_FAILURE = 'FETCH_MORE_STREAMS_FAILURE'

export const FETCH_TOP_GAMES_REQUEST = 'FETCH_TOP_GAMES_REQUEST'
export const FETCH_TOP_GAMES_SUCCESS = 'FETCH_TOP_GAMES_SUCCESS'
export const FETCH_TOP_GAMES_FAILURE = 'FETCH_TOP_GAMES_FAILURE'

export const FETCH_MORE_GAMES_REQUEST = 'FETCH_MORE_GAMES_REQUEST'
export const FETCH_MORE_GAMES_SUCCESS = 'FETCH_MORE_GAMES_SUCCESS'
export const FETCH_MORE_GAMES_FAILURE = 'FETCH_MORE_GAMES_FAILURE'

export const SEARCH_CHANNELS_REQUEST = 'SEARCH_CHANNELS_REQUEST'
export const SEARCH_CHANNELS_SUCCESS = 'SEARCH_CHANNELS_SUCCESS'
export const SEARCH_CHANNELS_FAILURE = 'SEARCH_CHANNELS_FAILURE'

//Twitch Channel Object
export interface Channel {
  _id: string
  broadcaster_language: string
  created_at: string
  display_name: string
  followers: number
  game: string
  language?: string
  logo: string
  name: string
  partner: boolean
  profile_banner?: string
  status: string
  updated_at: string
  url: string
  views: number
}

//Twitch Stream Object
export interface DetailedStream extends Channel {
  description: string
  stream_type: string
}

//Twitch Stream Object
export interface Stream {
  _id: number
  channel: Channel
  created_at: string
  game: string
  preview: {
    large: string
  }
  viewers: number
}

//Twitch Game Object
export interface Game {
  channels: number
  viewers: number
  game: {
    _id: number
    box: {
      large: string
    }
    name: string
  }
}

//Twitch TopGames Object
export interface TopGames {
  _total: number
  top: Game[]
}

//Twitch SearchResult Object
export interface SearchResult {
  _total: number
  channels: Channel[]
}

//Twitch Store State
export interface TwitchState {
  stream: DetailedStream
  streams: Stream[]
  topGames: TopGames
  searchResult: SearchResult
  isSearching: boolean
  isFetching: boolean
  isFetchingMore: boolean
  error?: string
}

//Twitch Stream Request Action
export interface FetchStreamRequestAction {
  type: typeof FETCH_STREAM_REQUEST
  payload: {
    //no props
  }
}

//Twitch Stream Success Action
export interface FetchStreamSuccessAction {
  type: typeof FETCH_STREAM_SUCCESS
  payload: DetailedStream
}

//Twitch Stream Failure Action
export interface FetchStreamFailureAction {
  type: typeof FETCH_STREAM_FAILURE
  payload: {
    //no props
  }
}

//Twitch Streams Request Action
export interface FetchStreamsRequestAction {
  type: typeof FETCH_STREAMS_REQUEST
  payload: {
    //no props
  }
}

//Twitch Streams Success Action
export interface FetchStreamsSuccessAction {
  type: typeof FETCH_STREAMS_SUCCESS
  payload: Stream[]
}

//Twitch Streams Failure Action
export interface FetchStreamsFailureAction {
  type: typeof FETCH_STREAMS_FAILURE
  payload: {
    //no props
  }
}

//Twitch More Streams Request Action
export interface FetchMoreStreamsRequestAction {
  type: typeof FETCH_MORE_STREAMS_REQUEST
  payload: {
    //no props
  }
}

//Twitch More Streams Success Action
export interface FetchMoreStreamsSuccessAction {
  type: typeof FETCH_MORE_STREAMS_SUCCESS
  payload: Stream[]
}

//Twitch More Streams Failure Action
export interface FetchMoreStreamsFailureAction {
  type: typeof FETCH_MORE_STREAMS_FAILURE
  payload: {
    //no props
  }
}

//Twitch Games Request Action
export interface FetchTopGamesRequestAction {
  type: typeof FETCH_TOP_GAMES_REQUEST
  payload: {
    //no props
  }
}

//Twitch Games Success Action
export interface FetchTopGamesSuccessAction {
  type: typeof FETCH_TOP_GAMES_SUCCESS
  payload: TopGames
}

//Twitch Games Failure Action
export interface FetchTopGamesFailureAction {
  type: typeof FETCH_TOP_GAMES_FAILURE
  payload: {
    //no props
  }
}

//Twitch More Games Request Action
export interface FetchMoreGamesRequestAction {
  type: typeof FETCH_MORE_GAMES_REQUEST
  payload: {
    //no props
  }
}

//Twitch More Games Success Action
export interface FetchMoreGamesSuccessAction {
  type: typeof FETCH_MORE_GAMES_SUCCESS
  payload: TopGames
}

//Twitch More Games Failure Action
export interface FetchMoreGamesFailureAction {
  type: typeof FETCH_MORE_GAMES_FAILURE
  payload: {
    //no props
  }
}

//Twitch Search Channels Request Action
export interface SearchChannelsRequestAction {
  type: typeof SEARCH_CHANNELS_REQUEST
  payload: {
    //no props
  }
}

//Twitch Search Channels Success Action
export interface SearchChannelsSuccessAction {
  type: typeof SEARCH_CHANNELS_SUCCESS
  payload: SearchResult
}

//Twitch Search Channels Failure Action
export interface SearchChannelsFailureAction {
  type: typeof SEARCH_CHANNELS_FAILURE
  payload: {
    //no props
  }
}

export type TwitchActionTypes =
  | FetchStreamRequestAction
  | FetchStreamSuccessAction
  | FetchStreamFailureAction
  | FetchTopGamesRequestAction
  | FetchTopGamesSuccessAction
  | FetchTopGamesFailureAction
  | FetchStreamsRequestAction
  | FetchStreamsSuccessAction
  | FetchStreamsFailureAction
  | FetchMoreGamesRequestAction
  | FetchMoreGamesSuccessAction
  | FetchMoreGamesFailureAction
  | FetchMoreStreamsRequestAction
  | FetchMoreStreamsSuccessAction
  | FetchMoreStreamsFailureAction
  | SearchChannelsRequestAction
  | SearchChannelsSuccessAction
  | SearchChannelsFailureAction
