import { ITask } from './tasks/interfaces';

export interface IStoreActions {}

export interface IStoreTasks {
  tasks: Array<ITask>;
  markedTasksIdentifier?: string;
  tasksMetaData?: any;
}

export interface IStore {
  actions: IStoreActions;
  tasks: IStoreTasks;
}

export enum EActionToPerform {
  add,
  markAsCompleted,
  delete,
}
