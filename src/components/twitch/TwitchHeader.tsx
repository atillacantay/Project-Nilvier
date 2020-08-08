import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import { TwitchAPI } from '../../apis/twitch'
import { Channel } from '../../store/twitch/types'

import {
  makeStyles,
  createStyles,
  Box,
  Typography,
  Divider,
  Theme,
  TextField,
  InputAdornment,
  Popper,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  ClickAwayListener,
  Paper,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { Autocomplete } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    twitchHeaderRoot: {},
    title: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      color: '#9146FF',
      margin: theme.spacing(1, 0),
    },
    searchInput: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#9146FF',
      },
      '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
      },
    },
    verifiedIcon: {
      marginLeft: theme.spacing(1),
      color: '#9146FF',
    },
  }),
)

type IFormInput = {
  term: string
}

interface Channels {
  channels: Channel[]
  _total: number
}

const TwitchHeader = () => {
  const classes = useStyles()
  const textfieldRef = useRef(null)
  const [channels, setChannels] = useState<Channel[]>([])
  const [anchorEl, setAnchorEl] = useState(null)
  const { register, handleSubmit } = useForm<IFormInput>({ defaultValues: { term: '' } })

  const onSubmit = handleSubmit(({ term }) => {
    TwitchAPI.get<Channels>(`kraken/search/channels?query=${term}`)
      .then(result => {
        setChannels(result.data.channels)
      })
      .catch(error => {
        console.log(error)
        setChannels([])
      })
  })

  useEffect(() => {
    if (channels.length > 0) setAnchorEl(textfieldRef.current)
  }, [channels])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'channel-popper' : undefined

  return (
    <div className={classes.twitchHeaderRoot}>
      <Box m={2} display="flex" justifyContent="space-between">
        <Typography variant="h4" className={classes.title}>
          Twitch Top Games
        </Typography>
        <TextField
          name="term"
          ref={textfieldRef}
          autoComplete="off"
          variant="outlined"
          className={classes.searchInput}
          placeholder="Search a streamer"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          inputRef={register}
          onChange={onSubmit}
        />
        <ClickAwayListener onClickAway={handleClose}>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Paper elevation={4}>
              <List aria-label="channel">
                {channels.map(channel => {
                  return (
                    <ListItem key={channel._id} button component={RouterLink} to={`/twitch/${channel.name}`}>
                      <ListItemAvatar>
                        <Avatar src={channel.logo} alt={channel.name} />
                      </ListItemAvatar>
                      <ListItemText primary={channel.name} />
                      <ListItemSecondaryAction>
                        {channel.partner && <VerifiedUserIcon className={classes.verifiedIcon} fontSize="small" />}
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                })}
              </List>
            </Paper>
          </Popper>
        </ClickAwayListener>
      </Box>
      <Divider />
    </div>
  )
}

export default TwitchHeader
