import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  ranking!: any[];

  constructor() { }

  ngOnInit() {
    this.ranking = [
      {
        nombre: "Fernando"
      },
      {
        nombre: "Juanjo"
      },
      {
        nombre: "Mario"
      },
      {
        nombre: "Alejandro"
      },
      {
        nombre: "Pedro"
      }
    ];
  }

}
