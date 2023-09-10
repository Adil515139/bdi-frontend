import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks!: Task[];

  constructor (private taskService:TaskServiceService,private router:Router){}

  ngOnInit(): void {
   this.getAllTask();
  }
   getAllTask() {
    this.taskService.getEmployeesList().subscribe(data=>{
      this.tasks=data;
    })
  }
  createTask(){
    this.router.navigate(['create-task']);
  }
  updateTask(id:number){
    this.router.navigate(['update-task',id]);
  }
  deleteTask(id:number){
this.taskService.deleteTask(id).subscribe( data => {
  console.log(data);
  this.getAllTask();
})  
  }
  taskDetails(id:number){
    this.router.navigate(['task-details',id]); 
      }

}
