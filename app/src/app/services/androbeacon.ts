import { Platform } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';
import { Component } from '@angular/core';

export class AndroBeaconService {  
  constructor(private platform: Platform) {     
    console.log("testprint3");
    this.platform.ready().then(()=>
      evothings.eddystone.startScan(
        function(beacon)
        {
          console.log('Found beacon: ' + beacon.url);
        },
        function(error)
        {
          console.log('Scan error: ' + error);
        }))
        ;
  } 
}