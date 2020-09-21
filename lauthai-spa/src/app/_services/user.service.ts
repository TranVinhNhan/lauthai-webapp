import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../_models/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.baseUrl + 'user/' + id);
  }

  updateInfo(info: IUser): Observable<any> {
    return this.http.put(this.baseUrl + 'user', info);
  }
}
