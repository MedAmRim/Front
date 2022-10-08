import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from 'src/app/models/equipement';
import { Hotel } from 'src/app/models/hotel';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class HotelService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiServerUrl}/Hotels/listehotels`);
  }

  public addHotel(Hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.apiServerUrl}/Hotels/AjouterHotel`, Hotel);
  }

  public updateHotel(Hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.apiServerUrl}/Hotels/ModifierHotel`, Hotel);
  }

  public deleteHotel(HotelId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Hotels/SupprimerHotel/${HotelId}`);
  }
  public getHotelsByVille(HotelVille: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiServerUrl}/Hotels/findHotelByVille?ville=`+HotelVille);//---------
  }

  public ChercherHotel(idHotel: number):Observable<Hotel>{
    return this.http.get<Hotel>(`${this.apiServerUrl}/Hotels/ChercherHotel?id=`+idHotel);//------------
  }

  public getEquipementHotel(idHotel: number): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiServerUrl}/Hotels/listequihotel?id=`+idHotel);
  }
 /* public AffecterEquipementToHotel(idHotel: Number, idEquipement: number): Observable<void> {
    return this.http.post<void>(`${this.apiServerUrl}/Hotels/AffecterEquitohotel?idh=`+idHotel+`&ide=`+idEquipement);
  }*/
  

}