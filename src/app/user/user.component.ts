import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../shared/shared/environment/environment';
import { DatePipe } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  checked: boolean = false;
  
   DOB = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService, private route: ActivatedRoute,
    private messageService: MessageService, private router: Router,
    private datePipe: DatePipe) { 
    
    this.userForm = this.formBuilder.group({
      Id:[],
      Name: new FormControl('',Validators.required),
      Email: new FormControl(['', [Validators.required, Validators.email]]),
      Password: new FormControl(['', Validators.required]),
      Gender: new FormControl([true, Validators.required]),
      MobileNumber: new FormControl([0, Validators.required]),
      DOB: new FormControl([this.DOB, Validators.required]),
      Address: new FormControl(['', Validators.required]),
      Pincode: new FormControl([0, [Validators.pattern(/^\d{6}$/)]]),
      CreatedDate: new FormControl([]),
      CreatedBy:new FormControl([]),
      ModifiedDate:new FormControl([]),
      ModifiedBy:new FormControl([]),
      IsActive:new FormControl([])
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
    const date = new Date(); // Your date object
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedDate = this.datePipe.transform(response.DOB, 'yyyy-MM-dd HH:mm:ss', timezone) ?? '';
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
      debugger;
      userRole.DOB =  moment(this.userForm.controls["DOB"].value).format('YYYY-MM-DD');

     
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