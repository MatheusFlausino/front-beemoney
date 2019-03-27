import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiarioComponent } from './apiario.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: ':id', component: ApiarioComponent },
  // { path: 'new', component: NewApiarioComponent },
  // { path: 'edit/:id', component: NewApiarioComponent, data:{id:'teste'}}
];


@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule
  ],
  declarations: [ApiarioComponent]
})
export class ApiarioModule { }
