import { createAction, props } from '@ngrx/store';
import * as Actions from './action-ids';
import { EActionToPerform } from '../store';

export const ActionRunBot = createAction(Actions.IDActionRunBot);

export const ActionSetActionToPerformOnTodos = createAction(
  Actions.IDActionSetActionToPerformOnTodos,
  props<{ action: EActionToPerform }>()
);
