import { useEffect, FC } from 'react'
import { useDispatch } from 'react-redux'
import { getCookie } from '../utils/storageOperations'
import { setCurrentUser } from '../store/auth/actions'

import jwt_decode from 'jwt-decode'

export interface AuthGuardProps {
  children: JSX.Element
}
export interface AuthGuardStateProps {
  isAuthenticated: boolean
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleAuthentication = () => {
      const token = getCookie('accessToken')
      if (token) {
        const { id } = jwt_decode<{ id: string; exp: number; iat: number }>(token)
        if (id) dispatch(setCurrentUser(id))
      }
    }

    handleAuthentication()
  }, [dispatch])

  return children
}

export default AuthGuard
