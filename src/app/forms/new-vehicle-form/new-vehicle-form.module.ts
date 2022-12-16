import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewVehicleFormPageRoutingModule } from './new-vehicle-form-routing.module';

import { NewVehicleFormPage } from './new-vehicle-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewVehicleFormPageRoutingModule
  ],
  declarations: [NewVehicleFormPage]
})
export class NewVehicleFormPageModule {}
