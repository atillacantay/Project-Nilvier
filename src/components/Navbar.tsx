import React, { FC, useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Button, Box } from '@material-ui/core'
import { ThemeContext } from './ThemeProvider'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
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
          <Box flexGrow={1}>
            <Button component={RouterLink} to="/" variant="text" size="large" color="inherit" className={classes.title}>
              Project Nilvier
            </Button>
          </Box>
          <IconButton color="inherit" onClick={() => themeContext?._setThemeName()}>
            {themeContext?.themeName === 'lightTheme' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar
