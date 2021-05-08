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

  addTask(task: Task): void {
    this.tasksService.addTask(task);
  }

  editTask(task: Task): void {
    this.tasksService.editTask(task);
  }

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    this.tasksService.tasks$.subscribe(data => { this.tasks = data; });
  }

}
