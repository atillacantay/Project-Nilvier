import MainPage from './containers/MainPage'
import { lazy } from 'react'
import TwitchStreams from './containers/twitch/TwitchStreams'
import TwitchStreamerPage from './containers/twitch/TwitchStreamerPage'

export const routes = [
  { exact: true, path: '/', component: MainPage },
  { exact: true, path: '/about', component: lazy(() => import('./containers/About')) },
  { exact: true, path: '/giphy', component: lazy(() => import('./containers/GiphyContainer')) },
  { exact: true, path: '/fooditive', component: lazy(() => import('./containers/fooditive/FooditiveContainer')) },
  { exact: true, path: '/twitch', component: lazy(() => import('./containers/twitch/Twitch')) },
  {
    exact: true,
    path: '/twitch/streams/game/:game',
    component: TwitchStreams,
  },
  {
    exact: true,
    path: '/twitch/:name',
    component: TwitchStreamerPage,
  },
  { component: lazy(() => import('./components/NotFound')) },
]
