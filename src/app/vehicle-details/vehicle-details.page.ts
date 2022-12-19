import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../interfaces/Vehicle';
import { DataCommunicatingService } from '../services/data-communicating.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage implements OnInit {
  vehicle!: Vehicle;

  constructor(private dataComSvc: DataCommunicatingService) { }

  ngOnInit() {
    this.vehicle = this.dataComSvc.getVehicleDetails();
  }

}
