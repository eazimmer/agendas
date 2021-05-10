import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodayComponent } from './task-today.component';

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
});
