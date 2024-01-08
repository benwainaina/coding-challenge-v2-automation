import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from 'projects/state-manager/tasks/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ActionAddTasks,
  ActionSetMarkedTasksIdentifier,
  ActionSetMetadataToBeUsedToPerformAction,
} from 'projects/state-manager/tasks/actions';
import {
  markedTaskIdentifierSelector,
  tasksSelector,
} from 'projects/state-manager/tasks/selectors';
import { ITaskInput } from './interfaces';

@Component({
  selector: 'lib-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, AsyncPipe, NgIf],
})
export class TodoListComponent {
  public taskInputs: Array<ITaskInput> = [];

  public assetsPath: string = 'assets/icons/tasks/';

  private _store: Store = inject(Store);

  public tasks$: Observable<Array<ITask>>;

  public identifier$: Observable<string | undefined>;

  constructor() {
    const randomTypes = ['text', 'number'];
    this.taskInputs = new Array(3).fill(0).map((inputField) => ({
      type: randomTypes[Math.round(Math.random() * (randomTypes.length - 1))],
      selected: false,
      predicted: false,
    }));
    this.tasks$ = this._store.select(tasksSelector);
    this.identifier$ = this._store.select(markedTaskIdentifierSelector);
  }

  public saveTasks($event: any): void {
    const targetElement = $event.target;
    const inputField = targetElement
      .closest('div.wrapper__form__task')
      .getElementsByTagName('input')[0];
    if (inputField) {
      const textContent = inputField.value;
      if (!textContent) {
        alert('Field input cannot be blank');
      } else {
        this._store.dispatch(
          ActionAddTasks({
            tasks: [
              {
                content: textContent,
                id: uuidv4(),
                identifier: inputField.className,
                completed: false,
              },
            ],
          })
        );
      }
    }
  }

  public setMarkedTaskIdentifier(
    clickedElement: ITaskInput,
    identifier: string
  ): void {
    if (!clickedElement.predicted) {
      clickedElement.selected = true;
    }
    const selectedInputs = this.taskInputs.filter(
      (task) => task.selected
    ).length;
    if (selectedInputs === 2) {
      this.taskInputs.forEach((taskInput) => {
        if (!taskInput.selected) {
          taskInput.predicted = true;
        }
      });
    }
    this._store.dispatch(ActionSetMarkedTasksIdentifier({ identifier }));
    this._store.dispatch(
      ActionSetMetadataToBeUsedToPerformAction({
        metadata: {
          selected: selectedInputs,
          predicted: this.taskInputs.filter((task) => task.predicted).length,
        },
      })
    );
  }
}
