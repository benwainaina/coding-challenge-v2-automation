import { ITasksFeatureKey } from './tasks/interfaces';
import { tasksReducers } from './tasks/reducers';

export const reducers: {
  [feature: string]: any;
} = {
  [ITasksFeatureKey]: tasksReducers,
};
