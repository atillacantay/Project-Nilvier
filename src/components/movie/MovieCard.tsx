import React, { useState, FC } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../../store/movie/types'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardActionArea, Typography, Theme } from '@material-ui/core'

//JSS part
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieCardRoot: {},
    media: {
      height: 300,
    },
    movieCardDetails: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    margin: {
      marginLeft: theme.spacing(1),
    },
  }),
)

interface MovieCardProps {
  movie: Movie
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const classes = useStyles()
  const [raised, setRaised] = useState(false)

  //Changes card's box-shadow attribute
  const handleRaise = () => {
    setRaised(raised => !raised)
  }

  return (
    <div className={classes.movieCardRoot}>
      <Link to={`/movies/${movie.imdbID}`}>
        <Card raised={raised} onMouseEnter={handleRaise} onMouseLeave={handleRaise}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              alt={movie.Title}
              //Using ternary operator to avoid unnecessary "null" image fetching
              image={movie.Poster !== 'N/A' ? movie.Poster : ''}
              title={movie.Title}
            />
          </CardActionArea>
        </Card>
      </Link>
      <div className={classes.movieCardDetails}>
        <Typography variant="body2">{movie.Title}</Typography>
        <div>
          <Typography variant="body2" className={classes.margin}>
            {movie.Type}
          </Typography>
          <Typography variant="body2" className={classes.margin}>
            {movie.Year}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
