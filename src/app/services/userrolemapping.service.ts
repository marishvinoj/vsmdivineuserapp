import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserRoleMapping } from '../models/userrolemapping';
import { environment } from '../shared/shared/environment/environment';
import { CommonService } from './common.service';
import { UserRoleMappingDto } from '../models/UserRoleMappingDto ';

@Injectable({
  providedIn: 'root'
})
export class UserRoleMappingService {
  url: string|undefined;

  constructor(private http: HttpClient, private commonService: CommonService) { }

  addUserRoleMapping(user: UserRoleMappingDto): Observable<any> {
    return this.commonService.add(user, `${environment.apiUrl}${'api/UserRoleMapping'}`);
  }

  updateUserRoleMapping(user: UserRoleMapping): Observable<any> {
    return this.commonService.update(user, `${environment.apiUrl}${'api/UserRoleMapping'}/${user.Id}`);
  }

  getUserRoleMappingById(Id: number): Observable<any> {
    return this.commonService.getById(`${environment.apiUrl}${'api/UserRoleMapping'}/${Id}`);
  }

  getAllUserRoleMapping(): Observable<UserRoleMapping[]> {
    return this.commonService.getAll(`${environment.apiUrl}${'api/UserRoleMapping'}`);
  }

  getAllUserRoleMappingByUserId(Id: number): Observable<any[]> {
    return this.commonService.getAll(`${environment.apiUrl}${'api/UserRoleMapping/GetaAllUserRoleMappingByUserId?UserId='}${Id}`);
  }
}