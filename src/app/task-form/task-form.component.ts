import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { NgForm } from '@angular/forms';
import { ToggleTaskFormService } from '../toggle-task-form.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  visible = false;
  @Output() newTaskEvent = new EventEmitter<Task>();

  onSubmit(taskForm: NgForm): void {
    this.addNewTask(taskForm.value);
  }

  // Emits new Task to Task-List
  addNewTask(value: Task): void {
    this.newTaskEvent.emit(value);
  }

  // Toggles display of the form to add a new Task
  isVisible(update: boolean): void {
    this.visible = update;
  }

  constructor(private service: ToggleTaskFormService) { }

  ngOnInit(): void {
    this.service.toggle.subscribe( update => this.isVisible(update) );
  }

}
