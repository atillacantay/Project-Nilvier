import React, { FC, useState, useEffect } from 'react'
import { Gif } from '../../store/giphy/types'

import CopyToClipboard from 'react-copy-to-clipboard'

import { makeStyles, createStyles, Grow, Tooltip, IconButton, Typography, Box, Link } from '@material-ui/core'
import { Link as URL, CheckCircle, OpenInNew, VerifiedUser } from '@material-ui/icons'

const useStyles = makeStyles(() =>
  createStyles({
    insideCard: {
      height: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'rgb(0, 0, 0, 0.2)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }),
)

interface Props {
  raised: boolean
  gif: Gif
}

const GiphyCardOperations: FC<Props> = ({ raised, gif }) => {
  const classes = useStyles()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000)
  }, [copied])

  return (
    <Grow in={raised} timeout={500}>
      <div className={classes.insideCard}>
        <div className={classes.header}>
          <Box>
            <Tooltip title={copied ? 'Copied' : 'Copy url'} arrow>
              <CopyToClipboard text={gif.images.original.url} onCopy={() => setCopied(true)}>
                <IconButton disableTouchRipple disableFocusRipple>
                  {copied ? <CheckCircle style={{ fill: 'greenyellow' }} /> : <URL style={{ fill: 'white' }} />}
                </IconButton>
              </CopyToClipboard>
            </Tooltip>
            <Tooltip title="Open in new tab" arrow>
              <IconButton href={gif.images.original.url} target="_blank">
                <OpenInNew style={{ fill: 'white' }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box mr={1} display="flex" alignItems="center">
            {gif.user?.is_verified && <VerifiedUser style={{ fill: 'white' }} />}
            <Typography style={{ color: 'white' }} variant="caption">
              <Link href={gif.user?.profile_url} target="_blank" color="inherit">
                {gif.username.toLowerCase()}
              </Link>
            </Typography>
          </Box>
        </div>
        <Box flex={1} />
        <Box ml={1} mb={1}>
          <Typography style={{ color: 'white' }} variant="body2">
            {gif.title.toLowerCase()}
          </Typography>
        </Box>
      </div>
    </Grow>
  )
}

export default GiphyCardOperations
