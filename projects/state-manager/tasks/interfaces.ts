export const TasksFeatureKey = 'tasks';

export interface ITask {
  content: string;
  id: string;
  completed: boolean;
  selected: boolean;
  predicted: boolean;

  // this will be the identifier for the task, for example a class name, id etc
  identifier: string;
}
