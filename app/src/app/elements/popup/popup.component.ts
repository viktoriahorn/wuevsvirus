import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() public title: string;
  @Input() public date: string;
  @Output() public close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
