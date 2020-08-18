import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Channel } from '../../../store/twitch/types'

import {
  makeStyles,
  createStyles,
  Theme,
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
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    verifiedIcon: {
      marginLeft: theme.spacing(1),
      color: '#9146FF',
    },
  }),
)

interface SearchResultsProps {
  anchorEl: null | undefined
  handleClose: () => void
  channels: Channel[]
}

const SearchResults: FC<SearchResultsProps> = ({ anchorEl, handleClose, channels }) => {
  const classes = useStyles()

  const open = Boolean(anchorEl)
  const id = open ? 'channel-popper' : undefined

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
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
  )
}

export default SearchResults
