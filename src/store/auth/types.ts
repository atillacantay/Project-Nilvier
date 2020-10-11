// src/store/auth/types.ts

export const CLEAR_STATUS = 'CLEAR_STATUS'
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export interface User {
  _id: string
}

//Expected response from the API 
export interface AuthenticationResponse {
  userId: string
}

export interface AuthenticationFailureResponse {
  errors?: { email: string; password: string }
}

export interface EmptyPayloadAction {
  payload: {
    //no props
  }
}

export interface AuthState {
  account: User
  isAuthenticated: boolean
  isLoading: boolean
  error?: AuthenticationFailureResponse
}

//Clear Status Action
export interface ClearStatusAction extends EmptyPayloadAction {
  type: typeof CLEAR_STATUS
}

//Registration Actions
export interface RegistrationRequestAction extends EmptyPayloadAction {
  type: typeof REGISTRATION_REQUEST
}

export interface RegistrationSuccessAction {
  type: typeof REGISTRATION_SUCCESS
  payload: AuthenticationResponse
}

export interface RegistrationFailureAction {
  type: typeof REGISTRATION_FAILURE
  payload: AuthState['error']
}

export interface LoginRequestAction extends EmptyPayloadAction {
  type: typeof LOGIN_REQUEST
}

//Login Actions
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
  payload: AuthenticationResponse
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE
  payload: AuthState['error']
}

//Set Current User Action
export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  payload: {
    id: string
  }
}

//Logout Action
export interface LogoutUserAction extends EmptyPayloadAction {
  type: typeof LOGOUT_USER
}

export type AuthActionTypes =
  | ClearStatusAction
  | RegistrationRequestAction
  | RegistrationSuccessAction
  | RegistrationFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | SetCurrentUserAction
  | LogoutUserAction
