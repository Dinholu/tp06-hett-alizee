import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { fromEvent, Observable, of, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, startWith } from 'rxjs/operators';
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
  produits$: Observable<Produit[]>;
  @ViewChild('rechercheInput', { static: true }) rechercheInput!: ElementRef;
  @Output() searchEvent = new BehaviorSubject<string>('');

  constructor(private catalogueService: CatalogueService, private store: Store) {
    this.produits$ = this.catalogueService.getProduits();
  }
  ngOnInit(): void {
    this.produits$ = this.searchEvent.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string) =>
        searchTerm.trim() === ''
          ? this.catalogueService.getProduits()
          : this.catalogueService.getSearchProduits(searchTerm).pipe(
            catchError(() => of([] as Produit[])),
            startWith([] as Produit[])
          )
      )
    );

    this.searchEvent.next('');
  }

  onSearchInputChange(searchTerm: string): void {
    this.searchEvent.next(searchTerm);
  }
  addProduit(produit: Produit) {
    console.log(produit);
    this.store.dispatch(new AddProduit(produit));
  }

}

