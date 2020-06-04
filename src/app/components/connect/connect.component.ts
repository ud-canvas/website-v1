import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  name = '';
  emailAddress = '';
  message = '';

  constructor() { }

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
