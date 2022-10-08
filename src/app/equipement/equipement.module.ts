import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipementRoutingModule } from './equipement-routing.module';
import { ListequipementsComponent } from './listequipements/listequipements.component';


@NgModule({
  declarations: [
    ListequipementsComponent
  ],
  imports: [
    CommonModule,
    EquipementRoutingModule
  ]
})
export class EquipementModule { }
