import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { produce } from 'immer';
import { IStoreTaskActions } from './interfaces';

const initialState: IStoreTaskActions = {
  step: 'selectChildAction',
};

const reducer = createReducer(
  initialState,
  on(Actions.ActionSetActionStep, (state, payload) =>
    produce(state, (draft) => ({
      ...draft,
      step: payload.step,
    }))
  )
);

export const taskActionsReducers = (state: IStoreTaskActions, action: Action) =>
  reducer(state, action);
