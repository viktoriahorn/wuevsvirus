import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { EventData } from 'src/app/types/eventData';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public createMode = false;
  public events: Array<EventData>;
  public formEvent: EventData = {title: '', date: '25.10.2020'};

  constructor() { }

  ngOnInit() {
    this.events = [{title: 'Hackathon', date: 'Samstag, 12:00 Uhr'}];
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
  }

  addEvent() {
    this.events.push({title: this.formEvent.title, date: this.formEvent.date});
    this.formEvent.title = '';
    this.createMode = !this.createMode;
  }

}
