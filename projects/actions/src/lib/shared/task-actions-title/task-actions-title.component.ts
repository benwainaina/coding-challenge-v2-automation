import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-task-actions-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-actions-title.component.html',
  styleUrls: ['./task-actions-title.component.scss'],
})
export class TaskActionsTitleComponent {
  @Input() title!: string;
}
