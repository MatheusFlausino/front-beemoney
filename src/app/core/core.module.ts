import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreListComponent } from './core.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
// import { AgmCoreModule } from '@agm/core';
import { CoreNewComponent } from './new/new.component';
import {InputsComponent} from './inputs/inputs.component'
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: CoreListComponent },
  { path: 'new', component: CoreNewComponent },
  { path: 'edit/:id', component: CoreNewComponent, data:{id:'teste'}}
];


@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [CoreListComponent, CoreNewComponent,InputsComponent]
})
export class CoreModule { }
