import { Component, OnInit } from '@angular/core';

enum Risk {
  HIGH = 'red',
  MEDIUM = 'yellow',
  LOW = 'green'
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public risk: Risk;

  constructor() {}

  public get Risk() { return Risk; }

  ngOnInit(): void {
    this.risk = Risk.LOW;
    console.log(this.risk);
  }

}
