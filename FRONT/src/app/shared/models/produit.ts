export class Produit {
  ref: string;
  designation: string;
  prix: number;
  qte: number;

  constructor() {
    this.ref = '';
    this.designation = '';
    this.prix = 0;
    this.qte = 0;
  }
}
