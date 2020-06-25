import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(2),
    },
  }),
)

const MainPage = () => {
  const classes = useStyles()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box mb={2}>
          <Typography variant="h6">Welcome to my portfolio</Typography>
          <Typography variant="caption">This website is powered by React / Redux / TypeScript</Typography>
        </Box>
        <Box display="flex" m={1}>
          <Button component={RouterLink} to="/about" color="inherit" variant="outlined" className={classes.button}>
            show about
          </Button>
          <Button component={RouterLink} to="/giphy" color="inherit" variant="outlined">
            giphy
          </Button>
        </Box>
      </header>
    </div>
  )
}

export default MainPage
