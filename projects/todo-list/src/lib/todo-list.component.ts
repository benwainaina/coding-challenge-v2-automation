import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from 'projects/state-manager/tasks/interfaces';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, firstValueFrom, Observable } from 'rxjs';
import {
  ActionAddTasks,
  ActionMarkTaskAsPredicted,
  ActionMarkTaskAsSelected,
  ActionSetMarkedTasksIdentifier,
  ActionSetMetadataToBeUsedToPerformAction,
} from 'projects/state-manager/tasks/actions';
import {
  markedTaskIdentifierSelector,
  tasksMetadataSelector,
  tasksMetadataTypeSelector,
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

  public taskMetadataType$: Observable<string>;

  private _selectedElements: Array<HTMLElement> = [];

  private _predictedElements: Array<HTMLElement> = [];

  constructor() {
    const randomTypes = ['text', 'number'];
    this.taskInputs = new Array(3).fill(0).map((inputField) => ({
      type: randomTypes[Math.round(Math.random() * (randomTypes.length - 1))],
      selected: false,
      predicted: false,
    }));
    this.tasks$ = this._store.select(tasksSelector);
    this.identifier$ = this._store.select(markedTaskIdentifierSelector);
    this.taskMetadataType$ = this._store.select(tasksMetadataTypeSelector);
  }

  ngOnInit(): void {
    this._listenForMetadataChange();
  }

  private _listenForMetadataChange(): void {
    this.taskMetadataType$
      .pipe(
        distinctUntilChanged(),
        filter((identifier) => identifier !== undefined && identifier !== '')
      )
      .subscribe({
        // next: (identifier) => this._clearSelections(),
      });
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
                selected: false,
                predicted: false,
              },
            ],
          })
        );
      }
    }
  }

  public async setMarkedInputTaskIdentifier(
    $event: any,
    clickedElement: ITaskInput,
    identifier: string
  ) {
    const elementRef: HTMLElement = $event.target;
    if (!clickedElement.selected) {
      clickedElement.selected = true;
      this._selectedElements.push(elementRef);
    }
    const selectedInputs = this.taskInputs.filter(
      (task) => task.selected
    ).length;
    if (selectedInputs === 2) {
      this.taskInputs.forEach((taskInput) => {
        if (!taskInput.selected && !taskInput.predicted) {
          taskInput.predicted = true;
          const previousSibling = elementRef.parentElement
            ?.previousSibling as HTMLElement;
          const nextSibling = elementRef.parentElement
            ?.nextElementSibling as HTMLElement;
          if (this._predictedElements.includes(previousSibling)) {
            this._predictedElements.push(nextSibling);
          } else {
            this._predictedElements.push(previousSibling);
          }
        }
      });
    }
    const currentIdentifier = await firstValueFrom(this.identifier$);
    if (!currentIdentifier) {
      this._store.dispatch(ActionSetMarkedTasksIdentifier({ identifier }));
    }
    this._store.dispatch(
      ActionSetMetadataToBeUsedToPerformAction({
        metadata: {
          selected: this._returnShallowCopy(this._selectedElements),
          predicted: this._returnShallowCopy(this._predictedElements),
          type: 'input',
        },
      })
    );
  }

  private _returnShallowCopy(objectRef: any): any {
    return JSON.parse(JSON.stringify(objectRef));
  }

  public async setElementIdentifier(
    $event: any,
    clickedElement: ITask,
    identifier: string
  ) {
    const elementRef: HTMLElement = $event.target.parentElement;
    if (!clickedElement.selected) {
      this._store.dispatch(
        ActionMarkTaskAsSelected({ taskId: clickedElement.id })
      );
      this._selectedElements.push(elementRef);
    }
    if (this._selectedElements.length === 2) {
      const allOtherTasks = await firstValueFrom(this.tasks$);
      allOtherTasks.forEach((task) => {
        if (!task.selected && !task.predicted && !task.completed) {
          this._store.dispatch(
            ActionMarkTaskAsPredicted({ taskId: clickedElement.id })
          );
          const previousSibling = elementRef.parentElement
            ?.previousSibling as HTMLElement;
          const nextSibling = elementRef.parentElement
            ?.nextElementSibling as HTMLElement;
          if (this._predictedElements.includes(previousSibling)) {
            this._predictedElements.push(nextSibling);
          } else {
            this._predictedElements.push(previousSibling);
          }
        }
      });
    }
    const currentIdentifier = await firstValueFrom(this.identifier$);
    if (!currentIdentifier) {
      this._store.dispatch(ActionSetMarkedTasksIdentifier({ identifier }));
    }
    this._store.dispatch(
      ActionSetMetadataToBeUsedToPerformAction({
        metadata: {
          selected: this._returnShallowCopy(this._selectedElements),
          predicted: this._returnShallowCopy(this._predictedElements),
          type: 'element',
        },
      })
    );
  }

  private _clearSelections(): void {
    this._selectedElements = [];
    this._predictedElements = [];
  }
}
