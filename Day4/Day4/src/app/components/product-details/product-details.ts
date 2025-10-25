import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Observable } from 'rxjs';
import { StaticProducts } from '../../services/static-products';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  // products$: Observable<Iproduct[]>;
  totalOrderPrice: number = 0;
  removeCart=false;

  constructor(private _productsService:StaticProducts){
    // this.products$ = this._productsService.getProductById(id)
  }
  addToCart(p: Iproduct): void {
    if (!p || p.stock === 0) return;
    this.totalOrderPrice += p.price;
    p.stock--;
  }
  // removeToCart(productId:number){
  //   this.products$ = this._productsService.deleteProduct(id)
  // }
}
