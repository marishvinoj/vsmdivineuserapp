import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, userHeaders } from '../../models/user';
import { environment } from 'src/app/shared/shared/environment/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User [] = []; // array to store user  s
  selectedUser : User  | null = null;
  displayDialog: boolean = false; // flag to show/hide dialog
  public headers:any |undefined;
  public cmHeaders = userHeaders;
  public updateurl: string = environment.user.updateurl;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      if(users != null)
        this.users = users;
      else
      this.users = [];
    });
  }
  
  public getSelectedItem(item: any): void {
    if (item == null) {
    } else {
    }
  }

  public add()
  {
    this.router.navigate([environment.user.adduser]);
  }

}