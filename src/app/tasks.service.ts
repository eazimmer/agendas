import {EventEmitter, Injectable, Output} from '@angular/core';
import {Task} from './task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  @Output() toggleAddForm = new EventEmitter<boolean>();
  @Output() toggleEditForm = new EventEmitter<boolean>();
  @Output() taskToEdit = new EventEmitter<Task>();
  @Output() displayTaskDetails = new EventEmitter<Task>();
  tasks: Task[];
  tasks$ = new Subject<Task[]>();

  // TO-DO: Integrate database for persistent data storage
  addTask(task: Task): void {
    // Update local tasks storage
    this.tasks.push(new Task(
      task.id,
      task.title,
      new Date(task.dueDate),
      task.priority,
      task.description
    ));

    // Push new task into observable
    this.tasks$.next(this.tasks);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  editTask(task: Task): void {
    this.tasks[this.tasks.findIndex(item => item.id === task.id)] = task;
    this.tasks$.next(this.tasks);
  }

  deleteTask(id: number): void {
    this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1);
    this.tasks$.next(this.tasks);
  }

  sortByDate(): void {
    // @ts-ignore
    this.tasks.sort((a, b) => a.dueDate - b.dueDate);
    this.tasks$.next(this.tasks);
  }

  sortByPriority(): void {
    const sortingOrder = {
      High: 1,
      Medium: 2,
      Low : 3,
    };

    this.tasks.sort((a, b) => {
      if (sortingOrder[a.priority] < sortingOrder[b.priority]) {
        return -1;
      } else if (sortingOrder[a.priority] > sortingOrder[b.priority]) {
        return 1;
      }
    });
    this.tasks$.next(this.tasks);
  }

  constructor() {
    this.tasks = [];
    this.addTask(new Task(
      1,
      'Sample Task 1',
      new Date('04-3-2021'),
      'Low',
      'I\'m the first task!'
    ));
    this.addTask(new Task(
      2,
      'Sample Task 2',
      new Date('04-4-2021'),
      'Medium',
      'I\'m the second task!'
    ));
  }
}
