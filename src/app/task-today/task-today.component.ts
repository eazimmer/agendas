import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasks-today',
  templateUrl: './task-today.component.html',
  styleUrls: ['./task-today.component.css']
})
export class TaskTodayComponent implements OnInit {
  tasks: Task[];

  filterTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => task.dueDate.toDateString() === new Date().toDateString());
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.filterTasks(this.tasksService.getTasks());
    this.tasksService.tasks$.subscribe(data => { this.tasks = this.filterTasks(data); });
  }

}
