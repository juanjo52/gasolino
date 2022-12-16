import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVehicleFormPage } from './new-vehicle-form.page';

const routes: Routes = [
  {
    path: '',
    component: NewVehicleFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewVehicleFormPageRoutingModule {}
