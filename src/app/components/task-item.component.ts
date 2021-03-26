import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() title = 'Task title';
  @Input() description = 'Task description';
  @Input() priorityCheck = 'Priority';

  constructor() { }

  ngOnInit(): void {
  }

}
