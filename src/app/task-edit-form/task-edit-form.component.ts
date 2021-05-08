import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Task} from '../task';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task-edit-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {
  @Output() changedTaskEvent = new EventEmitter<Task>();
  visible = false;
  placeholderTask: Task;

  onSubmit(taskForm: NgForm): void {
    this.editTask(taskForm.value);
  }

  editTask(task: Task): void {
    task.id = this.placeholderTask.id;
    this.changedTaskEvent.emit(task);
    this.tasksService.toggleEditForm.emit(!this.visible);
  }

  isVisible(update: boolean): void {
    this.visible = update;
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.toggleEditForm.subscribe(update => this.isVisible(update) );
    this.tasksService.taskToEdit.subscribe(taskToEdit => this.placeholderTask = taskToEdit);
  }

}
