import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { MovieDetails } from '../../store/movie/types'
import { fetchMovieDetails } from '../../store/movie/actions'
import { RootState } from '../../store'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  Theme,
  Grid,
  CircularProgress,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Card,
  CardMedia,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieDetailsRoot: {
      margin: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '100%',
    },
  }),
)

interface MovieDetailsProps {
  isFetching: boolean
  movieDetails: MovieDetails
  error?: string
}

const Movie: FC<MovieDetailsProps> = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isFetching, movieDetails, error } = useSelector<RootState, MovieDetailsProps>(
    state => state.movie,
    shallowEqual,
  )
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(fetchMovieDetails(pathname.split('/')[2]))
  }, [dispatch])

  return (
    <div className={classes.movieDetailsRoot}>
      <Grid container spacing={4}>
        {isFetching ? (
          <CircularProgress />
        ) : movieDetails.Response === 'True' ? (
          <>
            <Grid item xs={12} sm={3} md={4}>
              <Card>
                <CardMedia image={movieDetails.Poster} className={classes.media} />
              </Card>
            </Grid>
            <Grid item xs={12} sm={9} md={8}>
              <TableContainer component={Paper} elevation={4}>
                <Table>
                  <TableBody>
                    {Object.entries(movieDetails).map(
                      //Removes the data which is not a string typed, equal to N/A and unnecessary ones
                      (movieDetail, key) => {
                        const info = movieDetail[0]
                        const value = movieDetail[1]
                        return (
                          typeof value === 'string' &&
                          value !== 'N/A' &&
                          !['Response', 'Poster', 'Website'].includes(info) && (
                            <TableRow key={key}>
                              <TableCell component="th" scope="row">
                                {movieDetail[0]}
                              </TableCell>
                              <TableCell align="right">{movieDetail[1]}</TableCell>
                            </TableRow>
                          )
                        )
                      },
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
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

export default Movie
