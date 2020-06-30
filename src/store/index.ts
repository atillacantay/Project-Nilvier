import { giphyReducer } from './giphy/reducers'
import { fooditiveReducer } from './fooditive/reducers'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  giphy: giphyReducer,
  fooditive: fooditiveReducer,
})

export type RootState = ReturnType<typeof rootReducer>
