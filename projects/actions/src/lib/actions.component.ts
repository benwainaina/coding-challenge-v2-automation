import { NgFor } from '@angular/common';
import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionsStepSelector } from 'projects/state-manager/todos-actions/selectors';
import { TASK_ACTIONS_MAPPING } from './components/mapping';

@Component({
  selector: 'lib-actions',
  templateUrl: 'actions.component.html',
  styleUrls: ['actions.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class ActionsComponent {
  private _store: Store = inject(Store);

  @ViewChild('stepsOutlet', { static: true, read: ViewContainerRef })
  private _stepsOutlet!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {
    this._decideOnActionStep();
  }

  private _decideOnActionStep(): void {
    this._store.select(actionsStepSelector).subscribe((step) => {
      if (this._stepsOutlet) {
        this._stepsOutlet.clear();
        this._stepsOutlet.createComponent(TASK_ACTIONS_MAPPING[step]);
      }
    });
  }
}
