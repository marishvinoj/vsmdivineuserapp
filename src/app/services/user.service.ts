import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, userHeaders } from '../models/user';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../shared/shared/environment/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string|undefined;
  constructor(private messageService: MessageService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, private commonService: CommonService) { 
    console.log("Current API URL:", environment.apiUrl);}
    

  addUser(user: User): Observable<any> {
    debugger;
    user.CreatedDate = this.commonService.getUTCTime();
    user.IsActive = true;
    return this.http.post<User>(`${environment.apiUrl}${'api/Users'}`, user);
  }

  updateUser(user: User): Observable<any> {
    debugger;
    user.ModifiedDate = this.commonService.getUTCTime();
    return this.http.put<User>(`${environment.apiUrl}${'api/Users'}/${user.Id}`, user);
  }

  getAllUsers(): Observable<User[]> {
    debugger;
    // return this.http.get<any[]>(this.url);
    return this.http.get<any>(`${environment.apiUrl}${'api/Users'}`);
  }

}