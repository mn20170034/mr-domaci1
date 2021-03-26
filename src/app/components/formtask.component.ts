import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from '../task.model';
import {TodoServices} from '../services/todo.services';

@Component({
  selector: 'app-formtask',
  templateUrl: './formtask.component.html',
  styleUrls: ['./formtask.component.css']
})
export class FormtaskComponent{
  title = 'Task title';
  description = 'Task description';
  priorityCheck = 'Priority';

  @Output() added = new EventEmitter<Task>();

  enteredTitle = '';
  enteredDescription = '';
  enteredPriority = null;
  isSaved = '';

  constructor(private todoService: TodoServices) {
  }

  savedTitle = '';
  savedDescription = '';
  savedPriority = null;

  priorities = [
    {id: 1, name: 'High'},
    {id: 2, name: 'Medium'},
    {id: 3, name: 'Low'}
  ];

  addTask(): void{
    // console.log('Task saved');
    if (this.enteredTitle === '' || this.enteredDescription === '' || this.enteredPriority === null){
      this.isSaved = 'All fields have to be filled. ';
      if (this.enteredTitle === '' && this.enteredDescription !== '' && this.enteredPriority !== null){
        this.isSaved = this.isSaved + 'Enter title!';
      }
      if (this.enteredTitle !== '' && this.enteredDescription === '' && this.enteredPriority !== null){
        this.isSaved = this.isSaved + 'Enter description!';
      }
      if (this.enteredTitle !== '' && this.enteredDescription !== '' && this.enteredPriority === null){
        this.isSaved = this.isSaved + 'Enter priority!';
      }
      if (this.enteredTitle === '' && this.enteredDescription === '' && this.enteredPriority !== null){
        this.isSaved = this.isSaved + 'Enter title and description!';
      }
      if (this.enteredTitle === '' && this.enteredDescription !== '' && this.enteredPriority === null){
        this.isSaved = this.isSaved + 'Enter title and priority!';
      }
      if (this.enteredTitle !== '' && this.enteredDescription === '' && this.enteredPriority === null){
        this.isSaved = this.isSaved + 'Enter description and priority!';
      }
    }
    else {
      this.isSaved = 'Task is saved!';
      this.savedDescription = this.enteredDescription;
      this.savedTitle = this.enteredTitle;
      this.savedPriority = this.enteredPriority;
    }

    setTimeout(() => {
      this.enteredTitle = '';
      this.enteredDescription = '';
      this.enteredPriority = null;
      this.isSaved = ''; }, 2000);

   // this.added.emit(new Task(this.savedTitle, this.savedDescription, this.savedPriority));
    this.todoService.addTs(new Task(this.savedTitle, this.savedDescription, this.savedPriority));
  }
}
