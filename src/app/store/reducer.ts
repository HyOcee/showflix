import { createReducer, on } from '@ngrx/store';
import { IMovieDetail, ISearchResponse } from '../models';
import * as _actions from './actions';

export interface IAppState {
  searchResults: ISearchResponse | null;
  searchLoading: boolean;
  movieDetails: IMovieDetail | null;
  getMovieDetailsLoading: boolean;
}

const initialState: IAppState = {
  searchResults: null,
  movieDetails: null,
  searchLoading: false,
  getMovieDetailsLoading: false,
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
  on(_actions.searchMoviesError, (state) => ({
    ...state,
    searchLoading: false,
  })),
  on(_actions.getMovieDetailsError, (state) => ({
    ...state,
    getMovieDetailsLoading: false,
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
  }))
);

export const AppReducer = {
  appState: reducer,
};
