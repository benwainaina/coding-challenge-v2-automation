import { ITodos } from './todos/interfaces';

export interface IStoreActions {}

export interface IStoreTodos {
  todos: Array<ITodos>;
  markedTodossIdentifier?: string;
  todosMetaData?: any;
}

export interface IStore {
  actions: IStoreActions;
  todos: IStoreTodos;
}

export enum EActionToPerform {
  add,
  markAsCompleted,
  delete,
}
