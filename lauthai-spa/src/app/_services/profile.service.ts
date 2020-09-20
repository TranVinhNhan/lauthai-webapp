import { Injectable } from '@angular/core';
import { IProfile } from './../_models/interfaces/profile.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  baseUrl = environment.apiUrl;
  public List: IProfile[];
  constructor(private http: HttpClient) { }

  getProfiles(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.baseUrl + 'profile/all');
  }

  getProfileById(id: number): Observable<IProfile> {
    return this.http.get<IProfile>(this.baseUrl + 'profile/' + id);
  }

  addProfile(model: any): Observable<IProfile> {
    return this.http.post<IProfile>(this.baseUrl + 'profile', model);
  }

  updateProfile(id: number, model: any): Observable<any> {
    return this.http.put(this.baseUrl + 'profile/' + id, model);
  }

  deleteProfile(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'profile/' + id);
  }
}
