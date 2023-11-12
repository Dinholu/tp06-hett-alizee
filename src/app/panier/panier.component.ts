import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state';
import { Observable } from 'rxjs';
import { Produit } from '../shared/models/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  constructor(private store: Store) { }

  @Select(PanierState.getProduitsPanier) produitsPanier$?: Observable<Produit[]>;

  ngOnInit(): void {

  }
}
