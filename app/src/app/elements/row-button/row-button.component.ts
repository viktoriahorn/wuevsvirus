import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-row-button',
  templateUrl: './row-button.component.html',
  styleUrls: ['./row-button.component.scss'],
})
export class RowButtonComponent implements OnInit {
  @Output() public callback: EventEmitter<void> = new EventEmitter();
  @Input() public label: string;

  constructor() { }

  ngOnInit() {}

}
