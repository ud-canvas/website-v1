import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cards = [
    [
      {
        imageSrc: 'assets/cards/search.svg',
        title: 'Explore',
        body: 'I put myself in the place of your users to understand their needs.'
      },
      {
        imageSrc: 'assets/cards/frame.svg',
        title: 'Frame',
        body: 'We define together the framework of experience and will begin to formalize the user journey.'
      },
    ],
    [
      {
        imageSrc: 'assets/cards/bulb.svg',
        title: 'Imagine',
        body: 'We will generate several ideas to solve our problems.'
      },
      {
        imageSrc: 'assets/cards/tools.svg',
        title: 'Design',
        body: 'We will design and create an interactive design.'
      },
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
