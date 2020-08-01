import React, { useState } from 'react'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardActionArea } from '@material-ui/core'

import { Games } from '../../store/twitch/types'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    image: {
      objectFit: 'fill',
    },
  }),
)

type Props = {
  topGame: Games
}

const GameCard: React.FC<Props> = ({ topGame }) => {
  const classes = useStyles()
  const [raised, setRaised] = useState(false)
  const handleRaise = () => {
    setRaised(!raised)
  }
  const encodedGameName = encodeURIComponent(topGame.game.name.trim())
  
  return (
    <Link
      to={{
        pathname: `twitch/streams/game/${encodedGameName}`,
        state: { game: encodedGameName },
      }}
    >
      <Card className={classes.root} raised={raised} onMouseEnter={handleRaise} onMouseLeave={handleRaise}>
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
  )
}

export default GameCard
