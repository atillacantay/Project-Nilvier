import React, { FC, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Gif, Pagination } from '../store/giphy/types'

import GiphyCard from '../components/giphy/GiphyCard'
import FetchMoreIndicator from '../components/indicators/FetchMoreIndicator'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, TextField, Divider, CircularProgress, InputAdornment, Box } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    giphyRoot: {
      height: '100%',
      overflow: 'hidden auto',
      padding: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(2, 0),
    },
  }),
)

export interface GiphyStateProps {
  data: Gif[]
  pagination: Pagination
  term: string
  page?: number
  isFetching: boolean
  isFetchingMore: boolean
  error?: string
}

export interface GiphyDispatchProps {
  giphyCall: (term: string, page?: number) => void
  fetchMoreGifs: (term: string, offset: number) => void
}

type IFormInput = {
  term: string
}

type Props = GiphyStateProps & GiphyDispatchProps

const Giphy: FC<Props> = ({ giphyCall, fetchMoreGifs, term, isFetching, isFetchingMore, data, error }) => {
  const classes = useStyles()
  const [offset, setOffset] = useState(0)
  const { register, handleSubmit, errors } = useForm<IFormInput>()

  const onSubmit = handleSubmit(({ term }) => {
    giphyCall(term)
  })

  const handleScrolling = (event: React.SyntheticEvent<HTMLDivElement>) => {
    if (event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight) {
      setOffset(offset + 25)
    }
  }

  useEffect(() => {
    if (offset) fetchMoreGifs(term, offset)
  }, [offset, term, fetchMoreGifs])

  return (
    <div className={classes.giphyRoot} onScroll={handleScrolling}>
      <Grid container>
        <Grid item xs={12}>
          <form onSubmit={onSubmit} autoComplete="off">
            <TextField
              name="term"
              variant="outlined"
              placeholder="Enter a keyword to search gifs..."
              defaultValue={term}
              fullWidth
              className={classes.margin}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isFetching && <CircularProgress color="inherit" size={32} />}
                  </InputAdornment>
                ),
              }}
              inputRef={register({ required: { value: true, message: 'Term is required' } })}
              error={!!errors.term}
              helperText={errors.term && errors.term.message}
            />
          </form>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {!error && data.length > 0
              ? data.map((gif: Gif) => (
                  <Grid key={gif.id} item xs={12} sm={6} md={4} lg={3}>
                    <GiphyCard gif={gif} />
                  </Grid>
                ))
              : error && (
                  <Grid item xs={12}>
                    <Alert severity="error" className={classes.margin}>
                      {error}
                    </Alert>
                  </Grid>
                )}
            {isFetchingMore && <FetchMoreIndicator />}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Giphy
