import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resumeUrl = environment.resume;
  dribbleUrl = environment.dribbleLink;
  youtubeUrl = environment.youtubeLink;
  projects = [
    {
      title: 'Title 1',
      url: 'https://example.com'
    },
    {
      title: 'Title 2',
      url: 'https://example.com'
    },
    {
      title: 'Title 3',
      url: 'https://example.com'
    },
    {
      title: 'Title 4',
      url: 'https://example.com'
    },
  ];
  isMoreInfoHovered = false;

  hamburgerMenuWidth = '0';

  constructor() { }

  ngOnInit(): void {
  }

  openHamburger() {
    this.hamburgerMenuWidth = '100%';
  }

  closeHamburger() {
    this.hamburgerMenuWidth = '0';
  }

  moreInfoIsHovered() {
    this.isMoreInfoHovered = true;
  }

  moreInfoIsNotHovered() {
    this.isMoreInfoHovered = false;
  }

}
