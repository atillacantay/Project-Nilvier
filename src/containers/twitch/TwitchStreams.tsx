import React, { useEffect, useState } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../store'
import { fetchStreams, fetchMoreStreams } from '../../store/twitch/actions'
import { Stream } from '../../store/twitch/types'

import { encoder } from '../../utils/encoder'
import useScrollBottom from '../../hooks/useScrollBottom'
import StreamCard from '../../components/twitch/StreamCard'

import { Grid, createStyles, Theme, makeStyles, Button, Link, Typography, LinearProgress } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    streamsRoot: {
      display: 'flex',
      padding: theme.spacing(2),
      height: '100%',
      overflow: 'hidden auto',
    },
    title: {
      fontWeight: 600,
    },
  }),
)

interface TwitchStreamsStateProps {
  isFetching: boolean
  isFetchingMore: boolean
  streams: Stream[]
  error?: string
}

const TwitchStreams = () => {
  const classes = useStyles()
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [offset, setOffset] = useState(0)
  const [isBottom, scrollRef] = useScrollBottom()
  const { isFetching, streams, error } = useSelector<RootState, TwitchStreamsStateProps>(
    state => state.twitch,
    shallowEqual,
  )

  const encodedPathname = encoder(pathname)

  //Triggers fetching process if pathname includes the game title
  useEffect(() => {
    if (pathname) dispatch(fetchStreams(encodedPathname))
  }, [pathname, dispatch, encodedPathname])

  //Changes offset state
  useEffect(() => {
    if (isBottom) setOffset(offset => offset + 25)
  }, [isBottom, setOffset])

  //Triggers action dispatcher when offset value is changed
  useEffect(() => {
    if (offset) dispatch(fetchMoreStreams(encodedPathname, offset))
  }, [offset, dispatch, encodedPathname])

  return (
    <div className={classes.streamsRoot} ref={scrollRef}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Link component={RouterLink} to="/twitch" color="inherit" underline="none">
            <Button variant="outlined" startIcon={<ArrowBack />}>
              return back
            </Button>
          </Link>
        </Grid>
        {isFetching ? (
          <Grid item xs={12}>
            <LinearProgress />
          </Grid>
        ) : !error && streams.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>
                {streams[0].game.toUpperCase()}
              </Typography>
            </Grid>
            {streams.map(stream => (
              <Grid key={stream._id} item xs={12} sm={6} md={4} lg={3}>
                <StreamCard stream={stream} />
              </Grid>
            ))}
            {/* {isFetchingMore && (
              <Grid item xs={12}>
                <CircularProgress />
              </Grid>
            )} */}
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
