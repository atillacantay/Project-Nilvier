// src/store/giphy/types.ts

export const FETCH_GIPHY_REQUEST = 'FETCH_GIPHY_REQUEST'
export const FETCH_GIPHY_SUCCESS = 'FETCH_GIPHY_SUCCESS'
export const FETCH_GIPHY_FAILURE = 'FETCH_GIPHY_FAILURE'

//Giphy Gif Object
export interface Gif {
  id: string
  title: string
  import_datetime: string
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

//Giphy Store State
export interface GiphyState {
  gifs: Gif[]
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
    gifs: Gif[]
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
