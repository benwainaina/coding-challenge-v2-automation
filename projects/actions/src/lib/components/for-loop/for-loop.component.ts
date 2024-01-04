import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskActionsTitleComponent } from '../../shared/task-actions-title/task-actions-title.component';

@Component({
  selector: 'lib-for-loop',
  standalone: true,
  imports: [TaskActionsTitleComponent],
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.scss'],
})
export class ForLoopComponent {}
