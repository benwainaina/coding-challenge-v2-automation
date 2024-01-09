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
      predicted: false,
      selected: false,
    },
    {
      content: '23',
      id: 'd6621d64-4868-42ac-be53-198fccb2ec00',
      identifier: 'wrapper__form__task__input__',
      completed: true,
      predicted: false,
      selected: false,
    },
    {
      content: '45',
      id: 'ac319460-767b-43c9-9a89-cf4ebf19e79d',
      identifier: 'wrapper__form__task__input__number',
      completed: false,
      predicted: false,
      selected: false,
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
  ),
  on(Actions.ActionSetMarkedTasksIdentifier, (state, payload) =>
    produce(state, (draft) => ({
      ...draft,
      markedTasksIdentifier: payload.identifier,
    }))
  ),
  on(Actions.ActionSetMetadataToBeUsedToPerformAction, (state, payload) =>
    produce(state, (draft) => ({
      ...draft,
      tasksMetaData: payload.metadata,
    }))
  ),
  on(Actions.ActionMarkTaskAsSelected, (state, payload) =>
    produce(state, (draft) => {
      draft.tasks.map((task) => {
        if (task.id === payload.taskId) {
          task.selected = true;
        }
        return task;
      });
    })
  ),
  on(Actions.ActionMarkTaskAsPredicted, (state, payload) =>
    produce(state, (draft) => {
      draft.tasks.map((task) => {
        if (task.id === payload.taskId) {
          task.predicted = true;
        }
        return task;
      });
    })
  )
);
export const tasksReducers = (state: IStoreTasks, action: Action) =>
  reducer(state, action);
