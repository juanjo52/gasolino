import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private imgsUrl = '../assets/car-imgs/';
  private avatarsUrl = '../assets/avatar-imgs/';

  constructor() { }

  getMyVehicles(): Vehicle[] {
    return [
      {
        name: 'Vehiculo 1',
        model: 'Opel Corsa',
        consume: 5.5,
        image: this.imgsUrl+'opel-corsa.jpg'
      },
      {
        name: 'Vehiculo 2',
        model: 'Peugeot 606',
        consume: 6.4,
        image: this.imgsUrl+'peugeot-606.JPG'
      }
    ];
  }

  getMyProfile() {
    return {
      image: this.avatarsUrl+'lobo.jpg',
      nickname: 'AhorroTotal',
      name: 'Juanjo',
      registerDate: '13/12/2022'
    };
  }

  getRankByModel() {
    return [
      { nombre: "Ford" },
      { nombre: "Opel" },
      { nombre: "Peugeot" },
      { nombre: "Citröen" },
      { nombre: "Volkswagen" },
      { nombre: "Seat" },
      { nombre: "Dacia" },
      { nombre: "Mercedes" },
      { nombre: "BMW" }
    ];
  }

  getRankByConsume() {
    return [
      {
        nombre: "Fernando",
        consumo: this.getCarConsumes()['Ford Focus']
      },
      {
        nombre: "Juanjo",
        consumo: this.getCarConsumes()['Citröen c3']
      },
      {
        nombre: "Mario",
        consumo: this.getCarConsumes()['Peugeot 606']
      },
      {
        nombre: "Alejandro",
        consumo: this.getCarConsumes()['Opel Corsa']
      },
      {
        nombre: "Pedro",
        consumo: this.getCarConsumes()['Dacia Sandero']
      },
      {
        nombre: "Paco",
        consumo: this.getCarConsumes()['Mercedes AMG Clase A']
      },
      {
        nombre: "Julián",
        consumo: this.getCarConsumes()['Volkswagen Polo']
      },
      {
        nombre: "Rodrigo",
        consumo: this.getCarConsumes()['BMW X5 M']
      },
      {
        nombre: "Raúl",
        consumo: this.getCarConsumes()['Seat Arona']
      }
    ];
  }

  getCarConsumes() {
    return {
      'Opel Corsa': 5.5,
      'Citröen c3': 6.1,
      'Peugeot 606': 6.4,
      'Ford Focus': 4.6,
      'Volkswagen Polo': 6.7,
      'Seat Arona': 6.8,
      'Dacia Sandero': 7.1,
      'Mercedes AMG Clase A': 7.6,
      'BMW X5 M': 7.9
    };
  }

  getWeeklyConsumes() {
    return [
      6.1, 4.8, 7.0, 5.7, 5.2, 6.3, 6.7
    ];
  }
}
