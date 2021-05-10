import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodayComponent } from './task-today.component';
import {Task} from '../task';

describe('TasksTodayComponent', () => {
  let component: TaskTodayComponent;
  let fixture: ComponentFixture<TaskTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display only tasks due with today\'s date', () => {
    const todaysDate = new Date().toString();
    expect(component.tasks.find(task => task.dueDate.toString() === todaysDate)).toBe(undefined, 'a task was incorrectly initialized with today\'s date');
    component.tasks.push(new Task(3, 'Today\'s Task', new Date(), 'High', 'Description of today\'s task'));
    expect(component.tasks.find(task => task.dueDate.toString() === todaysDate)).not.toBe(undefined, 'a task with today\'s due date wasn\'t found, but should have been');
  });
});
