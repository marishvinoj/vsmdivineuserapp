import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserRoleListComponent } from './user-role/user-role-list/user-role-list.component';
import { UserRoleMappingComponent } from './user-role-mapping/user-role-mapping.component';
import { UserRoleMappingListComponent } from './user-role-mapping/user-role-mapping-list/user-role-mapping-list.component';

const routes: Routes = [
  { path: 'userlist', component: UserListComponent },
  { path: 'adduser', component: UserComponent },
  { path: 'updateuser/:id', component: UserComponent },
  { path: 'userrolelist', component: UserRoleListComponent },
  { path: 'adduserrole', component: UserRoleComponent },
  { path: 'updateuserrole/:id', component: UserRoleComponent },
  { path: 'userrolemappinglist', component: UserRoleMappingListComponent },
  { path: 'adduserrolemapping', component: UserRoleMappingComponent },
  { path: 'updateuserrolemapping/:id', component: UserRoleMappingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }