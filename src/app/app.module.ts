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
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserRoleListComponent } from './user-role/user-role-list/user-role-list.component';
import { SharedModule } from './shared/shared/shared/shared.module';
import { UserRoleMappingComponent } from './user-role-mapping/user-role-mapping.component';
import { UserRoleMappingListComponent } from './user-role-mapping/user-role-mapping-list/user-role-mapping-list.component';
import { ListComponent } from './shared/shared/Components/list/list.component';
import { MenubarTemplateComponent } from './shared/shared/Components/menubar-template/menubar-template.component';

@NgModule({
  declarations: [
    UserComponent,
    AppComponent, 
    UserListComponent, 
    UserRoleComponent, 
    UserRoleListComponent,
    ListComponent,
    UserRoleMappingComponent,
    UserRoleMappingListComponent,
    MenubarTemplateComponent
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
    SharedModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [MessageService, UserService],
  bootstrap: [AppComponent],
  exports: [
    ToggleButtonModule,
  ]
})

export class AppModule { }