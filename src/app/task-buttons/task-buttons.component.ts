import { Component, OnInit } from '@angular/core';
import { ToggleTaskFormService } from '../toggle-task-form.service';

@Component({
  selector: 'app-task-buttons',
  templateUrl: './task-buttons.component.html',
  styleUrls: ['./task-buttons.component.css']
})
export class TaskButtonsComponent implements OnInit {
  visible = false;

  addTask(): void {
    this.service.toggle.emit(!this.visible);
  }

  sortTasks(): void {
    console.log('Sorting Tasks');
  }

  constructor(private service: ToggleTaskFormService) { }

  ngOnInit(): void {
    this.service.toggle.subscribe(status => this.visible = status);
  }

}
