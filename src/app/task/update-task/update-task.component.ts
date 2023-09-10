import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskServiceService } from '../task-service.service';
import { ActivatedRoute, Router, RouterConfigOptions } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{
  taskForm:FormGroup;
  task!:Task;
  id!:number;
  constructor(private taskService:TaskServiceService,private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder){
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority:['',Validators.required]
    });
    
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
    
      this.taskService.getTaskById(this.id).subscribe(data=>{
        this.task = data;
        this.taskForm.patchValue({
          title: this.task.title,
          description: this.task.description,
          priority: this.task.priority
        });
      },error=>console.log(error));
    
    
  }

  onSubmit(){
    console.log("dadbh");
    const taskData = this.taskForm.value as Task;
    this.taskService.updateTask(this.id,taskData).subscribe((result:any)=>{

      console.log(result);
      window.alert('Task is Updated');
      this.goToTaskList();
    
  }
  , error => console.log(error));
}
goToTaskList(){
  this.router.navigate(['/tasks']); 
}

}
