import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Vehicle } from '../interfaces/Vehicle';
import { DataService } from '../services/data.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  newVehicleSubscription! : Subscription;
  vehicleCreated$!: Observable<Vehicle>;
  vehicleDeleted$!: Observable<string>;

  myVehicles!: Vehicle[];

  constructor(private dataSvc: DataService, private vehicleSvc: VehicleService) { }

  ngOnInit() {
    this.getVehicles();

    this.vehicleCreated$ = this.vehicleSvc.getVehicleCreated();
    this.vehicleDeleted$ = this.vehicleSvc.getVehicleDeleted();
    this.newVehicleSubscription = this.vehicleCreated$.subscribe(
      resp => {
        this.myVehicles.push(resp);
      }
    );
    this.vehicleDeleted$.subscribe(
      name => {
        this.myVehicles = this.myVehicles.filter(v => name != v.name);
      }
    );
  }

  getVehicles(): void {
    this.myVehicles = this.dataSvc.getMyVehicles();
  }

  borrarVehiculo(name: string) {
    this.vehicleSvc.deleteVehicle(name);
  }
}

