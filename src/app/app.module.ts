import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskButtonsComponent } from './task-buttons/task-buttons.component';
import { TaskEditFormComponent } from './task-edit-form/task-edit-form.component';
import { TaskTodayComponent } from './task-today/task-today.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskButtonsComponent,
    TaskEditFormComponent,
    TaskTodayComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
