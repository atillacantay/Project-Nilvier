// src/store/giphy/actions.ts

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { FETCH_GIPHY_REQUEST, FETCH_GIPHY_SUCCESS, FETCH_GIPHY_FAILURE, GiphyActionTypes } from './types'
import { RootState } from '..'
import Axios from 'axios'

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, GiphyActionTypes>>

export const giphyCall: AppThunk = (term: string) => async dispatch => {
  dispatch({ type: FETCH_GIPHY_REQUEST, payload: {} })
  try {
    const response = await Axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`,
    )
    dispatch({ type: FETCH_GIPHY_SUCCESS, payload: { gifs: response.data.data } })
  } catch (error) {
    dispatch({ type: FETCH_GIPHY_FAILURE, payload: {} })
  }
}
