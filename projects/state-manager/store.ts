import { ITask } from './tasks/interfaces';
import { IStoreTaskActions } from './todos-actions/interfaces';

export interface IStoreTasks {
  tasks: Array<ITask>;
  markedTasksIdentifier?: string;
  tasksMetaData?: any;
}

export interface IStore {
  actions: IStoreTaskActions;
  tasks: IStoreTasks;
}

export enum EActionToPerform {
  add,
  markAsCompleted,
  delete,
}
