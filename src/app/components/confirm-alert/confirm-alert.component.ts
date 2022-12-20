import { Component, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { VehicleService } from 'src/app/services/vehicle.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-confirm-alert',
  template: '',
  styles: [],
})
export class ConfirmAlertComponent {

  constructor(private alertCtrl: AlertController, private vehicleSvc: VehicleService) { }

  async createConfirmAlert(message: string, uniqueName: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: message,
      buttons: [
        {
          text: 'Sí',
          role: 'delete',
          handler: () => {
            this.vehicleSvc.deleteVehicle(uniqueName);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }
}
