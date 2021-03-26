import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header.component';
import {NavbarComponent} from './components/navbar.component';
import {BodyComponent} from './components/body.component';
import {FormtaskComponent} from './components/formtask.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskItemComponent } from './components/task-item.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavbarComponent, BodyComponent, FormtaskComponent, TaskItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
