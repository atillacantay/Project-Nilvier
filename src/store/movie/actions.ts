// src/store/giphy/actions.ts

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  MoviesActionTypes,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
} from './types'
import { RootState } from '..'
import Axios from 'axios'

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, MoviesActionTypes>>

export const fetchMovies: AppThunk = (term: string, page: number) => async dispatch => {
  dispatch({ type: FETCH_MOVIES_REQUEST, payload: {} })
  try {
    const response = await Axios.get(`https://www.omdbapi.com/?s=${term}&page=${page}&apikey=1d359387&`)
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: { result: response.data, term } })
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: {} })
  }
}

export const fetchMovieDetails: AppThunk = (imdbId: string) => async dispatch => {
  dispatch({ type: FETCH_MOVIE_DETAILS_REQUEST, payload: {} })
  try {
    const response = await Axios.get(`https://www.omdbapi.com/?i=${imdbId}&apikey=1d359387&`)
    dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_DETAILS_FAILURE, payload: {} })
  }
}
