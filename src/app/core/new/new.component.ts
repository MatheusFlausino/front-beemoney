import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriaApi } from '../../../assets/js/services';
import { HttpClient } from '@angular/common/http';

declare const require: any

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class CoreNewComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  params;
  data;
  pathRoute;
  headers;
  fields;
  configs;
  config;
  constructor(protected route: ActivatedRoute, protected router: Router, private http: HttpClient) {
    this.data = {};
    this.pathRoute = router.url;
  }

  save(f: NgForm) {
    this.http.post(this.configs.api + this.config.apiRoute, this.data).subscribe(
      data => {
        console.log('deubom',data);
        
      },
      err => {
        console.log(err);
        
        console.log("Error occured.")
      }
    );
    // if (f.form.valid && f.form.value.name != '' && f.form.value.icon != '') {
    //   let obj = { name: f.form.value.name, icon: f.form.value.icon };
    //   this.params.id ? obj['id'] = this.params.id : null;
    //   this.CategoriaApi.upsert(obj).subscribe((response: any) => {
    //     f.form.reset();
    //     this.router.navigate(['/medida'])
    //   });
    // }
  }

  ngOnInit() {


    this.route.params.subscribe(params => this.params = params);
    this.pathRoute = this.router.url.split('/')[1];
    this.configs = require('../../../configs/fw_configs.json');
    this.config = this.configs.pages[this.pathRoute]
    this.headers = require('../../../configs/headers/' + this.config.headers);
    this.fields = this.headers.fields.filter(function (el) {
      return el.editable;
    })

    // console.log(config,this.headers);

    // if(this.params && this.params.id){
    //   this.CategoriaApi.findById(this.params.id).subscribe((response: any) => {
    //     this.data.name = response.name
    //     this.data.icon = response.icon
    //   });

    // }
  }

}
