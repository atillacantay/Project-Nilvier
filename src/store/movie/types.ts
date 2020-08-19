// src/store/movie/types.ts

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'

export const FETCH_MOVIE_DETAILS_REQUEST = 'FETCH_MOVIE_DETAILS_REQUEST'
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS'
export const FETCH_MOVIE_DETAILS_FAILURE = 'FETCH_MOVIE_DETAILS_FAILURE'

//Movie Object
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

//Movie Details Object
export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  Production: string
  Response: string
  Error?: string
}

//Movie Result Object
export interface Result {
  Search: Movie[]
  totalResults: string
  Response: string
  Error?: string
}

//Movie Store State
export interface MovieState {
  term: string
  isFetching: boolean
  result: Result
  movieDetails: MovieDetails
  error?: Result['Error'] | MovieDetails['Error']
}

//Movies Request Action
export interface FetchMoviesRequestAction {
  type: typeof FETCH_MOVIES_REQUEST
  payload: {
    //no props
  }
}

//Movies Success Action
export interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCCESS
  payload: {
    result: Result
    term: string
  }
}

//Movies Failure Action
export interface FetchMoviesFailureAction {
  type: typeof FETCH_MOVIES_FAILURE
  payload: {
    //no props
  }
}

//Movie Detail Request Action
export interface FetchMovieDetailsRequestAction {
  type: typeof FETCH_MOVIE_DETAILS_REQUEST
  payload: {
    //no props
  }
}

//Movie Detail Success Action
export interface FetchMovieDetailsSuccessAction {
  type: typeof FETCH_MOVIE_DETAILS_SUCCESS
  payload: MovieDetails
}

//Movie Detail Failure Action
export interface FetchMovieDetailsFailureAction {
  type: typeof FETCH_MOVIE_DETAILS_FAILURE
  payload: {
    //no props
  }
}

export type MoviesActionTypes =
  | FetchMoviesRequestAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailureAction
  | FetchMovieDetailsRequestAction
  | FetchMovieDetailsSuccessAction
  | FetchMovieDetailsFailureAction
