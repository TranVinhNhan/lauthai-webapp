import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { IFeedback } from 'src/app/_models/interfaces/feedback.interface';
import { AuthService } from 'src/app/_services/auth.service';
import { FeedbackService } from './../../_services/feedback.service';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public feedbackList: IFeedback;
  feedbackForm: FormGroup;
  submitted = false;

  constructor(
    public feedbackService: FeedbackService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initfeedbackForm();
    this.submitted = false;
  }

  initfeedbackForm(): void {
    this.feedbackForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contactEmail: new FormControl('', Validators.required),
      feedbackTxt: new FormControl('', Validators.required),
    });
  }

  submitFeedback(): void {
    if (this.feedbackForm.valid) {
      let userId = null;
      if (this.authService.isAuthenticated()) {
        userId = this.authService.decodedToken.nameid;
      }
      const info = {
        name: this.feedbackForm.get('name').value,
        contactEmail: this.feedbackForm.get('contactEmail').value,
        feedbackTxt: this.feedbackForm.get('feedbackTxt').value,
        userId
      };
      this.feedbackService.feedback(info).subscribe(() => {
        this.submitted = true;
      }, error => { });
    }
  }
}
