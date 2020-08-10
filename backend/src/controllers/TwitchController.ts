import { Request, Response } from 'express'
import Axios, { AxiosError } from 'axios'
import configs from '../configs'

export const TwitchAPI = Axios.create({
  baseURL: 'https://api.twitch.tv/',
  timeout: 5000,
  headers: {
    'Client-ID': process.env.TWITCH_CLIENT_ID || configs.TWITCH_CLIENT_ID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
})

export const fetchTopGames = (req: Request, res: Response): void => {
  TwitchAPI.get('/kraken/games/top')
    .then(response => {
      res.json(response.data)
    })
    .catch(function (error: AxiosError) {
      if (error.response)
        res.status(error.response.status).send({ isError: error.isAxiosError, message: error.message })
    })
}

export const fetchMoreGames = (req: Request, res: Response): void => {
  const { offset } = req.query
  TwitchAPI.get(`/kraken/games/top?offset=${offset}`)
    .then(response => {
      res.json(response.data)
    })
    .catch(function (error: AxiosError) {
      if (error.response)
        res.status(error.response.status).send({ isError: error.isAxiosError, message: error.message })
    })
}

export const fetchStreams = (req: Request, res: Response): void => {
  const { game } = req.query
  TwitchAPI.get(`/kraken/streams/?game=${game}`)
    .then(response => {
      res.json(response.data)
    })
    .catch(function (error: AxiosError) {
      if (error.response)
        res.status(error.response.status).send({ isError: error.isAxiosError, message: error.message })
    })
}

export const fetchMoreStreams = (req: Request, res: Response): void => {
  const { game, offset } = req.query
  TwitchAPI.get(`/kraken/streams/?game=${game}&offset=${offset}`)
    .then(response => {
      res.json(response.data)
    })
    .catch(function (error: AxiosError) {
      if (error.response)
        res.status(error.response.status).send({ isError: error.isAxiosError, message: error.message })
    })
}
