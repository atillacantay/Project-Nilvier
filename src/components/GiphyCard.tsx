import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, IconButton } from '@material-ui/core'

import ShareIcon from '@material-ui/icons/Share'
import { Gif } from '../store/giphy/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
)

type Props = {
  gif: Gif
}

const GiphyCard: React.FC<Props> = ({ gif }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={4}>
      <CardHeader title={gif.title || 'Unknown'} subheader={gif.import_datetime} />
      <CardActionArea>
        <CardMedia className={classes.media} image={gif.images.original.url} title="me" />
      </CardActionArea>
      <CardContent>{gif.title}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default GiphyCard
