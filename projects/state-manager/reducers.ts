import { TasksFeatureKey } from './tasks/interfaces';
import { tasksReducers } from './tasks/reducers';
import { TasksActionsFeatureKey } from './todos-actions/interfaces';
import { taskActionsReducers } from './todos-actions/reducers';

export const reducers: {
  [feature: string]: any;
} = {
  [TasksFeatureKey]: tasksReducers,
  [TasksActionsFeatureKey]: taskActionsReducers,
};
