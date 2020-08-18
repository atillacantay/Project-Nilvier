import { giphyReducer } from './giphy/reducers'
import { fooditiveReducer } from './fooditive/reducers'
import { twitchReducer } from './twitch/reducers'

import { combineReducers } from 'redux'
import { movieReducer } from './movie/reducers'

export const rootReducer = combineReducers({
  giphy: giphyReducer,
  fooditive: fooditiveReducer,
  twitch: twitchReducer,
  movie: movieReducer,
})

export type RootState = ReturnType<typeof rootReducer>
