import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Produit } from '../shared/models/produit';
import { AddProduit } from '../shared/actions/produits-actions';
import { Store } from '@ngxs/store';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [CatalogueService],

})
export class ProduitsComponent implements OnInit {
  recherche: string = '';
  produits$: Observable<Produit[]>;

  constructor(private catalogueService: CatalogueService, private store: Store) {
    this.produits$ = this.catalogueService.getProduits();
  }

  addProduit(produit: Produit) {
    console.log(produit);
    this.store.dispatch(new AddProduit(produit));
  }
  ngOnInit() { }

}
