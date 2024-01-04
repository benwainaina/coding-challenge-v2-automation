import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStore, IStoreTasks } from '../store';
import { ITasksFeatureKey } from './interfaces';

const tasksFeature = createFeatureSelector<IStoreTasks>(ITasksFeatureKey);

export const tasksSelector = createSelector(
  tasksFeature,
  (state) => state.tasks
);
