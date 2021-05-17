import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task;
  visible = false;
  modal = 'none';

  closeWindow(): void {
    this.visible = false;
    this.modal = 'none';
  }

  revealWindow(task: Task): void {
    this.task = task;
    this.visible = true;
    this.modal = 'block';
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.displayTaskDetails.subscribe(taskToDisplay => this.revealWindow(taskToDisplay));
  }

}
