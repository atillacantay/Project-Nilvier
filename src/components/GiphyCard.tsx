import React, { useState, useEffect } from 'react'

import CopyToClipboard from 'react-copy-to-clipboard'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Card, IconButton, Box, Tooltip, Grow, Typography } from '@material-ui/core'
import { Link, CheckCircle, OpenInNew } from '@material-ui/icons'
import { Gif } from '../store/giphy/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '345px',
      height: '300px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    insideCard: {
      height: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }),
)

type Props = {
  gif: Gif
}

const GiphyCard: React.FC<Props> = ({ gif }) => {
  const classes = useStyles()
  const [raised, setRaised] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleRaise = () => {
    setRaised(!raised)
  }

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000)
  }, [copied])

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
      <Grow in={raised} timeout={500}>
        <div className={classes.insideCard}>
          <div>
            <Tooltip title={copied ? 'Copied' : 'Copy url'} arrow>
              <CopyToClipboard text={gif.images.original.url} onCopy={() => setCopied(true)}>
                <IconButton disableTouchRipple disableFocusRipple>
                  {copied ? <CheckCircle style={{ fill: 'greenyellow' }} /> : <Link style={{ fill: 'white' }} />}
                </IconButton>
              </CopyToClipboard>
            </Tooltip>
            <Tooltip title="Open in new tab" arrow>
              <IconButton href={gif.images.original.url} target="_blank">
                <OpenInNew style={{ fill: 'white' }} />
              </IconButton>
            </Tooltip>
          </div>
          <Box flex={1} />
          <Box ml={1} mb={1}>
            <Typography style={{ color: 'white' }}>{gif.title.toLowerCase()}</Typography>
          </Box>
        </div>
      </Grow>
    </Card>
  )
}

export default GiphyCard
