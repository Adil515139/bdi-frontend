import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit{
  id!:number;
  task!:Task;
  constructor(private taskService:TaskServiceService,private router:Router,private route:ActivatedRoute ){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.task=new Task;
    this.viewTaskDetails();

  }

  viewTaskDetails(){
    this.taskService.getTaskById(this.id).subscribe(data=>{
      this.task=data
    })
  }
}
