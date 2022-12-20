import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.page.html',
  styleUrls: ['./edit-profile-form.page.scss'],
})
export class EditProfileFormPage implements OnInit {
  user: any;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.user = this.userSvc.getUserData();
  }

  newUserData = new FormGroup({
    username: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });


  //envio del formulario
  submitForm() {
    this.userSvc.editUser(this.newUserData.value);
  }

}
