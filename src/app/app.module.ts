import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTaskComponent } from './task/update-task/update-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ViewTaskComponent } from './task/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    UpdateTaskComponent,
    CreateTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
