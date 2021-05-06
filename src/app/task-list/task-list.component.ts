import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: Task[];

  addTask(value: Task): void {
    this.tasks.push(new Task(3, value.title, new Date(value.dueDate), value.severity, value.description));
  }

  constructor() {
    this.tasks = [];
    this.tasks.push(new Task(1, 'Sample Title 1', new Date(2021, 4, 2), 'Low Priority', 'This is a sample task description!'));
    this.tasks.push(new Task(2, 'Sample Title 2', new Date(2021, 4, 5), 'High Priority', 'This is a second sample task description!'));
  }

  ngOnInit(): void {
  }

}
