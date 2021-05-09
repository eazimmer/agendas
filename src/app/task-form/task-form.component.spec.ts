import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have its visibility controlled by isVisible(boolean)', () => {
    expect(component.visible).toBe(false, 'component is erroneously visible by default');
    component.isVisible(true);
    expect(component.visible).toBe(true, 'component failed to become visible after toggle by isVisible(true)');
    component.isVisible(false);
    expect(component.visible).toBe(false, 'component failed to become invisible after toggle by isVisible(false)');
  });
});
