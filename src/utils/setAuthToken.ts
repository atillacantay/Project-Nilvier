// setAuthToken.ts

import axios from 'axios'
import { API } from '../apis/api'

const apis = [API]

const setAuthToken = (token?: string) => {
  if (token) {
    apis.map(api => {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    })
  } else {
    apis.map(api => {
      delete api.defaults.headers.common['Authorization']
    })
  }
}

export default setAuthToken
