import { giphyReducer } from './giphy/reducers'
import { fooditiveReducer } from './fooditive/reducers'
import { twitchReducer } from './twitch/reducers'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  giphy: giphyReducer,
  fooditive: fooditiveReducer,
  twitch: twitchReducer,
})

export type RootState = ReturnType<typeof rootReducer>
