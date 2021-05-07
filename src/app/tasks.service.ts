import { Injectable } from '@angular/core';
import {Task} from './task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[];
  tasks$ = new Subject<Task[]>();

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
    this.addTask(new Task(
      1,
      'Sample Task 1',
      new Date('04-3-2021'),
      'Low Priority',
      'I\'m the first task!'
    ));
    this.addTask(new Task(
      2,
      'Sample Task 2',
      new Date('04-4-2021'),
      'Medium Priority',
      'I\'m the second task!'
    ));
  }
}
