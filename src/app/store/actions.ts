import { createAction, props } from '@ngrx/store';
import { IMovieDetail, ISearchResponse } from '../models';

export const searchMovies = createAction(
  '[Home] Search Movies',
  props<{ s: string }>()
);
export const searchMoviesError = createAction(
  '[Home] Search Movies Error',
  props<{ error: string }>()
);
export const searchMoviesSuccess = createAction(
  '[Home] Search Movies Success',
  props<{ searchResults: ISearchResponse }>()
);

export const getMovieDetails = createAction(
  '[Details Page] Get Movie Details',
  props<{ i: string }>()
);

export const getMovieDetailsError = createAction(
  '[Details Page] Get Movie Details Error',
  props<{ error: string }>()
);

export const getMovieDetailsSuccess = createAction(
  '[Details Page] Get Movie Details Success',
  props<{ movieDetails: IMovieDetail }>()
);

export const clearMovieDetails = createAction('[Details Page] Clear');

export const getMovie = createAction(
  '[Movie Page] Get Movie ',
  props<{ i: string }>()
);

export const getMovieError = createAction(
  '[Movie Page] Get Movie  Error',
  props<{ error: string }>()
);

export const getMovieSuccess = createAction(
  '[Movie Page] Get Movie  Success',
  props<{ movie: IMovieDetail }>()
);

export const clearMovie = createAction('[Movie Page] Clear');

export const openNav = createAction('[Navbar] Open');
export const closeNav = createAction('[Navbar] Close');
export const toggleNav = createAction('[Navbar] Toggle');
