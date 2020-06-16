import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  name = '';
  emailAddress = '';
  message = '';

  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  ngOnInit(): void {
  }

  sendMail() {
    const url = new URL('mailto:umeshdaftari@gmail.com');
    url.searchParams.append('subject', 'CONNECT MESSAGE from: ' + this.name);
    url.searchParams.append('body', this.message);
    console.log(url.toString());

    window.location.href = url.toString();
  }

}
