import Axios from 'axios'

export const API = Axios.create({
  baseURL: 'https://nilvier-backend.herokuapp.com',
  timeout: 5000,
})
