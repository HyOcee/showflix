import { createReducer, on } from '@ngrx/store';
import { IMovieDetail, ISearchResponse } from '../models';
import * as _actions from './actions';

export interface IAppState {
  searchQuery: string | null;
  searchResults: ISearchResponse | null;
  searchLoading: boolean;
  movieDetails: IMovieDetail | null;
  getMovieDetailsLoading: boolean;
  movie: IMovieDetail | null;
  getMovieLoading: boolean;
  navOpen: boolean;
}

const initialState: IAppState = {
  searchQuery: null,
  searchResults: null,
  movieDetails: null,
  searchLoading: false,
  getMovieDetailsLoading: false,
  movie: null,
  getMovieLoading: false,
  navOpen: false,
};

const reducer = createReducer(
  initialState,
  on(_actions.searchMovies, (state, { s }) => ({
    ...state,
    searchLoading: true,
    searchQuery: s,
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
  on(_actions.openNav, (state) => ({
    ...state,
    navOpen: true,
  })),
  on(_actions.closeNav, (state) => ({
    ...state,
    navOpen: false,
  })),
  on(_actions.toggleNav, (state) => ({
    ...state,
    navOpen: !state.navOpen,
  }))
);

export const AppReducer = {
  appState: reducer,
};
