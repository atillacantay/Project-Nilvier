import React, { useState, FC } from 'react'
import { Link } from 'react-router-dom'

import { Games } from '../../store/twitch/types'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardActionArea, Box, Typography, Theme } from '@material-ui/core'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import LiveTvIcon from '@material-ui/icons/LiveTv'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gameCardRoot: {},
    image: {
      objectFit: 'fill',
    },
    gameDetails: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      marginLeft: theme.spacing(1),
    },
  }),
)

type Props = {
  topGame: Games
}

const GameCard: FC<Props> = ({ topGame }) => {
  const classes = useStyles()
  const [raised, setRaised] = useState(false)
  const handleRaise = () => {
    setRaised(!raised)
  }
  const encodedGameName = encodeURIComponent(topGame.game.name.trim())

  return (
    <div className={classes.gameCardRoot}>
      <Link to={`twitch/streams/game/${encodedGameName}`}>
        <Card raised={raised} onMouseEnter={handleRaise} onMouseLeave={handleRaise}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.image}
              alt={topGame.game.name}
              image={topGame.game.box.large}
              title={topGame.game.name}
            />
          </CardActionArea>
        </Card>
      </Link>
      <div className={classes.gameDetails}>
        <Typography variant="body2">{topGame.game.name}</Typography>
        <Box>
          <Box display="flex" title="Live Streamers">
            <LiveTvIcon color="action" fontSize="small" />
            <Typography variant="body2" className={classes.text}>
              {topGame.channels}
            </Typography>
          </Box>
          <Box display="flex" title="Viewers">
            <VisibilityOutlinedIcon color="action" fontSize="small" />
            <Typography variant="body2" className={classes.text}>
              {topGame.viewers}
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default GameCard
