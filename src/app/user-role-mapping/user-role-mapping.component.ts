
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { UserRoleMappingService } from '../services/userrolemapping.service';
  import { UserRoleService } from '../services/userrole.service';
  import { MessageService } from 'primeng/api';
  import { UserRoleMappingDto } from '../models/UserRoleMappingDto ';
  import { UserRole } from '../models/userrole';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

  @Component({
    selector: 'app-user-role-mapping',
    templateUrl: './user-role-mapping.component.html',
    styleUrl: './user-role-mapping.component.scss'
  })

  export class UserRoleMappingComponent implements OnInit {
    userRoleForm!: FormGroup;
    users: any[] = [
      // { id: 1, name: 'User 1' },
      // { id: 2, name: 'User 2' },
      // { id: 3, name: 'User 3' }
    ];
    roles: any[] = [
      // { id: 1, name: 'Role 1' },
      // { id: 2, name: 'Role 2' },
      // { id: 3, name: 'Role 3' }
    ];
    selectedRoles: any[] = [];
    public selectedUser!:any;
    userRoles: any[] = [];

    constructor(private formBuilder: FormBuilder, 
      private userRoleMappingService: UserRoleMappingService,
      private messageService: MessageService, private userRoleService: UserRoleService,
      private userService: UserService,private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.userRoleForm = this.formBuilder.group({
        UserID: [this.selectedUser, Validators.required],
        selectedRoles: [this.selectedRoles, Validators.nullValidator],
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
        userRoleMappingDto.userID = userRoleMapping?.UserID?.id;
        userRoleMappingDto.roles = userRoleMapping?.selectedRoles;

        this.userRoleMappingService.addUserRoleMapping(userRoleMappingDto).subscribe(
          () => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User added successfully' });
            this.userRoleForm.reset();
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add user' });
          }
        );
      }
    }
  }
