import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStore, IStoreTodos } from '../store';
import { ITodosFeatureKey } from './interfaces';

const todosFeature = createFeatureSelector<IStoreTodos>(ITodosFeatureKey);

export const todosSelector = createSelector(todosFeature, (state) => {
  console.log('state', state);
  return state.todos;
});
