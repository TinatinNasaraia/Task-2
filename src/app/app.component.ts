import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  Todos :Todo [] = [];
  newToDo:string;


  saveTodo() {
    if(this.newTodo){
    let todo = new Todo();
    todo.name= this.newTodo;
    todo.isCompleted = true
    this.Todos.push(todo);
    this.newTodo = '';

    }else{
      alert('Please Enter Todo');
    }
  }
  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter ((v,i)=> i !== id) ;
  }
}
