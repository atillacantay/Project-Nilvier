// src/routers/TwitchRouter.ts

import { Router } from 'express'
import * as twitchController from '../controllers/TwitchController'

// Create a new router to handle /twitch routes
const twitchRouter = Router()

// GET /top-games
twitchRouter.get('/top-games', twitchController.fetchTopGames)

// GET /more-top-games
twitchRouter.get('/more-top-games', twitchController.fetchMoreGames)

// GET /streams
twitchRouter.get('/streams', twitchController.fetchStreams)

// GET /more-streams
twitchRouter.get('/more-streams', twitchController.fetchMoreStreams)

export default twitchRouter
