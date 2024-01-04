import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStoreTaskActions, TasksActionsFeatureKey } from './interfaces';

const tasksActionsFeature = createFeatureSelector<IStoreTaskActions>(
  TasksActionsFeatureKey
);

export const actionsStepSelector = createSelector(
  tasksActionsFeature,
  (state) => state.step
);
