import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRoleService } from '../services/userrole.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRole } from '../models/userrole';
import { environment } from '../shared/shared/environment/environment';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss'
})
export class UserRoleComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userRoleService: UserRoleService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      RoleName: ['', Validators.required],
      Id: [],
      CreatedDate: [],
      CreatedBy: [],
      ModifiedDate: [],
      ModifiedBy: [],
      IsActive: []
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id != 0)
    {
      var obj = this.userRoleService.getUserRoleById(id).subscribe(
        (response: any) => {
        // (response: ApiResponse<Patient>) => {
          // Handle the successful response here
          this.userForm.patchValue(response as UserRole);

          console.log(response);
        },
        (error: any) => {
          // Handle the error here
          console.error(error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
  
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const userRole = this.userForm.value;
    if(id != 0)
    {
      this.userRoleService.updateUserRole(userRole).subscribe(
        () => {
          // handle success
          this.router.navigate([environment.userRole.listurl]);
        },
        (error) => {
          // handle error
        }
      );
    }
    else
    {
      this.userRoleService.addUserRole(userRole).subscribe(
        () => {
          // handle success
          this.router.navigate([environment.userRole.listurl]);
        },
        (error) => {
          // handle error
        }
      );
    }
  }

  // other component methods
}
