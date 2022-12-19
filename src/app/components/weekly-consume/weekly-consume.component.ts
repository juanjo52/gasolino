import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-weekly-consume',
  templateUrl: './weekly-consume.component.html',
  styleUrls: ['./weekly-consume.component.scss'],
})
export class WeeklyConsumeComponent implements OnInit {
  totalSemanal!: number;

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.totalSemanal = Number(this.getTotalSemanal().toFixed(2));
  }

  getTotalSemanal(): number {
    const consumes = this.dataSvc.getWeeklyConsumes();
    return consumes.reduce((total, value) => total += value)/consumes.length;
  }

}
