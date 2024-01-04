import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-actions',
  templateUrl: 'actions.component.html',
  styleUrls: ['actions.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class ActionsComponent {
  constructor() {}
}
