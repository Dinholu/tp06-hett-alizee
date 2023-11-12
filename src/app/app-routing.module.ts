import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { Produit } from './shared/models/produit';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {
    path: '', component: ProduitsComponent
  },
  { path: 'panier', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
