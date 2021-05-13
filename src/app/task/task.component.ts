import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;
  visible = false;

  editTask(task: Task): void {
    this.tasksService.toggleEditForm.emit(!this.visible);
    this.tasksService.taskToEdit.emit(task);
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id);
  }

  selectTaskForDisplay(): void {
    this.tasksService.displayTaskDetails.emit(this.task);
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

}
