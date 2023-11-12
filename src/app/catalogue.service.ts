import { Injectable } from '@angular/core';
import { Produit } from './shared/models/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environments';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  constructor(private http: HttpClient) { }
  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.backendProduit);
  }
}
