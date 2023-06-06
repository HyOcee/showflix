import { Injectable } from '@angular/core';
import * as _actions from './actions';
import * as _selectors from './selectors';
import { Observable, map } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

@Injectable()
export class AppStoreFacade {
  searchQuery$ = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.searchQuery || null)
  );

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
  
  selectMovie = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.movie || null)
  );

  selectMovieLoading$ = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.getMovieLoading || false)
  );
 
  navOpen$ = this.store.pipe(
    select(_selectors.selectAppState),
    map((x) => x?.navOpen || false)
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
  
  getMovie = (i: string) => {
    this.store.dispatch(_actions.getMovie({ i }));
  };

  clearMovie = () => {
    this.store.dispatch(_actions.clearMovie());
  };

  openNav = () => {
    this.store.dispatch(_actions.openNav());
  };

  closeNav = () => {
    this.store.dispatch(_actions.closeNav());
  };

  toggleNav = () => {
    this.store.dispatch(_actions.toggleNav());
  };
}
