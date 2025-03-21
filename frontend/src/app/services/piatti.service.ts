import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiattiService {
  private apiUrl = 'http://localhost:8080/home'; // Cambia l'URL in base al tuo backend

  constructor(private http: HttpClient) { }

  // Ottieni tutti i piatti
  getPiatti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Aggiungi un nuovo piatto
  addPiatto(piatto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, piatto);
  }

  // Elimina un piatto
  deletePiatto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}