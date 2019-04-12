import { Component, OnInit ,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient ,HttpParams } from '@angular/common/http';
import * as Chart from 'chart.js'
import * as moment from 'moment';
declare const require: any
@Component({
  selector: 'app-apiario',
  templateUrl: './apiario.component.html',
  styleUrls: ['./apiario.component.scss']
})
export class ApiarioComponent implements OnInit {
  @ViewChild('gray') gray;
  @ViewChild('color') color;
  params;
  colmeias;
  _line;
  customMargin;
  showImage;
  porcentagem;
  pathRoute;
  configs;
  config;
  colmeia;
  
  constructor(protected route: ActivatedRoute,private http: HttpClient, protected router: Router) {
    this.colmeias = [];
    // this.customMargin = '40px 0px';
    this.showImage = true;
    this.porcentagem = 0;
    this.pathRoute = this.router.url.split('/')[1];
    this.configs = require('../../configs/fw_configs.json');
    this.config = this.configs.pages[this.pathRoute]
    this.http['get'](this.configs.api + '/colmeias/get-infos?col_id=1').subscribe(
      data => {
        // this.router.navigate(['/'+ this.pathRoute])
        
        this.colmeias = [
          data
        ]
        this.colmeia = data
      },
      err => {
        console.log(err);

        console.log("Error occured.")
      }
    );
  }

  openGraph = (peso) => {    
    this.lineChart(peso)
  }

  ngOnInit() {

    // /api/colmeias/get-infos?col_id=1
    this.route.params.subscribe(params => this.params = params);


    // setInterval(() => {
    //   this.http['get'](this.configs.api + '/colmeias/get-infos?col_id=1').subscribe(
    //     data => {
    //       // this.router.navigate(['/'+ this.pathRoute])
          
    //       this.colmeias = [
    //         data
    //       ]
    //       this.colmeia = data
    //     },
    //     err => {
    //       console.log(err);
  
    //       console.log("Error occured.")
    //     }
    //   );
    // }, 5000);
    // location.reload();
    // if (this.params && this.params.id) {
    //   if (this.params.id == 1) {
    //     this.colmeias = [
    //       {
    //         nome: "Colmeia 1",
    //         porcentagem: "88",
    //         peso: "8.8"
    //       }
    //     ]
    //   } else if (this.params.id == 2) {
    //     this.colmeias = [
    //       {
    //         nome: "Colmeia 6",
    //         porcentagem: "92",
    //         peso: "9.2"
    //       },
    //       {
    //         nome: "Colmeia 7",
    //         porcentagem: "14",
    //         peso: "1.4"
    //       },
    //       {
    //         nome: "Colmeia 8",
    //         porcentagem: "56",
    //         peso: "5.6"
    //       }
    //     ]
    //   }
    // }
    // this.colmeias = [
    //   {
    //     nome: "Colméia 1",
    //     porcentagem: "88",
    //     peso: "8.8"
    //   }
    // ]
  }

  ngAfterViewInit() {
    // Loadgo.init(document.getElementById('logo'));

    window.onload = (event) => {
      // debugger;
      console.log(this.gray.nativeElement.margin);
      var element = this.gray.nativeElement
      // // var _element = this.color.nativeElement.style
      var style = element.currentStyle || window.getComputedStyle(element)
      // var _margin = style.margin.split(" ")[1].split('px')[0];    
      // console.log(style);
      // console.log(style['margin']);
      // var x = Object.assign(style, {});
      // console.log(x[0]);
      // console.log(x.margin);
      // console.log(x.marginTop);
      // console.log(x.marginBottom);    
      // console.log(document.getElementsByClassName('copy'));
      // var y = document.gets('copy')[0]
      // console.log(y.style);
      console.log(style);
      
      this.customMargin = style.marginTop + ' 0px';
      // this.showImage = true

      // setTimeout(() => {
      //   this.showImage = true
      // }, 200);
    };
    
    //Copy in all the jBottoms code from the script.js. Typescript will complain but it works just fine
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


