import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { StaticProducts } from '../../services/static-products';
import { map, Observable } from 'rxjs';
import { ProductDetails } from "../product-details/product-details";
import { RouterModule } from '@angular/router';


@Component({
   selector: 'app-products',
  standalone: true,       
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']  
})
export class Products {
  // products: Iproduct[];
  products$: Observable<Iproduct[]>;

  totalOrderPrice: number = 0;
  categoryID: number = 0; // Two-way Binding

  constructor(public _productsService:StaticProducts){ //inject service
    this.products$ = this._productsService.getAllProducts().pipe(
    map(res => res.products));
  }
      addToCart(p: Iproduct): void {
        if (!p || p.stock === 0) return;
        this.totalOrderPrice += p.price;
        p.stock--;
      }
}
      
    

