import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Observable } from 'rxjs';
import { Produit } from '../shared/models/produit';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string = '';
  login: string = '';
  password: string = '';


  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;
  produit$: Observable<Produit[]>;
  constructor(private catalogueService: CatalogueService) {
    this.produit$ = this.catalogueService.getProduits();
  }

  connexion() {
    console.log(this.name);
    console.log(this.login);

    this.catalogueService.loginClient(this.login, this.password).subscribe(
      (data) => {
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.cnx = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() { }
}
