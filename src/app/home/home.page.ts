import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DoActionToastComponent } from '../components/do-action-toast/do-action-toast.component';
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

  constructor(private dataSvc: DataService, private vehicleSvc: VehicleService, private actionToast: DoActionToastComponent) { }

  ngOnInit() {
    this.getVehicles();

    this.vehicleCreated$ = this.vehicleSvc.getVehicleCreated();
    this.vehicleDeleted$ = this.vehicleSvc.getVehicleDeleted();
    this.newVehicleSubscription = this.vehicleCreated$.subscribe(
      resp => {
        this.myVehicles.push(resp);
        this.actionToast.createToast('El vehículo se añadió correctamente', 2000, 'tertiary');
      }
    );
    this.vehicleDeleted$.subscribe(
      name => {
        this.myVehicles = this.myVehicles.filter(v => name != v.name);
        this.actionToast.createToast('El vehículo se eliminó correctamente', 2000, 'light');
      }
    );
  }

  getVehicles(): void {
    this.myVehicles = this.dataSvc.getMyVehicles();
  }
}

