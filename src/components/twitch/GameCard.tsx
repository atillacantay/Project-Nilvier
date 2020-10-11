import React, { useState, FC } from 'react'
import { Link } from 'react-router-dom'

import { Game } from '../../store/twitch/types'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardActionArea, Box, Typography, Theme } from '@material-ui/core'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import LiveTvIcon from '@material-ui/icons/LiveTv'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gameCardRoot: {},
    gameCardDetails: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    margin: {
      marginLeft: theme.spacing(1),
    },
  }),
)

interface GameCardProps {
  topGame: Game
}

const GameCard: FC<GameCardProps> = ({ topGame }) => {
  const classes = useStyles()
  const [raised, setRaised] = useState(false)

  const handleRaise = () => {
    setRaised(raised => !raised)
  }

  const encodedGameName = encodeURIComponent(topGame.game.name.trim())

  return (
    <div className={classes.gameCardRoot}>
      <Link to={`/twitch/streams/game/${encodedGameName}`}>
        <Card raised={raised} onMouseEnter={handleRaise} onMouseLeave={handleRaise}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={topGame.game.name}
              image={topGame.game.box.large}
              title={topGame.game.name}
            />
          </CardActionArea>
        </Card>
      </Link>
      <div className={classes.gameCardDetails}>
        <Typography variant="body2">{topGame.game.name}</Typography>
        <div>
          <Box display="flex" title="Live Streamers">
            <LiveTvIcon color="action" fontSize="small" />
            <Typography variant="body2" className={classes.margin}>
              {topGame.channels}
            </Typography>
          </Box>
          <Box display="flex" title="Viewers">
            <VisibilityOutlinedIcon color="action" fontSize="small" />
            <Typography variant="body2" className={classes.margin}>
              {topGame.viewers}
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default GameCard
