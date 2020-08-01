import React, { useEffect } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { RootState } from '../../store'
import { fetchStreams } from '../../store/twitch/actions'
import { Streams } from '../../store/twitch/types'
import StreamCard from '../../components/twitch/StreamCard'

import { Grid, CircularProgress, createStyles, Theme, makeStyles, Button, Link, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    streamsRoot: {
      display: 'flex',
      margin: theme.spacing(2),
    },
    title: {
      fontWeight: 600,
    },
  }),
)

interface StateProps {
  isFetching: boolean
  streams: Streams[]
  error?: string
}

const TwitchStreams = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  let { pathname } = useLocation()
  const { isFetching, streams, error } = useSelector<RootState, StateProps>(state => state.twitch, shallowEqual)
  const encodedPathname = encodeURIComponent(pathname.split('/')[4].trim()) //gets keyword from pathname and converts it to the true format

  useEffect(() => {
    if (pathname) dispatch(fetchStreams(encodedPathname))
  }, [pathname, dispatch, encodedPathname])

  return (
    <div className={classes.streamsRoot}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Link component={RouterLink} to="/twitch" color="inherit" underline="none">
            <Button variant="outlined" startIcon={<ArrowBack />}>
              return back
            </Button>
          </Link>
        </Grid>

        {isFetching ? (
          <CircularProgress />
        ) : !error && streams.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>
                {streams[0].game.toUpperCase()}
              </Typography>
            </Grid>
            {streams.map(stream => (
              <Grid key={stream._id} item xs={12} sm={6} md={4}>
                <StreamCard stream={stream} />
              </Grid>
            ))}
          </>
        ) : (
          error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )
        )}
      </Grid>
    </div>
  )
}

export default TwitchStreams
