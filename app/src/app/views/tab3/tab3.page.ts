import { Component, OnInit } from '@angular/core';
import { EventData } from 'src/app/types/eventData';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public createMode = false;
  public events: Array<EventData>;

  constructor() { }

  ngOnInit() {
    this.events = [{title: 'Hackathon', date: 'Samstag, 12:00 Uhr'}];
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
  }

}
