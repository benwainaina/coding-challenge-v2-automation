import { createAction, props } from '@ngrx/store';
import * as Actions from './action-ids';
import { ITask } from './interfaces';
import { EActionToPerform } from '../store';

export const ActionAddTasks = createAction(
  Actions.IDActionAddTasks,
  props<{ tasks: Array<ITask> }>()
);

export const ActionRemoveTasks = createAction(
  Actions.IDActionDeleteTasks,
  props<{ tasks: Array<string> }>()
);

export const ActionMarkTaskAsComplete = createAction(
  Actions.IDActionMarksTaskAsComplete,
  props<{ tasks: Array<string> }>()
);

export const ActionSetMarkedTasksIdentifier = createAction(
  Actions.IDActionSetMarkedTasksIdentifier,
  props<{ identifier: string }>()
);

export const ActionSetMetadataToBeUsedToPerformAction = createAction(
  Actions.IDActionSetMetadataToBeUsedToPerformAction,
  props<{ metadata: any }>()
);
