import React, { FC } from 'react'

import { IconButton } from '@material-ui/core'
import { Brightness4, Brightness7 } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/global/actions'
import { RootState } from '../store'

const ThemeButton: FC = () => {
  const theme = useSelector<RootState>(state => state.global.theme)
  const dispatch = useDispatch()

  return (
    <IconButton color="inherit" onClick={() => dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))}>
      {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  )
}
export default ThemeButton
