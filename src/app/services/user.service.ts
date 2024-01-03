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
    return this.commonService.add(user, `${environment.apiUrl}${'api/Users'}`);
  }

  updateUser(user: User): Observable<any> {
    return this.commonService.update(user, `${environment.apiUrl}${'api/Users'}/${user.Id}`);
  }

  getUserById(Id: number): Observable<any> {
    return this.commonService.getById(`${environment.apiUrl}${'api/Users'}/${Id}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.commonService.getAll(`${environment.apiUrl}${'api/Users'}`);
  }

}