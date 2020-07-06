// src/routers/FooditiveRouter.ts

import { Router } from 'express'
import * as fooditiveController from '../controllers/FooditiveController'

// Create a new router to handle /fooditive routes
const fooditiveRouter = Router()

// GET /fooditive/
fooditiveRouter.get('/', fooditiveController.index)

// GET /fooditive/welcome
fooditiveRouter.get('/welcome', fooditiveController.getWelcome)

export default fooditiveRouter
