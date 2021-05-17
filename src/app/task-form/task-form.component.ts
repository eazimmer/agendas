import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() newTaskEvent = new EventEmitter<Task>();
  uniqueIDCounter = 3; // ID of first new non-hardcoded task
  visible = false;
  modal = 'none';

  onSubmit(taskForm: NgForm): void {
    this.addNewTask(taskForm.value);
  }

  addNewTask(task: Task): void {
    task.id = this.uniqueIDCounter;
    this.uniqueIDCounter++;
    this.newTaskEvent.emit(task);
    this.tasksService.toggleAddForm.emit(!this.visible);
  }

  isVisible(update: boolean): void {
    this.visible = update;
    this.modal = (this.modal === 'none') ? 'block' : 'none';
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.toggleAddForm.subscribe(update => this.isVisible(update));
  }

}
