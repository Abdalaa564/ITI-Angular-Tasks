import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { StaticProducts } from '../../services/static-products';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart-service'; 

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  products$!: Observable<Iproduct>;
  totalOrderPrice: number = 0;
  removeCart=false;

  constructor(private route: ActivatedRoute, private router: Router, private _productsService:StaticProducts, private cartService: CartService,){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.products$ = this._productsService.getProductById(id);
  }

 addToCart(p: Iproduct) {
    this.cartService.addToCart(p);
    this.router.navigate(['/cart']);
  }

}
