import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.page.html',
  styleUrls: ['./edit-profile-form.page.scss'],
})
export class EditProfileFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newUserData = new FormGroup({
    username: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });


  //envio del formulario
  submitForm() {
    console.log(this.newUserData.value);
  }

}
