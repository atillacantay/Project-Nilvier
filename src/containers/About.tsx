import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Box, Grid } from '@material-ui/core'
import AboutCard from '../components/AboutCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboutRoot: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
)

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.aboutRoot}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AboutCard />
          </Grid>
        </Grid>
      </Box>
      <Button component={RouterLink} to="/">
        Back
      </Button>
    </div>
  )
}

export default About
