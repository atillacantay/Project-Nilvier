import React, { FC } from 'react'
import { TopGames } from '../../store/twitch/types'

import GameCard from './GameCard'

import { Grid, Box, makeStyles, createStyles, Theme, CircularProgress, Fade } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gamesRoot: {
      margin: theme.spacing(2),
    },
    loader: {
      textAlign: 'center',
    },
  }),
)

interface StateProps {
  topGames: TopGames
  isFetchingMore: boolean
}

const TwitchGames: FC<StateProps> = ({ topGames, isFetchingMore }) => {
  const classes = useStyles()

  return (
    <div className={classes.gamesRoot}>
      <Grid container spacing={4}>
        {topGames.top.map(topGame => (
          <Grid key={topGame.game._id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <GameCard topGame={topGame} />
          </Grid>
        ))}
        {isFetchingMore && (
          <Grid item xs={12}>
            <Box className={classes.loader}>
              <CircularProgress />
            </Box>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default TwitchGames
