import { Injectable } from '@angular/core';
import { IProfile } from './../_models/interfaces/profile.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.baseUrl + 'profile/all');
  }
}
