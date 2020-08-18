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
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  textfieldRef: React.MutableRefObject<null>
  loading: boolean
}

const SearchInput: FC<SearchInputProps> = ({ onInputChange, textfieldRef, loading }) => {
  const classes = useStyles()

  return (
    <TextField
      name="term"
      ref={textfieldRef}
      autoComplete="off"
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
          <InputAdornment position="end">{loading && <CircularProgress size={24} color="inherit" />}</InputAdornment>
        ),
      }}
      onChange={onInputChange}
    />
  )
}

export default SearchInput
