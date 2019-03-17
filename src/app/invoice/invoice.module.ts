import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: '', component: InvoiceComponent },
  { path: 'new', component: NewInvoiceComponent },
  { path: 'edit/:id', component: NewInvoiceComponent, data:{id:'teste'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ],
  declarations: [InvoiceComponent, NewInvoiceComponent]
})
export class InvoiceModule { }
