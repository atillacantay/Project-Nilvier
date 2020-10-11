import { TOGGLE_THEME } from './types'

export const toggleTheme = (theme: string) => {
  return {
    type: TOGGLE_THEME,
    payload: {
      theme,
    },
  }
}
