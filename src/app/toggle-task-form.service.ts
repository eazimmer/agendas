import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleTaskFormService {
  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }
}
