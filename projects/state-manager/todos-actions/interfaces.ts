export const TasksActionsFeatureKey = 'tasksActions';

export type IActionSteps =
  | 'forLoop'
  | 'selectChildAction'
  | 'childActionInputPrompt'
  | 'runBot';

export interface IStoreTaskActions {
  step: IActionSteps;
}
