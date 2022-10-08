import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visiteur } from 'src/app/models/visiteur';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class VisiteurService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public addVisiteur(visiteur: Visiteur): Observable<Visiteur> {
    return this.http.post<Visiteur>(`${this.apiServerUrl}/visiteurs/AjouterV`, visiteur);
  }

}