import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent implements OnInit {
  @Input() public title: string;
  @Input() public date: string;
  @Input() public index: number;
  @Output() public delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  
}
