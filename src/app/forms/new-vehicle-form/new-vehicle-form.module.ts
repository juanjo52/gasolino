import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewVehicleFormPageRoutingModule } from './new-vehicle-form-routing.module';

import { NewVehicleFormPage } from './new-vehicle-form.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewVehicleFormPageRoutingModule
  ],
  declarations: [NewVehicleFormPage]
})
export class NewVehicleFormPageModule {}
