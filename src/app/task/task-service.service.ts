import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../model/task';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  
  
  private baseURL = "http://localhost:8089/tasks";
  
  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL}`);
  }
  
  createTask(task: Task) {
    return this.httpClient.post(`${this.baseURL}`,task);
  }
  getTaskById(id: number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL}/${id}`);
  }
  updateTask(id: number, task: Task): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, task);
  }
  deleteTask(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
