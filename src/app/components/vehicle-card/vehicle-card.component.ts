import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Vehicle } from 'src/app/interfaces/Vehicle';
import { DataCommunicatingService } from 'src/app/services/data-communicating.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
})
export class VehicleCardComponent implements OnInit {
  @Input() vehicle!: Vehicle;

  constructor(private actSheetCtrl: ActionSheetController, private router: Router, private vehicleSvc: VehicleService, private dataComSvc: DataCommunicatingService) { }

  ngOnInit() {}

  goToDetailsPage() {
    this.router.navigate(['car/me/details/', this.vehicle.name]);
    this.dataComSvc.setVehicleDetails(this.vehicle);
  }

  async openActSheetOpts() {
    const actSheet = await this.actSheetCtrl.create({
      header: 'Más opciones',
      buttons: [
        {
          text: 'Ver detalles',
          role: 'details',
          handler: () => {
            this.goToDetailsPage();
          }
        },
        {
          text: 'Borrar',
          role: 'delete',
          handler: () => {
            this.vehicleSvc.deleteVehicle(this.vehicle.name);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }
      ]
    });

    await actSheet.present();
  }
}
