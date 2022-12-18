import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;

  constructor(private dataSvc: DataService, public router: Router) {
  }

  ngOnInit() {
    this.getMyProfile();
  }

  getMyProfile() {
    this.user = this.dataSvc.getMyProfile();
  }

  editProfile(){
    this.router.navigateByUrl('/editar-user');
  }

}
