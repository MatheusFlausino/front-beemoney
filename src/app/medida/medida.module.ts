import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,  
    CoreModule
  ],
  declarations: [],
  providers: [
    { provide: 'A', useValue: 'testVar'}   // define a string token
  ]

})
export class MedidaModule { }
