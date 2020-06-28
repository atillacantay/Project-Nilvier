import React, { useState, createContext, FC } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

type ThemeContextType = {
  themeName: string
  _setThemeName: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider: FC = props => {
  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem('theme') || 'lightTheme'

  // State to hold the selected theme name
  const [themeName, setThemeName] = useState(currentTheme)

  // Wrap _setThemeName to store new theme names in localStorage
  const _setThemeName = (): void => {
    if (themeName === 'lightTheme') {
      window.localStorage.setItem('theme', 'darkTheme')
      setThemeName('darkTheme')
    } else if (themeName === 'darkTheme') {
      window.localStorage.setItem('theme', 'lightTheme')
      setThemeName('lightTheme')
    }
  }

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeName === 'darkTheme' ? 'dark' : 'light',
        },
      }),
    [themeName],
  )

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        _setThemeName,
      }}
    >
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
