import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/models/adresse';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AdresseService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public getAdresses(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(`${this.apiServerUrl}/Adresse/ListAdresses`);
  }

  public addAdresse(Adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(`${this.apiServerUrl}/Adresse/Ajouter`, Adresse);
  }

  public updateAdresse(Adresse: Adresse): Observable<Adresse> {
    return this.http.put<Adresse>(`${this.apiServerUrl}/Adresse/Modifier`, Adresse);
  }

  public deleteAdresse(adresseId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Adresse/Supprimer/${adresseId}`);
  }
  public getAdressesByVille(adresseVille: string): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(`${this.apiServerUrl}/Adresse/AdresseByVille/${adresseVille}`);
  }
}