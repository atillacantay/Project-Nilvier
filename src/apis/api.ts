import Axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development' ? process.env.PUBLIC_URL : process.env.REACT_APP_API_URL

export const API = Axios.create({
  baseURL: API_URL,
  timeout: 5000,
})
