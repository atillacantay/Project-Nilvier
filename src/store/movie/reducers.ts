import {
  MovieState,
  MoviesActionTypes,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
} from './types'

export const initialState: MovieState = {
  term: '',
  result: {
    Search: [],
    totalResults: '',
    Response: '',
  },
  movieDetails: {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    Production: '',
    Response: '',
  },
  isFetching: false,
  error: undefined,
}

export function movieReducer(state = initialState, action: MoviesActionTypes): MovieState {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: {
          Search:
            action.payload.result.Search &&
            action.payload.result.Search.slice().sort(function (a, b) {
              return parseInt(a.Year) - parseInt(b.Year)
            }),
          totalResults: action.payload.result.totalResults,
          Response: action.payload.result.Response,
        },
        term: action.payload.term,
        error: action.payload.result.Error,
      }
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error Occured',
      }

    case FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieDetails: action.payload,
        error: action.payload.Error,
      }
    case FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error Occured',
      }
    default:
      return state
  }
}
