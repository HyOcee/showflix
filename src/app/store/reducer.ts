import { createReducer, on } from '@ngrx/store';
import { IMovieDetail, ISearchResponse } from '../models';
import * as _actions from './actions';

export interface IAppState {
  searchResults: ISearchResponse | null;
  searchLoading: boolean;
  movieDetails: IMovieDetail | null;
  getMovieDetailsLoading: boolean;
  movie: IMovieDetail | null;
  getMovieLoading: boolean;
}

const initialState: IAppState = {
  searchResults: null,
  movieDetails: null,
  searchLoading: false,
  getMovieDetailsLoading: false,
  movie: null,
  getMovieLoading: false,
};

const reducer = createReducer(
  initialState,
  on(_actions.searchMovies, (state) => ({
    ...state,
    searchLoading: true,
  })),
  on(_actions.getMovieDetails, (state) => ({
    ...state,
    getMovieDetailsLoading: true,
  })),
  on(_actions.getMovie, (state) => ({
    ...state,
    getMovieLoading: true,
  })),
  on(_actions.searchMoviesError, (state) => ({
    ...state,
    searchLoading: false,
  })),
  on(_actions.getMovieDetailsError, (state) => ({
    ...state,
    getMovieDetailsLoading: false,
  })),
  on(_actions.getMovieError, (state) => ({
    ...state,
    getMovieLoading: false,
  })),
  on(_actions.searchMoviesSuccess, (state, { searchResults }) => ({
    ...state,
    searchLoading: false,
    searchResults,
  })),
  on(_actions.getMovieDetailsSuccess, (state, { movieDetails }) => ({
    ...state,
    getMovieDetailsLoading: false,
    movieDetails,
  })),
  on(_actions.getMovieSuccess, (state, { movie }) => ({
    ...state,
    getMovieLoading: false,
    movie,
  })),
  on(_actions.clearMovieDetails, (state) => ({
    ...state,
    getMovieDetailsLoading: false,
    movieDetails: null,
  })),
  on(_actions.clearMovie, (state) => ({
    ...state,
    getMovieLoading: false,
    movie: null,
  })),
);

export const AppReducer = {
  appState: reducer,
};
