import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  consumes: any;

  constructor(private router: Router, private dataSvc: DataService) { }

  vehicleCreated$ = new Subject<any>();

  getVehicleCreated(): Observable<any> {
    return this.vehicleCreated$.asObservable();
  }

  createVehicle(vehicle: any) {
    //Anyadir al array de vehiculos del usuario

    vehicle.consume = this.calculateCarConsume(vehicle);

    this.vehicleCreated$.next(vehicle);

    this.router.navigate(['/home']);
  }

  calculateCarConsume(vehicle: any) {
    this.consumes = this.dataSvc.getCarConsumes();
    return this.consumes[vehicle.model];
  }
}
