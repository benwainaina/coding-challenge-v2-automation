import { IStore } from '../store';
import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { produce } from 'immer';

const initialState: IStore = {
  actions: {},
  tasks: {
    tasks: [],
  },
};

const _reducer = createReducer(initialState);
export const reducers = (state: IStore, action: Action) =>
  _reducer(state, action);
