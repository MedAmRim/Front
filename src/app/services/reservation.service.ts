import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visiteur } from 'src/app/models/visiteur';
import { Chambre } from 'src/app/models/chambre';
import { Reservation } from 'src/app/models/reservation';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class ReservationService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}



  public addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiServerUrl}/reservations/AjouterReservation`, reservation);
  }

  public ChercherReservation(idReservation: number):Observable<Reservation>{
    return this.http.get<Reservation>(`${this.apiServerUrl}/reservations/ChercherReservation?id=`+idReservation);//------------
  }
  
  public addVisiteur(reservation: Reservation,visiteur: Visiteur ): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiServerUrl}/reservations/addVisiteur`, reservation);//------
  }


  public addChambersToRes(chambre: Chambre[],idReservation: number ): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiServerUrl}/reservations/addchamberstoR/`+idReservation,chambre);//------
  }

  public getTarifs(idReservation: number):Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/reservations/tarif?id=`+idReservation);//------------
  }

}