import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Auth from './auth'
import ThemeButton from './ThemeButton'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Box } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
  }),
)

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box display="flex" flex="1" justifyContent="space-between">
          <Button component={RouterLink} to="/" variant="text" size="large" color="inherit" className={classes.title}>
            Project Nilvier
          </Button>
          <Box>
            <Auth />
            <ThemeButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
