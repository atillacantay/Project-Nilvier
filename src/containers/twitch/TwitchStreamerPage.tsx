import React from 'react'
import { useLocation } from 'react-router-dom'

import { Grid, createStyles, Theme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    streamsRoot: {
      display: 'flex',
      height: '100%',
      padding: theme.spacing(2),
    },
    title: {
      fontWeight: 600,
    },
  }),
)

const TwitchStreamerPage = () => {
  const classes = useStyles()
  const { pathname } = useLocation()
  const formattedName = pathname.split('/')[2].trim()
  const parent = process.env.NODE_ENV === 'development' ? 'localhost' : process.env.REACT_APP_TWITCH_PARENT_URL

  return (
    <div className={classes.streamsRoot}>
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <iframe
            src={`https://player.twitch.tv/?channel=${formattedName}&parent=${parent}`}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}
          ></iframe>
        </Grid>
        <Grid item xs={3}>
          <iframe
            src={`https://www.twitch.tv/embed/${formattedName}/chat?&parent=${parent}`}
            frameBorder="0"
            scrolling="no"
            id="chat_embed"
            height="100%"
            width="100%"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  )
}

export default TwitchStreamerPage
