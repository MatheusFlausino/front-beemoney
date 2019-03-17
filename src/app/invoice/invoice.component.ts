import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FaturaApi } from '../../assets/js/services';

import * as moment from 'moment';

import { DataTableDirective } from 'angular-datatables';

import { Subject } from 'rxjs';

class Invoice {
  id: string;
  date_start: Date;
  date_end: Date;
  status_close: boolean;
  status_paid: boolean;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  pathRoute;
  data: Invoice[];
  dtOptions: DataTables.Settings = {};

  fields;

  dtTrigger: Subject<any> = new Subject();

  constructor(private _router: Router, private faturaApi: FaturaApi) {
    this.pathRoute = _router.url;
  }

  ngOnInit() {
    const that = this;

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
          title: 'Abertura',
          data: 'date_start'
        },
        {
          title: 'Fechamento',
          data: 'date_end'
        },
        {
          title: 'Fatura Fechada',
          data: 'status_close'
        },
        {
          title: 'Fatura Pago',
          data: 'status_paid'
        },
        {
          title: ''
        }
      ]
    };

    this.faturaApi.find({}).subscribe((resp: any) => {
      resp.forEach((v, k) => {
        resp[k].date_start = v.date_start ? moment(v.date_start).format('DD/MM/YYYY HH:mm') : null;
        resp[k].date_end = v.date_end ? moment(v.date_end).format('DD/MM/YYYY HH:mm') : null;
      });
      this.data = resp;
      this.dtTrigger.next();
    });

    
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  createInvoice() {
    this.faturaApi.create({
      'date_start': new Date()
    }).subscribe((resp: any) => {

      resp.date_start = resp.date_start ? moment(resp.date_start).format('DD/MM/YYYY HH:mm') : null;
      resp.date_end = resp.date_end ? moment(resp.date_end).format('DD/MM/YYYY HH:mm') : null;
      
      this.data.push(resp);
      
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });

    });
  }
}
