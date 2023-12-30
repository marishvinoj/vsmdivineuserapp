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
    user.CreatedDate = this.commonService.getUTCTime();
    user.IsActive = true;
    return this.http.post<any>(`${environment.apiUrl}${'api/UserRole'}`, user);
  }

  updateUserRole(user: UserRole): Observable<any> {
    user.ModifiedDate = this.commonService.getUTCTime();
    return this.http.put<any>(`${environment.apiUrl}${'api/UserRole'}/${user.Id}`, user);
  }

  getUserRoleById(Id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${'api/UserRole'}/${Id}`);
  }

  getAllUserRole(): Observable<UserRole[]> {
    this.url= environment.apiUrl + 'api/UserRole';
    return this.http.get<UserRole[]>(this.url);
  }

}