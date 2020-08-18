import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Typography, Box, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainRoot: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
    },
    button: {
      marginRight: theme.spacing(2),
    },
  }),
)

const MainPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.mainRoot}>
      <div className={classes.mainContent}>
        <img src={logo} className="App-logo" alt="logo" />
        <Box mb={2} textAlign="center">
          <Typography variant="h6">Welcome to my portfolio and other things</Typography>
          <Typography variant="caption">This website is built with React / Redux / TypeScript</Typography>
        </Box>
        <Grid container spacing={2} alignItems="center" justify="center">
          {buttons.map(button => (
            <Grid item key={button.key}>
              <Button component={RouterLink} to={button.route} color="default" variant="outlined">
                {button.child}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default MainPage

const buttons = [
  { key: 0, route: '/about', child: 'about' },
  { key: 1, route: '/giphy', child: 'giphy' },
  { key: 2, route: '/fooditive', child: 'fooditive' },
  { key: 3, route: '/twitch', child: 'twitch' },
  { key: 4, route: '/movies', child: 'movies' },
]
