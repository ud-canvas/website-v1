import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-nav-btn',
  templateUrl: './route-nav-btn.component.html',
  styleUrls: ['./route-nav-btn.component.scss']
})
export class RouteNavBtnComponent implements OnInit {
  @Input() prevLink: string = null;
  @Input() nextLink: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
