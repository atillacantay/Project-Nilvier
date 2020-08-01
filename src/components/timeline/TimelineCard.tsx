import React, { FC, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Link,
  Chip,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ITimelineItem } from '../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      fontSize: 24,
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
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
)

type TimelineCardProps = Omit<ITimelineItem, 'icon'>

const TimelineCard: FC<TimelineCardProps> = item => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState<string | number>()

  const handleExpandClick = (id: number) => {
    if (expanded === id) {
      setExpanded('')
    } else {
      setExpanded(id)
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={item.title} subheader={item.date} titleTypographyProps={{ variant: 'body1' }} />
      <CardContent>
        {item.chips &&
          item.chips.map(chip => (
            <Chip key={chip.key} label={chip.label} className={classes.chip} size="small" clickable />
          ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: Boolean(expanded),
          })}
          onClick={() => handleExpandClick(item.id)}
          aria-expanded={Boolean(expanded)}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={item.id === expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{item.content}</Typography>
          <Typography>{item.website && <Link href={item.website}>Link to Website</Link>}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default TimelineCard
