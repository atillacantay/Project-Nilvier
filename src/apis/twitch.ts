import Axios from 'axios'

export const TwitchAPI = Axios.create({
  baseURL: 'https://api.twitch.tv/',
  timeout: 1000,
  headers: { 'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID, Accept: 'application/vnd.twitchtv.v5+json' },
})
