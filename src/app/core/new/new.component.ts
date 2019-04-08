import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriaApi } from '../../../assets/js/services';
import { HttpClient ,HttpParams } from '@angular/common/http';
import { LoopBackAuth } from '../../../assets/js/';


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
  token;

  constructor(protected route: ActivatedRoute, protected router: Router, private http: HttpClient, private LoopBackAuth: LoopBackAuth) {
    this.data = {};
    this.pathRoute = router.url;
    this.token = this.LoopBackAuth.getAccessTokenId();

  }
  

  save(f: NgForm) {    
    debugger;
    let type = this.data.id ? 'put' : 'post';

    this.http[type](this.configs.api + this.config.apiRoute, this.data).subscribe(
      data => {
        this.router.navigate(['/'+ this.pathRoute])

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
    console.log(this.token);

    this.route.params.subscribe(params => this.params = params);
    this.pathRoute = this.router.url.split('/')[1];
    this.configs = require('../../../configs/fw_configs.json');
    this.config = this.configs.pages[this.pathRoute]
    this.headers = require('../../../configs/headers/' + this.config.headers);
    this.fields = this.headers.fields.filter(function (el) {
      return el.editable;
    })

    // console.log(config,this.headers);

    if(this.params && this.params.id){
      let searchParams = new HttpParams({
        fromObject: {
            filter: JSON.stringify({"where":{"id":this.params.id}})
        }
    });
      this.http.get(this.configs.api + this.config.apiRoute, {params:searchParams}).subscribe(
        data => {
          // this.router.navigate(['/'+ this.pathRoute])
          let _data = data[0]
          if(_data){
            this.data.id = _data.id
            this.fields.forEach(element => {
              this.data[element.name] = _data[element.name]
            });
          }else{
            this.router.navigate(['/'+ this.pathRoute])
          }
        },
        err => {
          console.log(err);
          this.router.navigate(['/'+ this.pathRoute])
          console.log("Error occured.")
        }
      );
    }
  }

}
