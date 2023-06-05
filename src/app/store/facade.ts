import { Injectable } from '@angular/core';
import * as _actions from './actions';
import * as _selectors from './selectors';
import { Observable, map } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

@Injectable()
export class AppStoreFacade {
  selectSearchResults$ = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.searchResults || null)
  );

  selectSearchLoading$ = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.searchLoading || false)
  );

  selectMovieDetails$ = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.movieDetails || null)
  );

  MovieDetailsLoading$ = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.getMovieDetailsLoading || false)
  );

  constructor(private readonly store: Store) {}

  searchMovies = (s: string) => {
    this.store.dispatch(_actions.searchMovies({ s }));
  };

  getMovieDetails = (i: string) => {
    this.store.dispatch(_actions.getMovieDetails({ i }));
  };

  clearMovieDetails = () => {
    this.store.dispatch(_actions.clearMovieDetails());
  };
}
