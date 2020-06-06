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
  isProjectsHovered = false;
  isMoreInfoHovered = false;


  constructor() { }

  ngOnInit(): void {
  }

  getMaxHeight() {
    return this.isProjectsHovered ? 30 * this.projects.length + 15 + 'px' : '0';
  }

  projectsIsHovered() {
    this.isProjectsHovered = true;
  }

  projectsIsNotHovered() {
    this.isProjectsHovered = false;
  }

  moreInfoIsHovered() {
    this.isMoreInfoHovered = true;
  }

  moreInfoIsNotHovered() {
    this.isMoreInfoHovered = false;
  }

}
