export const TOGGLE_THEME = 'TOGGLE_THEME'

export interface GlobalState {
  theme: string
}

export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME
  payload: {
    theme: string
  }
}

export type GlobalActionTypes = ToggleThemeAction
