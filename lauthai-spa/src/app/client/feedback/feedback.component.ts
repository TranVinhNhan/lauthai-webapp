import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { IFeedback } from 'src/app/_models/interfaces/feedback.interface';
import { FeedbackService } from './../../_services/feedback.service'

@Component({
  selector: 'app-client-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public feedbackList: IFeedback;
  feedbackForm: FormGroup;

  constructor(
    public feedbackService: FeedbackService,
    //  public route:Route

  ) {

  }

  ngOnInit(): void {
    this.initfeedbackForm();

  }
  initfeedbackForm(): void {
    this.feedbackForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      ContactEmail: new FormControl('', Validators.required),
      FeedbackTxt: new FormControl('', Validators.required),
    })
  }
  SubmitFeedback() {
    // console.log( this.feedbackForm.controls.content.value);
    // this.authservice.feedback(this.feedbackList).subscribe(a=>{
    //         console.log(a);

    // })
    if (this.feedbackForm.valid) {
      const info = {
        Name: this.feedbackForm.get('Name').value,
        ContactEmail: this.feedbackForm.get('ContactEmail').value,
        FeedbackTxt: this.feedbackForm.get('FeedbackTxt').value,
      }
      //  console.log(info)
      this.feedbackService.feedback(info).subscribe(a=>{
              console.log(a);

      })

    }



  }
}
