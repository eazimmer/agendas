import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-buttons',
  templateUrl: './task-buttons.component.html',
  styleUrls: ['./task-buttons.component.css']
})
export class TaskButtonsComponent implements OnInit {
  visible = false;

  addTask(): void {
    this.tasksService.toggleAddForm.emit(!this.visible);
  }

  sortByDate(): void {
    this.tasksService.sortByDate();
  }

  sortByPriority(): void {
    this.tasksService.sortByPriority();
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.toggleAddForm.subscribe(status => this.visible = status);
  }

}
