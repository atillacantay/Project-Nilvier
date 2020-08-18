import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import AboutCard from '../components/about/AboutCard'
import MyTimeline from '../components/timeline/MyTimeline'

import { Button, Grid, Divider, Typography, createStyles, makeStyles, Theme } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import TranscriptTable from '../components/about/Transcript'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboutRoot: {
      display: 'flex',
      margin: theme.spacing(2),
    },
  }),
)

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.aboutRoot}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Button component={RouterLink} to="/" variant="outlined" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" align="center">
            About me
          </Typography>
          <AboutCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" align="center">
            Transcript
          </Typography>
          <TranscriptTable />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Experiences
          </Typography>
          <MyTimeline />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
