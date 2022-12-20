import { Component, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-do-action-toast',
  template: '',
  styles: [],
})
export class DoActionToastComponent {

  constructor(private toastCtrl: ToastController) { }

  async createToast(message: string, time: number, color: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: time,
      position: 'bottom',
      color: color
    });

    await toast.present();
  }
}
