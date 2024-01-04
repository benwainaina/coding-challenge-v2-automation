import { IStore, IStoreTodos } from '../store';
import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { produce } from 'immer';

const initialState: IStoreTodos = {
  todos: [],
};

const reducer = createReducer(
  initialState,
  on(Actions.ActionAddTodos, (state, payload) =>
    produce(state, (draft) => ({
      ...draft,
      todos: [...draft.todos, ...payload.todos],
    }))
  )
);
export const todosReducers = (state: IStoreTodos, action: Action) =>
  reducer(state, action);
