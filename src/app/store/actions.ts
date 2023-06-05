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

export const clearMovieDetails = createAction(
    '[Details Page] Clear'
)