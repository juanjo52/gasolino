import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicatingService {
  vehicle!: Vehicle;

  constructor() { }

  setVehicleDetails(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  getVehicleDetails() {
    return this.vehicle;
  }
}
