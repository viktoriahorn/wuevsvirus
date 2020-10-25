import { BLE } from '@ionic-native/ble/ngx';
import { Console } from 'console';

export class BluetoothService {  
  constructor(private ble: BLE) { 
    var count = 0; 
    var msSecondsDelay = 4000;  //Zeit sollte noch kleiner Werden
    var minSignalStrenght = -140; //Hinweis, RSSI-Wert variiert von Gerätetyp, ein Android Phone mit Wert 80 muss nicht gleich weit entfernt sein, wie ein anderes mit dem selben Wert -> Bessere Methode finden
    //innere und äußere UUID im Idealfall 128 bit, der täglich neu vergeben wird und nur letzte Ziffer unterschiedlich f.e. innere=1, äußerer =0; 
    //Algorithmus matched die beiden UUIDs ob sie bis auf die letzte Ziffer gleich sind, wenn ja, interessiert danach nur die letzte Ziffer um die Richtung zu bestimmen
    //Zum Testen konnten UUIDs der Beacons so nicht aufbereitet werden, daher die komplette 16 bit UUID
    var innerUUID = "fd6f";
    var outerUUID = "3802";
    var outerRSSI = null;
    var innerRSSI = null;
    var lastPosition = null; //out = 1, in=0

    Scan();

  function Scan(){
    console.log("---------- Signalstärke - äußerer Beacon: "+outerRSSI+" - innerer Beacon: "+innerRSSI + " -------------");
    
    
    if (outerRSSI != null && innerRSSI !=null){
      if(outerRSSI > innerRSSI){
        console.log("Standpunkt vor dem Lokal");
        if(lastPosition==0){
          console.log("Lokal verlassen");
          //ToDo: Apeichern des Lokal-Identifiers (täglicher Schlüssel verrechnet mit Uhrzeit)
        }
        lastPosition=1;
      }
      else{
        console.log("Standpunkt in dem Lokal");
        if(lastPosition==1){
          console.log("Lokal betreten");
          //ToDo: Apeichern des Lokal-Identifiers (täglicher Schlüssel verrechnet mit Uhrzeit)
        }
        lastPosition=0;
      }
    }
    else{
      lastPosition = null;
    }
    console.log("Scan for Devices: "+count);
    ble.startScan([]).subscribe(device => {
      //console.log("BT Device: " + JSON.stringify(device)); 
      try{
        if(device["rssi"] > minSignalStrenght){
          let uuid = get16bitUUID(device);
          //console.log("BT-Gerät mit ID: " + device["id"] + " befindet sich in der Nähe [RSSI: "+device["rssi"]+", UUID: "+uuid+"]");
          if(uuid == outerUUID)
          {
            outerRSSI = device["rssi"];
          }
          else if(uuid == innerUUID)
          {
            innerRSSI = device["rssi"];
          }
          /*(if(uuid == outerUUID)
          {
            console.log("Lokal in der Nähe");
          }*/
          //TODO: In Datenbank eintragen
        }
      }
      catch{}

    });
    outerRSSI = null;
    innerRSSI = null;
    count ++;
    setTimeout(Scan,msSecondsDelay);
  }

  function get16bitUUID(device) {
    var serviceData;
    var uuid16 = '';

    try{
        var SERVICE_DATA_KEY = '0x16';
        var advertisingData = parseAdvertisingData(device.advertising);
        serviceData = advertisingData[SERVICE_DATA_KEY];
        if (serviceData) {
            // first 2 bytes are the 16 bit UUID
            var uuidBytes = new Uint16Array(serviceData.slice(0,2));
            uuid16 = uuidBytes[0].toString(16); // hex string
            //console.log("Found service data for " + uuid16);
        }
        else{
          //console.log("No Service Data");
        }
      }
      catch (e){
        //console.log("Error: " + e);
      }
    return uuid16;
  }

  function parseAdvertisingData(buffer) {
    var length, type, data, i = 0, advertisementData = {};
    var bytes = new Uint8Array(buffer);

    while (length !== 0) {

        length = bytes[i] & 0xFF;
        i++;

        // decode type constants from https://www.bluetooth.org/en-us/specification/assigned-numbers/generic-access-profile
        type = bytes[i] & 0xFF;
        i++;

        data = bytes.slice(i, i + length - 1).buffer; // length includes type byte, but not length byte
        i += length - 2;  // move to end of data
        i++;

        advertisementData[asHexString(type)] = data;
    }

    return advertisementData;
  }
  // i must be < 256
  function asHexString(i) {
    var hex;

    hex = i.toString(16);

    // zero padding
    if (hex.length === 1) {
        hex = "0" + hex;
    }

    return "0x" + hex;
  }
  } 
}