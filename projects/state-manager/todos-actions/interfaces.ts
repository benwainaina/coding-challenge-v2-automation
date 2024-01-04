export const TasksActionsFeatureKey = 'tasksActions';

export type IActionSteps =
  | 'forLoop'
  | 'childAction'
  | 'promptChildAction'
  | 'runBot';

export interface IStoreTaskActions {
  step: IActionSteps;
}
