import { Injectable } from '@angular/core';
import {Task} from './task';
import * as data from '../assets/tasks.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[];
  tasks$ = new Subject<Task[]>();
  data: any = (data as any).default;

  // TO-DO: Integrate database for persistent data storage
  addTask(task: Task): void {
    // Update local tasks storage
    this.tasks.push(new Task(
      task.id,
      task.title,
      new Date(task.dueDate),
      task.severity,
      task.description
    ));

    // Push new task into observable
    this.tasks$.next(this.tasks);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  editTask(id: number): void {
    // TO-DO: Implement
  }

  deleteTask(id: number): void {
    this.tasks.splice(this.tasks.indexOf(this.tasks.find(task => task.id === id)), 1);
    this.tasks$.next(this.tasks);
  }

  constructor() {
    this.tasks = [];
    this.data.map(task => this.tasks.push(new Task(
      task.id,
      task.title,
      new Date(task.dueDate),
      task.severity,
      task.description
    )));
  }
}
