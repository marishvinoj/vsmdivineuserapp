import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/users';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.Id}`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

}