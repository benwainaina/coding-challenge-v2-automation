import { AsyncPipe, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from 'projects/state-manager/todos/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActionAddTodos } from 'projects/state-manager/todos/actions';
import { todosSelector } from 'projects/state-manager/todos/selectors';
import { ITodoInput } from './interfaces';

@Component({
  selector: 'lib-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, AsyncPipe],
})
export class TodoListComponent {
  public todoInputs: Array<ITodoInput> = [];

  public assetsPath: string = 'assets/icons/todo-list/';

  private _store: Store = inject(Store);

  public todos$: Observable<Array<ITodo>>;

  constructor() {
    const randomTypes = ['text', 'number'];
    this.todoInputs = new Array(3).fill(0).map((inputField) => ({
      type: randomTypes[Math.round(Math.random() * randomTypes.length)],
    }));
    this.todos$ = this._store.select(todosSelector);
  }

  public saveTodos($event: any): void {
    const targetElement = $event.target;
    const inputField = targetElement
      .closest('div.wrapper__form__todo')
      .getElementsByTagName('input')[0];
    if (inputField) {
      const textContent = inputField.value;
      if (!textContent) {
        alert('Field input cannot be blank');
      } else {
        const todo: ITodo = {
          content: textContent,
          id: uuidv4(),
          identifier: inputField.className,
        };
        this._store.dispatch(
          ActionAddTodos({
            todos: [todo],
          })
        );
      }
    }
  }
}
