import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { logout } from '../../store/auth/actions'

import MyDialog from '../MyDialog'
import AuthTabs from './AuthTabs'

import { IconButton, Tooltip } from '@material-ui/core'
import { AccountCircle, ExitToApp } from '@material-ui/icons/'

interface AuthStateProps {
  isAuthenticated: boolean
}

const Auth = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector<RootState, AuthStateProps>(state => state.auth)

  useEffect(() => {
    if (isAuthenticated) setOpen(false)
  }, [isAuthenticated])

  const handleDialog = () => {
    setOpen(true)
  }

  return (
    <>
      {!isAuthenticated ? (
        <IconButton color="inherit" onClick={handleDialog}>
          <AccountCircle />
        </IconButton>
      ) : (
        <Tooltip title="Logout">
          <IconButton color="inherit" onClick={() => dispatch(logout())}>
            <ExitToApp />
          </IconButton>
        </Tooltip>
      )}
      <MyDialog open={open} onClose={() => setOpen(false)} content={<AuthTabs />} />
    </>
  )
}

export default Auth
