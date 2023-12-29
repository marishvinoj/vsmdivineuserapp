import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRoleService } from '../services/userrole.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss'
})
export class UserRoleComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userRoleService: UserRoleService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      RoleName: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
  
    const userRole = this.userForm.value;
    this.userRoleService.addUserRole(userRole).subscribe(
      () => {
        // handle success
      },
      (error) => {
        // handle error
      }
    );
  }

  // other component methods
}
