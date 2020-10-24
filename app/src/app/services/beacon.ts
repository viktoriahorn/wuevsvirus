import { IBeacon } from '@ionic-native/ibeacon/ngx';


export class BeaconService {

  constructor(
    private iBeacon: IBeacon
  ) { }

  public initBeacon(): void {
    // see https://ionicframework.com/docs/native/ibeacon
    this.iBeacon.requestAlwaysAuthorization();
    let delegate = this.iBeacon.Delegate();

    delegate.didRangeBeaconsInRegion()
      .subscribe(
        data => console.log('didRangeBeaconsInRegion: ', data),
        error => console.error()
      );
    delegate.didStartMonitoringForRegion()
      .subscribe(
        data => console.log('didStartMonitoringForRegion: ', data),
        error => console.error()
      );
    delegate.didEnterRegion()
      .subscribe(
        data => {
          console.log('didEnterRegion: ', data);
        }
      );

    let beaconRegion = this.iBeacon.BeaconRegion('deskBeacon', 'F7826DA6-ASDF-ASDF-8024-BC5B71E0893E');

    this.iBeacon.startMonitoringForRegion(beaconRegion)
      .then(
        () => console.log('Native layer received the request to monitoring'),
        error => console.error('Native layer failed to begin monitoring: ', error)
      );
  }

}