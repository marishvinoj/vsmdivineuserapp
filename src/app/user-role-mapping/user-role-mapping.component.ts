
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRoleMappingService } from '../services/userrolemapping.service';
import { UserRoleService } from '../services/userrole.service';
import { MessageService } from 'primeng/api';
import { UserRoleMappingDto } from '../models/UserRoleMappingDto ';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { environment } from '../shared/shared/environment/environment';

  @Component({
    selector: 'app-user-role-mapping',
    templateUrl: './user-role-mapping.component.html',
    styleUrl: './user-role-mapping.component.scss'
  })

  export class UserRoleMappingComponent implements OnInit {
    userRoleForm!: FormGroup;
    users: any[] = [];
    roles: any[] = [];
    selectedRoles: any[] = [];
    public selectedUser!:any;
    userRoles: any[] = [];
    public isUpdate: boolean = false;

    constructor(private formBuilder: FormBuilder, 
      private userRoleMappingService: UserRoleMappingService,
      private messageService: MessageService, private userRoleService: UserRoleService,
      private userService: UserService,private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      const routeName = this.route.snapshot.url[0].path;
      this.isUpdate = routeName == 'updateuserrolemapping' ? true : false;
      this.userRoleForm = this.formBuilder.group({
        UserID: [{value: this.selectedUser, disabled: this.isUpdate}, Validators.required],
        selectedRoles: [this.selectedRoles, Validators.required],
      });
      this.getList();
    }

    getList()
    {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.userService.getAllUsers().subscribe(response => {
        if(response != null)
        {
          this.users = response;
          this.selectedUser = this.users.find(user => user.Id === id);
        }
        else
          this.users = [];

      });
      
      this.userRoleService.getAllUserRole().subscribe(response => {
        if(response != null)
        {
          this.roles = response;
        }
        else
          this.roles = [];
      });


      this.userRoleMappingService.getAllUserRoleMappingByUserId(id).subscribe(response => {
        if(response != null)
        {
          this.userRoles = response;
          this.selectedRoles = this.roles.filter(role => {
            return response.some(res => res.RoleId === role.Id);
          });
        }
        else
        this.roles = [];
      });
    }

    onSubmit(): void {
      if (this.userRoleForm.valid) {
        var userRoleMapping = this.userRoleForm.value;
        const userRoleMappingDto = new UserRoleMappingDto();
        userRoleMappingDto.userID = this.selectedUser.Id;
        userRoleMappingDto.roles = this.selectedRoles;

        this.userRoleMappingService.addUserRoleMapping(userRoleMappingDto).subscribe(
          () => {
            this.router.navigate([environment.userRoleMapping.listurl]);
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to Add' });
          }
        );
      }
    }
  }
