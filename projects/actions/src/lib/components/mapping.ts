import { IActionSteps } from 'projects/state-manager/todos-actions/interfaces';
import { ForLoopComponent } from './for-loop/for-loop.component';

export const TASK_ACTIONS_MAPPING: Partial<{
  [key in IActionSteps]: any;
}> = {
  forLoop: ForLoopComponent,
};
