import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
      constructor(public id: number,
                  public username : string,
                  public description: string,
                  public completed: boolean,
                  public targetDate: Date){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

 
     todos: Todo[]
     //  [
     //   new Todo(1, 'Learn to code', false, new Date()),
     //   new Todo(2, 'Learn to write', false, new Date()),
     //   new Todo(3, 'Learn to dance', false, new Date())
     //  ]
     //  todo ={
     //    id: 1,
     //    description: 'Learn to code'
     //  }
     | undefined
    //  [
    //   new Todo(1, 'Learn to code', false, new Date()),
    //   new Todo(2, 'Learn to write', false, new Date()),
    //   new Todo(3, 'Learn to dance', false, new Date())
  
    //  ]
  //  todo ={
  //    id: 1,
  //    description: 'Learn to code'
  //  }
  constructor(
    private todoservice:TodoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.todoservice.retrieveAllTodo('anjali').subscribe(
      response =>{
        console.log(response)
        this.todos= response
      }
    )
  }

  deleteTodo(id: number){
      this.todoservice.deleteTodo('anjali',id).subscribe(
        response => {
          console.log("Todo deleted successfully");
          
        }
      )
  }

  updateTodo(id:number){
     console.log("Updated");
     this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }
}
