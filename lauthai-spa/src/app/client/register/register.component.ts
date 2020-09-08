import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hidePwd = true;
  hideCfmPwd = true;
  constructor() { }

  ngOnInit(): void {
  }

}
