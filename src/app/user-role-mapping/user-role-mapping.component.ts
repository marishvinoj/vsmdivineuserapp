
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRoleForm = this.formBuilder.group({
      UserId: ['', Validators.required],
      roles: [[], Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userRoleForm.valid) {
      console.log(this.userRoleForm.value);
    }
  }
}
