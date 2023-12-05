import { Produit } from '../models/produit';

export class AddProduit {
  static readonly type = '[Produit] Add';

  constructor(public payload: Produit) { }
}

export class RemoveProduit {
  static readonly type = '[Produit] Remove';

  constructor(public payload: Produit) { }
}

export class RemoveAllProduit {
  static readonly type = '[Produit] RemoveAll';
}
