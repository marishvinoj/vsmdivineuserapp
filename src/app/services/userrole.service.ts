import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserRole } from '../models/userrole';
import { environment } from '../shared/shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  url: string = 'api';
  private apiUrl = 'api/users';

  constructor(private http: HttpClient) { }

  addUserRole(user: UserRole): Observable<any> {
    debugger;
    return this.http.post<any>(`${environment.apiUrl}${this.url}${'/UserRole'}`, user);
  }

  updateUserRole(user: UserRole): Observable<any> {
    debugger;
    return this.http.put<any>(`${environment.apiUrl}${this.url}{'/UserRole'}/${user.Id}`, user);
  }

  getAllUserRole(): Observable<UserRole[]> {
    debugger;
    this.url= environment.apiUrl + 'api/UserRole';
    return this.http.get<UserRole[]>(this.url);
  }

}