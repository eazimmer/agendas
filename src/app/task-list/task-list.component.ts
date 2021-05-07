import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: Task[];

  addTask(value: Task): void {
    this.service.addTask(value);
  }

  constructor(private service: TasksService) {
  }

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
    this.service.tasks$.subscribe(data => { this.tasks = data; });
  }

}
