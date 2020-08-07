import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchTopGames, fetchMoreGames } from '../../store/twitch/actions'
import { RootState } from '../../store'
import { Stream, TopGames } from '../../store/twitch/types'

import TwitchGames from '../../components/twitch/TwitchGames'
import TwitchCardIndicator from '../../components/indicators/TwitchCardIndicator'

import { makeStyles, createStyles, Box, Typography, Divider, Theme } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import useScrollBottom from '../../hooks/useScrollBottom'

// const PQUEEN = '137444898'
// const JAHREIN = '6768122'
// const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    twitchRoot: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden auto',
    },
    errorAlert: {
      margin: theme.spacing(2),
    },
    title: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      color: '#9146FF',
      margin: theme.spacing(1, 0),
    },
  }),
)

interface StateProps {
  isFetching: boolean
  isFetchingMore: boolean
  stream: Stream
  topGames: TopGames
  error?: string
}

const Twitch = () => {
  const classes = useStyles()
  const [isBottom, scrollRef] = useScrollBottom()
  const [offset, setOffset] = useState(0)
  const dispatch = useDispatch()
  const { isFetching, isFetchingMore, topGames, error } = useSelector<RootState, StateProps>(
    state => state.twitch,
    shallowEqual,
  )

  useEffect(() => {
    dispatch(fetchTopGames())
  }, [dispatch])

  useEffect(() => {
    if (isBottom) setOffset(offset + 10)
  }, [isBottom, setOffset])

  useEffect(() => {
    if (offset) dispatch(fetchMoreGames(offset))
  }, [offset, dispatch])

  return (
    <div className={classes.twitchRoot} ref={scrollRef}>
      <Box m={2}>
        <Typography variant="h4" className={classes.title}>
          Twitch Top Games
        </Typography>
        <Divider />
      </Box>
      {isFetching ? (
        <Box m={2}>
          <TwitchCardIndicator size={10} />
        </Box>
      ) : !error && topGames._total > 0 ? (
        <TwitchGames topGames={topGames} isFetchingMore={isFetchingMore} />
      ) : (
        error && (
          <Alert severity="error" className={classes.errorAlert}>
            {error}
          </Alert>
        )
      )}
    </div>
  )
}

export default Twitch
