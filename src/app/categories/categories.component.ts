import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaApi } from '../../assets/js/services';

import * as moment from 'moment';

import { DataTableDirective } from 'angular-datatables';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  pathRoute;
  data;
  dtOptions: DataTables.Settings = {
  };

  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  constructor(private _router: Router, private CategoriaApi: CategoriaApi) {
    this.pathRoute = _router.url;
  }

  delete(id) {  
    //CategoriaApi
    this.CategoriaApi.deleteById(id).subscribe((response: any) => {      
      this.data = this.data.filter(obj => obj.id !== id);
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    });
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {

    this.pathRoute = this._router.url;
    this.dtOptions = {
      language: {
        "lengthMenu": "Show _MENU_",
        searchPlaceholder: "Search",
        zeroRecords: ''
      },
      columns: [
        {
          title: '#',
          data: 'id'
        },
        {
          title: 'Categoria',
          data: 'name'
        },
        {
          title: 'Ícone',
          data: 'icon'
        },
        {
          title: "",
          className: "action-head"
        }
      ],
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      //   // Unbind first in order to avoid any duplicate handler
      //   // (see https://github.com/l-lin/angular-datatables/issues/87)
      //   $('td', row).unbind('click');
      //   $('td', row).bind('click', () => {
      //     console.log(data);

      //     // self.someClickHandler(data);
      //   });
      //   return row;
      // }
    };

    this.CategoriaApi.find({}).subscribe((resp: any) => {
      // resp.forEach((v, k) => {
      //   resp[k].date_start = v.date_start ? moment(v.date_start).format('DD/MM/YYYY HH:mm') : null;
      //   resp[k].date_end = v.date_end ? moment(v.date_end).format('DD/MM/YYYY HH:mm') : null;
      // });
      // debugger;
      this.data = resp;
      this.dtTrigger.next();
    });


  }
}
