import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsComponent } from './task-details.component';
import {Task} from "../task";

describe('TaskDetailsComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    component.task = new Task(3, 'Sample Test 3', new Date('05-9-21'), 'High', 'I\'m the third task!');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should interpolate Task details from the provided input task', () => {
    component.visible = true;
    fixture.detectChanges();

    const title = fixture.debugElement.nativeElement.querySelector('#task-title');
    const dueDate = fixture.debugElement.nativeElement.querySelector('#task-dueDate');
    const priority = fixture.debugElement.nativeElement.querySelector('#task-priority');
    const description = fixture.debugElement.nativeElement.querySelector('#task-description');

    expect(title.textContent).toBe('Sample Test 3', 'DOM element not correctly interpolating task.title');
    expect(dueDate.textContent).toBe(new Date('05-9-21').toDateString(), 'DOM element not correctly interpolating task.title');
    expect(priority.textContent).toBe('High', 'DOM element not correctly interpolating task.title');
    expect(description.textContent).toBe('I\'m the third task!', 'DOM element not correctly interpolating task.description');
});
});
