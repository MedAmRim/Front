import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsbyvilleComponent } from './hotelsbyville/hotelsbyville.component';
import { ListehotelsComponent } from './listehotels/listehotels.component';

const routes: Routes = [
  {path:'hotels', component: ListehotelsComponent},
  {path:'hotelsByville', component: HotelsbyvilleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { 

}
