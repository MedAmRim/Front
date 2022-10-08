import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from 'src/app/models/chambre';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class ChamberService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public getChambers(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiServerUrl}/chambers/listechambers`);
  }

  public addChamber(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiServerUrl}/chambers/AjouterChamber`, chambre);
  }

  public updateChamber(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiServerUrl}/chambers/ModifierCha`, chambre);
  }

  public deleteChamber(ChamberId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/chambers/SupprimerChamber/${ChamberId}`);
  }

  public ChercherChamber(idChamber: number):Observable<Chambre>{
    return this.http.get<Chambre>(`${this.apiServerUrl}/chambers/ChercherChamber?id=`+idChamber);//------------
  }
  public getChamberByHotel(HotelId: number): Observable<Chambre[]> {
    console.log("1"+`${this.apiServerUrl}/chambers/getchamberbyhotel?id=`+HotelId);
    return this.http.get<Chambre[]>(`${this.apiServerUrl}/chambers/getchamberbyhotel?id=`+HotelId);
  }


  

}