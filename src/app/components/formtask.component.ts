import {Component} from '@angular/core';

@Component({
  selector: 'app-formtask',
  templateUrl: './formtask.component.html',
  styleUrls: ['./formtask.component.css']
})
export class FormtaskComponent{
  title = 'Task title';
  description = 'Task description';
  priorityCheck = 'Priority';

  enteredTitle = '';
  enteredDescription = '';
  enteredPriority = null;
  isSaved = '';

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

  }
}
