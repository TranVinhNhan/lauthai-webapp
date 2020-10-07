import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  public BannerImage = 'https://dummyimage.com/1280x300/666666/fff';
  ngOnInit(): void {
  }

}
