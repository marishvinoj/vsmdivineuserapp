import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, userHeaders } from '../models/user';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../shared/shared/environment/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

    constructor() {

    }

    public getUTCTime():Date
    {
        const now = new Date();
        const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        return utcTime;
    }
}