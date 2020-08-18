import React, { useEffect, useState } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { RootState } from '../../store'
import { fetchStreams, fetchMoreStreams } from '../../store/twitch/actions'
import { Streams } from '../../store/twitch/types'
import StreamCard from '../../components/twitch/StreamCard'

import { Grid, createStyles, Theme, makeStyles, Button, Link, Typography, LinearProgress } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'
import { encoder } from '../../utils/encoder'
import useScrollBottom from '../../hooks/useScrollBottom'

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

interface StateProps {
  isFetching: boolean
  isFetchingMore: boolean
  streams: Streams[]
  error?: string
}

const TwitchStreams = () => {
  const classes = useStyles()
  const [isBottom, scrollRef] = useScrollBottom()
  const dispatch = useDispatch()
  const [offset, setOffset] = useState(0)
  const { pathname } = useLocation()
  const { isFetching, streams, error } = useSelector<RootState, StateProps>(state => state.twitch, shallowEqual)

  const encodedPathname = encoder(pathname)

  useEffect(() => {
    if (pathname) dispatch(fetchStreams(encodedPathname))
  }, [pathname, dispatch, encodedPathname])

  useEffect(() => {
    if (isBottom) setOffset(offset => offset + 25)
  }, [isBottom, setOffset])

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
