import { IActionSteps } from 'projects/state-manager/todos-actions/interfaces';
import { ChildActionInputPromptComponent } from './child-action-input-prompt/child-action-input-prompt.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { RunBotComponent } from './run-bot/run-bot.component';
import { SelectChildActionComponent } from './select-child-action/select-child-action.component';

export const TASK_ACTIONS_MAPPING: Partial<{
  [key in IActionSteps]: any;
}> = {
  forLoop: ForLoopComponent,
  selectChildAction: SelectChildActionComponent,
  childActionInputPrompt: ChildActionInputPromptComponent,
  runBot: RunBotComponent,
};
