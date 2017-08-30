import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';
import { InMemoryTodoDbService } from "./todo/todo.data";

import { routing } from './app.routers';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)
  ],
  providers: [{
    provide: 'auth',
    useClass: AuthService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
