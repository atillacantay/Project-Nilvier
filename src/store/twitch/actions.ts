// src/store/twitch/actions.ts

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
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
  SearchResult,
  TopGames,
} from './types'
import { RootState } from '..'
import Axios from 'axios'
import { API } from '../../apis/api'

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, TwitchActionTypes>>

export const fetchStream: AppThunk = (id: number) => async dispatch => {
  dispatch({ type: FETCH_STREAM_REQUEST, payload: {} })
  try {
    const response = await Axios.get(`https://api.twitch.tv/kraken/channels/${id}`, {
      headers: {
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        Accept: 'application/vnd.twitchtv.v5+json',
      },
    })
    dispatch({ type: FETCH_STREAM_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: FETCH_STREAM_FAILURE, payload: {} })
  }
}

export const fetchStreams: AppThunk = (game: string) => async dispatch => {
  dispatch({ type: FETCH_STREAMS_REQUEST, payload: {} })
  try {
    const response = await API.get(`/api/twitch/streams`, { params: { game } })
    dispatch({ type: FETCH_STREAMS_SUCCESS, payload: response.data.streams })
  } catch (error) {
    dispatch({ type: FETCH_STREAMS_FAILURE, payload: {} })
  }
}

export const fetchMoreStreams: AppThunk = (game: string, offset: number) => async dispatch => {
  dispatch({ type: FETCH_MORE_STREAMS_REQUEST, payload: {} })
  try {
    const response = await API.get(`/api/twitch/more-streams`, { params: { game, offset } })
    dispatch({ type: FETCH_MORE_STREAMS_SUCCESS, payload: response.data.streams })
  } catch (error) {
    dispatch({ type: FETCH_MORE_STREAMS_FAILURE, payload: {} })
  }
}

export const fetchTopGames: AppThunk = () => async dispatch => {
  dispatch({ type: FETCH_TOP_GAMES_REQUEST, payload: {} })
  try {
    const response = await API.get<TopGames>('/api/twitch/top-games')
    dispatch({ type: FETCH_TOP_GAMES_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: FETCH_TOP_GAMES_FAILURE, payload: {} })
  }
}

export const fetchMoreGames: AppThunk = (offset: number) => async dispatch => {
  dispatch({ type: FETCH_MORE_GAMES_REQUEST, payload: {} })
  try {
    const response = await API.get<TopGames>('/api/twitch/more-top-games', { params: { offset } })
    dispatch({ type: FETCH_MORE_GAMES_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: FETCH_MORE_GAMES_FAILURE, payload: {} })
  }
}

export const searchChannels: AppThunk = (term: string) => async dispatch => {
  dispatch({ type: SEARCH_CHANNELS_REQUEST, payload: {} })
  try {
    const response = await API.get<SearchResult>(`/api/twitch/search/channels`, {
      params: { term },
    })
    dispatch({ type: SEARCH_CHANNELS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: SEARCH_CHANNELS_FAILURE, payload: {} })
  }
}
