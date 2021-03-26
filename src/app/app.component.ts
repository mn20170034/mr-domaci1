import { Component } from '@angular/core';
import {Task} from './task.model';
import {TodoServices} from './services/todo.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoServices]
})
export class AppComponent {
  title = 'mr-domaci1';

  addTs(task: Task): void{

  }
  constructor(private todoService: TodoServices){

  }

  tasks: Task[] = this.todoService.tasks;
}
