import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SDKBrowserModule, LoopBackConfig} from '../assets/js/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptor';
declare const require: any

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // NotificationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    let configs = require('../configs/fw_configs.json');
    LoopBackConfig.setBaseURL(configs.api.split('/api')[0]);
    LoopBackConfig.setApiVersion('api');
  }
 }
