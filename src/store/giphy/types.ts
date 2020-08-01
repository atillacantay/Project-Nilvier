// src/store/giphy/types.ts

import HttpStatusCode from "../../types/HttpStatusCode"

export const FETCH_GIPHY_REQUEST = 'FETCH_GIPHY_REQUEST'
export const FETCH_GIPHY_SUCCESS = 'FETCH_GIPHY_SUCCESS'
export const FETCH_GIPHY_FAILURE = 'FETCH_GIPHY_FAILURE'

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
  page?: number
  isFetching: boolean
  error?: string
}

//Giphy Request Action
export interface FetchGiphyRequestAction {
  type: typeof FETCH_GIPHY_REQUEST
  payload: {
    //no props
  }
}

//Giphy Success Action
export interface FetchGiphySuccessAction {
  type: typeof FETCH_GIPHY_SUCCESS
  payload: {
    result: Result
    term: string
    page?: number
  }
}

//Giphy Failure Action
export interface FetchGiphyFailureAction {
  type: typeof FETCH_GIPHY_FAILURE
  payload: {
    //no props
  }
}

export type GiphyActionTypes = FetchGiphyRequestAction | FetchGiphySuccessAction | FetchGiphyFailureAction
