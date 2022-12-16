import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private actSheetCtrl: ActionSheetController) { }

  ngOnInit() {
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
