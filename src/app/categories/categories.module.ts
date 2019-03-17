import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NewCategoriesComponent } from './new-categories/new-categories.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'new', component: NewCategoriesComponent },
  { path: 'edit/:id', component: NewCategoriesComponent, data:{id:'teste'}}
];


@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule
  ],
  declarations: [CategoriesComponent, NewCategoriesComponent]
})
export class CategoriesModule { }
