import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpModule } from "@angular/http";

import { TodoModule } from "./todo/todo.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';
import { InMemoryTodoDbService } from "./todo/todo.data";

import { routing } from './app.routers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    TodoModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)
  ],
  providers: [{
    provide: 'auth',
    useClass: AuthService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
