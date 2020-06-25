import React, { useState, createContext, FC } from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { themeCreator } from '../themes/base'

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
    if (currentTheme === 'lightTheme') {
      window.localStorage.setItem('theme', 'darkTheme')
      setThemeName('darkTheme')
    } else if (currentTheme === 'darkTheme') {
      window.localStorage.setItem('theme', 'lightTheme')
      setThemeName('lightTheme')
    }
  }

  // Retrieve the theme object by theme name
  const theme = themeCreator(themeName)

  console.log(theme)

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
