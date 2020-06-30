// src/store/fooditive/actions.ts

// import { ActionCreator } from 'redux'
// import { ThunkAction } from 'redux-thunk'
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FooditiveActionTypes } from './types'
// import { RootState } from '..'
// import Axios from 'axios'

export const fetchProducts = (): FooditiveActionTypes => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {},
  }
}
