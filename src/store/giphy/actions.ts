// src/store/giphy/actions.ts

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  FETCH_GIFS_REQUEST,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_FAILURE,
  GiphyActionTypes,
  FETCH_MORE_GIFS_REQUEST,
  FETCH_MORE_GIFS_SUCCESS,
  FETCH_MORE_GIFS_FAILURE,
} from './types'
import { RootState } from '..'
import Axios from 'axios'

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, GiphyActionTypes>>

export const giphyCall: AppThunk = (term: string, page = 0) => async dispatch => {
  dispatch({ type: FETCH_GIFS_REQUEST, payload: {} })
  try {
    const response = await Axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`,
    )
    dispatch({ type: FETCH_GIFS_SUCCESS, payload: { result: response.data, term, page } })
  } catch (error) {
    dispatch({ type: FETCH_GIFS_FAILURE, payload: {} })
  }
}

export const fetchMoreGifs: AppThunk = (term: string, offset: number) => async dispatch => {
  dispatch({ type: FETCH_MORE_GIFS_REQUEST, payload: {} })
  try {
    const response = await Axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&offset=${offset}`,
    )
    dispatch({ type: FETCH_MORE_GIFS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: FETCH_MORE_GIFS_FAILURE, payload: {} })
  }
}
