import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SDKBrowserModule, LoopBackConfig} from '../assets/js/index';
// import { NotificationsModule } from 'projects/angular6-notifications/src/public_api';


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
    ReactiveFormsModule
    // NotificationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    LoopBackConfig.setBaseURL('http://app.beemoney.com/api');
    LoopBackConfig.setApiVersion('api');
  }
 }
