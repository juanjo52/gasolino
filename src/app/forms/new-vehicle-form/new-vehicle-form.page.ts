import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';



@Component({
  selector: 'app-new-vehicle-form',
  templateUrl: './new-vehicle-form.page.html',
  styleUrls: ['./new-vehicle-form.page.scss'],
})
export class NewVehicleFormPage implements OnInit {

  constructor(private vehicleSvc: VehicleService) { }

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
