import React, { useState } from 'react'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'

import { Gif } from '../../store/giphy/types'
import GiphyCardOperations from './GiphyCardOperations'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: '345px',
      height: '300px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }),
)

type Props = {
  gif: Gif
}

const GiphyCard: React.FC<Props> = ({ gif }) => {
  const classes = useStyles()
  const [raised, setRaised] = useState(false)

  const handleRaise = () => {
    setRaised(!raised)
  }

  return (
    <Card
      className={classes.root}
      raised={raised}
      onMouseEnter={handleRaise}
      onMouseLeave={handleRaise}
      style={{
        backgroundImage: `url(${gif.images.original.url})`,
      }}
    >
      <GiphyCardOperations raised={raised} gif={gif} />
    </Card>
  )
}

export default GiphyCard
