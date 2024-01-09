import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgTemplateOutlet } from '@angular/common';
import { TaskActionsTitleComponent } from '../../shared/task-actions-title/task-actions-title.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { tasksMetadataSelector } from 'projects/state-manager/tasks/selectors';
import { ActionSetActionStep } from 'projects/state-manager/todos-actions/actions';

@Component({
  selector: 'lib-for-loop',
  standalone: true,
  imports: [TaskActionsTitleComponent, AsyncPipe, NgTemplateOutlet],
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.scss'],
})
export class ForLoopComponent {
  public tasksMetadataSelector$: Observable<any>;

  private _store: Store = inject(Store);

  constructor() {
    this.tasksMetadataSelector$ = this._store.select(tasksMetadataSelector);
  }

  public resetSelections(): void {}

  public saveSelections(): void {
    this._store.dispatch(ActionSetActionStep({ step: 'selectChildAction' }));
  }
}
