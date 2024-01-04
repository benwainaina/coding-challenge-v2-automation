import { ITodosFeatureKey } from './todos/interfaces';
import { todosReducers } from './todos/reducers';

export const reducers: {
  [feature: string]: any;
} = {
  [ITodosFeatureKey]: todosReducers,
};
