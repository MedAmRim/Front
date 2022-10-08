import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListchambersComponent } from './listchambers/listchambers.component';
import { ChamberDetailsComponent } from './chamber-details/chamber-details.component';
const routes: Routes = [

  {path:'chambers', component: ListchambersComponent},
  {path:'chamberDetails', component: ChamberDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamberRoutingModule { }
