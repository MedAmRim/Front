import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule
  ]
})
export class AcceuilModule { }
