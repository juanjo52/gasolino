import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  ranking!: any[];
  rankingBrand!: any[];
  segmentValue!: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ranking = [
      {
        nombre: "Fernando",
        consumo: this.dataService.getCarConsumes()['Ford Focus']
      },
      {
        nombre: "Juanjo",
        consumo: this.dataService.getCarConsumes()['Citröen c3']
      },
      {
        nombre: "Mario",
        consumo: this.dataService.getCarConsumes()['Peugeot 606']
      },
      {
        nombre: "Alejandro",
        consumo: this.dataService.getCarConsumes()['Opel Corsa']
      },
      {
        nombre: "Pedro",
        consumo: this.dataService.getCarConsumes()['Dacia Sandero']
      },
      {
        nombre: "Paco",
        consumo: this.dataService.getCarConsumes()['Mercedes AMG Clase A']

      },
      {
        nombre: "Julián",
        consumo: this.dataService.getCarConsumes()['Volkswagen Polo']

      },
      {
        nombre: "Rodrigo",
        consumo: this.dataService.getCarConsumes()['BMW X5 M']
      },
      {
        nombre: "Raúl",
        consumo: this.dataService.getCarConsumes()['Seat Arona']
      }
    ];

    this.rankingBrand = [
      {
        nombre: "Ford"
      },
      {
        nombre: "Opel"
      },
      {
        nombre: "Peugeot"
      },
      {
        nombre: "Citröen"
      },
      {
        nombre: "Volkswagen"
      },
      {
        nombre: "Seat"
      },
      {
        nombre: "Dacia"
      },
      {
        nombre: "Mercedes"
      },
      {
        nombre: "BMW"
      }
    ];

  }



  segmentChanged(e: any){
    this.segmentValue = e.detail.value;
  }

}
