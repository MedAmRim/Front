import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApplicationModule, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotelModule } from './hotel/hotel.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationModule } from './reservation/reservation.module';
import { EquipementModule } from './equipement/equipement.module';
import { AuthModule } from './auth/auth.module';
import { ChamberModule } from './chamber/chamber.module';
import { AdresseModule } from './adresse/adresse.module';
import { FormsModule } from '@angular/forms';
import { AcceuilModule } from './acceuil/acceuil.module';
import { PagesModule } from './pages/pages.module';
import { FooterComponent } from './acceuil/footer/footer.component';
import { NavbarComponent } from './acceuil/navbar/navbar.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HotelModule,
    ReservationModule,
    EquipementModule,
    AuthModule,
    ChamberModule,
    AdresseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
