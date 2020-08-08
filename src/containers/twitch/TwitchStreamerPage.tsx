import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Grid, createStyles, Theme, makeStyles, Fade, Button, IconButton, Hidden, Tooltip } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    streamsRoot: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: theme.spacing(2),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    content: {
      display: 'flex',
      flex: 1,
    },
    chatSection: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }),
)

const TwitchStreamerPage = () => {
  const classes = useStyles()
  const [isHidden, setHidden] = useState(false)
  const { pathname } = useLocation()
  const formattedName = pathname.split('/')[2].trim()
  const parent = process.env.NODE_ENV === 'development' ? 'localhost' : process.env.REACT_APP_TWITCH_PARENT_URL

  return (
    <div className={classes.streamsRoot}>
      <Fade in={true} timeout={2000}>
        <div className={classes.buttons}>
          <IconButton disabled>
            <Visibility />
          </IconButton>
          <Tooltip title={isHidden ? 'Show Chat' : 'Hide Chat'}>
            <IconButton aria-label="hide" onClick={() => setHidden(!isHidden)}>
              {isHidden ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </Tooltip>
        </div>
      </Fade>
      <div className={classes.content}>
        <Grid container>
          <Grid item xs={isHidden ? 12 : 8}>
            <iframe
              src={`https://player.twitch.tv/?channel=${formattedName}&parent=${parent}`}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
            />
          </Grid>
          {!isHidden && (
            <Grid item xs={4}>
              <iframe
                src={`https://www.twitch.tv/embed/${formattedName}/chat?&parent=${parent}`}
                frameBorder="0"
                scrolling="no"
                id="chat_embed"
                height="100%"
                width="100%"
              />
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  )
}

export default TwitchStreamerPage
