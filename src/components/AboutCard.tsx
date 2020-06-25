import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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

export default function AboutCard() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Atilla Cantay Gül" subheader="May 25, 1998" />
      <CardActionArea>
        <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="me" />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
