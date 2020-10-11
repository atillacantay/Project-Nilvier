import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { API } from '../apis/api'
import { Alert } from '@material-ui/lab'
import { LinearProgress, Box } from '@material-ui/core'
import { AxiosError } from 'axios'

interface VerificationResponse {
  status: boolean
  message: string
}

const VerificationPage = () => {
  const { search } = useLocation()
  const history = useHistory()
  const uuid = search.split('?id=').pop()
  const [isVerified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    const verifyAccount = async () => {
      setLoading(true)
      await API.post<VerificationResponse>(`/api/auth/verify?id=${uuid}`)
        .then(response => {
          if (response.data.status) {
            setVerified(true)
            setLoading(false)
            setTimeout(() => {
              history.push('/')
            }, 3000)
          }
        })
        .catch((error: AxiosError<VerificationResponse>) => {
          console.log(error)
          setLoading(false)
          setError(error.response?.data.message)
        })
    }

    verifyAccount()
  }, [])

  return (
    <Box m={2}>
      {loading ? (
        <LinearProgress />
      ) : isVerified ? (
        <Alert severity="success">Your Account is Verified, You will be redirected to homepage in 3 seconds</Alert>
      ) : (
        error && <Alert severity="error">{error}</Alert>
      )}
    </Box>
  )
}

export default VerificationPage
