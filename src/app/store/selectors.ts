import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from './reducer';

const _appState = createFeatureSelector<IAppState>('appState');

export const selectAppState = createSelector(_appState, (state) => {
  return state;
});
