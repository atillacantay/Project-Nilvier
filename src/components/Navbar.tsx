import React, { FC, useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { ThemeContext } from './ThemeProvider'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
)

const Navbar: FC = () => {
  const classes = useStyles()

  // Get the setter function from context
  const themeContext = useContext(ThemeContext)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Project Nilvier
          </Typography>
          <IconButton color="inherit" onClick={() => themeContext?._setThemeName()}>
            {themeContext?.themeName === 'lightTheme' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar
