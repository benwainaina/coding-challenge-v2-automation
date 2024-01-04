import { Component } from '@angular/core';
import { ActionsComponent } from 'projects/actions/src/public-api';
import { TodoListComponent } from 'projects/todo-list/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TodoListComponent],
})
export class AppComponent {
  title = 'coding-challenge-v2-automation';
}
