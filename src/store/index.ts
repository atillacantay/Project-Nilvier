import { giphyReducer } from './giphy/reducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  giphy: giphyReducer,
})

export type RootState = ReturnType<typeof rootReducer>
