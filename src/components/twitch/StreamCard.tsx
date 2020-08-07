import React, { useState, FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import { Streams } from '../../store/twitch/types'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Theme,
  Grid,
  Box,
  Badge,
  Tooltip,
  Fade,
} from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    text: {
      marginLeft: theme.spacing(1),
    },
    verifiedIcon: {
      marginLeft: theme.spacing(1),
      color: '#9146FF',
    },
  }),
)

type StateProps = {
  stream: Streams
}

const StreamCard: FC<StateProps> = ({ stream }) => {
  const classes = useStyles()
  const parent = process.env.NODE_ENV === 'development' ? 'localhost' : process.env.REACT_APP_TWITCH_PARENT_URL
  const [raised, setRaised] = useState(false)
  const [isPlaying, setPlaying] = useState(false)

  const handleRaise = () => {
    if (!raised) setRaised(true)
    else setRaised(false)
  }

  //Adding delay to on hover event for 1 second
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (raised)
      timer = setTimeout(() => {
        setPlaying(true)
      }, 1000)
    else setPlaying(false)

    return () => clearTimeout(timer)
  }, [raised])

  return (
    <Link to={`/twitch/${stream.channel.name}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.root} raised={raised} onMouseEnter={handleRaise} onMouseLeave={handleRaise}>
        <Box p={2}>
          <Grid container>
            <Grid item xs={3}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                invisible={!stream.channel.partner}
                badgeContent={
                  <Tooltip title="Verified" placement="right-start">
                    <VerifiedUserIcon className={classes.verifiedIcon} fontSize="small" />
                  </Tooltip>
                }
              >
                <Avatar src={stream.channel.logo} alt={stream.channel.name} />
              </Badge>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="body1">{stream.channel.display_name}</Typography>
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                  <Box display="flex" justifyContent="flex-end">
                    <FiberManualRecordIcon color="secondary" fontSize="small" />
                    <Typography variant="body2">
                      <Moment interval={1000} date={stream.created_at} durationFromNow />
                    </Typography>
                  </Box>
                  <Typography variant="body2">{stream.viewers}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Fade in={true} timeout={1000}>
          <CardMedia
            component={isPlaying ? 'iframe' : 'img'}
            alt={stream.channel.status}
            height={226}
            frameBorder="0"
            allowFullScreen={false}
            image={
              isPlaying
                ? `https://player.twitch.tv/?channel=${stream.channel.name}&parent=${parent}&muted=true`
                : stream.preview.large
            }
            title={stream.channel.status}
          />
        </Fade>
        <CardContent>
          <Typography variant="caption">
            {stream.channel.status.length > 35 ? `${stream.channel.status.slice(0, 35)}...` : stream.channel.status}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default StreamCard
