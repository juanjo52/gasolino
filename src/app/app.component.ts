import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  tabElements!: any[];

  constructor() {}

  ngOnInit() {
    this.tabElements = [
      {
        text: "Mi perfil",
        icon: "person",
        type: "profile"
      },
      {
        text: "Inicio",
        icon: "home",
        type: "home"
      },
      {
        text: "Clasificación",
        icon: "podium",
        type: "ranking"
      }
    ];
  }


}
