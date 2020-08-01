export const FETCH_STREAM_REQUEST = 'FETCH_STREAM_REQUEST'
export const FETCH_STREAM_SUCCESS = 'FETCH_STREAM_SUCCESS'
export const FETCH_STREAM_FAILURE = 'FETCH_STREAM_FAILURE'

export const FETCH_STREAMS_REQUEST = 'FETCH_STREAMS_REQUEST'
export const FETCH_STREAMS_SUCCESS = 'FETCH_STREAMS_SUCCESS'
export const FETCH_STREAMS_FAILURE = 'FETCH_STREAMS_FAILURE'

export const FETCH_TOP_GAMES_REQUEST = 'FETCH_TOP_GAMES_REQUEST'
export const FETCH_TOP_GAMES_SUCCESS = 'FETCH_TOP_GAMES_SUCCESS'
export const FETCH_TOP_GAMES_FAILURE = 'FETCH_TOP_GAMES_FAILURE'

export const FETCH_MORE_GAMES_REQUEST = 'FETCH_MORE_GAMES_REQUEST'
export const FETCH_MORE_GAMES_SUCCESS = 'FETCH_MORE_GAMES_SUCCESS'
export const FETCH_MORE_GAMES_FAILURE = 'FETCH_MORE_GAMES_FAILURE'

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
export interface Stream extends Channel {
  description: string
  stream_type: string
}

//Twitch Streams Object
export interface Streams {
  _id: number
  channel: Channel
  created_at: string
  game: string
  preview: {
    large: string
  }
  viewers: number
}

//Twitch Games Object
export interface Games {
  channels: number
  viewers: number
  game: {
    _id: number
    box: {
      large: string
    }
    giantbomb_id: number
    logo: {
      large: string
    }
    name: string
  }
}

//Twitch TopGames Object
export interface TopGames {
  _total: number
  top: Games[]
}

//Twitch Store State
export interface TwitchState {
  stream: Stream
  streams: Streams[]
  topGames: TopGames
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
  payload: Stream
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
  payload: Streams[]
}

//Twitch Streams Failure Action
export interface FetchStreamsFailureAction {
  type: typeof FETCH_STREAMS_FAILURE
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
  payload: {
    top: Games[]
  }
}

//Twitch More Games Failure Action
export interface FetchMoreGamesFailureAction {
  type: typeof FETCH_MORE_GAMES_FAILURE
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
