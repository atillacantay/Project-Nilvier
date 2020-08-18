import React, { useEffect, useRef, useState } from 'react'

import { Channel } from '../../../store/twitch/types'

import { makeStyles, createStyles, Box, Typography, Divider, Theme } from '@material-ui/core'
import { API } from '../../../apis/api'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    twitchHeaderRoot: {},
    title: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      color: '#9146FF',
      margin: theme.spacing(1, 0),
    },
  }),
)

interface Channels {
  channels: Channel[]
  _total: number
}

const TwitchHeader = () => {
  const classes = useStyles()
  const textfieldRef = useRef(null)
  const [channels, setChannels] = useState<Channel[]>([])
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await API.get<Channels>(`/api/twitch/search/channels`, { params: { term } })
        setLoading(false)
        setChannels(data.channels)
      } catch (error) {
        setLoading(false)
        setChannels([])
      }
    }
    const timeout = setTimeout(() => {
      if (term) fetchData()
    }, 1000)
    return () => clearTimeout(timeout)
  }, [term])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  useEffect(() => {
    if (channels.length > 0) setAnchorEl(textfieldRef.current)
  }, [channels])

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.twitchHeaderRoot}>
      <Box m={2} display="flex" justifyContent="space-between">
        <Typography variant="h4" className={classes.title}>
          Twitch Top Games
        </Typography>
        <SearchInput onInputChange={onInputChange} textfieldRef={textfieldRef} loading={loading} />
        <SearchResults anchorEl={anchorEl} handleClose={handleClose} channels={channels} />
      </Box>
      <Divider />
    </div>
  )
}

export default TwitchHeader
