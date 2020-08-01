import React, { useState, FC } from 'react'

import Moment from 'react-moment'

import { Streams } from '../../store/twitch/types'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, Typography, Avatar, Theme, Grid, Box, Badge, Tooltip } from '@material-ui/core'
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
  const [raised, setRaised] = useState(false)

  const handleRaise = () => {
    setRaised(!raised)
  }

  return (
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
      <CardMedia
        component="img"
        alt={stream.channel.status}
        image={stream.preview.large}
        title={stream.channel.status}
      />
      <CardContent>
        <Typography variant="caption">
          {stream.channel.status.length > 35 ? `${stream.channel.status.slice(0, 35)}...` : stream.channel.status}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default StreamCard
