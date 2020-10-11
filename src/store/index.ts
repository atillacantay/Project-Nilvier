import { combineReducers } from 'redux'

import { authReducer } from './auth/reducers'
import { giphyReducer } from './giphy/reducers'
import { fooditiveReducer } from './fooditive/reducers'
import { twitchReducer } from './twitch/reducers'
import { movieReducer } from './movie/reducers'
import { globalReducer } from './global/reducers'


export const rootReducer = combineReducers({
  auth: authReducer,
  giphy: giphyReducer,
  fooditive: fooditiveReducer,
  twitch: twitchReducer,
  movie: movieReducer,
  global: globalReducer,
})

export type RootState = ReturnType<typeof rootReducer>
