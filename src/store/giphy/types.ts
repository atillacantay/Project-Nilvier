// src/store/giphy/types.ts

import HttpStatusCode from '../../types/HttpStatusCode'

export const FETCH_GIFS_REQUEST = 'FETCH_GIFS_REQUEST'
export const FETCH_GIFS_SUCCESS = 'FETCH_GIFS_SUCCESS'
export const FETCH_GIFS_FAILURE = 'FETCH_GIFS_FAILURE'

export const FETCH_MORE_GIFS_REQUEST = 'FETCH_MORE_GIFS_REQUEST'
export const FETCH_MORE_GIFS_SUCCESS = 'FETCH_MORE_GIFS_SUCCESS'
export const FETCH_MORE_GIFS_FAILURE = 'FETCH_MORE_GIFS_FAILURE'

//Giphy Gif Object
export interface Gif {
  id: string
  title: string
  user?: {
    is_verified: boolean
    profile_url: string
  }
  username: string
  images: {
    original: {
      url: string
    }
  }
}

//Giphy Pagination Object
export interface Pagination {
  count: number
  offset: number
  total_count: number
}

//Giphy Meta Object
export interface Meta {
  status: HttpStatusCode
  msg: string
  response_id: string
}

//Giphy Result Object
export interface Result {
  data: Gif[]
  meta?: Meta
  pagination: Pagination
}

//Giphy Store State
export interface GiphyState {
  result: Result
  term: string
  isFetching: boolean
  isFetchingMore: boolean
  error?: string
}

//Giphy Request Action
export interface FetchGifsRequestAction {
  type: typeof FETCH_GIFS_REQUEST
  payload: {
    //no props
  }
}

//Giphy Success Action
export interface FetchGifsSuccessAction {
  type: typeof FETCH_GIFS_SUCCESS
  payload: {
    result: Result
    term: string
  }
}

//Giphy Failure Action
export interface FetchGifsFailureAction {
  type: typeof FETCH_GIFS_FAILURE
  payload: {
    //no props
  }
}

//Giphy More Request Action
export interface FetchMoreGifsRequestAction {
  type: typeof FETCH_MORE_GIFS_REQUEST
  payload: {
    //no props
  }
}

//Giphy More Success Action
export interface FetchMoreGifsSuccessAction {
  type: typeof FETCH_MORE_GIFS_SUCCESS
  payload: Result
}

//Giphy More Failure Action
export interface FetchMoreGifsFailureAction {
  type: typeof FETCH_MORE_GIFS_FAILURE
  payload: {
    //no props
  }
}

export type GiphyActionTypes =
  | FetchGifsRequestAction
  | FetchGifsSuccessAction
  | FetchGifsFailureAction
  | FetchMoreGifsRequestAction
  | FetchMoreGifsSuccessAction
  | FetchMoreGifsFailureAction
