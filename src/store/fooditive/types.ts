// src/store/fooditive/types.ts

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

//Product Object
export interface Product {
  brand: string
  product_name: string
  unsuitability: string
  serial_number: string
}

//Content Object
export interface Content {
  company: string
  products: Product[]
}

//Category Item Object
export interface CategoryItem {
  category_name: string
  date: string
  contents: Content[]
}

//Category Object
export interface Category {
  [category_id: string]: CategoryItem
}

//Fooditive state
export interface FooditiveState {
  categories: Category
  isFetching: boolean
  error?: string
}

//
export interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST
  payload: {
    //no props
  }
}

//
export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: {
    // contents: Content[]
  }
}

//
export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE
  payload: {
    //no props
  }
}

export type FooditiveActionTypes = FetchProductsRequestAction | FetchProductsSuccessAction | FetchProductsFailureAction
