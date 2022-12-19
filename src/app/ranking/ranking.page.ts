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
    this.ranking = this.getRankByConsume();
    this.rankingBrand = this.getRankByModel();

  }

  getRankByModel() {
    return this.dataService.getRankByModel();
  }

  getRankByConsume() {
    return this.dataService.getRankByConsume();
  }

  segmentChanged(e: any){
    this.segmentValue = e.detail.value;
  }

}
