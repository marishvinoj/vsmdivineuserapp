import { Component, OnInit } from '@angular/core';
import { userHeaders } from '../../models/user';
import { environment } from 'src/app/shared/shared/environment/environment';
import { Router } from '@angular/router';
import { UserRoleMapping } from 'src/app/models/userrolemapping';
import { UserRoleMappingService } from 'src/app/services/userrolemapping.service';

@Component({
  selector: 'app-user-role-mapping-list',
  templateUrl: './user-role-mapping-list.component.html',
  styleUrl: './user-role-mapping-list.component.scss'
})
export class UserRoleMappingListComponent implements OnInit {
  userRoleMappings: UserRoleMapping [] = []; // array to store user  s
  selectedUser : UserRoleMapping  | null = null;
  displayDialog: boolean = false; // flag to show/hide dialog
  public headers:any |undefined;
  public cmHeaders = userHeaders;
  public updateurl: string = environment.userRoleMapping.updateurl;
  
  constructor(private userService: UserRoleMappingService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUserRoleMapping().subscribe(users => {
      if(users != null)
        this.userRoleMappings = users;
      else
      this.userRoleMappings = [];
    });
  }
  
  public getSelectedItem(item: any): void {
    if (item == null) {
    } else {
    }
  }

  public add()
  {
    this.router.navigate([environment.userRoleMapping.addurl]);
  }

}
