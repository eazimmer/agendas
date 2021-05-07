import { TestBed } from '@angular/core/testing';

import { ToggleTaskFormService } from './toggle-task-form.service';

describe('ToggleTaskFormService', () => {
  let service: ToggleTaskFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleTaskFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
