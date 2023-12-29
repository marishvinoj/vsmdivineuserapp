import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/userrole';
import { UserRoleService } from 'src/app/services/userrole.service';

@Component({
  selector: 'app-user-role-list',
  templateUrl: './user-role-list.component.html',
  styleUrl: './user-role-list.component.scss'
})
export class UserRoleListComponent implements OnInit {
  
  userRoles: UserRole[] = []; // array to store user roles
  selectedUserRole: UserRole | null = null;
  displayDialog: boolean = false; // flag to show/hide dialog

  /**
   *
   */
  constructor(private userRoleService: UserRoleService,private router: Router) {
  }

  ngOnInit(): void {
    this.userRoleService.getAllUserRole().subscribe(userRole => {
      if(userRole != null)
        this.userRoles = userRole;
      else
      this.userRoles = [];
    });
  }

  editUserRole(userRole: UserRole) {
    this.selectedUserRole = { ...userRole };
    this.router.navigate(['update-user-role', userRole.Id]);
    this.displayDialog = true;
  }
  
  deleteUserRole(userRole: UserRole) {
    // implement delete logic
  }
  
  saveUserRole() {
    // implement save logic
  }
  
  cancelEdit() {
    this.selectedUserRole = null;
    this.displayDialog = false;
  }

}