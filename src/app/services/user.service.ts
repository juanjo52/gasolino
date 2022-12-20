import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DoActionToastComponent } from '../components/do-action-toast/do-action-toast.component';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor(private router: Router, private actionToast: DoActionToastComponent, private dataSvc: DataService) {
    if (!this.user) {
      this.setUserData(this.dataSvc.getMyProfile());
    }
  }

  getUserData() {
    return this.user;
  }

  setUserData(user: any) {
    this.user = user;
  }

  editUser(user: any) {
    this.setUserData(user);
    this.router.navigate(['/home']);
    this.actionToast.createToast('Usuario editado correctamente', 2000, 'tertiary');
  }
}
