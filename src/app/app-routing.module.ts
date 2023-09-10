import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { UpdateTaskComponent } from './task/update-task/update-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';

const routes: Routes = [
  {path:'tasks',component:TaskListComponent},
  {path:'create-task',component:CreateTaskComponent},
  {path:'update-task/:id',component:UpdateTaskComponent},
  {path:'task-details/:id',component:ViewTaskComponent},
  {path:'',redirectTo:'tasks',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
