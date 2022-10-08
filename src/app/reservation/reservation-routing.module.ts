import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserverComponent } from './reserver/reserver.component';

const routes: Routes = [
  { path: 'reserver', component: ReserverComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
