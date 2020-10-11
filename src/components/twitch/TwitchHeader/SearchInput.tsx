import React, { FC } from 'react'

import { makeStyles, createStyles, TextField, InputAdornment, CircularProgress } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(() =>
  createStyles({
    searchInput: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#9146FF',
      },
      '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
      },
    },
  }),
)

interface SearchInputProps {
  value: string
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  textfieldRef: React.MutableRefObject<null>
  isSearching: boolean
}

const SearchInput: FC<SearchInputProps> = ({ value, onInputChange, textfieldRef, isSearching }) => {
  const classes = useStyles()

  return (
    <TextField
      ref={textfieldRef}
      autoComplete="off"
      value={value}
      variant="outlined"
      className={classes.searchInput}
      placeholder="Search users"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {isSearching && <CircularProgress size={24} color="inherit" />}
          </InputAdornment>
        ),
      }}
      onChange={onInputChange}
    />
  )
}

export default SearchInput
