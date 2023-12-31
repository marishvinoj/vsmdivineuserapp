
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRoleMapping } from '../models/userrolemapping';
import { UserRoleMappingService } from '../services/userrolemapping.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrl: './user-role-mapping.component.scss'
})

export class UserRoleMappingComponent implements OnInit {
  userRoleForm!: FormGroup;
  userIds: any[] = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ];
  roles: any[] = [
    { id: 1, name: 'Role 1' },
    { id: 2, name: 'Role 2' },
    { id: 3, name: 'Role 3' }
  ];

  constructor(private formBuilder: FormBuilder, 
    private userRoleMappingService: UserRoleMappingService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.userRoleForm = this.formBuilder.group({
      UserID: ['', Validators.required],
      Roles: [[], Validators.required]
    });
  }

  onSubmit(): void {
    // if (this.userRoleForm.valid) {
    //   console.log(this.userRoleForm.value);
    // }
    if (this.userRoleForm.valid) {
      const userRoleMapping: UserRoleMapping = this.userRoleForm.value;
      this.userRoleMappingService.addUserRoleMapping(userRoleMapping).subscribe(
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
