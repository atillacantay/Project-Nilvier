// src/store/giphy/actions.ts

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { FETCH_GIPHY_REQUEST, FETCH_GIPHY_SUCCESS, FETCH_GIPHY_FAILURE, GiphyActionTypes } from './types'
import { RootState } from '..'
import Axios from 'axios'

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, GiphyActionTypes>>

export const giphyCall: AppThunk = (term: string, page: number) => async dispatch => {
  dispatch({ type: FETCH_GIPHY_REQUEST, payload: {} })
  try {
    const response = await Axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&offset=${
        page * 25
      }`,
    )
    dispatch({ type: FETCH_GIPHY_SUCCESS, payload: { result: response.data, term, page } })
  } catch (error) {
    dispatch({ type: FETCH_GIPHY_FAILURE, payload: {} })
  }
}
