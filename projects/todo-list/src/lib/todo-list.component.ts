import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from 'projects/state-manager/tasks/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActionAddTasks } from 'projects/state-manager/tasks/actions';
import { tasksSelector } from 'projects/state-manager/tasks/selectors';
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

  constructor() {
    const randomTypes = ['text', 'number'];
    this.taskInputs = new Array(3).fill(0).map((inputField) => ({
      type: randomTypes[Math.round(Math.random() * randomTypes.length)],
    }));
    this.tasks$ = this._store.select(tasksSelector);
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
}
