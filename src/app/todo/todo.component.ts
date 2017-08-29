import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ TodoService ]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc: string = "";

  constructor( private service: TodoService) { }

  addTodo() {
    this.todos = this.service.addTodo(this.desc);
    this.desc = "";
  }

  ngOnInit() {
  }

}
