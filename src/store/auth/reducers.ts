import {
  AuthActionTypes,
  AuthState,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_CURRENT_USER,
  LOGOUT_USER,
  CLEAR_STATUS,
} from './types'

export const initialState: AuthState = {
  account: {
    _id: '',
  },
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
}

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case CLEAR_STATUS:
      return {
        ...state,
        error: undefined,
      }
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: action.payload.userId ? true : false,
        account: { ...state.account, _id: action.payload.userId },
      }
    case REGISTRATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: action.payload.userId ? true : false,
        account: { ...state.account, _id: action.payload.userId },
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload.id ? true : false,
        account: { ...state.account, _id: action.payload.id },
      }

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        account: { _id: '' },
      }
    default:
      return state
  }
}
