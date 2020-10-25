import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Output() public leave: EventEmitter<void> = new EventEmitter();
  @Input() public title: string;
  @Input() public date: string;
  constructor() { }

  ngOnInit() {}

}
