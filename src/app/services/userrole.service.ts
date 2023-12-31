import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserRole } from '../models/userrole';
import { environment } from '../shared/shared/environment/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  url: string|undefined;

  constructor(private http: HttpClient, private commonService: CommonService) { }

  addUserRole(user: UserRole): Observable<any> {
    return this.commonService.add(user, `${environment.apiUrl}${'api/UserRole'}`);
  }

  updateUserRole(user: UserRole): Observable<any> {
    return this.commonService.update(user, `${environment.apiUrl}${'api/UserRole'}/${user.Id}`);
  }

  getUserRoleById(Id: number): Observable<any> {
    return this.commonService.getById(`${environment.apiUrl}${'api/UserRole'}/${Id}`);
  }

  getAllUserRole(): Observable<UserRole[]> {
    return this.commonService.getAll(`${environment.apiUrl}${'api/UserRole'}`);
  }

}