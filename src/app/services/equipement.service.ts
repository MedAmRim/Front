import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from 'src/app/models/equipement';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class EquipementService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public getEquipements(): Observable<Equipement[]> {
    alert("teeeeeeest");
    return this.http.get<Equipement[]>(`http://localhost:8080/Equipements/listequipemnts`);
  }

  public addEquipement(Equipement: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.apiServerUrl}/Equipements/AjouterEqui`, Equipement);
  }

  public updateEquipement(Equipement: Equipement): Observable<Equipement> {
    return this.http.put<Equipement>(`${this.apiServerUrl}/Equipements/ModifierEqui`, Equipement);
  }

  public deleteEquipement(EquipementId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Equipements/SupprimerEqui/${EquipementId}`);
  }

  public ChercherEquipement(idEquipement: number):Observable<Equipement>{
    return this.http.get<Equipement>(`${this.apiServerUrl}/Equipements/ChercherEqui?id=`+idEquipement);//------------
  }


  

}