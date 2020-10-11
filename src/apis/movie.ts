import Axios from 'axios'

export const OmdbAPI = Axios.create({
  baseURL: 'https://www.omdbapi.com/',
  timeout: 5000,
})
