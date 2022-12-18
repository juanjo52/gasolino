import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [VehicleCardComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    VehicleCardComponent
  ]
})
export class ComponentsModule { }
