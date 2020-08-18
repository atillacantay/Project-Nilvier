import { useState, useEffect, FC } from 'react'
import { API } from '../apis/api'

interface useFetchProps {
  url: string
  isLoading: boolean
  hasError: boolean
  errorMessage: string
}

const useFetch = (url: string, params: {}) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await API.get(url, params)
        if (response.status === 200) setData(response.data)
        else {
          setHasError(true)
          setErrorMessage(response.statusText)
        }
        setIsLoading(false)
      } catch (err) {
        setHasError(true)
        setErrorMessage(err.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return { data, isLoading, hasError, errorMessage }
}
export default useFetch
