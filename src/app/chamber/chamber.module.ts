import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamberRoutingModule } from './chamber-routing.module';
import { ListchambersComponent } from './listchambers/listchambers.component';
import { ChamberDetailsComponent } from './chamber-details/chamber-details.component';
import { ListehotelsComponent } from '../hotel/listehotels/listehotels.component';


@NgModule({
  declarations: [
    ChamberDetailsComponent,
  ],
  imports: [
    CommonModule,
    ChamberRoutingModule
  ]
})
export class ChamberModule { }
