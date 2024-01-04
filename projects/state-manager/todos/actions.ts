import { createAction, props } from '@ngrx/store';
import * as Actions from './action-ids';
import { ITodos } from './interfaces';
import { EActionToPerform } from '../store';

export const ActionAddTodos = createAction(
  Actions.IDActionAddTodos,
  props<{ todos: Array<ITodos> }>()
);

export const ActionRemoveTodos = createAction(
  Actions.IDActionDeleteTodos,
  props<{ todos: Array<string> }>()
);

export const ActionMarkTodoAsComplete = createAction(
  Actions.IDActionMarksTodoAsComplete,
  props<{ todos: Array<string> }>()
);

export const ActionSetMarkedTodosIdentifier = createAction(
  Actions.IDActionSetMarkedTodosIdentifier,
  props<{ identifier: string }>()
);

export const ActionSetMetadataToBeUsedToPerformAction = createAction(
  Actions.IDActionSetMetadataToBeUsedToPerformAction,
  props<{ metadata: any }>()
);
