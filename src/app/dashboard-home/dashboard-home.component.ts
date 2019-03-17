import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as Chart from 'chart.js'
import { NgForm } from '@angular/forms';
import 'fullcalendar';
import * as moment from 'moment';
import { MuralApi, CategoriaApi, ToDoApi } from '../../assets/js/services';
import { LoopBackConfig, LoopBackAuth } from '../../assets/js/';
import momentExt from 'fullcalendar/src/moment-ext';
import { log } from 'fullcalendar';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  @ViewChild('chatDiv') private chatDiv: ElementRef;

  // activitys = [
  //   { icon: 'edit', head: 'heading', body: 'body' },
  //   { icon: 'map', head: 'heading', body: 'body' },
  //   { icon: 'edit', head: 'heading', body: 'body' },
  //   { icon: 'edit', head: 'heading', body: 'body' },
  //   { icon: 'map', head: 'heading', body: 'body' },
  //   { icon: 'map', head: 'heading', body: 'body' }
  // ];

  tasks = [
  ];


  // msgs = [
  //   { me: true, date: "2018/09/01 19:30", text: 'Mensagem minha' },
  //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
  //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
  //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
  //   { me: true, date: "2018/09/01 19:30", text: 'Mensagem minha' },
  //   { me: true, date: "2018/09/01 19:30", text: 'Mensagem minha' },
  //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
  //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
  // ];
  msgs = [

  ];

  userId;
  constructor(private MuralApi: MuralApi, private CategoriaApi: CategoriaApi, private ToDoApi: ToDoApi, private LoopBackAuth: LoopBackAuth) {
    this.userId = LoopBackAuth.getCurrentUserId();
  }

  ngOnInit() {
    // this.getAllMsgs()
    // this.getAllTasks()
    // setInterval(() => this.getAllMsgs(), 3000);
    // console.log(localStorage.getItem());

    // this.salesChart();
    // this.dayChart();
    // this.fullChart();
    // this.calendar();
    // this.scrollToBottom();
  }

  getAllTasks() {
    this.ToDoApi.find({}).subscribe((response: any) => {
      if (response.length != 0) {

        response.forEach(element => {
          console.log(element);
          
          this.tasks.push({ text: element.message, check: element.check, id: element.id })
        });
        //this.msgs.reverse();
        console.log(this.tasks);
        
      }

    });
  }


  updateTask(data) {
    console.log(data);
    
    let _data = {... data};
    _data['message'] = _data.text;
    _data['check'] = !_data.check;
    delete _data['id'];
    
    this.ToDoApi.updateAttributes(data.id, _data).subscribe((response: any) => {
      if (response.length != 0) {
        console.log(response);

      }
    });
  }

  getAllMsgs() {
    if (this.msgs.length == 0) {
      this.MuralApi.find({ include: 'user', limit: 20, order: 'createdAt DESC' }).subscribe((response: any) => {
        if (response.length != 0) {
          response.forEach(element => {
            this.msgs.push({ me: (this.userId === element.user.id) ? true : false, user: element.user.name, date: moment(element.date).format("YYYY/MM/DD HH:mm"), text: element.message })
          });
          this.msgs.reverse();
        }

      });
    } else {
      this.MuralApi.find({ limit: 1, order: 'createdAt DESC' }).subscribe((response: any) => {
        if (this.msgs[this.msgs.length - 1].text !== response[0].message) {
          this.msgs = [];
          this.getAllMsgs();
        }
      });
    }

  }

  pushMsg(f: NgForm) {
    if (f.form.valid && f.form.value.text != '') {
      this.MuralApi.create({ message: f.form.value.text, date: moment(), id_u: this.userId }).subscribe((response: any) => {
        this.msgs.push({ me: true, date: moment().format("YYYY/MM/DD HH:mm"), text: f.form.value.text })
        f.form.reset();
      });
    }
  }

  pushTask(f2: NgForm) {
    if (f2.form.valid && f2.form.value.text != '') {
      this.ToDoApi.create({ message: f2.form.value.text, check: false, id_u: this.userId }).subscribe((response: any) => {
        this.tasks.push({ check: false, text: f2.form.value.text, id: response.id })
        f2.form.reset();
      });
    }
  }

  deleteTask(data: any) {
    this.tasks = this.tasks.filter(obj => obj !== data);
    this.ToDoApi.deleteById(data.id).subscribe((response: any) => {
    });
  }

  private calendar() {
    $('#cal').fullCalendar({
      themeSystem: 'bootstrap4',
      fixedWeekCount: false,
      height: 400,
      header: {
        left: '  ',
        center: ' title ',
        right: 'prev next today'
      },
      buttonText: {
        today: ' '
      }
    });
  }

  private salesChart() {
    const sales = new Chart(document.getElementById('month-sales-chart'), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [{
          data: [29, 25, 35, 30, 32, 25, 36],
          borderColor: '#3ebb8c',
          fill: false,
          lineTension: 0,
          borderWidth: 2,
          radius: 2
        }],
      },
      options: {
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{ display: false }]
        },
        title: false,
        legend: false,
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
          }
        },
        maintainAspectRatio: false,
        // responsive: true
      }
    });
  }

  private dayChart() {
    const day = new Chart(document.getElementById('day-sales-chart'), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [{
          data: [29, 25, 35, 30, 32, 25, 36],
          borderColor: '#3ebb8c',
          fill: false,
          lineTension: 0,
          borderWidth: 2,
          radius: 2
        }],
      },
      options: {
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{ display: false }]
        },
        title: false,
        legend: false,
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 0
          }
        },
        maintainAspectRatio: false,
        // responsive: true
      }
    });
  }

  private fullChart() {
    const full = new Chart(document.getElementById('full-chart'), {
      type: 'line',
      data: {
        labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        datasets: [
          {
            data: [29, 25, 30, 25, 30, 25, 36, 30, 25, 29, 18, 30, 32, 25],
            backgroundColor: 'rgba(144,146,165,.4)',
            borderColor: '#9092a5',
            borderWidth: 2,
            radius: 2
          },
          {
            data: [22, 15, 30, 34, 25, 39, 30, 36, 30, 20, 20, 34, 22, 39],
            backgroundColor: 'rgba(62,187,140,.4)',
            borderColor: '#3ebb8c',
            borderWidth: 2,
            radius: 2
          }
        ],
      },
      options: {
        scales: {
          xAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }],
          yAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }]
        },
        title: false,
        legend: false,
        // layout: {
        //   padding: {
        //     left:5,
        //     right: 5,
        //     top: 5,
        //     bottom: 5
        //   }
        // },
        maintainAspectRatio: false,
        // responsive: true
      }
    });
  }

}
