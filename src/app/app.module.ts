import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UserComponent } from './user/user.component';
import {AppComponent} from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [
    UserComponent,AppComponent, UserListComponent
  ],
  imports: [
    RouterModule,AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    ToastModule,
    HttpClientModule, 
    ToggleButtonModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [MessageService, UserService],
  bootstrap: [AppComponent],
  
  exports: [
    ToggleButtonModule
  ]
})

export class AppModule { }