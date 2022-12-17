import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {



  constructor() { }

  vehicleCreated$ = new Subject<any>();

  getVehicleCreated(): Observable<any> {
    return this.vehicleCreated$.asObservable();
  }
}
