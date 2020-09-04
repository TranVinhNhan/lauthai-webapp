import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  public BannerImage:string="https://luatsu-vn.com/wp-content/uploads/2018/07/M%E1%BB%A9c-gi%E1%BA%A3m-gi%C3%A1-t%E1%BB%91i-%C4%91a-%C4%91%E1%BB%91i-v%E1%BB%9Bi-h%C3%A0ng-h%C3%B3a-d%E1%BB%8Bch-v%E1%BB%A5-%C4%91%C6%B0%E1%BB%A3c-khuy%E1%BA%BFn-m%E1%BA%A1i-l%C3%A0-bao-nhi%C3%AAu-internet-1280x720.jpg";
  ngOnInit(): void {
  }

}
