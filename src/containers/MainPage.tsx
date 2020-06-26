import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Typography, Box } from '@material-ui/core'

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

const MainPage: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.mainRoot}>
      <div className={classes.mainContent}>
        <img src={logo} className="App-logo" alt="logo" />
        <Box mb={2} textAlign="center">
          <Typography variant="h6">Welcome to my portfolio</Typography>
          <Typography variant="caption">This website is powered by React / Redux / TypeScript</Typography>
        </Box>
        <Box display="flex" m={1}>
          <Button component={RouterLink} to="/about" color="default" variant="outlined" className={classes.button}>
            show about
          </Button>
          <Button component={RouterLink} to="/giphy" color="default" variant="outlined">
            giphy
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default MainPage
