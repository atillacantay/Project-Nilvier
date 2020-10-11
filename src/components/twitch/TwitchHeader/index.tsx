import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { searchChannels } from '../../../store/twitch/actions'
import { SearchResult } from '../../../store/twitch/types'
import useDebounce from '../../../hooks/useDebounce'

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

import { makeStyles, createStyles, Box, Typography, Divider, Theme } from '@material-ui/core'

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

interface StateProps {
  isSearching: boolean
  searchResult: SearchResult
}

const TwitchHeader = () => {
  const classes = useStyles()
  const textfieldRef = useRef(null)
  const dispatch = useDispatch()
  const { isSearching, searchResult } = useSelector<RootState, StateProps>(state => state.twitch)
  const [term, setTerm] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)

  const debouncedSearchTerm = useDebounce(term, 1000)

  useEffect(() => {
    if (debouncedSearchTerm) dispatch(searchChannels(debouncedSearchTerm))
  }, [debouncedSearchTerm])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  useEffect(() => {
    if (searchResult.channels.length > 0) setAnchorEl(textfieldRef.current)
  }, [searchResult])

  const handleClose = () => {
    setAnchorEl(null)
    setTerm('')
  }

  return (
    <div className={classes.twitchHeaderRoot}>
      <Box m={2} display="flex" justifyContent="space-between">
        <Typography variant="h4" className={classes.title}>
          Twitch Top Games
        </Typography>
        <SearchInput onInputChange={onInputChange} textfieldRef={textfieldRef} isSearching={isSearching} value={term} />
        <SearchResults anchorEl={anchorEl} handleClose={handleClose} channels={searchResult.channels} />
      </Box>
      <Divider />
    </div>
  )
}

export default TwitchHeader
