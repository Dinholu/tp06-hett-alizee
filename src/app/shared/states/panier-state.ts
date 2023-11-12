import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Produit } from '../models/produit';
import { AddProduit, RemoveProduit } from '../actions/produits-actions';
import { PanierStateModel } from './panier.state.model';
@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    produitsPanier: []
  }
})
@Injectable()
export class PanierState {
  @Selector()
  static getProduitsPanier(state: PanierStateModel) {
    return state.produitsPanier;
  }
  @Selector()
  static getNbProduitsPanier(state: PanierStateModel) {
    return state.produitsPanier.length;
  }
  @Action(AddProduit)
  add({ getState, patchState }: StateContext<PanierStateModel>, { payload }: AddProduit) {
    console.log(payload);

    const state = getState();
    patchState({
      produitsPanier: [...state.produitsPanier, payload]
    });
  }
  @Action(RemoveProduit)
  remove({ getState, patchState }: StateContext<PanierStateModel>, { payload }: RemoveProduit) {
    patchState({
      produitsPanier: getState().produitsPanier.filter(a => a.ref !== payload.ref)
    });
  }
}
