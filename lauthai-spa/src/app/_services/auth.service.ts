import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ILogin } from '../_models/interfaces/login.interface';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl = environment.apiUrl;
  decodedToken: any = {};

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }

  login(account: ILogin): Observable<void> {
    return this.http.post(this.baseUrl + 'auth/login', account)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      }));
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
  }
}
