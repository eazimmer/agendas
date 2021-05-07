import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;

  editTask(id: number): void {
    this.service.editTask(id);
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id);
  }

  constructor(private service: TasksService) { }

  ngOnInit(): void {
  }

}
