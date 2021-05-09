import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { Task } from '../task';
import { By } from '@angular/platform-browser';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display newly added tasks', () => {
    let tasksCount = fixture.debugElement.queryAll(By.css('app-task')).length;
    expect(tasksCount).toBe(2, 'incorrect number of default tasks rendered');

    component.tasks.push(new Task(3, 'Sample Test 3', new Date('05-9-21'), 'High', 'I\'m the third task!'));
    fixture.detectChanges();

    tasksCount = fixture.debugElement.queryAll(By.css('app-task')).length;
    expect(tasksCount).toBe(3, 'newly added task not rendered');
  });
});
