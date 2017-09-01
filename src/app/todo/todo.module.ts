import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { routing } from "./todo.routes";

import { TodoHeaderComponent } from "./todo-header/todo-header.component";
import { TodoFooterComponent } from "./todo-footer/todo-footer.component";
import { TodoComponent } from "./todo.component";

import { TodoService } from "./todo.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoFooterComponent
  ],
  providers: [{
    provide: 'todoService',
    useClass: TodoService
  }]
})
export class TodoModule { }
