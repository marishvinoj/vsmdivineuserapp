import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../shared/shared/environment/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  checked: boolean = false;
  DOB!: Date;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService, private route: ActivatedRoute,
    private messageService: MessageService, private router: Router
  ) { 
    this.userForm = this.formBuilder.group({
      Id:[],
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      Gender: [true, Validators.required],
      MobileNumber: [0, Validators.required],
      DOB: [this.DOB, Validators.required],
      Address: ['', Validators.required],
      Pincode: [0, [Validators.pattern(/^\d{6}$/)]],
      CreatedDate: [],
      CreatedBy:[],
      ModifiedDate:[],
      ModifiedBy:[],
      IsActive:[]
    });
  }

  ngOnInit(): void {
   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id != 0)
    {
      var obj = this.userService.getUserById(id).subscribe(
        (response: User) => {
        // (response: ApiResponse<Patient>) => {
          // Handle the successful response here
          this.userForm.patchValue(response as User);
          this.setFormValue(response);
          console.log(response);
        },
        (error: any) => {
          // Handle the error here
          console.error(error);
        }
      );
    }
  }

  setFormValue(response:any)
  {
    this.DOB = new Date(response.DOB);
    console.log(this.DOB)
    this.userForm.patchValue({
      Name: response.Name,
      Email: response.Email,
      Password: response.Password,
      Gender: response.Gender,
      MobileNumber: response.MobileNumber,
      DOB: this.DOB,
      Address: response.Address,
      Pincode: response.Pincode
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      
      const id = Number(this.route.snapshot.paramMap.get('id'));

      const userRole = this.userForm.value;
      if(id != 0)
      {
        this.userService.updateUser(user).subscribe(
          () => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User added successfully' });
            this.router.navigate([environment.user.listurl]);
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add user' });
          }
        );
    }
    else
    {
      this.userService.addUser(user).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User added successfully' });
        this.router.navigate([environment.user.listurl]);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add user' });
      });
    }
  }
}
}