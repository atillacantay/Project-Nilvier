import React, { FC } from 'react'
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { toggleTheme } from '../store/global/actions'

const ThemeProviders: FC = props => {
  const dispatch = useDispatch()
  const globalTheme = useSelector<RootState, string>(state => state.global.theme)

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const theme = window.localStorage.getItem('theme')
      if (typeof theme === 'string') {
        return theme
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
      if (userMedia.matches) return 'dark'
    }

    return 'light'
  }

  React.useEffect(() => {
    dispatch(toggleTheme(getInitialTheme()))
  }, [])

  React.useEffect(() => {
    if (globalTheme) localStorage.setItem('theme', globalTheme)
  }, [globalTheme])

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: (globalTheme as 'dark' | 'light') || 'light',
        },
      }),
    [globalTheme],
  )

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
}

export default ThemeProviders
