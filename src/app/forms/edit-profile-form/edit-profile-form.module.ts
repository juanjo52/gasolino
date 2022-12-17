import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileFormPageRoutingModule } from './edit-profile-form-routing.module';

import { EditProfileFormPage } from './edit-profile-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileFormPageRoutingModule
  ],
  declarations: [EditProfileFormPage]
})
export class EditProfileFormPageModule {}
