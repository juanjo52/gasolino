import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMyVehicles(): Vehicle[] {
    return [
      {
        name: 'Vehiculo 1',
        model: 'Opel Corsa',
        consume: 5.5
      },
      {
        name: 'Vehiculo 2',
        model: 'Peugeot 606',
        consume: 6.4
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

  getCarConsumes() {
    return {
      'Opel Corsa': 5.5,
      'Citröen c3': 6.1,
      'Peugeot 606': 6.4
    };
  }
}
