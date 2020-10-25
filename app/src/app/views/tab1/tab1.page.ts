import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CheckInData } from 'src/app/types/checkInData';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public checkInData: CheckInData;
  public showPopup = true;
  public toggleRisk = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.checkInData = {
        id: 'ID',
        time: '20:15',
        name: 'Cafe Standard'
      };
    }, 2000);
  }
  
}
