import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import GiphyCard from '../components/giphy/GiphyCard'
import { Gif, Pagination } from '../store/giphy/types'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, TextField, Divider, CircularProgress, InputAdornment } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { Pagination as MUIPagination } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    giphyRoot: {
      margin: theme.spacing(2),
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
  error?: string
}

export interface GiphyDispatchProps {
  giphyCall: (term: string, page?: number) => void
}

interface IFormInput {
  term: string
}

type Props = GiphyStateProps & GiphyDispatchProps

const Giphy: FC<Props> = ({ giphyCall, term, page, isFetching, data, pagination, error }) => {
  const classes = useStyles()
  const { register, handleSubmit, errors, watch } = useForm<IFormInput>()

  const onSubmit = handleSubmit(({ term }) => {
    giphyCall(term)
  })

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    giphyCall(term, value)
  }

  const PaginationComponent = () => {
    if (!error && data.length > 0)
      return (
        <Grid item xs={12}>
          <MUIPagination
            count={Math.round(pagination.total_count / pagination.count)}
            page={page}
            defaultPage={1}
            onChange={handleChange}
            className={classes.margin}
            shape="rounded"
            variant="outlined"
          />
        </Grid>
      )
    else return null
  }

  // const handleScroll = (event: SyntheticEvent<HTMLDivElement>) => {
  //   const bottom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight
  //   console.log('waiting for reaching to the bottom')
  //   if (bottom) console.log('reached to the bottom')
  // }

  return (
    <div className={classes.giphyRoot}>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <form onSubmit={onSubmit} autoComplete="off">
              <TextField
                name="term"
                variant="outlined"
                placeholder="Search any gifs"
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
          <PaginationComponent />
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
            </Grid>
          </Grid>
          <PaginationComponent />
        </Grid>
      </div>
    </div>
  )
}

export default Giphy
