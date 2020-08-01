import React, { FC } from 'react'
import { TopGames } from '../../store/twitch/types'
import { Grid, Typography, Box, makeStyles, createStyles, Theme, Divider, CircularProgress } from '@material-ui/core'
import GameCard from './GameCard'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import LiveTvIcon from '@material-ui/icons/LiveTv'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gameDetails: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      marginLeft: theme.spacing(1),
    },
    title: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      color: '#9146FF',
      margin: theme.spacing(1, 0),
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
    <div>
      <Box mb={4}>
        <Typography variant="h4" className={classes.title}>
          Twitch Top Games
        </Typography>
        <Divider />
      </Box>
      <div>
        <Grid container spacing={4}>
          {topGames.top.map(topGame => {
            const { channels, viewers, game } = topGame
            return (
              <Grid key={game._id} item xs={12} sm={6} md={4} lg={3}>
                <div>
                  <GameCard topGame={topGame} />
                  <div className={classes.gameDetails}>
                    <Typography variant="body2">{game.name}</Typography>
                    <Box>
                      <Box display="flex" title="Live Streamers">
                        <LiveTvIcon color="action" fontSize="small" />
                        <Typography variant="body2" className={classes.text}>
                          {channels}
                        </Typography>
                      </Box>
                      <Box display="flex" title="Viewers">
                        <VisibilityOutlinedIcon color="action" fontSize="small" />
                        <Typography variant="body2" className={classes.text}>
                          {viewers}
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                </div>
              </Grid>
            )
          })}
          {isFetchingMore && (
            <Grid item xs={12}>
              <Box className={classes.loader}>
                <CircularProgress />
              </Box>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  )
}

export default TwitchGames
