import {Task} from '../task.model';

export class TodoServices{
  tasks: Task[] = [];
  addTs(task: Task): void{
    this.tasks.push(task);
  }
}
