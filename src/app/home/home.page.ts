import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  newVehicleSusbscription! : Subscription;

  vehicleCreated$!: Observable<any>;


  myVehicles!: any[];

  constructor(private actSheetCtrl: ActionSheetController, private dataSvc: DataService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.myVehicles = this.dataSvc.getMyVehicles();
  }

  async openActSheetOpts() {
    const actSheet = await this.actSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Borrar',
          role: 'delete',
          data: {
            action: 'remove'
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

