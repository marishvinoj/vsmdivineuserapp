import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../shared/shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/users';
  url: string|undefined;

  constructor(private messageService: MessageService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { 
    console.log("Current API URL:", environment.apiUrl);}
    

  addUser(user: User): Observable<any> {
    this.url= environment.apiUrl + 'api/users';
    return this.http.post<any>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<any> {
    this.url= environment.apiUrl + 'api/users';
    return this.http.put<any>(`${this.apiUrl}/${user.Id}`, user);
  }

  getAllUsers(): Observable<User[]> {
    this.url= environment.apiUrl + 'api/Users';
    console.log('test');
    console.log('https://localhost:7138/api/Users');
    console.log(this.url);

    return this.http.get<any[]>(this.url);
  }

}