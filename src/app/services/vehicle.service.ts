import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Vehicle } from '../interfaces/Vehicle';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  consumes: any;

  constructor(private router: Router, private dataSvc: DataService) { }

  vehicleCreated$ = new Subject<Vehicle>();
  vehicleDeleted$ = new Subject<string>();

  getVehicleCreated(): Observable<Vehicle> {
    return this.vehicleCreated$.asObservable();
  }

  getVehicleDeleted(): Observable<string> {
    return this.vehicleDeleted$.asObservable();
  }

  createVehicle(vehicle: Vehicle) {
    //Anyadir al array de vehiculos del usuario

    vehicle.consume = this.calculateCarConsume(vehicle);
    this.vehicleCreated$.next(vehicle);
    this.router.navigate(['/home']);
  }

  deleteVehicle(uniqueName: string) {
    if (uniqueName) {
      this.vehicleDeleted$.next(uniqueName);
      this.router.navigate(['/home']);
    }
  }

  calculateCarConsume(vehicle: Vehicle) {
    this.consumes = this.dataSvc.getCarConsumes();
    return this.consumes[vehicle.model];
  }
}
