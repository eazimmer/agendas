import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() newTaskEvent = new EventEmitter<Task>();

  onSubmit(taskForm: NgForm): void {
    this.addNewTask(taskForm.value);
  }

  // Emits new Task to Task-List
  addNewTask(value: Task): void {
    this.newTaskEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
