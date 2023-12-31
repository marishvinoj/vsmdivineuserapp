import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  
  constructor(private messageService: MessageService,
  private http: HttpClient) {

  }
  
  private getUTCTime():Date
  {
      const now = new Date();
      const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      return utcTime;
  }  

  public add(user: any, url:string): Observable<any> {
    debugger;
    user.Id = 0;
    user.CreatedDate = this.getUTCTime();
    user.IsActive = true;
    return this.http.post<any>(`${url}`, user);
  }
  
  public update(user: any, url:string): Observable<any> {
    debugger;
    user.ModifiedDate = this.getUTCTime();
    return this.http.put<any>(`${url}`, user);
  }
  
  getById(url:string): Observable<any> {
    return this.http.get<any>(`${url}`);
  }
  
  public getAll(url:string): Observable<any[]> {
    return this.http.get<any>(`${url}`);
  }
  
}