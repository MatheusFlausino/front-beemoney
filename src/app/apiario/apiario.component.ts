import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apiario',
  templateUrl: './apiario.component.html',
  styleUrls: ['./apiario.component.scss']
})
export class ApiarioComponent implements OnInit {

  params;
  colmeias;
  constructor(protected route: ActivatedRoute, protected router: Router) {
    this.colmeias = [];
  }

  ngOnInit() {

    this.route.params.subscribe(params => this.params = params);
    if (this.params && this.params.id) {
      if (this.params.id == 1) {
        this.colmeias = [
          {
            nome: "Colmeia 1",
            porcentagem:"88",
            peso:"8.8"
          },
          {
            nome: "Colmeia 2",
            porcentagem:"37",
            peso:"3.7"
          },
          {
            nome: "Colmeia 3",
            porcentagem:"23",
            peso:"2.3"
          },
          {
            nome: "Colmeia 4",
            porcentagem:"64",
            peso:"6.4"
          },
          {
            nome: "Colmeia 5",
            porcentagem:"45",
            peso:"4.5"
          },
        ]
      } else if (this.params.id == 2) {
        this.colmeias = [
          {
            nome: "Colmeia 6",
            porcentagem:"92",
            peso:"9.2"
          },
          {
            nome: "Colmeia 7",
            porcentagem:"14",
            peso:"1.4"
          },
          {
            nome: "Colmeia 8",
            porcentagem:"56",
            peso:"5.6"
          }
        ]
      }
    }
  }

}
