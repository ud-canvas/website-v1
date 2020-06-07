import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

interface Project {
  title: string;
  longTitle: string;
  imageLink: string;
  videoId: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  grabProjectsFrom = 'https://raw.githubusercontent.com/ud-canvas/website-v1/data/projects.json';
  projects: Project[] = [];

  longTitle = '';
  videoUrl: SafeResourceUrl;
  isSpecificProjectSelected = false;

  constructor(private sanitizer: DomSanitizer,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.grabProjectsFrom)
      .subscribe((response: { projects: Project[] }) => {
        this.projects = response.projects;
      });
  }

  onTakeALookClick(longTitle: string, videoId: string): void {
    this.longTitle = longTitle;
    this.videoUrl = this.sanitizer
      .bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + videoId
      );
    this.isSpecificProjectSelected = true;
  }

  closeModal(): void {
    this.isSpecificProjectSelected = false;
  }

}
