import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  screenWidth: number;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

}
