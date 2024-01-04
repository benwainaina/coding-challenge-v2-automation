import { IStore, IStoreTasks } from '../store';
import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { produce } from 'immer';

const initialState: IStoreTasks = {
  tasks: [
    {
      content: '1',
      id: 'ce8c2964-491e-4b4e-9fc2-e9abe4ed809f',
      identifier: 'wrapper__form__task__input__',
      completed: false,
    },
    {
      content: '23',
      id: 'd6621d64-4868-42ac-be53-198fccb2ec00',
      identifier: 'wrapper__form__task__input__',
      completed: true,
    },
    {
      content: '45',
      id: 'ac319460-767b-43c9-9a89-cf4ebf19e79d',
      identifier: 'wrapper__form__task__input__number',
      completed: false,
    },
  ],
};

const reducer = createReducer(
  initialState,
  on(Actions.ActionAddTasks, (state, payload) =>
    produce(state, (draft) => ({
      ...draft,
      tasks: [...draft.tasks, ...payload.tasks],
    }))
  )
);
export const tasksReducers = (state: IStoreTasks, action: Action) =>
  reducer(state, action);
