import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserRoleMappingComponent } from './user-role-mapping/user-role-mapping.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserRoleListComponent } from './user-role/user-role-list/user-role-list.component';

const routes: Routes = [
  { path: 'userlist', component: UserListComponent },
  { path: 'add-user', component: UserComponent },
  { path: 'update-user/:id', component: UserComponent },
  { path: 'userrolelist', component: UserRoleListComponent },
  { path: 'add-user-role', component: UserRoleComponent },
  { path: 'update-user-role/:id', component: UserRoleComponent },
  { path: 'userrolemappinglist', component: UserRoleMappingComponent },
  { path: 'add-user-role-mapping', component: UserRoleMappingComponent },
  { path: 'update-user-role-mapping/:id', component: UserRoleMappingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }