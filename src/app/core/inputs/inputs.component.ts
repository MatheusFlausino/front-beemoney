import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
declare const require: any
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() field: any;
  @Input() inputValue: any;
  @Output() inputValueChange = new EventEmitter();
  @ViewChild('autocomplete') autocomplete;
  selectItems;
  searchValue;
  configs;
  config;
  pathRoute;
  searchValueChanged: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient,protected router: Router) {
    this.searchValueChanged
      .debounceTime(500) // wait 300ms after the last event before emitting last event    
      .subscribe(searchValue => {
        this.searchValue = searchValue
        this.search(this.searchValue);
        
      }
      );
  }


  onSearch(value) {
    this.searchValueChanged.next(value.term);
  }


  search(value) {
    let searchParams = new HttpParams({
      fromObject: {

          search:value,
          field:this.field.name,
          model:this.config.model
      }
  });
    debugger;
    this.http['get'](this.configs.api + this.config.apiRoute+'/autocomplete', {params:searchParams}).subscribe(
      data => {
        // this.router.navigate(['/'+ this.pathRoute])

      },
      err => {
        console.log(err);

        console.log("Error occured.")
      }
    );
  }


  change(newValue) {
    this.inputValue = newValue;
    this.inputValueChange.emit(newValue);
  }

  ngOnInit() {

    this.pathRoute = this.router.url.split('/')[1];
    this.configs = require('../../../configs/fw_configs.json');
    this.config = this.configs.pages[this.pathRoute]
    this.selectItems = [];


  }

}

