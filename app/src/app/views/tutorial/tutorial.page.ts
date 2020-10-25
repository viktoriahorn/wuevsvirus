import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  next() {
    this.slides.slideNext();
  }

  finish() {
    this.router.navigateByUrl('/tabs');
  }

}
