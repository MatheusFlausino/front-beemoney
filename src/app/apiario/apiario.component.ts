import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Chart from 'chart.js'
import * as moment from 'moment';

@Component({
  selector: 'app-apiario',
  templateUrl: './apiario.component.html',
  styleUrls: ['./apiario.component.scss']
})
export class ApiarioComponent implements OnInit {

  params;
  colmeias;
  _line;

  constructor(protected route: ActivatedRoute, protected router: Router) {
    this.colmeias = [];
  }

  openGraph = (peso) => {    
    this.lineChart(peso)
  }

  ngOnInit() {

    this.route.params.subscribe(params => this.params = params);
    if (this.params && this.params.id) {
      if (this.params.id == 1) {
        this.colmeias = [
          {
            nome: "Colmeia 1",
            porcentagem: "88",
            peso: "8.8"
          },
          {
            nome: "Colmeia 2",
            porcentagem: "37",
            peso: "3.7"
          },
          {
            nome: "Colmeia 3",
            porcentagem: "23",
            peso: "2.3"
          },
          {
            nome: "Colmeia 4",
            porcentagem: "64",
            peso: "6.4"
          },
          {
            nome: "Colmeia 5",
            porcentagem: "45",
            peso: "4.5"
          },
        ]
      } else if (this.params.id == 2) {
        this.colmeias = [
          {
            nome: "Colmeia 6",
            porcentagem: "92",
            peso: "9.2"
          },
          {
            nome: "Colmeia 7",
            porcentagem: "14",
            peso: "1.4"
          },
          {
            nome: "Colmeia 8",
            porcentagem: "56",
            peso: "5.6"
          }
        ]
      }
    }

  }

  private lineChart(peso) {

    var startDate = moment().startOf('hour');

    var dates = [];
    var t = 84;

    while (t--) {
      dates.push(startDate.format('DD/MM - hh:mma'));
      startDate.subtract(120, 'minute');
    }

    var values = []
    var value = parseFloat(peso) - 0.4;

    var format = 'DD/MM - hh:mma'

    // var time = moment() gives you current time. no format required.
    var beforeTime = moment('09:00am', format),
      afterTime = moment('20:00pm', format);

    dates.forEach(element => {
      var time = moment(element, format)
      if (time.isBetween(beforeTime, afterTime)) {
        value += Math.random() / 50
      } else {
        value += Math.random() / 1000
      }
      values.push(value)
    });

    if(this._line) {
      console.log(this._line);
      
      this._line.destroy()
    }

    this._line = new Chart(document.getElementById('line-chart'), {
      type: 'line',
      data: {
        labels: dates.reverse(),
        datasets: [{
          data: values,
          label: 'Peso do melgueira',
          borderColor: '#fbba26',
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Peso da melgueira de acordo com o tempo (Últimos 7 dias)'
        },
        maintainAspectRatio: false,
        responsive: true
      }
    });
  }
}
