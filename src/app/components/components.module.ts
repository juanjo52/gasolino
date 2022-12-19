import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { IonicModule } from '@ionic/angular';
import { WeeklyConsumeComponent } from './weekly-consume/weekly-consume.component';


@NgModule({
  declarations: [VehicleCardComponent, WeeklyConsumeComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    VehicleCardComponent,
    WeeklyConsumeComponent
  ]
})
export class ComponentsModule { }
