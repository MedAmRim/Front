import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { ListehotelsComponent } from './listehotels/listehotels.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HotelsbyvilleComponent } from './hotelsbyville/hotelsbyville.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ListchambersComponent } from '../chamber/listchambers/listchambers.component';


@NgModule({
  declarations: [
    ListehotelsComponent,
    HotelsbyvilleComponent,
    ListchambersComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule


  ]
})
export class HotelModule { }
