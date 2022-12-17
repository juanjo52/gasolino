import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMyVehicles(): any[] {
    return [
      {
        name: 'Vehiculo 1',
        consume: 5.5
      },
      {
        name: 'Vehiculo 2',
        consume: 6.1
      }
    ];
  }

  getMyProfile() {
    return {
      image: '',
      nickname: 'AhorroTotal',
      name: 'Juanjo',
      registerDate: '13/12/2022'
    };
  }

  getRankByModel() {
    return [
      {

      }
    ];
  }

  getRankByConsume() {

  }
}
