import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from 'src/app/model/task';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{
  task:FormGroup;
  ngOnInit(): void {
    
  }
  constructor(private taskService:TaskServiceService,private router:Router,private formBuilder: FormBuilder){ 
     this.task = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    priority:['',Validators.required]
  });}
  onSubmit(){
    console.log("dadbh");
    this.createTask();
}

createTask(){

  if(this.task.valid){
    const taskData = this.task.value as Task;
    this.taskService.createTask(taskData).subscribe((result:any)=>{
  
      console.log(result);
      window.alert('Task is Created');
      this.goToTaskList();
    
  })
  }
}

  goToTaskList(){
    this.router.navigate(['/tasks']); 
  }

}
