import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUniversity } from '../_models/interfaces/university.interface';

@Injectable({
  providedIn: 'root'
})
export class UniversitySerivce {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<IUniversity[]> {
    return this.http.get<IUniversity[]>(this.baseUrl + 'university/all');
  }
}

