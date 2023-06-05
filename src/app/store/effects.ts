import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as _actions from './actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MoviesService } from '../services/movies.service';

@Injectable()
export class MovieEffects {
  $searchMovies = createEffect(() =>
    this.actions$.pipe(
      ofType(_actions.searchMovies),
      switchMap(({ s }) =>
        this.movieService.getMoviesBySearchQuery(s).pipe(
          map((res) => {
            if (res.Response !== 'True') {
              return _actions.searchMoviesError({
                error: 'Could not find any results',
              });
            }
            return _actions.searchMoviesSuccess({ searchResults: res });
          }),
          catchError((error) => {
            return of(_actions.searchMoviesError({ error }));
          })
        )
      )
    )
  );
  
  $getMovieDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(_actions.getMovieDetails),
      switchMap(({ i }) =>
        this.movieService.getMovieDetails(i).pipe(
          map((res) => {
            if (res.Response !== 'True') {
              return _actions.getMovieDetailsError({
                error: 'Could not find any results',
              });
            }
            return _actions.getMovieDetailsSuccess({ movieDetails: res });
          }),
          catchError((error) => {
            return of(_actions.getMovieDetailsError({ error }));
          })
        )
      )
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private router: Router,
    private movieService: MoviesService
  ) {}
}
