// src/store/auth/actions.ts

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  CLEAR_STATUS,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  LOGOUT_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_CURRENT_USER,
  AuthActionTypes,
  AuthenticationResponse,
  SetCurrentUserAction,
} from './types'
import { RootState } from '..'
import { API } from '../../apis/api'
import { removeCookie } from '../../utils/storageOperations'

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, AuthActionTypes>>

export const clearStatus = () => {
  return {
    type: CLEAR_STATUS,
    payload: {},
  }
}

export const registerUser: AppThunk = (formData: object) => async dispatch => {
  dispatch({ type: REGISTRATION_REQUEST, payload: {} })
  try {
    const { data } = await API.post<AuthenticationResponse>(`/api/auth/register`, formData)
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: { userId: data.userId },
    })
  } catch (error) {
    dispatch({ type: REGISTRATION_FAILURE, payload: error.response?.data })
  }
}

export const loginUser: AppThunk = (formData: object) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST, payload: {} })
  try {
    const { data } = await API.post<AuthenticationResponse>(`/api/auth/login`, formData)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { userId: data.userId },
    })
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response?.data })
  }
}

export const setCurrentUser = (id: string): SetCurrentUserAction => {
  return {
    type: SET_CURRENT_USER,
    payload: { id },
  }
}

export const logout = () => {
  //Removes the access token
  removeCookie('accessToken')
  //Redirects the user to the main page
  window.location.href = '/'
  return {
    type: LOGOUT_USER,
    payload: {},
  }
}
