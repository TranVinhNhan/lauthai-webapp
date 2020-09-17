import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import { IFeedback } from '../_models/interfaces/feedback.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl = environment.apiUrl;
 

  constructor(
   public http: HttpClient
  ) { }

  feedback(feedback: any): Observable<any> {
    console.log(feedback)
    return this.http.post(this.baseUrl + 'feedback', feedback);
  }

}
