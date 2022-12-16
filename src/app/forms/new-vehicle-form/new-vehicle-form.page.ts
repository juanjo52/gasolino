import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-new-vehicle-form',
  templateUrl: './new-vehicle-form.page.html',
  styleUrls: ['./new-vehicle-form.page.scss'],
})
export class NewVehicleFormPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  newVehicle = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required)
  });

  //envio del formulario
  submitForm() {
    console.log(this.newVehicle.value);
  }
}
