import { Component, OnInit } from '@angular/core';
import {Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task;

  constructor() { }

  ngOnInit(): void {
    this.task = new Task(1, 'Sample Title', new Date(2021, 4, 2), 'Low Priority', 'This is a sample task description!');
  }

}
