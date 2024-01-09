import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TaskActionsTitleComponent } from '../../shared/task-actions-title/task-actions-title.component';
import { IBotAction } from './interfaces';

@Component({
  selector: 'lib-select-child-action',
  standalone: true,
  imports: [TaskActionsTitleComponent, NgFor],
  templateUrl: './select-child-action.component.html',
  styleUrls: ['./select-child-action.component.scss'],
})
export class SelectChildActionComponent {
  public botActions: Array<IBotAction>;

  public assetsPath: string = 'assets/icons/actions';

  constructor() {
    this.botActions = [
      {
        icon: `${this.assetsPath}/input-element-arrow.svg`,
        label: 'Click a button',
        instructions: 'allows you to click on a button for ead element',
        enabled: true,
      },
      {
        icon: `${this.assetsPath}/input-text-label.svg`,
        label: 'Input text',
        instructions: 'allows you to input text for each element',
        enabled: true,
      },
      {
        icon: `${this.assetsPath}/store-data.svg`,
        label: 'Store data',
        instructions: 'Amet minim mollit non deserunt ullamco est sit.',
        enabled: false,
      },
      {
        icon: `${this.assetsPath}/if-condition.svg`,
        label: 'Input text',
        instructions: 'Amet minim mollit non deserunt ullamco est sit.',
        enabled: false,
      },
      {
        icon: `${this.assetsPath}/for-loop.svg`,
        label: 'Input text',
        instructions: 'Amet minim mollit non deserunt ullamco est sit.',
        enabled: false,
      },
    ];
  }
}
