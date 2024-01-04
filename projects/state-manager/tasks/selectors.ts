import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStore, IStoreTasks } from '../store';
import { TasksFeatureKey } from './interfaces';

const tasksFeature = createFeatureSelector<IStoreTasks>(TasksFeatureKey);

export const tasksSelector = createSelector(
  tasksFeature,
  (state) => state.tasks
);
