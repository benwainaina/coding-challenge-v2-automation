import { createAction, props } from '@ngrx/store';
import * as Actions from './action-ids';
import { EActionToPerform } from '../store';
import { IActionSteps } from './interfaces';

export const ActionRunBot = createAction(Actions.IDActionRunBot);

export const ActionSetActionToPerformOnTasks = createAction(
  Actions.IDActionSetChildActionToPerformOnTasks,
  props<{ action: EActionToPerform }>()
);

export const ActionSetActionStep = createAction(
  Actions.IDActionSetActionStep,
  props<{ step: IActionSteps }>()
);
