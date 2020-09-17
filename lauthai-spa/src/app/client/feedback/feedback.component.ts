import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { IFeedback } from 'src/app/_models/interfaces/feedback.interface';
import { AuthService } from './../../_services/auth.service'

@Component({
  selector: 'app-client-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public feedbackList: IFeedback;
  feedbackForm: FormGroup;

  constructor(
    public authservice: AuthService,
    //  public route:Route

  ) {

  }

  ngOnInit(): void {
    this.initfeedbackForm();
    console.log(2);

  }
  initfeedbackForm(): void {
    this.feedbackForm = new FormGroup({
      name: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
  }
  SubmitFeedback() {
    // console.log( this.feedbackForm.controls.content.value);
    // this.authservice.feedback(this.feedbackList).subscribe(a=>{
    //         console.log(a);

    // })
    if (this.feedbackForm.valid) {
      const info = {
        name: this.feedbackForm.get('name').value,
        email: this.feedbackForm.get('email').value,
        content: this.feedbackForm.get('content').value,
      }
      //  console.log(info)
      this.authservice.feedback(info).subscribe(a=>{
              console.log(a);

      })

    }



  }
}
