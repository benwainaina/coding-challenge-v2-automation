import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStore, IStoreTasks } from '../store';
import { TasksFeatureKey } from './interfaces';

const tasksFeature = createFeatureSelector<IStoreTasks>(TasksFeatureKey);

export const tasksSelector = createSelector(
  tasksFeature,
  (state) => state.tasks
);

export const markedTaskIdentifierSelector = createSelector(
  tasksFeature,
  (state) => state.markedTasksIdentifier
);

export const tasksMetadataSelector = createSelector(
  tasksFeature,
  (state) => state.tasksMetaData
);

export const tasksMetadataTypeSelector = createSelector(
  tasksMetadataSelector,
  (state) => state?.type || ''
);
