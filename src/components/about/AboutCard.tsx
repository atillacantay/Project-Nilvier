import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Collapse,
  IconButton,
  Typography,
  Chip,
  Box,
  Button,
} from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expandButton: {
      marginLeft: 'auto',
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
)

const AboutCard: FC = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/dfgpewwii/image/upload/v1593178251/Project%20Nilvier/me.jpg"
          title="me"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h6">Atilla Cantay Gül</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          I am a new graduated student of computer engineering with 3.7 / 4 gpa. Currently working on Frontend and
          Backend Development. Have 2 deployed project which are contain react, redux, nodejs, mongodb, websocket etc.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          variant="outlined"
          className={classes.expandButton}
        >
          {expanded ? 'Close skills tab' : ' Open skills tab'}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box>
            <Typography>Technologies:</Typography>
            {chips.map(chip => (
              <Chip key={chip.key} label={chip.label} className={classes.chip} size="small" />
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  )
}
export default AboutCard

const chips = [
  { key: 0, label: 'javascript' },
  { key: 1, label: 'typescript' },
  { key: 2, label: 'react' },
  { key: 3, label: 'redux' },
  { key: 4, label: 'material-ui' },
  { key: 5, label: 'node.js' },
  { key: 6, label: 'express' },
  { key: 7, label: 'mongodb' },
  { key: 8, label: 'firebase' },
  { key: 9, label: 'websocket' },
  { key: 10, label: 'socket.io' },
  { key: 11, label: 'html' },
  { key: 12, label: 'css' },
  { key: 13, label: 'java' },
  { key: 14, label: 'c & c++' },
  { key: 15, label: 'c#' },
  { key: 16, label: 'matlab' },
  { key: 17, label: 'python' },
]
