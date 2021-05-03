import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task;

  onSubmit(taskForm: NgForm): void {
    this.task = taskForm.value;
    console.log(this.task);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
