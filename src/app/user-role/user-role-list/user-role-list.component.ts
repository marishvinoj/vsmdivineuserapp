import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole, userRoleHeaders } from 'src/app/models/userrole';
import { UserRoleService } from 'src/app/services/userrole.service';
import { environment } from 'src/app/shared/shared/environment/environment';

@Component({
  selector: 'app-user-role-list',
  templateUrl: './user-role-list.component.html',
  styleUrl: './user-role-list.component.scss'
})
export class UserRoleListComponent implements OnInit {
  
  userRoles: UserRole[] = []; // array to store user roles
  selectedUserRole: UserRole | null = null;
  displayDialog: boolean = false; // flag to show/hide dialog
  public headers:any |undefined;
  public cmHeaders = userRoleHeaders;
  public updateurl: string = environment.userRole.updateurl;

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

  public getSelectedItem(item: any): void {
    if (item == null) {
    } else {
    }
  }

}
