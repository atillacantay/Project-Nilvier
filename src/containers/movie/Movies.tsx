import React, { useEffect, FC, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchMovies } from '../../store/movie/actions'
import { RootState } from '../../store'
import { Result } from '../../store/movie/types'

import MovieCard from '../../components/movie/MovieCard'

import { Grid, makeStyles, Theme, createStyles, CircularProgress, TextField, InputAdornment } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Pagination, Alert } from '@material-ui/lab'

//JSS part
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieRoot: {
      display: 'flex',
      margin: theme.spacing(2),
    },
  }),
)

//Component Props
interface MovieStateProps {
  term: string
  isFetching: boolean
  result: Result
  error?: string
}

//Form Props
type IFormInput = {
  term: string
}

const Movies: FC<MovieStateProps> = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  //Getting movie store states which are included
  const { term, isFetching, result, error } = useSelector<RootState, MovieStateProps>(
    state => state.movie,
    shallowEqual,
  )
  //Using react-hook-form to make form handling better
  const { register, handleSubmit, errors } = useForm<IFormInput>({ defaultValues: { term: 'pokemon' } })
  const [page, setPage] = useState(1)

  //Triggers action dispatcher when the page is mounted
  useEffect(() => {
    dispatch(fetchMovies('pokemon', page))
  }, [dispatch])

  //Form submission handler
  const onSubmit = handleSubmit(({ term }) => {
    setPage(1)
    dispatch(fetchMovies(term, 1))
  })

  //Page change handler
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(fetchMovies(term, value)) //could be used in useEffect hook
  }

  return (
    <div className={classes.movieRoot}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <form onSubmit={onSubmit} autoComplete="off">
            <TextField
              name="term"
              variant="outlined"
              placeholder="Enter a movie name..."
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isFetching && <CircularProgress color="inherit" size={32} />}
                  </InputAdornment>
                ),
              }}
              inputRef={register({ required: { value: true, message: 'Movie name is required' } })}
              error={!!errors.term}
              helperText={errors.term && errors.term.message}
            />
          </form>
        </Grid>
        {!error && result.Search.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Pagination
                count={Math.round(parseInt(result.totalResults) / 10)}
                page={page}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            {result.Search.map(movie => (
              //Randomized keys are generated due to getting the exact same objects to avoid duplications
              <Grid key={movie.imdbID + Math.random().toString(36).substring(7)} item xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </>
        ) : (
          error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )
        )}
      </Grid>
    </div>
  )
}

export default Movies
