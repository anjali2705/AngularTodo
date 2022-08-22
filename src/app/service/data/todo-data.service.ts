import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

      retrieveAllTodo(username:any){

       return this.http.get<Todo[]>(`${API_URL}/hello-world/${username}/todos`);
     }

     retrieveTodo(username:any, id:number){
      return this.http.get(`${API_URL}/hello-world/${username}/todos/${id}`);
    }

     
    updateTodo(username:any, id:number, todo:any){
      return this.http.put(`${API_URL}/hello-world/${username}/todos/${id}`,todo);
    }
    createTodo(username:any, todo:any){
      return this.http.post(`${API_URL}/hello-world/${username}/todos`,todo);
    }
     
     deleteTodo(username:any, id:number){
          return this.http.delete(`http://localhost:8080/hello-world/${username}/todos/${id}`);
     }
}
