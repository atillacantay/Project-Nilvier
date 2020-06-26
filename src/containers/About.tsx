import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import AboutCard from '../components/AboutCard'
import MyTimeline from '../components/MyTimeline'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboutRoot: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    aboutContainer: {
      flex: 1,
      margin: theme.spacing(3),
    },
    aboutContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  }),
)

const About: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.aboutRoot}>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutContent}>
          <Button component={RouterLink} to="/" variant="outlined" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <AboutCard />
            </Grid>
            <Grid item xs={12} sm={8}>
              <MyTimeline />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default About
