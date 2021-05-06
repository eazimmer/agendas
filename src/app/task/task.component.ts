import { Component, OnInit, Input } from '@angular/core';
import {Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // Resolve no-input-rename TypeScript warning
  task: Task;
  @Input('task') receivedTask;

  constructor() { }

  ngOnInit(): void {
    this.task = this.receivedTask;
  }

}
