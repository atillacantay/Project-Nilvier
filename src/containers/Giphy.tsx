import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import GiphyCard from '../components/GiphyCard'
import { Gif } from '../store/giphy/types'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Grid, TextField, Divider, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    giphyRoot: {
      margin: theme.spacing(2),
    },
    textField: {
      margin: theme.spacing(2, 0),
    },
  }),
)

export interface GiphyStateProps {
  gifs: Gif[]
  isFetching: boolean
  error?: string
}

export interface GiphyDispatchProps {
  giphyCall: (term: string) => void
}

type FormData = {
  term: string
}

type Props = GiphyStateProps & GiphyDispatchProps

const Giphy: FC<Props> = ({ gifs, isFetching, error, giphyCall }) => {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm<FormData>()

  const onSubmit = handleSubmit(({ term }) => {
    giphyCall(term)
  })

  return (
    <div className={classes.giphyRoot}>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <form onSubmit={onSubmit} autoComplete="off">
              <TextField
                name="term"
                variant="outlined"
                placeholder="Search"
                fullWidth
                className={classes.textField}
                defaultValue=""
                inputRef={register({ required: { value: true, message: 'Enter a search term' } })}
                error={!!errors.term}
                helperText={errors.term && errors.term.message}
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Box m={2}>
              {isFetching && <CircularProgress color="primary" />}
              {!error && gifs.length > 0 && (
                <Grid container spacing={4}>
                  {gifs.length > 0
                    ? gifs.map((gif: Gif) => (
                        <Grid key={gif.id} item xs={12} sm={6} md={4} lg={3}>
                          <GiphyCard gif={gif} />
                        </Grid>
                      ))
                    : 'null'}
                </Grid>
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Giphy
